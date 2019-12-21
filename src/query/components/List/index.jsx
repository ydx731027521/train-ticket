import React, { memo } from "react";
import PropTypes from "prop-types";
import "./index.css";

import ListItem from "./ListItem";

const List = memo(props => {
  const { list } = props;

  return (
    <ul>
      {list.map(item => (
        <ListItem {...item} key={item.trainNumber} />
      ))}
    </ul>
  );
});

export default List;

List.propTypes = {
  list: PropTypes.array.isRequired
};
