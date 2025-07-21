import React from "react";
import "./profilecard.css";
import GradPic1 from "../asset/Grad Pic - Toga.jpg";

const ProfileCardStyle = () => {
  return (
    <div className="main-container">
      <img src={GradPic1} alt="My Graduation Pic-1" className="grad-img" />
      <h3 className="title">Rhogenn G. Saingga</h3>
      <span className="bio">
        Motivated and detail-oriented web developer with MERN stack skills.
        Passionate about learning, building user-centered applications, and
        growing in tech. Always eager to face new challenges and contribute to
        meaningful projects.
      </span>
      <button className="read-btn">Read More...</button>
    </div>
  );
};

export default ProfileCardStyle;
