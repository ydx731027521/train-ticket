import React from "react";
import "./index.css";
import PropTypes from "prop-types";
import switchImg from "../../imgs/switch.svg";

export default function Destination(props) {
  const { from, to, exchangeFromTo, showCitySelector } = props;

  return (
    <div className="destination">
      <div
        className="destination-station"
        onClick={() => showCitySelector(true)}
      >
        <input
          type="text"
          readOnly
          value={from}
          name="from"
          className="destination-input destination-from"
        />
      </div>
      <div className="destination-switch">
        <img src={switchImg} alt="switch" onClick={exchangeFromTo} />
      </div>
      <div
        className="destination-station"
        onClick={() => showCitySelector(false)}
      >
        <input
          type="text"
          readOnly
          value={to}
          name="to"
          className="destination-input destination-to"
        />
      </div>
    </div>
  );
}

Destination.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  exchangeFromTo: PropTypes.func.isRequired,
  showCitySelector: PropTypes.func.isRequired
};
