import React from "react";
import t from "prop-types";

const behaviours = {
  primary: "#8661d1",
  secondary: "#E2E3E5",
  success: "#D4EDDA",
  warning: "#FFF3CD",
  info: "#D1ECF1",
  light: "#FEFEFE",
  dark: "#D6D8D9",
};

export const AlertBehaviour = ({ children, behaviour, ...rest }) => (
  <div
    style={{
      padding: 20,
      background: "white",
      borderRadius: 5,
      color: "black",
      font: "bold",
      background: behaviours[behaviour],
    }}
    {...rest}
  >
    {children}
  </div>
);

AlertBehaviour.propTypes = {
  /**
   * The kind prop is used to set the alert's background color
   */
  behaviour: t.oneOf([
    "primary",
    "secondary",
    "success",
    "warning",
    "info",
    "light",
    "dark",
  ]),
};

AlertBehaviour.defaultProps = {
  behaviour: "primary",
};
