import React, { memo } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./index.css";

const Filter = memo(props => {
  const { name, checked, value, toggle } = props;
  return (
    <li className={classnames({ checked })} onClick={() => toggle(value)}>
      {name}
    </li>
  );
});

export default Filter;

Filter.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired
};
