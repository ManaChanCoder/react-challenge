import { create } from "zustand";

const savedTheme = localStorage.getItem("themeMode") === "true";
const themeStore = create((set) => ({
  isDark: savedTheme,

  toggleTheme: () =>
    set((state) => {
      const updatedTheme = !state.isDark;
      localStorage.setItem("themeMode", updatedTheme);
      return { isDark: updatedTheme };
    }),
}));

export default themeStore;
