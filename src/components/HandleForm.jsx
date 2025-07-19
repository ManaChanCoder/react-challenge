import React, { useState } from "react";

import Form from "./Form";

const HandleForm = () => {
  const [name, setName] = useState("");
  const [bgColor, setBgColor] = useState("white");

  const handleOnChange = (e) => {
    setName(e.target.value);
  };
  const alertResult = () => {
    alert(name);
  };
  const handleDoubleClick = () => {
    setBgColor("blue");
  };

  return (
    <div>
      <Form
        name={name}
        handleOnChange={handleOnChange}
        alertResult={alertResult}
        doubleClick={handleDoubleClick}
        bgColor={bgColor}
      />
    </div>
  );
};

export default HandleForm;
