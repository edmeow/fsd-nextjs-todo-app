import { NextRequest } from "next/server";
import { updateTodo, deleteTodo } from "../mocks";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const updates = await req.json();
  updateTodo(Number(id), updates);
  return Response.json({ success: true });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  deleteTodo(Number(id));
  return Response.json({ success: true });
}
