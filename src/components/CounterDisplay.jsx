import React from "react";

const CounterDisplay = (props) => {
  const { count, increment, decrement } = props;

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div class="flex flex-col justify-center gap-5 isolate aspect-video w-96 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5">
        <span className="text-3xl block text-center">{count}</span>

        <div className="flex justify-center gap-3">
          <button
            onClick={decrement}
            className="rounded-full w-11 bg-blue-500 text-blue-50 hover:bg-blue-600 text-2xl cursor-pointer "
          >
            -
          </button>
          <button
            onClick={increment}
            className="rounded-full w-11 bg-blue-500 text-blue-50 hover:bg-blue-600 text-2xl cursor-pointer "
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterDisplay;
