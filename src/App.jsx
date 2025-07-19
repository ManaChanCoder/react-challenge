import React, { useState } from "react";

import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUsers] = useState({
    username: "",
    password: "",
  });
  const [showPass, setShowPass] = useState(true);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUsers((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const login = (e) => {
    e.preventDefault();
    if (user.username === "Rhogenn" && user.password === "Saingga") {
      setIsLogin(true);
      setUsers({
        username: "",
        password: "",
      });
    }
  };
  const logout = () => {
    if (isLogin) {
      setIsLogin(!isLogin);
    }
  };

  const handleHidePassword = () => {
    setShowPass(!showPass);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="">
        <h1 className="mb-5 text-3xl text-center">Login Form</h1>
        {isLogin ? (
          <p className="mb-2.5">Welcome, User!</p>
        ) : (
          <p>Please Login!</p>
        )}
        <form action="" onSubmit={login} className="flex flex-col gap-3">
          <label htmlFor="">Username</label>
          <input
            type="text"
            className="border rounded-xl outline-none px-2"
            name="username"
            value={user.username}
            onChange={handleOnChange}
          />
          <label htmlFor="">Password</label>
          <div className="flex justify-between border rounded-xl px-2">
            <input
              type={showPass ? "password" : "text"}
              className="outline-none "
              name="password"
              value={user.password}
              onChange={handleOnChange}
            />
            {showPass ? (
              <IoIosEye
                size={30}
                className="cursor-pointer"
                onClick={handleHidePassword}
              />
            ) : (
              <IoIosEyeOff
                size={30}
                className="cursor-pointer"
                onClick={handleHidePassword}
              />
            )}
          </div>
          <button
            type="submit"
            onClick={logout}
            className="bg-blue-500 hover:bg-blue-400 text-white hover:text-black text-2xl cursor-pointer rounded-xl"
          >
            {isLogin ? "Logout" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
