import { Todo } from "../model/types";
import { TodoCheckbox } from "@/features/todo-toggle/ui/TodoCheckbox";
import { TodoDeleteButton } from "@/features/todo-delete/ui/TodoDeleteButton";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <li
      className={`flex items-center justify-between p-3 rounded-lg border ${
        todo.completed
          ? "bg-green-50 border-green-200"
          : "bg-white border-gray-200"
      }`}
    >
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <TodoCheckbox todo={todo} />
        <span
          className={`truncate ${
            todo.completed ? "text-green-600" : "text-gray-800"
          }`}
        >
          {todo.text}
        </span>
      </div>
      <TodoDeleteButton id={todo.id} />
    </li>
  );
};
