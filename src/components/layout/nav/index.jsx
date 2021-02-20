import React, { Component } from "react";

import "./nav.css";
import IconButton from "../../icon-button";

class Nav extends Component {
  render() {
    return (
      <div className="ak-col ak-nav">
        <IconButton
          width="48px"
          name="gauge"
          iconWidth="24px"
          iconColor="primary"
          variation="no-bg"
        />
        <IconButton
          width="48px"
          name="cog"
          iconWidth="24px"
          iconColor="primary"
          variation="no-bg"
        />
        <IconButton
          width="48px"
          name="car"
          iconWidth="24px"
          iconColor="primary"
          variation="no-bg"
        />
        <IconButton
          width="48px"
          name="user"
          iconWidth="24px"
          iconColor="primary"
          variation="no-bg"
        />
        <IconButton
          width="48px"
          name="phone"
          iconWidth="24px"
          iconColor="primary"
          variation="no-bg"
        />
        <IconButton
          width="48px"
          name="bookings"
          iconWidth="24px"
          iconColor="primary"
          variation="no-bg"
        />
        <IconButton
          width="48px"
          name="report"
          iconWidth="24px"
          iconColor="primary"
          variation="no-bg"
        />
        <IconButton
          width="48px"
          name="map"
          iconWidth="24px"
          iconColor="primary"
          variation="no-bg"
        />
      </div>
    );
  }
}

export default Nav;
