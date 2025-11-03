import { API_BASE_URL } from "@/constants/API";
import { Task } from "../types/Task";

export const deleteTask = async (id: string) => {
    const res = await fetch(`${API_BASE_URL}/${id}`, {
        method: "DELETE",
    });
    if (!res.ok) {
        throw new Error("Failed to delete task");
    }
    return res.json();
};

export const updateTask = async (task: Task) => {
    const res = await fetch(`${API_BASE_URL}/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
    });

    if (!res.ok) {
        throw new Error("Failed to update task");
    }

    return res.json();
};
