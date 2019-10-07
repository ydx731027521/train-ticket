import React, { memo } from "react";
import PropTypes from "prop-types";
import "../../index.css";

import AlphaItem from "./AlphaItem";

const AlphaBet = memo(function AlphaBet(props) {
  const { toClick, alphaBetList } = props;

  return (
    <div className="city-index">
      {alphaBetList.map(alpha => {
        return <AlphaItem key={alpha} alpha={alpha} toClick={toClick} />;
      })}
    </div>
  );
});

AlphaBet.propTypes = {
  alphaBetList: PropTypes.array.isRequired,
  toClick: PropTypes.func.isRequired
};

export default AlphaBet;
