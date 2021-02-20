import React, { Component, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./topbar.css";

import IconButton from "../../icon-button";
import Icon from "../../icon";

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
            <LogoButton />
            <SearchBar />
          </div>
          <div className="ak-row ak-topbar__toolbar__section1">
            <IconButton
              width="48px"
              name="bell"
              iconWidth="16px"
              iconInitial="light"
            />
            <IconButton
              width="48px"
              name="comment"
              iconWidth="16px"
              iconInitial="light"
            />
            <IconButton
              width="48px"
              name="down"
              iconWidth="16px"
              iconInitial="light"
            />
          </div>
        </div>
        <div className="ak-topbar__bg--blur"></div>
      </div>
    );
  }
}

export default TopBar;
