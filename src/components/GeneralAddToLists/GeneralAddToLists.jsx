/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const GeneralAddToLists = ({
  iconShape = "https://generation-sessions.s3.amazonaws.com/1381ea37ca85ebde26ea960653de4736/img/icon-shape-1.svg",
}) => {
  return (
    <div className="general-add-to-lists">
      <img className="icon-shape" alt="Icon shape" src={iconShape} />
    </div>
  );
};

GeneralAddToLists.propTypes = {
  iconShape: PropTypes.string,
};
