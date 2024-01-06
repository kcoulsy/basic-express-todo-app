import express, { Express, NextFunction, Request, Response } from "express";
import hbs from "hbs";
import { createTodo, getTodo, getTodos } from "./services/todo";
import { NotFoundError } from "./errors";

const app: Express = express();
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static("src/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  const todos = getTodos();
  res.render("index", { todos });
});

app.post("/todos", (req: Request, res: Response) => {
  if (req.body.title) {
    createTodo({
      title: req.body.title,
    });
  }

  res.redirect("/");
});

app.get("/todos/:id", (req: Request, res: Response) => {
  const todo = getTodo({ id: req.params.id });

  if (!todo) {
    throw new NotFoundError("Todo not found");
  }

  const humanReadableDate = new Date(todo.createdAt).toLocaleString("en-GB");

  res.render("todo", { todo, date: humanReadableDate });
});

app.use(function (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof NotFoundError) {
    res.status(404).render("error", { status: 404, message: err.message });
    return;
  }

  res
    .status(500)
    .render("error", { status: 500, message: "Something went wrong" });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
