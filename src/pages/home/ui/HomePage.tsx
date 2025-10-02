import Link from "next/link";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        This is a demo To-Do app built with Next.js, Tailwind CSS, React Query,
        and FSD architecture.
      </p>
      <Link
        href="/todos"
        className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
      >
        Go to To-Do List
      </Link>
    </div>
  );
};
