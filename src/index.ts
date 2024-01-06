import express, { Express, Request, Response } from "express";
import hbs from "hbs";
import { getTodos } from "./services/todo";

const app: Express = express();
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static("src/public"));

app.get("/", (req: Request, res: Response) => {
  const todos = getTodos();
  res.render("index", { todos });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
