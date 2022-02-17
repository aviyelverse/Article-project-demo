import React from "react";

function AboutBox(props) {
  return (
    <div className="about-box">
      <div className="a-b-box">
        <img src={props.image} alt="" />
      </div>
      <div className="a-b-text">
        <h2>{props.title}</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore iusto
          quas consequatur nihil accusantium veniam facilis quibusdam, possimus
          similique, voluptatum molestiae ipsum dolores dolor deserunt esse
          quasi, aperiam libero odit.
        </p>
      </div>
    </div>
  );
}

export default AboutBox;
