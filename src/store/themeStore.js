import { create } from "zustand";

const saveTheme = localStorage.getItem("theme") === "true";
const themeStore = create((set) => ({
  isDark: saveTheme,

  toggleTheme: () =>
    set((state) => {
      const newTheme = !state.isDark;
      localStorage.setItem("theme", newTheme);
      return { isDark: newTheme };
    }),
}));

export default themeStore;
