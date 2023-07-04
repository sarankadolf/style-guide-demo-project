/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Titles = ({
  type,
  hasTitle = true,
  titleClassName,
  text = "Attribute",
  hasLink = true
}) => {
  return (
    <div className="titles">
      <div className={`title type-${type}`}>
        {["regular", "small"].includes(type) && <>Title</>}

        {type === "with-attributes" && (
          <>
            <>{hasTitle && <div className="text-wrapper">Property:</div>}</>
            <div className={`title-2 ${titleClassName}`}>{text}</div>
          </>
        )}
      </div>
      <div className="links">
        {hasLink && <div className={`link type-0-${type}`}>Link 1</div>}
      </div>
    </div>
  );
};

Titles.propTypes = {
  type: PropTypes.oneOf(["regular", "with-attributes", "small"]),
  hasTitle: PropTypes.bool,
  text: PropTypes.string,
  hasLink: PropTypes.bool
};
