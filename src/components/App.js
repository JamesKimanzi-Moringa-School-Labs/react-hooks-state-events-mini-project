import React, { useState } from "react";
import NewTaskForm from "./NewTaskForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState(["Work", "Personal", "Study"]);

  const handleTaskFormSubmit = (formData) => {
    const newTask = { id: tasks.length + 1, ...formData };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="app">
      <NewTaskForm categories={categories} onTaskFormSubmit={handleTaskFormSubmit} />
      {/* Render TaskList or display tasks here */}
    </div>
  );
}

export default App;
