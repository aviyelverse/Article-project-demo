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
        <AboutBox
          image={aboutImage}
          title="Crunches and lift"
          paragraph="Your abdominal muscles are a complicated group of muscles that can be tough to strengthen through regular aerobic activity or weight training. Your abs will benefit from targeted crunches and leg lifts."
        />
        <AboutBox
          image={aboutImage1}
          title="Yoga and stretch"
          paragraph="Yoga poses stretch your muscles and increase your range of motion. With regular practice, they'll improve your flexibility."
        />
        <AboutBox
          image={aboutImage2}
          title="Cardios"
          paragraph="Cardio is a type of physical activity that uses the body's natural movement to help you stay active. It's a great way to keep your body healthy and fit."
        />
        <AboutBox
          image={aboutImage3}
          title="Push Ups and weigth lifting"
          paragraph=" Push Ups and weigth lifting is a great way to keep your body healthy and fit"
        />
      </div>
    </div>
  );
}

export default About;
