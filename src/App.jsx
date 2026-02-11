import React, { useState,useEffect } from "react";
import TodoCard from "./components/TodoCard";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };
  useEffect(() => {
  localStorage.setItem("myTasks", JSON.stringify(tasks));
}, [tasks]);


  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex justify-center items-center">
      
      <div className="bg-gray-100 p-8 rounded-2xl shadow-2xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
           My Smart ToDo
        </h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <button
            onClick={addTask}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 rounded-lg"
          >
            Add
          </button>
        </div>

        <div className="space-y-3">
          {tasks.map((task, index) => (
            <TodoCard
              key={index}
              task={task}
              index={index}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
