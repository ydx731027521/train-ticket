import React from "react";
import "./index.css";
import PropTypes from "prop-types";

export default function Header(props) {
  const { onBack, title } = props;

  return (
    <div className="header">
      <div className="header-back">
        <svg width="42" height="42" onClick={onBack}>
          <polyline
            points="25,13 16,21 25,28"
            stroke="#fff"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      <h1 className="header-title">{title}</h1>
    </div>
  );
}

Header.propTypes = {
  onBack: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};
