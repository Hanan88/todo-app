'use client';

import React, { JSX, useState } from "react";
import Card from "@/components/ui/Card";
import Text from "@/components/ui/Text";
import Modal from "@/components/ui/Modal";
import { useTasks } from "@/app/features/tasks/hooks/useTasks";
import { Task } from "@/app/features/tasks/types/Task";
import AddTaskForm from "@/app/features/tasks/components/AddTaskForm";
import { Status } from "@/app/features/tasks/types/Status";
import { useAddTask } from "@/app/features/tasks/hooks/useAddTask";
import { useDeleteTask } from "@/app/features/tasks/hooks/useDeleteTask";
import { useEditTask } from "@/app/features/tasks/hooks/useEditTask";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import TasksBoard from "../components/TasksBoard";
 

export default function ListTasksContainer(): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // MARK: States & Constants
    // ----------------------------------------------------------------------------------------------------
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const { data: tasks = [], isLoading } = useTasks();

    const { mutate: addTask } = useAddTask();
    const { mutate: deleteTask } = useDeleteTask();
    const { mutate: editTask } = useEditTask();

    const statuses: Status[] = [
        { key: "backlog", label: "Backlog", color: "info" },
        { key: "in progress", label: "In Progress", color: "warning" },
        { key: "review", label: "Review", color: "success" },
        { key: "done", label: "Done", color: "accent" },
    ];

    // ----------------------------------------------------------------------------------------------------
    // MARK: Functions
    // ----------------------------------------------------------------------------------------------------
    const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const editingId = window.editingTaskId;

        if (editingId) {
            const existingTask = tasks.find((task: Task) => task.id === editingId);

            if (existingTask) {
                editTask({
                    id: editingId,
                    title: taskTitle,
                    description: taskDescription,
                    status: existingTask.status,
                });
            }

            window.editingTaskId = null;
        } else {
            addTask({
                title: taskTitle,
                description: taskDescription,
                status: "backlog",
            });
        }

        setTaskTitle("");
        setTaskDescription("");
        setIsModalOpen(false);
    };

    // ----------------------------------------------------------------------------------------------------
    // MARK: Main Component UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white p-10">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                    <div className="flex items-center gap-4">
                        <Text
                            as="h1"
                            size="2xl"
                            weight="semibold"
                            color="white"
                            className="tracking-wide"
                        >
                            Dashboard
                        </Text>

                        {/* Search Input */}
                        <Input
                            placeholder="Search tasks..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            background="none"
                            color="accent"
                            radius="md"
                            shadow="none"
                            paddingSize="sm"
                            size="sm"
                            weight="normal"
                            hasBorder={true}
                        />
                    </div>

                    <Button
                        background="accent"
                        color="black"
                        size="auto"
                        variant="filled"
                        onClick={() => setIsModalOpen(true)}
                    >
                        + Add Task
                    </Button>
                </div>

                <TasksBoard
                    tasks={tasks}
                    statuses={statuses}
                    isLoading={isLoading}
                    searchTerm={searchTerm}
                    editTask={editTask}
                    deleteTask={deleteTask}
                    setIsModalOpen={setIsModalOpen}
                    setTaskTitle={setTaskTitle}
                    setTaskDescription={setTaskDescription}
                />
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Task">
                <AddTaskForm
                    taskTitle={taskTitle}
                    taskDescription={taskDescription}
                    onTitleChange={(e) => setTaskTitle(e.target.value)}
                    onDescriptionChange={(e) => setTaskDescription(e.target.value)}
                    onSubmit={handleAddTask}
                    onCancel={() => setIsModalOpen(false)}
                />
            </Modal>
        </div>
    );
};
