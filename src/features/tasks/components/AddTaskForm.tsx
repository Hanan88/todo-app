"use client";

import React, { JSX } from "react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea/Index";
import Button from "@/components/ui/Button";

type AddTaskFormProps = {
    taskTitle: string;
    taskDescription: string;
    onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onDescriptionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onCancel: () => void;
};

export default function AddTaskForm({
    taskTitle,
    taskDescription,
    onTitleChange,
    onDescriptionChange,
    onSubmit,
    onCancel,
}: AddTaskFormProps): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // MARK: Main Component UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <Input
                label="Task Title"
                placeholder="Enter task title"
                value={taskTitle}
                onChange={onTitleChange}
                color="white"
                hasBorder
                background="none"
            />
            <Textarea
                label="Description"
                placeholder="Write task details..."
                value={taskDescription}
                onChange={onDescriptionChange}
                color="white"
                hasBorder
                background="none"
            />

            <div className="flex justify-end gap-3 pt-2">
                <Button
                    type="button"
                    variant="outlined"
                    color="secondary"
                    onClick={onCancel}
                >
                    Cancel
                </Button>

                <Button
                    type="submit"
                    variant="filled"
                    background="accent"
                >
                    Add Task
                </Button>
            </div>
        </form>
    );
};
