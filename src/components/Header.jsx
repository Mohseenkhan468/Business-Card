import React from "react";
import profile from "../images/profile.jpg";
export default function Header() {
  return (
    <div className="header">
      <img src={profile} alt="profile" className="profileImage" />
      
    </div>
  );
}
