import { TodoList } from "@/widgets/todo-list/ui/TodoList";
import Link from "next/link";

export const TodosPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-4">
      <TodoList />
      <div className="max-w-md mx-auto mt-6 text-center">
        <Link href="/" className="text-indigo-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};
