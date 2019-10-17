import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./index.css";

import { transDayTime } from "../../index/util";

export default function Day(props) {
  const { onSelect, day } = props;

  if (!day) {
    return <td className="null"></td>;
  }

  const classNameList = [];

  const currentDay = transDayTime();

  // 今天以前
  if (day < currentDay) {
    classNameList.push("disabled");
  }

  // 周六、周天
  if ([6, 0].includes(new Date(day).getDay())) {
    classNameList.push("weekend");
  }

  // 今天
  const dateString = currentDay === day ? "今天" : new Date(day).getDate();

  return (
    <td className={classnames(classNameList)} onClick={() => onSelect(day)}>
      {dateString}
    </td>
  );
}

Day.propTypes = {
  onSelect: PropTypes.func.isRequired,
  day: PropTypes.number
};
