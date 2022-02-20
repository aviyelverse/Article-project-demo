import React from "react";
import pricingImage from "../assets/pricing.jpg";
import PricingCard from "./PricingCard";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div id="pricing">
      <h1 className="pricing-heading">Pricing</h1>
      <div className="pricing-text">
        <PricingCard />
      </div>
      <div className="pricing-image">
        <img src={pricingImage} alt="pricing image" />
        <p>
          STRUCTURE DISCIPLINE. BUILD A HONORABLE HONOR WITH A MEMBERSHIP , YOU
          CAN BUILD EVERY SINGLE DAY. GET THE BEST PRICE ON AMENITIES, WORKOUTS,
          EQUIPMENT, AND PERSONAL TRAINING !
        </p>
        <button>Join Now !</button>
      </div>
    </div>
  );
};

export default Pricing;
