import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div id="main">
        <div className="name">
          <h2>More than Fitness</h2>
          <h1>
            Stay<span>Healthy</span>and <span>Active</span>.
          </h1>
          <p className="details">
            We are a group of people who are passionate about fitness and want
            to be able to help others. We are here to help you achieve your
            goals and help you stay healthy and active.
          </p>
          <div className="header-btns">
            <a href="#" className="header-btn">
              BOOK NOW
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
