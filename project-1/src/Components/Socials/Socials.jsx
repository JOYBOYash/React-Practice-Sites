import React from "react";
import "./Socials.css";

function Socials() {
  return (
    <div className="socials">
      <a href="#" className="soc">
        <ion-icon name="logo-discord"></ion-icon>
      </a>

      <a href="#" className="soc">
        <ion-icon name="logo-linkedin"></ion-icon>
      </a>

      <a href="#" className="soc">
        <ion-icon name="logo-github"></ion-icon>
      </a>

      <a href="#" className="soc">
        <ion-icon name="logo-twitter"></ion-icon>
      </a>
    </div>
  );
}

export default Socials;
