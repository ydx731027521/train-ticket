import React, { memo, useCallback } from "react";
import PropTypes from "prop-types";
import "./index.css";

import Filter from "./Filter";

const Option = memo(props => {
  const { title, options, checkedMap, update } = props;

  const toggle = useCallback(
    value => {
      const newCheckedMap = { ...checkedMap };

      if (value in checkedMap) {
        delete newCheckedMap[value];
      } else {
        newCheckedMap[value] = true;
      }

      update(newCheckedMap);
    },
    [checkedMap, update]
  );

  return (
    <div className="option">
      <h3>{title}</h3>
      <ul>
        {options.map(option => (
          <Filter
            key={option.value}
            {...option}
            checked={option.value in checkedMap}
            toggle={toggle}
          />
        ))}
      </ul>
    </div>
  );
});

export default Option;

Option.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  checkedMap: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired
};
