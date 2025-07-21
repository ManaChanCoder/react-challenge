import React from "react";

const Buggy = (props) => {
  const { shouldCrash } = props;

  if (shouldCrash) {
    throw new Error("Simulated crash!");
  }
  return <p>Everything is okay here.</p>;
};

export default Buggy;
