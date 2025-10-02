import apiClient from "@/shared/lib/axios";
import { Todo } from "./types";

export const todoApi = {
  getTodos: (): Promise<Todo[]> =>
    apiClient.get("/todos").then((res) => res.data),
  createTodo: (text: string): Promise<Todo> =>
    apiClient.post("/todos", { text }).then((res) => res.data),
  updateTodo: (id: number, updates: Partial<Todo>): Promise<void> =>
    apiClient.patch(`/todos/${id}`, updates).then(() => {}),
  deleteTodo: (id: number): Promise<void> =>
    apiClient.delete(`/todos/${id}`).then(() => {}),
};
