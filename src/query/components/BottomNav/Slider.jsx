import React, { memo, useState, useMemo } from "react";
import PropTypes from "prop-types";
import leftPad from "left-pad";
import "./index.css";

const Slider = memo(props => {
  const {
    title,
    currentStartHours,
    currentEndHours,
    onStartChanged,
    onEndChanged
  } = props;

  // 获取开始、结束位置的百分比
  const [start, setStart] = useState(() => (currentStartHours / 24) * 100);
  const [end, setEnd] = useState(() => (currentEndHours / 24) * 100);

  // 处理开始、结束位置的临界值
  const startPercent = useMemo(() => {
    if (start > 100) return 100;
    if (start < 0) return 0;
    return start;
  }, [start]);

  const endPercent = useMemo(() => {
    if (end > 100) return 100;
    if (end < 0) return 0;
    return end;
  }, [end]);

  // 把开始、结束的百分比转换成数字
  const startHours = useMemo(() => Math.round((startPercent / 100) * 24), [
    startPercent
  ]);
  const endHours = useMemo(() => Math.round((endPercent / 100) * 24), [
    endPercent
  ]);

  // 把开始、结束的数字转换成需要显示的格式
  const startText = useMemo(() => leftPad(startHours, 2, "0") + ":00", [
    startHours
  ]);
  const endText = useMemo(() => leftPad(endHours, 2, "0") + ":00", [endHours]);

  return (
    <div className="option">
      <h3>{title}</h3>
      <div className="range-slider">
        <div className="slider">
          <div
            className="slider-range"
            style={{
              left: startPercent + "%",
              width: endPercent - startPercent + "%"
            }}
          ></div>
          <i
            className="slider-handle"
            style={{
              left: startPercent + "%"
            }}
          >
            <span>{startText}</span>
          </i>
          <i
            className="slider-handle"
            style={{
              left: endPercent + "%"
            }}
          >
            <span>{endText}</span>
          </i>
        </div>
      </div>
    </div>
  );
});

export default Slider;

Slider.propTypes = {
  title: PropTypes.string.isRequired,
  currentStartHours: PropTypes.number.isRequired,
  currentEndHours: PropTypes.number.isRequired,
  onStartChanged: PropTypes.func.isRequired,
  onEndChanged: PropTypes.func.isRequired
};
