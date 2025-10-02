"use client";

import { TodoItem } from "@/entities/todo/ui/TodoItem";
import { TodoAddForm } from "@/features/todo-add/ui/TodoAddForm";
import { useTodos } from "@/entities/todo/lib/hooks/useTodos";

export const TodoList = () => {
  const { data: todos = [], isLoading, isError } = useTodos();

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;
  
  if (isError)
    return (
      <div className="text-center mt-10 text-red-500">Failed to load tasks</div>
    );

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">📝 To-Do List</h1>

      <TodoAddForm />

      <ul className="space-y-2">
        {todos.length === 0 ? (
          <li className="text-center text-gray-500 py-4">No tasks yet</li>
        ) : (
          todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        )}
      </ul>
    </div>
  );
};
