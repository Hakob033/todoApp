import React from "react";

export default function TaskInput({ value, setValue, addTask }) {
  const handleAddTask = () => {
    if (value.trim()) {
      addTask(value);
      setValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <main>
      <input
        type="text"
        placeholder="Add new Task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handleKeyPress} // Add this line
      />
      <button onClick={handleAddTask}>Add</button>
    </main>
  );
}
