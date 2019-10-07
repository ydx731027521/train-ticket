import React, { memo } from "react";
import PropTypes from "prop-types";
import "../../index.css";

const AlphaItem = memo(function AlphaItem(props) {
  const { alpha, toClick } = props;

  return (
    <i className="city-index-item" onClick={() => toClick(alpha)}>
      {alpha}
    </i>
  );
});

AlphaItem.propTypes = {
  alpha: PropTypes.string.isRequired,
  toClick: PropTypes.func.isRequired
};

export default AlphaItem;
