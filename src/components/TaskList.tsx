import React from "react";
import type { Task } from "../types/task";
import TaskItem from "./TaskItem";

interface TaskListProps {
    tasks: Task[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
};

function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
    if (tasks.length === 0) {
        return <p>Нет задач</p>;
    }

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
};

export default TaskList;