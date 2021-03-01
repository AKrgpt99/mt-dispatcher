import React from "react";
import { connect } from "react-redux";

import "./drivers-list.css";

const DriversList = ({ activeDrivers }) => {
  return <div></div>;
};

const mapStateToProps = (state) => ({
  activeDrivers: state.root.driver.active,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DriversList);
