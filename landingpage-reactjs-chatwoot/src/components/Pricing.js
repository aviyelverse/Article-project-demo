import React from "react";
import pricingImage from "../assets/pricing.jpg";
import PricingCard from "./PricingCard";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div id="pricing">
      <h1 className="pricing-heading">Pricing</h1>
      <div className="pricing-image">
        <img src={pricingImage} alt="pricing image" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta odio
          quibusdam, tenetur, corporis magni ipsa itaque esse sequi impedit unde
          asperiores, ea dolores aperiam quis doloribus autem nesciunt numquam
          cupiditate!
        </p>
        <button>Explore</button>
      </div>
      <div className="pricing-text">
        <PricingCard />
      </div>
    </div>
  );
};

export default Pricing;
