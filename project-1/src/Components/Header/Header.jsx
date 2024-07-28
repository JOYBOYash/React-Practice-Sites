import React from "react";
import "./Header.css";
import Button from "../Button/Button";
import Links from "../Links/Links";
function Header() {
  return (
    <div className="Header">
      <div className="action">
        <Links />
        <Button label="Contact Me" />
        <a href="" className="act">
          Follow me !
        </a>
      </div>
      <h1 className="logo">
        .Your<span>Name</span>
      </h1>
    </div>
  );
}

export default Header;
