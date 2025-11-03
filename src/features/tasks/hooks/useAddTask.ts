import { API_BASE_URL } from "@/constants/API";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useAddTask = () => {
    // ----------------------------------------------------------------------------------------------------
    // MARK: States & Constants
    // ----------------------------------------------------------------------------------------------------
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (newTask: { title: string; description: string; status: string }) => {
            const res = await axios.post(API_BASE_URL, newTask);
            return res.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tasks"] });
        },
    });
};
