import React from "react";

const Form = (props) => {
  const { name, handleOnChange, alertResult, doubleClick, bgColor } = props;
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div
        className="border-[2px] rounded-xl p-3 flex flex-col items-center"
        onDoubleClick={doubleClick}
        style={{ background: bgColor }}
      >
        <h1 className="text-center">Form</h1>
        <span className="block my-2.5">Result: {name}</span>
        <input
          type="text"
          onChange={handleOnChange}
          className="bg-black text-white"
        />
        <button
          className="p-3 bg-blue-500 hover:bg-blue-400 cursor-pointer my-2.5 w-full rounded-3xl"
          onClick={alertResult}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
