import { create } from "zustand";

const counterStore = create((set) => ({
  count: 0,
  increment: () =>
    set((state) => {
      if (state.count >= 0) {
        return { count: state.count + 1 };
      } else {
        return { count: state.count };
      }
    }),
  decrement: () => {
    return set((state) => {
      if (state.count <= 0) {
        return { count: state.count };
      } else {
        return { count: state.count - 1 };
      }
    });
  },
}));

export default counterStore;
