import React, { useState } from "react";

// store & components
import themeStore from "../store/themeStore";
import profileStore from "../store/profileStore";
import Modal from "./Modal";

const ProfileCard = (props) => {
  const { onChange, edit, userData } = props;
  const isDark = themeStore((state) => state.isDark);
  const user = profileStore((state) => state.user);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);

  return (
    <div
      className={`w-full flex justify-center items-center gap-3
    `}
    >
      {user ? (
        <div
          className={`w-96 h-fit rounded-xl shadow-2xl px-5 py-3
        ${isDark ? "bg-white text-black" : "bg-gray-800 text-white"}`}
        >
          <h3 className="text-center">{user.name}</h3>
          <span className="block mt-2.5">{`Email: ${user.email}`}</span>
          <span className="block my-2.5">{`Bio: ${user.bio}`}</span>
          <div className="flex justify-center w-full mt-3 rounded-2xl">
            <button
              className={`text-lg cursor-pointer px-4 py-2 rounded hover:scale-105 transition-all duration-100
                ${
                  isDark ? "bg-blue-500 text-white" : "bg-teal-800 text-white"
                }`}
              onClick={handleOpenModal}
            >
              Edit
            </button>
          </div>
        </div>
      ) : (
        <span className="">No user data available. Please add a profile.</span>
      )}

      <Modal
        isOpen={isOpenModal}
        onClose={handleCloseModal}
        onChange={onChange}
        edit={edit}
        userData={userData}
      />
    </div>
  );
};

export default ProfileCard;
