"use client";

import { useDeleteTodo } from "@/entities/todo/lib/hooks/useDeleteTodo";

interface TodoDeleteButtonProps {
  id: number;
}

export const TodoDeleteButton = ({ id }: TodoDeleteButtonProps) => {
  const { mutate: deleteTodo, isPending } = useDeleteTodo();

  return (
    <button
      onClick={() => deleteTodo(id)}
      disabled={isPending}
      className={`cursor-pointer text-red-500 hover:text-red-700 ml-2 transition-opacity ${
        isPending ? "opacity-50 cursor-wait" : "opacity-100"
      }`}
      aria-label={isPending ? "Deleting task..." : "Delete task"}
      aria-busy={isPending}
    >
      {isPending ? "⏳" : "❌"}
    </button>
  );
};
