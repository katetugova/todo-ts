import React, { useState } from "react";

interface TaskInputProps {
    onAdd: (title: string) => void;
}

function TaskInput({ onAdd }: TaskInputProps) {
    const [title, setTitle] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!title.trim()) return;
        onAdd(title.trim());
        setTitle("");
    };

    return (
        <form className="task-input" onSubmit={handleSubmit}>
            <input
                type="text"
                className="task-input__field"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Добавить задачу"
                aria-label="Новая задача"
            />
            <button type="submit" className="task-input__btn">Добавить</button>
        </form>
    );
};

export default TaskInput;