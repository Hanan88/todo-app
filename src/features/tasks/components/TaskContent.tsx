import { JSX } from "react";

import Text from "@/components/ui/Text";
import { Task } from "../types/Task";

type TaskContentProps = {
    task: Task;
}

export default function TaskContent({ task }: TaskContentProps): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // MARK: Main Component UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <div className="pr-2">
            <Text size="md" weight="semibold">
                {task.title}
            </Text>
            {task.description && (
                <Text size="sm" color="accent" className="opacity-70 mt-1 block">
                    {task.description}
                </Text>
            )}
        </div>
    );
};
