import React from "react";

export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div className="tasks">
      <input
        type="checkbox"
        checked={task.checked}
        onChange={() => toggleTask(task.id)}
      />
      <span>{task.title}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}
