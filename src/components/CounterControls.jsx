import React from "react";

// store & components
import counterStore from "../store/counterStore";
import CounterDisplay from "./CounterDisplay";

const CounterControls = () => {
  const { count, increment, decrement } = counterStore();

  return (
    <CounterDisplay increment={increment} decrement={decrement} count={count} />
  );
};

export default CounterControls;
