import React, { useState } from "react";

// toastify
import { toast } from "react-toastify";

// store
import { taskStore } from "../store/taskStore";
import { themeStore } from "../store/taskStore";

const AddTask = ({ onClose }) => {
  const [newTask, setNewTask] = useState({
    id: 0,
    title: "",
    description: "",
    completed: false,
  });
  const task = taskStore((state) => state.task);
  const { addTask } = taskStore();
  const isDark = themeStore((state) => state.isDark);

  const handleAddTask = () => {
    if (newTask.title.trim() === "")
      return toast.error("Task title is required");
    else if (newTask.description.trim() === "")
      return toast.error("Task description is required");

    const taskExists = task.some((t) => t.title === newTask.title);
    if (taskExists) return toast.error("Task already exists");

    const taskId = task.length > 0 ? task[task.length - 1].id + 1 : 1;
    const taskFormatted = {
      ...newTask,
      id: taskId,
      completed: false,
    };
    addTask(taskFormatted);
    onClose();
  };

  const taskOnChange = (e) => {
    const { name, value } = e.target;

    setNewTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const hitEnter = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };
  return (
    <div className="rounded-xl">
      <div className="flex flex-col gap-3 px-5 py-3">
        <h2 className="text-2xl font-bold text-center">Add Task</h2>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="">Title</label>
          <input
            type="text"
            className={`outline-none shadow-md px-3 py-1 rounded-xl
                ${
                  isDark ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
                }`}
            name="title"
            value={newTask.title}
            onChange={taskOnChange}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="">Description</label>
          <input
            type="text"
            className={`outline-none shadow-md px-3 py-1 rounded-xl
                ${
                  isDark ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
                }`}
            name="description"
            value={newTask.description}
            onChange={taskOnChange}
            onKeyDown={hitEnter}
          />
        </div>
      </div>

      <div className="w-full flex justify-center mt-2">
        <button
          className={`rounded-xl px-3 py-1.5 shadow cursor-pointer   ${
            isDark
              ? "bg-teal-800 hover:bg-teal-700"
              : "bg-emerald-700 hover:bg-emerald-600"
          }`}
          onClick={handleAddTask}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddTask;
