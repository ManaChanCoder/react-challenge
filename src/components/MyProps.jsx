import React from "react";

// components

const pictureSizes = {
  width: "400px",
  height: "350px",
  borderRadius: "4px",
};

export const MyProps = (props) => {
  const { name, bio, image } = props;
  return (
    <div className="flex justify-center align-middle p-[20px]">
      <div className="bg-amber-50 p-6 rounded-xs w-[50%]">
        <h2 className="text-2xl text-center uppercase">{name}</h2>

        <div className="flex justify-center my-[20px]">
          <img src={image} alt="My Graduation Picture" style={pictureSizes} />
        </div>

        <p className="">{bio}</p>
      </div>
    </div>
  );
};
