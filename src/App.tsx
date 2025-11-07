import { useState, useEffect } from 'react';
import './style.css';
import type { Task } from "./types/task";
import type { Filter } from "./types/filter";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Filters from "./components/Filters";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    const savedTodoTasks = localStorage.getItem("todoTasks");

    if (savedTodoTasks) {
      try {
        const parsedTodoTask: Task[] = JSON.parse(savedTodoTasks);
        setTasks(parsedTodoTask);
      } catch (error) {
        console.error("Ошибка при чтении localStorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("todoTasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleAddTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const handleToggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true;
  });

  return (
    <div className="todo">
      <h1 className="todo__title">To-Do List</h1>

      <TaskInput onAdd={handleAddTask} />
      <Filters currentFilter={filter} onChange={setFilter} />
      <TaskList
        tasks={filteredTasks}
        onToggle={handleToggleTask}
        onDelete={handleDeleteTask}
      />
    </div>
  )
}

export default App;