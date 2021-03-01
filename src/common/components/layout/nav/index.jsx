import React, { Component, createRef, forwardRef } from "react";
import { NavLink } from "react-router-dom";

import "./nav.css";
import Icon from "../../icon";
import ProfileButton from "../../profile-button";

const Nav = () => {
  return (
    <div id="nav" className="ak-col ak-nav ak-nav--anim-init">
      <ProfileButton />
      <div className="ak-col ak-nav__toolbar">
        <NavLink
          to="/dashboard"
          activeClassName="active"
          className="ak-row ak-nav__toolbar__link"
        >
          <div className="ak-row ak-nav__toolbar__link__icon-wrapper">
            <Icon width="24px" name="gauge" color="primary" />
          </div>
          <p
            name="nav-link-text-0"
            className="ak-nav__toolbar__link__text ak-nav__toolbar__link__text--anim-init"
          >
            Dashboard
          </p>
        </NavLink>
        <NavLink
          to="/settings"
          activeClassName="active"
          className="ak-row ak-nav__toolbar__link"
        >
          <div className="ak-row ak-nav__toolbar__link__icon-wrapper">
            <Icon width="24px" name="cog" color="primary" />
          </div>
          <p
            name="nav-link-text-1"
            className="ak-nav__toolbar__link__text ak-nav__toolbar__link__text--anim-init"
          >
            Settings
          </p>
        </NavLink>
        <NavLink
          to="/drivers"
          activeClassName="active"
          className="ak-row ak-nav__toolbar__link"
        >
          <div className="ak-row ak-nav__toolbar__link__icon-wrapper">
            <Icon width="24px" name="car" color="primary" />
          </div>
          <p
            name="nav-link-text-2"
            className="ak-nav__toolbar__link__text ak-nav__toolbar__link__text--anim-init"
          >
            Drivers
          </p>
        </NavLink>
        <NavLink
          to="/accounts"
          activeClassName="active"
          className="ak-row ak-nav__toolbar__link"
        >
          <div className="ak-row ak-nav__toolbar__link__icon-wrapper">
            <Icon width="24px" name="user" color="primary" />
          </div>
          <p
            name="nav-link-text-3"
            className="ak-nav__toolbar__link__text ak-nav__toolbar__link__text--anim-init"
          >
            Accounts
          </p>
        </NavLink>
        <NavLink
          to="/bookings"
          activeClassName="active"
          className="ak-row ak-nav__toolbar__link"
        >
          <div className="ak-row ak-nav__toolbar__link__icon-wrapper">
            <Icon width="24px" name="bookings" color="primary" />
          </div>
          <p
            name="nav-link-text-4"
            className="ak-nav__toolbar__link__text ak-nav__toolbar__link__text--anim-init"
          >
            Bookings
          </p>
        </NavLink>
        <NavLink
          to="/reports"
          activeClassName="active"
          className="ak-row ak-nav__toolbar__link"
        >
          <div className="ak-row ak-nav__toolbar__link__icon-wrapper">
            <Icon width="24px" name="report" color="primary" />
          </div>
          <p
            name="nav-link-text-5"
            className="ak-nav__toolbar__link__text ak-nav__toolbar__link__text--anim-init"
          >
            Reports
          </p>
        </NavLink>
        <NavLink
          to="/dispatch"
          activeClassName="active"
          className="ak-row ak-nav__toolbar__link"
        >
          <div className="ak-row ak-nav__toolbar__link__icon-wrapper">
            <Icon width="24px" name="map" color="primary" />
          </div>
          <p
            name="nav-link-text-6"
            className="ak-nav__toolbar__link__text ak-nav__toolbar__link__text--anim-init"
          >
            Dispatch
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
