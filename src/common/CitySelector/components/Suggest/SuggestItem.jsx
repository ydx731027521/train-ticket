import React, { memo } from "react";
import PropTypes from "prop-types";
import "../../index.css";

const SuggestItem = memo(function SuggestItem(props) {
  const { name, onClick } = props;
  return <li onClick={() => onClick(name)}>{name}</li>;
});

SuggestItem.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SuggestItem;
