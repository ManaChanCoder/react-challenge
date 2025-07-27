import React, { useState, useEffect } from "react";

// store
import { taskStore } from "../store/taskStore";
import { themeStore } from "../store/taskStore";
import { toast } from "react-toastify";

// toastify

const EditModal = ({ editTaskIndex, onClose }) => {
  const isDark = themeStore((state) => state.isDark);
  const task = taskStore((state) => state.task);
  const updateTask = taskStore((state) => state.updateTask);

  const [editTask, setEditTask] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (editTaskIndex !== null && task[editTaskIndex]) {
      setEditTask({
        title: task[editTaskIndex].title,
        description: task[editTaskIndex].description,
      });
    }
  }, [editTaskIndex, task]);

  const onChange = (e) => {
    const { name, value } = e.target;

    setEditTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    const updatedTaskFormat = {
      ...task[editTaskIndex],
      ...editTask,
    };
    updateTask(updatedTaskFormat);
    toast.success("Task updated successfully");
    onClose();
  };

  return (
    <div className="rounded-xl">
      <div className="flex flex-col gap-3 px-5 py-3">
        <h2 className="text-2xl font-bold text-center">Edit Task</h2>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="">Title</label>
          <input
            type="text"
            className={`px-3 py-2 rounded-lg border outline-none ${
              isDark ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}
            placeholder="Enter task title"
            name="title"
            value={editTask.title}
            onChange={onChange}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="">Description</label>
          <textarea
            name="description"
            value={editTask.description}
            onChange={onChange}
            rows="4"
            className={`px-3 py-2 rounded-lg border outline-none ${
              isDark ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}
            placeholder="Enter task description"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSaveChanges();
              }
            }}
          ></textarea>
        </div>

        <button
          className={`px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 duration-150 cursor-pointer ${
            isDark ? "hover:bg-blue-400" : ""
          }`}
          onClick={() => {
            handleSaveChanges();
            onClose();
          }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditModal;
