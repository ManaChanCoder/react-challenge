import React from "react";

// custom modal

// theme
import { themeStore } from "../store/taskStore";

// icons
import { IoIosCloseCircleOutline } from "react-icons/io";

const Modal = ({ isOpen, onClose, children }) => {
  const isDark = themeStore((state) => state.isDark);
  if (!isOpen) return null;

  const cloneChildren = React.isValidElement(children)
    ? React.cloneElement(children, { onClose })
    : children;

  return (
    <div className="fixed  inset-0 bg-opacity-50 flex items-center justify-center backdrop-blur-xs z-50 pointer-events-none">
      <div
        className={`flex flex-col rounded-2xl shadow-lg w-11/12 max-w-md p-6 animate-fadeIn pointer-events-auto
            ${isDark ? "bg-gray-800 text-white" : "bg-white text-black"}`}
      >
        <IoIosCloseCircleOutline
          size={30}
          className={`cursor-pointer self-end hover:scale-110 duration-150
            ${isDark ? "text-white" : "text-black"}`}
          onClick={onClose}
        />
        {cloneChildren}
      </div>
    </div>
  );
};

export default Modal;
