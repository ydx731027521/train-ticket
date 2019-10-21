import React from "react";
import { connect } from "react-redux";
import "./App.css";

import Header from "../common/Header/index";
import Nav from "../common/Nav/index";
import List from "./components/List/index";
import BottomNav from "./components/BottomNav/index";

function App(props) {
  <div>
    <Header />
    <Nav />
    <List />
    <BottomNav />
  </div>;
}

export default connect(
  function mapStateToProps(state) {},
  function mapDispatchToProps(dispatch) {}
)(App);
