"use client";

import { useState } from "react";
import { useCreateTodo } from "@/entities/todo/lib/hooks/useCreateTodo";
import { Button } from "@/shared/ui/button/Button";

export const TodoAddForm = () => {
  const [inputValue, setInputValue] = useState("");
  const { mutateAsync: createTodo, isPending } = useCreateTodo();

  const handleAdd = async () => {
    const text = inputValue.trim();
    if (text) {
      await createTodo(text);
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add a new task..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        disabled={isPending}
      />
      <Button
        onClick={handleAdd}
        disabled={!inputValue.trim()}
        isLoading={isPending}
        variant="primary"
        size="md"
      >
        Add
      </Button>
    </div>
  );
};
