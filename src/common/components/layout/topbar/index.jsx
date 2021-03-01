import React from "react";

import "./topbar.css";

import IconButton from "../../icon-button";
import { SearchBar } from "../../searchbar";
import LogoButton from "../../logo-button";

const TopBar = () => {
  return (
    <div id="topbar" className="ak-row ak-topbar ak-topbar--anim-init">
      <div className="ak-row ak-topbar__toolbar">
        <div className="ak-row ak-topbar__toolbar__section0">
          <LogoButton />
          <SearchBar variation="glass-darker-bg" />
        </div>
        <div className="ak-row ak-topbar__toolbar__section1">
          <IconButton
            width="48px"
            name="bell"
            iconWidth="16px"
            iconInitial="light"
            margin="0.5rem"
            variation="glass-darker-bg"
          />
          <IconButton
            width="48px"
            name="phone"
            iconWidth="16px"
            iconInitial="light"
            margin="0.5rem"
            variation="glass-darker-bg"
          />
          <IconButton
            width="48px"
            name="comment"
            iconWidth="16px"
            iconInitial="light"
            margin="0.5rem"
            variation="glass-darker-bg"
          />
          <IconButton
            width="48px"
            name="down"
            iconWidth="16px"
            iconInitial="light"
            margin="0.5rem"
            variation="glass-darker-bg"
          />
        </div>
      </div>
      <div className="ak-topbar__bg--blur"></div>
    </div>
  );
};

export default TopBar;
