import React from "react";
import type { Task } from "../types/task";

interface TaskItemProps {
    task: Task;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
    return (
        <li className={`task-list__item task ${task.completed ? "task--completed" : ""}`}>
            <div className="task__content">
                <input
                    type="checkbox"
                    className="task__checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                />
                <span className="task__text">{task.title}</span>
            </div>

            <div className="task__actions">
                <button
                    className="task__delete"
                    onClick={() => onDelete(task.id)}
                    aria-label="Удалить задачу"
                >
                    <img
                        src="/icons/close-icon.png"
                        alt="Удалить"
                        className="task__delete-icon"
                    />
                </button>
            </div>
        </li>
    );
};

export default TaskItem;