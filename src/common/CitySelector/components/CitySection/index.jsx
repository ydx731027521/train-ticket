import React, { memo } from "react";
import PropTypes from "prop-types";
import "../../index.css";

import CityItem from "../CityItem/index";

const CitySection = memo(function CitySection(props) {
  const { title, cities, onSelect } = props;

  return (
    <ul className="city-ul" data-alpha={title}>
      <li className="city-li">{title}</li>
      {cities &&
        cities.map(item => (
          <CityItem key={item.name} name={item.name} onSelect={onSelect} />
        ))}
    </ul>
  );
});

CitySection.propTypes = {
  title: PropTypes.string.isRequired,
  cities: PropTypes.array,
  onSelect: PropTypes.func.isRequired
};

export default CitySection;
