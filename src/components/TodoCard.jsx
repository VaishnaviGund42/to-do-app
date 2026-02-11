import React from "react";

function TodoCard({ task, index, deleteTask, toggleComplete }) {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300">
      
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(index)}
          className="w-5 h-5"
        />

        <p className={`text-lg ${task.completed ? "line-through text-gray-400" : "text-gray-800"}`}>
          {task.text}
        </p>
      </div>

      <button
        onClick={() => deleteTask(index)}
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoCard;
