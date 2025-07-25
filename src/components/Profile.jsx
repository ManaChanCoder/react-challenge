import React, { useState } from "react";

// components & store
import profileStore from "../store/profileStore";
import ProfileCard from "./ProfileCard";
import themeStore from "../store/themeStore";

// icons
import { CiLight } from "react-icons/ci";
import { IoMdMoon } from "react-icons/io";

const Profile = () => {
  const isDark = themeStore((state) => state.isDark);
  const toggleTheme = themeStore((state) => state.toggleTheme);
  const user = profileStore((state) => state.user);
  const updateUser = profileStore((state) => state.updateUser);
  const [userData, setUserData] = useState({
    name: user.name || "",
    email: user.email || "",
    bio: user.bio || "",
  });

  const editOnChange = (e) => {
    const { name, value } = e.target;

    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(userData);
  };

  const editProfile = () => {
    updateUser(userData);
  };

  return (
    <div
      className={`h-screen
        ${isDark ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <div className="w-full flex justify-between px-10 py-5 mb-10">
        <h1 className="font-semibold text-2xl">User Profile Card</h1>
        {isDark ? (
          <CiLight size={30} onClick={toggleTheme} />
        ) : (
          <IoMdMoon size={30} onClick={toggleTheme} />
        )}
      </div>

      <ProfileCard
        onChange={editOnChange}
        edit={editProfile}
        userData={userData}
      />
    </div>
  );
};

export default Profile;
