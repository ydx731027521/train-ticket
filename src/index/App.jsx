import React, { useCallback } from "react";
import { connect } from "react-redux";
import "./App.css";

import Header from "@/common/Header/index.jsx";
import Destination from "./components/Destination/index.jsx";
import DatePicker from "./components/DatePicker/index.jsx";
import HighSpeed from "./components/HighSpeed/index.jsx";
import Submit from "./components/Submit/index.jsx";

function App(props) {
  const { from, to } = props;

  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack} />
      </div>
      <Destination from={from} to={to} />
      <DatePicker />
      <HighSpeed />
      <Submit />
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
