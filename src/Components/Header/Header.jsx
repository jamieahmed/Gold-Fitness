import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h3 className="logo">
        <strong>G</strong>old - <strong>F</strong>itness
      </h3>
      <ul className="Header-menu">
        <li>Home</li>
        <li>Programs</li>
        <li>why us</li>
        <li>plans</li>
        <li>Testimonials</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Header;
