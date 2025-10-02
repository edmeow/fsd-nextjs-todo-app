import { useQuery } from "@tanstack/react-query";
import { todoApi } from "../../model/api";

export const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: todoApi.getTodos,
  });
};
