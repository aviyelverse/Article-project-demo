import React from "react";
import { PricingTable, PricingSlot, PricingDetail } from "react-pricing-table";

const PricingCard = () => {
  return (
    <PricingTable highlightColor="#8661d1">
      <PricingSlot
        onClick={() => console.log("submit")}
        buttonText="TRY IT FREE"
        title="FREE"
        priceText="$0/month"
      >
        <PricingDetail>
          {" "}
          <b>Gym</b> Plans
        </PricingDetail>
        <PricingDetail>
          {" "}
          <b>Awesome</b> Diet plans
        </PricingDetail>
        <PricingDetail strikethrough>
          {" "}
          <b>Scheduled</b>Councelling
        </PricingDetail>
        <PricingDetail strikethrough>
          {" "}
          <b>Time tracking</b>
        </PricingDetail>
      </PricingSlot>
      <PricingSlot
        highlighted
        onClick={() => console.log("submit")}
        buttonText="SIGN UP"
        title="BASIC"
        priceText="$2/month"
      >
        <PricingDetail>
          {" "}
          <b>Gym</b> Plans
        </PricingDetail>
        <PricingDetail>
          {" "}
          <b>Awesome</b> Diet plans
        </PricingDetail>
        <PricingDetail>
          {" "}
          <b>Scheduled</b>Councelling
        </PricingDetail>
        <PricingDetail>
          {" "}
          <b>Time tracking</b>
        </PricingDetail>
      </PricingSlot>
    </PricingTable>
  );
};

export default PricingCard;
