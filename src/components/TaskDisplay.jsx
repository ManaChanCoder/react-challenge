import React from "react";

// icons
import {
  MdModeEdit,
  MdDelete,
  MdOutlineIncompleteCircle,
} from "react-icons/md";

// store
import { taskStore, themeStore } from "../store/taskStore";

const TaskDisplay = (props) => {
  const {
    handleDeleteTask,
    handleTaskCompletion,
    openModal,
    setEditTaskIndex,
  } = props;
  const { filteredTask, task } = taskStore();
  const isDark = themeStore((state) => state.isDark);

  return (
    <div>
      <h1 className="text-center text-3xl uppercase mb-5">Table</h1>
      <div className="flex items-center gap-2.5 pb-5">
        <table className="min-w-full">
          <thead
            className={`text-xs uppercase tracking-wide 
                ${
                  isDark
                    ? "bg-emerald-200 text-gray-800"
                    : "bg-emerald-800 text-white"
                }`}
          >
            <tr>
              <th className="px-3 py-1.5">ID</th>
              <th className="px-3 py-1.5">Title</th>
              <th className="px-3 py-1.5">Description</th>
              <th className="px-3 py-1.5">Icons</th>
            </tr>
          </thead>
          <tbody
            className={`text-sm divide-y 
                ${isDark ? "divide-emerald-300" : "divide-emerald-500"}`}
          >
            {filteredTask.length > 0 ? (
              filteredTask.map((t, index) => (
                <tr
                  className={`text-center ${
                    isDark ? "hover:bg-emerald-800" : "hover:bg-amber-500"
                  }`}
                  key={index}
                >
                  <td
                    className={`px-3 py-1.5 ${
                      t.completed === true ? "line-through" : ""
                    }`}
                  >
                    {index + 1}
                  </td>
                  <td
                    className={`px-3 py-1.5 ${
                      t.completed === true ? "line-through" : ""
                    }`}
                  >
                    {t.title}
                  </td>
                  <td
                    className={`px-3 py-1.5 ${
                      t.completed === true ? "line-through" : ""
                    }`}
                  >
                    {t.description}
                  </td>
                  <td className="px-3 py-1.5 flex justify-center gap-3">
                    <MdModeEdit
                      size={25}
                      className={`cursor-pointer duration-150 ${
                        isDark
                          ? "text-emerald-800 hover:text-emerald-300 hover:scale-105"
                          : "text-emerald-800 hover:text-emerald-300 hover:scale-105"
                      }`}
                      onClick={() => {
                        openModal("edit");
                        setEditTaskIndex(
                          task.findIndex((task) => task.id === t.id)
                        );
                      }}
                    />

                    <MdDelete
                      size={25}
                      className={`cursor-pointer duration-150 ${
                        isDark
                          ? "text-red-800 hover:text-red-300 hover:scale-105"
                          : "text-red-500 hover:text-red-800 hover:scale-105"
                      }`}
                      onClick={() => handleDeleteTask(t.id)}
                    />

                    <MdOutlineIncompleteCircle
                      size={25}
                      className={`cursor-pointer duration-150 ${
                        isDark
                          ? "text-blue-400 hover:text-blue-800 hover:scale-105"
                          : "text-blue-500 hover:text-blue-800 hover:scale-105"
                      }`}
                      onClick={() => handleTaskCompletion(t.id)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-3">
                  No tasks available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskDisplay;
