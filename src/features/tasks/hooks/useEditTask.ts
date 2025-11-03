import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTask } from "../services/taskService";
import { Task } from "../types/Task";

export const useEditTask = () => {
    // ----------------------------------------------------------------------------------------------------
    // MARK: States & Constants
    // ----------------------------------------------------------------------------------------------------
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (updatedTask: Task) => updateTask(updatedTask),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tasks"] });
        },
    });
};
