import React from "react";
import "./Offer.css";

const Offer = () => {
  return (
    <div id="offer">
      <div className="pr-heading">
        <h1>
          Heavy discounts on <span>memberships</span>
        </h1>
        <p className="details">
          If you want to reduce weight, increase your cardio, or build and tone
          your muscles, 24/7 Fitness can help you. We provide a variety of
          membership specials and discounts at 24/7 Fitness. It is not necessary
          to spend a lot of money to live an active and healthy lifestyle.
        </p>
        <div className="pr-btns">
          <a href="#" className="pr-btn">
            CLAIM NOW!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Offer;
