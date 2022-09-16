import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <img
        className="logo"
        src="https://tse2.mm.bing.net/th?id=OIP.cxJWyP3a9SOU8CJjnu1YAQHaE0&pid=Api&P=0"
        alt="Logo"
      />
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
