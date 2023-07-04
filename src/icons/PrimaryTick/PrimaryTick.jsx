/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const PrimaryTick = ({ color = "white", className }) => {
  return (
    <svg
      className={`primary-tick ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path-4"
        clipRule="evenodd"
        d="M8.7203 16.0455L4.4531 11.692L3 13.1641L8.7203 19L21 6.47204L19.5571 5L8.7203 16.0455Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

PrimaryTick.propTypes = {
  color: PropTypes.string,
};
