import React from "react";
import PropTypes from "prop-types";
import "./index.css";

import Week from "./Week";

export default function Month(props) {
  const {
    startingTimeInMonth, // 月第一天的0时刻
    onSelect
  } = props;

  const startDay = new Date(startingTimeInMonth);
  const currentDay = new Date(startingTimeInMonth);
  // 天数数组
  let days = [];

  while (startDay.getMonth() === currentDay.getMonth()) {
    days.push(currentDay.getTime());
    currentDay.setDate(currentDay.getDate() + 1);
  }

  // 判断这个月开始的第一天是星期几，需要补充多少天
  days = new Array(startDay.getDay() ? startDay.getDay() - 1 : 6)
    .fill(null)
    .concat(days);

  // 判断这个月结束还有多少天
  const lastDay = new Date(days[days.length - 1]);
  days = days.concat(
    new Array(lastDay.getDay() ? 7 - lastDay.getDay() : 0).fill(null)
  );

  const weeks = [];
  for (let row = 0; row < days.length / 7; row++) {
    const week = days.slice(row * 7, (row + 1) * 7);
    weeks.push(week);
  }

  const tableTitle = `${startDay.getFullYear()}年${startDay.getMonth() + 1}月`;

  return (
    <table className="date-table">
      <thead>
        <tr>
          <td colSpan={7}>
            <h5>{tableTitle}</h5>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr className="data-table-weeks">
          <th>周一</th>
          <th>周二</th>
          <th>周三</th>
          <th>周四</th>
          <th>周五</th>
          <th className="weekend">周六</th>
          <th className="weekend">周日</th>
        </tr>
        {weeks.map((week, index) => (
          <Week days={week} key={index} onSelect={onSelect} />
        ))}
      </tbody>
    </table>
  );
}

Month.propTypes = {
  startingTimeInMonth: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired
};
