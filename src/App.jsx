import React, { useState } from "react";

const App = () => {
  const [like, setLike] = useState(0);

  const likeIncrement = () => {
    setLike(like + 1);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        <span className="block mb-[50px] text-4xl">
          {like <= 0 ? "" : `❤️ likes ${like} times.`}
        </span>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white hover:text-black cursor-pointer p-1.5 rounded-xs text-3xl w-30"
          onClick={likeIncrement}
        >
          Like
        </button>
      </div>
    </div>
  );
};

export default App;
