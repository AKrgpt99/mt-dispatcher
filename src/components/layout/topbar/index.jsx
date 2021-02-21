import React, { Component, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./topbar.css";

import IconButton from "../../icon-button";
import Icon from "../../icon";

function ProfileButton() {
  return (
    <Link to="/profile">
      <div className="ak-profile--thumbnail">
        <div className="ak-profile--thumbnail__bg">
          <p>D1</p>
        </div>
      </div>
    </Link>
  );
}

function LogoButton() {
  return (
    <Link to="/">
      <div className="ak-logo">
        <p className="ak-logo__text">MISSISSAUGA TAXI</p>
      </div>
    </Link>
  );
}

function SearchBar() {
  return (
    <div className="ak-row ak-searchbar">
      <Icon width="16px" name="search" color="secondary" />
      <input type="text" placeholder="Search..." />
    </div>
  );
}

class TopBar extends Component {
  render() {
    return (
      <div className="ak-row ak-topbar">
        <div className="ak-row ak-topbar__toolbar">
          <div className="ak-row ak-topbar__toolbar__section0">
            <ProfileButton />
            <LogoButton />
            <SearchBar />
          </div>
          <div className="ak-row ak-topbar__toolbar__section1">
            <IconButton
              width="48px"
              name="bell"
              iconWidth="16px"
              iconInitial="light"
              margin="0.5rem"
            />
            <IconButton
              width="48px"
              name="comment"
              iconWidth="16px"
              iconInitial="light"
              margin="0.5rem"
            />
            <IconButton
              width="48px"
              name="down"
              iconWidth="16px"
              iconInitial="light"
              margin="0.5rem"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;
