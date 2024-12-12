import React, { useState } from "react";
import "./navbar.css";
import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
// import { BiLogoBlogger } from "react-icons/bi";

const Navbar = () => {
  const [navBar, setNavBar] = useState("menu");

  const showNavbar = () => {
    setNavBar("menu showNavbar");
  };

  const removeNavbar = () => {
    setNavBar("menu");
  };
  return (
    <div className="navBar">
      <div className="logoDiv">
        <BiLogoMediumOld className="icon" />

        <span>OU-Trips</span>
      </div>

      <div className={navBar}>
        <ul>
          <li className="navlist">Destination</li>
          <li className="navlist">About Us</li>
          <li className="navlist">Testimonial</li>
          <li className="navlist">Gallery</li>
        </ul>

        <AiFillCloseCircle className="icon closeIcon" onClick={removeNavbar} />
      </div>

      <button className="signUpBtn btn">Sign Up</button>
      <PiDotsNineBold className="icon menuIcon" onClick={showNavbar} />
    </div>
  );
};

export default Navbar;
