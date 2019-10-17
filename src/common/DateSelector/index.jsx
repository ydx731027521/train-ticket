import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import "./index.css";

import Header from "../Header/index";
import Month from "./Month";

// 获取最近三个月的第一天0时刻的时间戳
function getStartTimeOfMonths(timestamp) {
  const monthSequence = [];
  const currentDate = timestamp ? new Date(timestamp) : new Date();
  currentDate.setHours(0);
  currentDate.setMinutes(0);
  currentDate.setSeconds(0);
  currentDate.setUTCMilliseconds(0);
  currentDate.setDate(1);
  // 当前月
  monthSequence.push(currentDate.getTime());
  // 下个月
  currentDate.setMonth(currentDate.getMonth() + 1);
  monthSequence.push(currentDate.getTime());
  // 下下个月
  currentDate.setMonth(currentDate.getMonth() + 1);
  monthSequence.push(currentDate.getTime());

  return monthSequence;
}

export default function DateSelector(props) {
  const { show, onSelect, onBack } = props;

  const monthSequence = getStartTimeOfMonths();

  return (
    <div className={classnames("date-selector", { hidden: !show })}>
      <Header title="选择日期" onBack={onBack} />
      <div className="date-selector-tables">
        {monthSequence.map(month => (
          <Month startingTimeInMonth={month} key={month} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}

DateSelector.propTypes = {
  show: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
};
