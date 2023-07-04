/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const BasicContainer = ({ borderRadius, keepBorders, className }) => {
  return <div className={`basic-container ${borderRadius} ${keepBorders} ${className}`} />;
};

BasicContainer.propTypes = {
  borderRadius: PropTypes.oneOf(["four-px", "zero-px", "rounded", "sixteen-px", "eight-px", "two-px-default"]),
  keepBorders: PropTypes.oneOf(["right", "everywhere", "bottom", "left", "top"]),
};
