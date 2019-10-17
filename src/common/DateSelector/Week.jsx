import React from "react";
import PropTypes from "prop-types";
import "./index.css";

import Day from "./Day";

export default function Week(props) {
  const { onSelect, days } = props;

  return (
    <tr className="date-table-days">
      {days.map((day, index) => (
        <Day day={day} onSelect={onSelect} key={index} />
      ))}
    </tr>
  );
}

Week.propTypes = {
  onSelect: PropTypes.func.isRequired,
  days: PropTypes.array.isRequired
};
