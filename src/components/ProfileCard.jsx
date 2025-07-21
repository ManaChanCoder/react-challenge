import React from "react";

// component
import GradPic1 from "../asset/Grad Pic - Toga.jpg";
import GradPic2 from "../asset/SAINGGA, RHOGENN 1-5r 4-2r DSC00580.jpg";
import GradPic3 from "../asset/SAINGGA, RHOGENN 1-8r 4-2r DSC03001.jpg";
// import ProfileCardStyle from "./ProfileCardStyle"; not used for the meantime

const ProfileCard = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex gap-3">
        <div className="px-8 py-5 w-96 bg-green-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
          <img
            src={GradPic2}
            alt="My Graduation Pic-1"
            className="w-full h-60"
          />
          <h3 className="my-3 text-3xl text-center">Rhogenn G. Saingga</h3>
          <span className="text-center block">
            Aspiring web developer skilled in the MERN stack. Passionate about
            building user-friendly apps, solving problems, and continuously
            learning. Eager to grow and contribute to real-world development
            projects.
          </span>
          <button className="text-3xl bg-blue-500 hover:bg-blue-600 cursor-pointer text-white rounded-xl w-full py-1 mt-3">
            Read More...
          </button>
        </div>

        <div className="px-8 py-5 w-96 bg-green-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
          <img
            src={GradPic1}
            alt="My Graduation Pic-1"
            className="w-full h-60"
          />
          <h3 className="my-3 text-3xl text-center">Rhogenn G. Saingga</h3>
          <span className="text-center block">
            Aspiring web developer skilled in the MERN stack. Passionate about
            building user-friendly apps, solving problems, and continuously
            learning. Eager to grow and contribute to real-world development
            projects.
          </span>
          <button className="text-3xl bg-blue-500 hover:bg-blue-600 cursor-pointer text-white rounded-xl w-full py-1 mt-3">
            Read More...
          </button>
        </div>

        <div className="px-8 py-5 w-96 bg-green-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
          <img
            src={GradPic3}
            alt="My Graduation Pic-1"
            className="w-full h-60"
          />
          <h3 className="my-3 text-3xl text-center">Rhogenn G. Saingga</h3>
          <span className="text-center block">
            Aspiring web developer skilled in the MERN stack. Passionate about
            building user-friendly apps, solving problems, and continuously
            learning. Eager to grow and contribute to real-world development
            projects.
          </span>
          <button className="text-3xl bg-blue-500 hover:bg-blue-600 cursor-pointer text-white rounded-xl w-full py-1 mt-3">
            Read More...
          </button>
        </div>

        {/* <ProfileCardStyle /> */}
      </div>
    </div>
  );
};

export default ProfileCard;
