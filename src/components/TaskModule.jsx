import React, { useState } from "react";

// icons
import { MdOutlineSearch, MdOutlineWbSunny, MdDarkMode } from "react-icons/md";

// components
import Modal from "./Modal";
import AddTask from "./AddTask";
import EditModal from "./EditModal";
import TaskDisplay from "./TaskDisplay";

// store
import { taskStore, themeStore } from "../store/taskStore";

// toastify
import { ToastContainer, toast } from "react-toastify";

const TaskModule = () => {
  const {
    task,
    removeTask,

    searchTask,
    markTaskAsCompleted,
  } = taskStore();
  const [searchTerm, setSearchTerm] = useState("");
  const isDark = themeStore((state) => state.isDark);
  const toggleTheme = themeStore((state) => state.toggleTheme);
  const [modalType, setModalType] = useState("");
  const [editTaskIndex, setEditTaskIndex] = useState(null);

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    searchTask(value);
  };
  //     const taskUpdate = task.find((t) => t.id === taskId);
  //     if (!taskUpdate) return toast.error("Task not found");
  //     setNewTask(taskUpdate);
  //     updateTask(newTask);

  //     setEditTaskIndex(taskId - 1);
  //   };
  const handleDeleteTask = (taskId) => {
    removeTask(taskId);
    toast.success("Task deleted successfully");
  };
  const handleTaskCompletion = (taskId) => {
    const taskChecked = task.find((t) => t.id === taskId);
    markTaskAsCompleted(taskId);

    if (taskChecked.completed === true)
      return toast.error("Task is Incomplete");
    else return toast.success("Task marked as completed");
  };
  const openModal = (type) => {
    setModalType(type);
  };

  return (
    <div
      className={`w-full duration-300 min-h-screen max-h-full
        ${isDark ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <ToastContainer />

      <div
        className={`flex justify-between items-center px-10 py-5 mb-10
        ${isDark ? "bg-teal-800" : "bg-emerald-700"}`}
      >
        <span className="text-2xl">Task Status Tracker</span>
        {isDark ? (
          <MdOutlineWbSunny
            size={30}
            onClick={toggleTheme}
            className="cursor-pointer duration-150 hover:scale-105"
          />
        ) : (
          <MdDarkMode
            size={30}
            onClick={toggleTheme}
            className="cursor-pointer duration-150 hover:scale-105"
          />
        )}
      </div>

      <div className="w-full flex justify-between items-center gap-5 mb-5 px-10">
        <button
          className={`px-4 py-2 text-lg cursor-pointer rounded-xl shadow-md 
            ${
              isDark
                ? "bg-teal-800 hover:bg-teal-700"
                : "bg-emerald-700 hover:bg-emerald-600"
            }`}
          onClick={() => openModal("add")}
        >
          Add Task
        </button>

        <input
          type="text"
          placeholder="Search task title..."
          className={`outline-none shadow-md px-3 py-1 rounded-xl
                ${
                  isDark ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
                }`}
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* add modal and edit */}
      <Modal isOpen={modalType === "add"} onClose={() => setModalType(null)}>
        <AddTask />
      </Modal>
      <Modal isOpen={modalType === "edit"} onClose={() => setModalType(null)}>
        <EditModal editTaskIndex={editTaskIndex} />
      </Modal>

      <TaskDisplay
        handleDeleteTask={handleDeleteTask}
        handleTaskCompletion={handleTaskCompletion}
        openModal={openModal}
        setEditTaskIndex={setEditTaskIndex}
      />
    </div>
  );
};

export default TaskModule;
