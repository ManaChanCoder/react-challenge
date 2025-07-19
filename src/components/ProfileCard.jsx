import React from "react";

// components
import { MyProps } from "./MyProps";
import graduationPicture from "../asset/Grad Pic - Toga.jpg";

const name = "Rhogenn Saingga";
const bio =
  "Aspiring frontend developer with basic knowledge of HTML, CSS, JavaScript, React, and beginner experience in the MERN stack, TailwindCSS, and Bootstrap. Currently focused on improving through hands-on projects and open to entry-level opportunities.";

const ProfileCard = () => {
  return <MyProps name={name} bio={bio} image={graduationPicture} />;
};

export default ProfileCard;
