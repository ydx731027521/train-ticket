import React, { useState, useMemo, useEffect, useCallback } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import "./index.css";

import CityList from "./components/CityList/index";
import AlphaBet from "./components/AlphaBet/index";
import Suggest from "./components/Suggest/index";

const alphaBet = Array.from(new Array(26), (item, index) =>
  String.fromCharCode(65 + index)
);

export default function CitySelector(props) {
  const { show, isLoading, cityData, onBack, fetchCityData, onSelect } = props;
  const [searchKey, setSearchKey] = useState("");
  const key = useMemo(() => searchKey.trim(), [searchKey]);

  useEffect(() => {
    if (!show || isLoading || cityData) return;
    fetchCityData();
  }, [show, isLoading, cityData, fetchCityData]);

  const outputCityList = useCallback(() => {
    if (isLoading) {
      return <div>loading</div>;
    }
    if (cityData) {
      return <CityList sections={cityData.cityList} onSelect={onSelect} />;
    }
    return null;
  }, [cityData, onSelect, isLoading]);

  const alphaClick = useCallback(alpha => {
    document.querySelector(`[data-alpha='${alpha}']`).scrollIntoView();
  }, []);

  return (
    <div className={classnames("city-selector", { hidden: !show })}>
      <div className="city-search">
        <div className="search-back" onClick={() => onBack()}>
          <svg width="42" height="42">
            <polyline
              points="25,13 16,21 25,28"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <div className="search-input-wrapper">
          <input
            type="text"
            value={key}
            className="search-input"
            placeholder="城市、车站的字母或拼音"
            onChange={e => setSearchKey(e.target.value)}
          />
        </div>
        <i
          className={classnames("search-clean", {
            hidden: searchKey.length === 0
          })}
          onClick={() => setSearchKey("")}
        >
          &#xf063;
        </i>
      </div>
      {outputCityList()}
      <AlphaBet alphaBetList={alphaBet} toClick={alphaClick} />
      {Boolean(key) && (
        <Suggest searchKey={key} onSelect={key => onSelect(key)} />
      )}
    </div>
  );
}

CitySelector.propTypes = {
  show: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  cityData: PropTypes.object,
  onBack: PropTypes.func.isRequired,
  fetchCityData: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired
};
