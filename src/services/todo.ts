import { v4 as uuidv4 } from "uuid";

interface Todo {
  id: string;
  title: string;
  createdAt: Date;
}

const todos: Todo[] = [];

export function getTodos() {
  return todos;
}

export function createTodo({ title }: { title: string }) {
  if (todos.length >= 10) {
    todos.splice(0, todos.length);
  }

  const todo: Todo = {
    id: uuidv4(),
    title: title.slice(0, 100),
    createdAt: new Date(),
  };

  todos.push(todo);
  return todo;
}

export function getTodo({ id }: { id: string }) {
  return todos.find((todo) => todo.id === id);
}
