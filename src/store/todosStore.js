// store/todosStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const todosStore = create(
  persist(
    (set) => ({
      todos: [],

      addTodo: (newTodo) =>
        set((state) => ({
          todos: [...state.todos, newTodo],
        })),

      deleteTodo: (index) =>
        set((state) => ({
          todos: state.todos.filter((_, i) => i !== index),
        })),

      editTodo: (index, updatedText) =>
        set((state) => {
          const updatedTodo = [...state.todos];
          updatedTodo[index] = updatedText;
          return { todos: updatedTodo };
        }),
    }),
    {
      name: "todos",
    }
  )
);

export default todosStore;
