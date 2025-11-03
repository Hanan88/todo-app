"use client";

import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
import Text from "@/components/ui/Text";
import { Task } from "../types/Task";
import TaskActions from "./TaskActions";
import { JSX } from "react";
import TaskContent from "./TaskContent";
import { Status } from "../types/Status";

type TasksBoardProps = {
    tasks: Task[];
    statuses: Status[];
    isLoading: boolean;
    searchTerm: string;
    editTask: (task: Task) => void;
    deleteTask: (id: string) => void;
    setIsModalOpen: (value: boolean) => void;
    setTaskTitle: (title: string) => void;
    setTaskDescription: (desc: string) => void;
}
export default function TasksBoard({
    tasks,
    statuses,
    isLoading,
    searchTerm,
    editTask,
    deleteTask,
    setIsModalOpen,
    setTaskTitle,
    setTaskDescription,
}: TasksBoardProps): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // MARK: States & Constants
    // ----------------------------------------------------------------------------------------------------
    const onDragEnd = (result: DropResult) => {
        const { source, destination, draggableId } = result;
        if (!destination) return;
        if (source.droppableId === destination.droppableId) return;

        const draggedTask = tasks.find((task) => task.id === draggableId);
        if (!draggedTask) return;

        editTask({
            ...draggedTask,
            status: destination.droppableId,
        });
    };

    // ----------------------------------------------------------------------------------------------------
    // MARK: Main Component UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            {isLoading ? (
                <Text>Loading tasks...</Text>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {statuses.map(({ key, label, color }) => (
                        <Droppable droppableId={key} key={key}>
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className={`
                    flex flex-col 
                    bg-gradient-to-b from-gray-900/70 to-gray-800/40
                    border border-gray-700/40 rounded-2xl
                    shadow-inner shadow-black/20
                    p-4 min-h-[75vh] max-h-[75vh] overflow-y-auto
                    hover:border-${color}-500/60 transition-all duration-300
                  `}
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <Text
                                            as="h2"
                                            size="lg"
                                            weight="semibold"
                                            color="white"
                                            className="tracking-wide"
                                        >
                                            {label}
                                        </Text>
                                        <span
                                            className={`text-xs px-2 py-0.5 rounded-full bg-${color}-500/20 text-${color}-400 border border-${color}-600/40`}
                                        >
                                            {tasks.filter((t) => t.status === key).length}
                                        </span>
                                    </div>

                                    {tasks
                                        .filter(
                                            (task) =>
                                                task.status.toLowerCase() === key.toLowerCase() &&
                                                (task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                    task.description?.toLowerCase().includes(searchTerm.toLowerCase()))
                                        )
                                        .map((task, index) => (
                                            <Draggable key={task.id} draggableId={task.id} index={index}>
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className={`
                              relative p-3 my-2 rounded-xl border
                              ${snapshot.isDragging
                                                                ? "scale-[1.03] border-accent-500/70 shadow-lg shadow-accent-500/30 bg-gray-900"
                                                                : "border-gray-700 bg-gray-800/60 hover:bg-gray-800/80"
                                                            }
                              transition-all duration-200 ease-in-out cursor-grab active:cursor-grabbing
                            `}
                                                    >
                                                        <div className="flex justify-between items-start">
                                                            <TaskContent task={task} />

                                                            <TaskActions
                                                                task={task}
                                                                onEdit={(task) => {
                                                                    setTaskTitle(task.title);
                                                                    setTaskDescription(task.description || "");
                                                                    window.editingTaskId = task.id;
                                                                    setIsModalOpen(true);
                                                                }}
                                                                onDelete={(id) => deleteTask(id)}
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    ))}
                </div>
            )}
        </DragDropContext>
    );
};
