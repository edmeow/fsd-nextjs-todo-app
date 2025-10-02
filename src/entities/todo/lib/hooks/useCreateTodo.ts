import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todoApi } from "../../model/api";

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (text: string) => todoApi.createTodo(text),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
