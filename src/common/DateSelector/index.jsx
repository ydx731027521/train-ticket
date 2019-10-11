import React from "react";
import classnames from "classnames";
import "./index.css";

import Header from "../Header/index";

export default function DateSelector(props) {
  const { show, onSelect, onBack } = props;

  return (
    <div className={classnames("date-selector", { hidden: !show })}>
      <Header title="选择日期" onBack={onBack} />
    </div>
  );
}
