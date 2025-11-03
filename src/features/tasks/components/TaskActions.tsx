import { JSX, useEffect, useRef, useState } from "react";
import { Task } from "../types/Task";

type TaskActionsProps = {
    task: Task;
    onEdit: (task: Task) => void;
    onDelete: (id: string) => void;
}
export default function TaskActions({ task, onEdit, onDelete }: TaskActionsProps): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // MARK: States & Constants
    // ----------------------------------------------------------------------------------------------------
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // ----------------------------------------------------------------------------------------------------
    // MARK: Effects
    // ----------------------------------------------------------------------------------------------------
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // ----------------------------------------------------------------------------------------------------
    // MARK: Main Component UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <div className="relative" ref={menuRef}>
            <button
                className="p-1 rounded hover:bg-gray-700 transition-colors"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                ⋮
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-1 bg-gray-900 border border-gray-700 rounded-lg shadow-lg w-28 z-20">
                    <button
                        className="block w-full text-left px-3 py-2 hover:bg-gray-800 text-sm"
                        onClick={() => {
                            setIsOpen(false);
                            onEdit(task);
                        }}
                    >
                        Edit
                    </button>
                    <button
                        className="block w-full text-left px-3 py-2 hover:bg-gray-800 text-sm text-red-400"
                        onClick={() => {
                            setIsOpen(false);
                            onDelete(task.id);
                        }}
                    >
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
};
