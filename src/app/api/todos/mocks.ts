import { Todo } from "@/entities/todo/model/types";

let todos: Todo[] = [
  { id: 1, text: "Learn FSD", completed: false },
  { id: 2, text: "Build portfolio", completed: true },
];
let nextId = 3;

export const getTodos = () => [...todos];

export const createTodo = (text: string): Todo => {
  const newTodo = { id: nextId++, text: text.trim(), completed: false };
  todos.push(newTodo);
  return newTodo;
};

export const updateTodo = (id: number, updates: Partial<Todo>) => {
  todos = todos.map((t) => (t.id === id ? { ...t, ...updates } : t));
};

export const deleteTodo = (id: number) => {
  todos = todos.filter((t) => t.id !== id);
};
