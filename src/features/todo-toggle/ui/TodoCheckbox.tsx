"use client";

import { Todo } from "@/entities/todo/model/types";
import { useToggleTodo } from "@/entities/todo/lib/hooks/useToggleTodo";

interface TodoCheckboxProps {
  todo: Todo;
}

export const TodoCheckbox = ({ todo }: TodoCheckboxProps) => {
  const { mutate: toggleTodo, isPending } = useToggleTodo();

  return (
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={(e) => toggleTodo({ id: todo.id, completed: e.target.checked })}
      disabled={isPending}
      className={`cursor-pointer w-4 h-4 rounded focus:ring-indigo-500 ${
        isPending
          ? "opacity-60 cursor-wait"
          : todo.completed
          ? "text-indigo-600"
          : "text-gray-400"
      }`}
      aria-label={`Mark task "${todo.text}" as ${
        todo.completed ? "incomplete" : "completed"
      }`}
      aria-busy={isPending}
    />
  );
};
