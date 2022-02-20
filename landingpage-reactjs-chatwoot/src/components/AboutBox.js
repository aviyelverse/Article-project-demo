import React from "react";

function AboutBox(props) {
  return (
    <div className="about-box">
      <div className="a-b-box">
        <img src={props.image} alt="" />
      </div>
      <div className="a-b-text">
        <h2>{props.title}</h2>
        <p>{props.paragraph}</p>
      </div>
    </div>
  );
}

export default AboutBox;
