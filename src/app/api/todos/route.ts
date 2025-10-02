import { NextRequest } from "next/server";
import { getTodos, createTodo } from "./mocks";

export async function GET() {
  return Response.json(getTodos());
}

export async function POST(req: NextRequest) {
  const { text } = await req.json();
  const newTodo = createTodo(text);
  return Response.json(newTodo, { status: 201 });
}
