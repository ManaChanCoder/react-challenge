import React from "react";

// store
import themeStore from "../store/themeStore";

const Modal = (props) => {
  const { isOpen, onClose, onChange, edit, userData } = props;
  const isDark = themeStore((state) => state.isDark);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      edit();
      onClose();
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        className={`w-96 p-6 rounded-lg shadow-lg relative 
        ${isDark ? "bg-gray-800 text-white" : "bg-white text-black"}`}
      >
        <h2 className="text-xl text-center font-bold mb-4">Edit Profile</h2>

        <form action="" className="flex flex-col ">
          <label htmlFor="" className="ml-2.5">
            Name
          </label>
          <input
            type="text"
            className={`px-2.5 py-1.5 outline-none shadow-md rounded-xl
              ${isDark ? "bg-gray-700 text-white" : "bg-gray-100 text-black"}`}
            name="name"
            value={userData.name}
            onChange={onChange}
            onKeyDown={handleEnter}
          />
          <label htmlFor="" className="mt-2 ml-2.5">
            Email
          </label>
          <input
            type="text"
            className={`px-2.5 py-1.5 outline-none shadow-md rounded-xl
              ${isDark ? "bg-gray-700 text-white" : "bg-gray-100 text-black"}`}
            name="email"
            value={userData.email}
            onChange={onChange}
            onKeyDown={handleEnter}
          />
          <label htmlFor="" className="mt-2 ml-2.5">
            Bio
          </label>
          <textarea
            name="bio"
            id=""
            rows={4}
            className={`px-2.5 py-1.5 outline-none shadow-md rounded-xl
              ${isDark ? "bg-gray-700 text-white" : "bg-gray-100 text-black"}`}
            placeholder="at least 50 characters"
            value={userData.bio}
            onChange={onChange}
            onKeyDown={handleEnter}
          />
        </form>
        <div className="flex justify-center gap-3">
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded  cursor-pointer hover:bg-red-600 hover:scale-105 transition-all duration-100"
          >
            Close
          </button>
          <button
            onClick={() => {
              edit();
              onClose();
            }}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded  cursor-pointer hover:bg-blue-600 hover:scale-105 transition-all duration-100"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
