import React, { useState, useEffect } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import User from "./User";

const Visitor = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [visitor, setVisitor] = useState(0);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showHidePassword = () => {
    setShowPassword(!showPassword);
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      logout();
      return;
    }
    if (user.username === "Rhogenn" && user.password === "Saingga") {
      setIsLogin(true);
      setUser({
        username: "",
        password: "",
      });
      const savedVisitor = Number(localStorage.getItem("visitor")) || 0;
      const updatedVisitor = savedVisitor + 1;

      setVisitor(updatedVisitor);
      localStorage.setItem("visitor", updatedVisitor);
    } else if (user.username === "" || user.password === "") {
      alert("Please Filled!");
    } else {
      alert("Incorrect Username or Password");
    }
  };

  const logout = () => {
    setIsLogin(false);
  };

  const enterKey = () => {
    loginSubmit();
  };

  useEffect(() => {
    if (isLogin) {
      const savedVisitor = Number(localStorage.getItem("visitor"));
      setVisitor(savedVisitor);
    }
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-amber-50 relative">
      <div className="absolute top-5 right-16 flex justify-between text-2xl gap-3">
        <span>Visitor</span>
        <span>{visitor === 0 ? "" : visitor}</span>
      </div>
      <div className="">
        <h1 className="text-center mb-5 uppercase font-semibold text-3xl">
          Login Form
        </h1>

        <form
          action=""
          onSubmit={loginSubmit}
          className="flex flex-col gap-2.5 items-center"
        >
          <label htmlFor="">Username</label>
          <input
            type="text"
            className="border rounded-xl outline-none px-2 py-0.5 w-full"
            name="username"
            value={user.username}
            onChange={handleOnChange}
          />
          <label htmlFor="">Password</label>
          <div className="flex justify-between items-center border rounded-xl px-2 py-0.5">
            <input
              type={showPassword ? "text" : "password"}
              className="outline-none"
              name="password"
              value={user.password}
              onChange={handleOnChange}
              onKeyDown={enterKey}
            />
            {showPassword ? (
              <HiOutlineEye
                size={25}
                onClick={showHidePassword}
                className="cursor-pointer"
              />
            ) : (
              <HiOutlineEyeOff
                size={25}
                onClick={showHidePassword}
                className="cursor-pointer"
              />
            )}
          </div>
          <button
            type="submit"
            className="w-full rounded-xl p-0.5 mt-2.5 cursor-pointer text-xl border duration-75 hover:border-blue-300 hover:bg-blue-300"
          >
            {isLogin ? "Logout" : "Login"}
          </button>
        </form>

        {isLogin ? <User /> : ""}
      </div>
    </div>
  );
};

export default Visitor;
