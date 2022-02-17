import React from "react";
import AboutBox from "./AboutBox";
import aboutImage from "../assets/1.svg";
import aboutImage1 from "../assets/2.svg";
import aboutImage2 from "../assets/3.svg";
import aboutImage3 from "../assets/4.svg";
import "./About.css";

function About() {
  return (
    <div id="about">
      <h1>About</h1>
      <div className="about-container">
        <AboutBox image={aboutImage} title="Crunches and lift" />
        <AboutBox image={aboutImage1} title="Yoga and stretch" />
        <AboutBox image={aboutImage2} title="Cardios" />
        <AboutBox image={aboutImage3} title="Push Ups and weigth lifting" />
      </div>
    </div>
  );
}

export default About;
