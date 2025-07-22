import React from "react";

// components & store
import themeStore from "../store/themeStore";
import ThemeStatus from "./ThemeStatus";

// react-icons
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const ThemeToggleButton = () => {
  const { isDark, toggleTheme } = themeStore();

  return (
    <div
      className={
        isDark
          ? "bg-white text-black h-screen duration-150"
          : "bg-black text-white h-screen duration-150"
      }
    >
      <div className="flex justify-end w-full px-10">
        {isDark ? (
          <MdDarkMode
            size={30}
            onClick={toggleTheme}
            className="cursor-pointer duration-150 hover:scale-115"
            aria-label="Switch to Dark"
          />
        ) : (
          <MdOutlineLightMode
            size={30}
            onClick={toggleTheme}
            className="cursor-pointer duration-150 hover:scale-115"
            aria-label="Switch to Light"
          />
        )}
      </div>

      <ThemeStatus isDark={isDark} />
    </div>
  );
};

export default ThemeToggleButton;
