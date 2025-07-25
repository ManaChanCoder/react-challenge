import { create } from "zustand";
import { persist } from "zustand/middleware";

const themeStore = create(
  persist(
    (set) => ({
      isDark: false, // default theme is light

      toggleTheme: () =>
        set((state) => ({
          isDark: !state.isDark,
        })),
    }),
    {
      name: "theme-mode",
    }
  )
);

export default themeStore;
