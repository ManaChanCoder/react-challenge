import React from "react";

// components
import graduationPicture from "../asset/Grad Pic - Toga.jpg";

const pictureSizes = {
  width: "400px",
  height: "350px",
  borderRadius: "4px",
};

const ProfileCard = () => {
  return (
    <div className="flex justify-center align-middle p-[20px]">
      <div className="bg-amber-50 p-6 rounded-xs w-[50%]">
        <h2 className="text-2xl text-center uppercase">Rhogenn Saingga</h2>

        <div className="flex justify-center my-[20px]">
          <img
            src={graduationPicture}
            alt="My Graduation Picture"
            style={pictureSizes}
          />
        </div>

        <p className="">
          Aspiring frontend developer with basic knowledge of HTML, CSS,
          JavaScript, React, and beginner experience in the MERN stack, Tailwind
          CSS, and Bootstrap. Currently focused on improving through hands-on
          projects and open to entry-level opportunities.
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
