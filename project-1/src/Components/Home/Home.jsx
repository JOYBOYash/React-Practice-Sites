import React from "react";
import "./Home.css";
import Socials from "../Socials/Socials";
import Desc from "../Desc/Desc";

function Home() {
  return (
    <div id="home">
      <section className="image">
        <img
          src="..\src\assets\pfp-1.jpeg"
          alt="Placeholder-Logo"
          className="profile"
        />
        <Socials />
      </section>
      <Desc
        name="YourName"
        title="{Your designation}, Company"
        domain="{Your primary skill & other}"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        op="../public/code.svg"
      />
    </div>
  );
}

export default Home;
