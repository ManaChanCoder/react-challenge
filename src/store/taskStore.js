import { create } from "zustand";
import { persist } from "zustand/middleware";

export const taskStore = create(
  persist(
    (set, get) => ({
      task: [],
      filteredTask: [],

      addTask: (newTask) => {
        const updatedTask = [newTask, ...get().task];
        set({ task: updatedTask, filteredTask: updatedTask });
      },
      removeTask: (taskId) => {
        const updatedTask = get().task.filter((task) => task.id !== taskId);
        set({ task: updatedTask, filteredTask: updatedTask });
      },
      updateTask: (updatedTask) => {
        const taskList = get().task.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        );
        set({ task: taskList, filteredTask: taskList });
      },
      searchTask: (searchTerm) => {
        const allTask = get().task;

        if (searchTerm.trim() === "") {
          set({ filteredTask: allTask });
          return;
        } else {
          const filteringTask = get().task.filter((task) =>
            task.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
          set({ filteredTask: filteringTask });
        }
      },
      markTaskAsCompleted: (taskId) => {
        const updatedTask = get().task.map((task) =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        set({ task: updatedTask, filteredTask: updatedTask });
      },
    }),
    {
      name: "task-storage",
    }
  )
);

export const themeStore = create(
  persist(
    (set) => ({
      isDark: false,

      toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
    }),
    {
      name: "theme-storage",
    }
  )
);
