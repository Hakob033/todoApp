import TaskItem from "./TaskItem";

export default function TaskList({ data, toggleTask, deleteTask }) {
  return (
    <div className="tasksList">
      {data.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}
