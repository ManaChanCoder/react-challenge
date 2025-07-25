import { create } from "zustand";
import { persist } from "zustand/middleware";

const profileStore = create(
  persist(
    (set) => ({
      user: {
        name: "Rhogenn Saingga",
        email: "saingga.egetinnz@gmail.com",
        bio: "Passionate and self-driven web developer focused on building responsive and user-friendly applications. Skilled in React, JavaScript, and Zustand. Always learning, growing, and ready to face new tech challenges.",
      },

      updateUser: (newUser) =>
        set((state) => {
          return {
            user: {
              ...state.user,
              ...newUser,
            },
          };
        }),
    }),
    {
      name: "profile-storage",
    }
  )
);

export default profileStore;
