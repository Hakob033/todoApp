import React, { useState, useEffect } from "react";
import "./ToDoApp.css";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

export default function ToDoApp() {
  const [value, setValue] = useState("");
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("data");
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const addTask = (title) => {
    const newTask = {
      id: data.length + 1,
      checked: false,
      title: title,
    };
    setData([...data, newTask]);
  };

  const deleteTask = (id) => {
    setData(data.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    const updatedTasks = data.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setData(updatedTasks);
  };

  return (
    <>
      <header>
        <h2>ToDo</h2>
      </header>
      <TaskInput value={value} setValue={setValue} addTask={addTask} />
      <TaskList data={data} toggleTask={toggleTask} deleteTask={deleteTask} />
    </>
  );
}

// import React, { useEffect } from "react";
// import { useState } from "react";
// import "./ToDoApp.css";

// export default function ToDoApp() {
//   const [value, setValue] = useState("");
//   const [data, setData] = useState(() => {
//     const savedData = localStorage.getItem("data");
//     return savedData ? JSON.parse(savedData) : [];
//   });

//   useEffect(() => {
//     console.log(33);
//     localStorage.setItem("data", JSON.stringify(data));
//   }, [data]);

//   return (
//     <>
//       <header>
//         <h2>ToDo</h2>
//       </header>
//       <main>
//         <input
//           type="text"
//           placeholder="Add new Task"
//           value={value}
//           onChange={(e) => {
//             setValue(e.target.value);
//           }}
//         />
//         <button
//           onClick={() => {
//             let newTask = {
//               id: data.length + 1,
//               checked: false,
//               title: value,
//             };
//             setData([...data, newTask]);
//             setValue("");
//           }}
//         >
//           Add
//         </button>
//       </main>
//       <div className="tasksList">
//         {data.map((val, i) => {
//           return (
//             <div key={val.id} className="tasks">
//               <input
//                 type="checkbox"
//                 checked={val.checked}
//                 onChange={(e) => {
//                   const updatedTasks = data.map((task) =>
//                     task.id === val.id
//                       ? { ...task, checked: e.target.checked }
//                       : task
//                   );
//                   setData(updatedTasks);
//                 }}
//               />
//               <span>{val.title}</span>
//               <button
//                 onClick={() => {
//                   setData(
//                     data.filter((val, j) => {
//                       return j !== i;
//                     })
//                   );
//                 }}
//               >
//                 Delete
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }
