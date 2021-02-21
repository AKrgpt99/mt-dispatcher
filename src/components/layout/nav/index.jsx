import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import "./nav.css";
import Icon from "../../icon";

function ProfileButton() {
  return (
    <Link to="/profile" className="ak-row ak-profile">
      <div className="ak-profile--thumbnail">
        <div className="ak-profile--thumbnail__bg">
          <p>D1</p>
        </div>
      </div>
    </Link>
  );
}

class Nav extends Component {
  render() {
    return (
      <div className="ak-col ak-nav">
        <ProfileButton />
        <div className="ak-col ak-nav__toolbar">
          <NavLink to="/dashboard" activeClassName="active">
            <Icon width="24px" name="gauge" color="primary" margin="1rem" />
          </NavLink>
          <NavLink to="/settings" activeClassName="active">
            <Icon width="24px" name="cog" color="primary" margin="1rem" />
          </NavLink>
          <NavLink to="/drivers" activeClassName="active">
            <Icon width="24px" name="car" color="primary" margin="1rem" />
          </NavLink>
          <NavLink to="/accounts" activeClassName="active">
            <Icon width="24px" name="user" color="primary" margin="1rem" />
          </NavLink>
          <NavLink to="/customers" activeClassName="active">
            <Icon width="24px" name="phone" color="primary" margin="1rem" />
          </NavLink>
          <NavLink to="/bookings" activeClassName="active">
            <Icon width="24px" name="bookings" color="primary" margin="1rem" />
          </NavLink>
          <NavLink to="/reports" activeClassName="active">
            <Icon width="24px" name="report" color="primary" margin="1rem" />
          </NavLink>
          <NavLink to="/dispatch" activeClassName="active">
            <Icon width="24px" name="map" color="primary" margin="1rem" />
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Nav;
