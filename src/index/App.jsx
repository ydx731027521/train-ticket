import React, { useCallback, useMemo } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./App.css";

import Header from "@/common/Header/index.jsx";
import Destination from "./components/Destination/index.jsx";
import DatePicker from "./components/DatePicker/index.jsx";
import HighSpeed from "./components/HighSpeed/index.jsx";
import Submit from "./components/Submit/index.jsx";
import CitySelector from "@/common/CitySelector/index.jsx";
import DateSelector from "@/common/DateSelector/index.jsx";

import { transDayTime } from "./util";

import {
  showCitySelector,
  exchangeFromTo,
  hideCitySelector,
  fetchCityData,
  setSelectedCity,
  showDateSelector,
  hideDateSelector,
  setSelectDay,
  toggleHighSpeed
} from "./actions";

function App(props) {
  const {
    from,
    to,
    cityData,
    isLoadingCityData,
    isCitySelectorVisible,
    dispatch,
    departDate,
    isDateSelectorVisible,
    highSpeed
  } = props;

  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  const destinationCbs = useMemo(() => {
    return bindActionCreators(
      {
        exchangeFromTo,
        showCitySelector
      },
      dispatch
    );
  }, []);

  const citySelectorCbs = useMemo(() => {
    return bindActionCreators(
      {
        onBack: hideCitySelector,
        onSelect: setSelectedCity,
        fetchCityData
      },
      dispatch
    );
  }, []);

  const datePickerCbs = useMemo(() => {
    return bindActionCreators({ onClick: showDateSelector }, dispatch);
  }, []);

  // 选择出发时间
  const onSelectDay = useCallback(day => {
    if (!day || day < transDayTime()) return;

    dispatch(setSelectDay(day));
    dispatch(hideDateSelector());
  }, []);

  const dateSelectorCbs = useMemo(() => {
    return bindActionCreators(
      {
        onBack: hideDateSelector
      },
      dispatch
    );
  }, []);

  const highSpeedCbs = useMemo(() => {
    return bindActionCreators(
      {
        toggle: toggleHighSpeed
      },
      dispatch
    );
  }, []);

  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack} />
      </div>
      <form action="./query.html" className="form">
        <Destination from={from} to={to} {...destinationCbs} />
        <DatePicker time={departDate} {...datePickerCbs} />
        <HighSpeed highSpeed={highSpeed} {...highSpeedCbs} />
        <Submit />
      </form>

      <CitySelector
        show={isCitySelectorVisible}
        cityData={cityData}
        isLoading={isLoadingCityData}
        {...citySelectorCbs}
      />

      <DateSelector
        show={isDateSelectorVisible}
        {...dateSelectorCbs}
        onSelect={onSelectDay}
      />
    </div>
  );
}

export default connect(
  function mapStateToProps(state) {
    return state;
  },
  function mapDispatchToProps(dispatch) {
    return { dispatch };
  }
)(App);
