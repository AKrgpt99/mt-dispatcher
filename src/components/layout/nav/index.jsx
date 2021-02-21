import React, { Component } from "react";

import "./nav.css";
import IconButton from "../../icon-button";

class Nav extends Component {
  render() {
    return (
      <div className="ak-col ak-nav">
        <IconButton
          width="32px"
          name="gauge"
          iconWidth="24px"
          iconColor="primary"
          variation="no-bg"
          margin="0.5rem"
        />
        <IconButton
          width="32px"
          name="cog"
          iconWidth="24px"
          iconColor="primary"
          variation="no-bg"
          margin="0.5rem"
        />
        <IconButton
          width="32px"
          name="car"
          iconWidth="24px"
          iconColor="primary"
          variation="no-bg"
          margin="0.5rem"
        />
        <IconButton
          width="32px"
          name="user"
          iconWidth="24px"
          iconColor="primary"
          variation="no-bg"
          margin="0.5rem"
        />
        <IconButton
          width="32px"
          name="phone"
          iconWidth="24px"
          iconColor="primary"
          variation="no-bg"
          margin="0.5rem"
        />
        <IconButton
          width="32px"
          name="bookings"
          iconWidth="24px"
          iconColor="primary"
          variation="no-bg"
          margin="0.5rem"
        />
        <IconButton
          width="32px"
          name="report"
          iconWidth="24px"
          iconColor="primary"
          variation="no-bg"
          margin="0.5rem"
        />
        <IconButton
          width="32px"
          name="map"
          iconWidth="24px"
          iconColor="primary"
          variation="no-bg"
          margin="0.5rem"
        />
      </div>
    );
  }
}

export default Nav;
