import React, { useMemo } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import "./index.css";

import { transDayTime } from "../../../utils/util";

function toDayString(date, isToday) {
  const dayList = ["日", "一", "二", "三", "四", "五", "六"];
  const today = dayList[date.getDay()];

  return `周${today}${isToday ? "(今天)" : ""}`;
}

function Datepicker(props) {
  const { time, onClick } = props;

  // 时间戳
  const departTime = transDayTime(time);
  const departDate = new Date(departTime);
  const isToday = departTime === transDayTime();

  const departDateString = useMemo(() => {
    return dayjs(departTime).format("YYYY-MM-DD");
  }, [departTime]);

  const dayString = toDayString(departDate, isToday);

  return (
    <div className="depart-date" onClick={() => onClick(true)}>
      <input type="hidden" name="date" value={departTime}/>
      {departDateString}
      <span className="depart-week">{dayString}</span>
    </div>
  );
}

Datepicker.propTypes = {
  time: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Datepicker;
