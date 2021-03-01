import { useRef, useState } from "react";

import "./searchbar.css";
import Icon from "../icon";
import IconButton from "../icon-button";

const SearchBar = ({ variation, margin }) => {
  return (
    <div
      className={`ak-row ak-searchbar ak-searchbar--${
        variation || "glass-dark-bg"
      }`}
      style={{ margin }}
    >
      <Icon width="16px" name="search" color="secondary" />
      <input type="text" placeholder="Search..." />
    </div>
  );
};

const SearchBarCollapsed = ({ variation, margin }) => {
  const ref = useRef();
  const [collapsed, setCollapsed] = useState(true);

  const startGrowAnimation = () => {
    ref.current.classList.remove("ak-searchbar--collapsed--anim-end");
    ref.current.classList.remove("ak-searchbar--collapsed--anim-init");
    ref.current.classList.add("ak-searchbar--collapsed--anim-start");

    setTimeout(() => {
      ref.current.classList.remove("ak-searchbar--collapsed--anim-start");
      ref.current.classList.add("ak-searchbar--collapsed--anim-final");
    }, 100);
  };

  const startShrinkAnimation = () => {
    ref.current.classList.remove("ak-searchbar--collapsed--anim-final");
    ref.current.classList.remove("ak-searchbar--collapsed--anim-start");
    ref.current.classList.add("ak-searchbar--collapsed--anim-end");

    setTimeout(() => {
      ref.current.classList.remove("ak-searchbar--collapsed--anim-end");
      ref.current.classList.add("ak-searchbar--collapsed--anim-init");
    }, 100);
  };

  const handleClick = () => {
    if (collapsed) {
      startGrowAnimation();
      setCollapsed(false);
    } else {
      startShrinkAnimation();
      setCollapsed(true);
    }
  };

  return (
    <div
      ref={ref}
      className={`ak-row ak-searchbar--collapsed ak-searchbar--${
        variation || "glass-dark-bg"
      } ak-searchbar--collapsed--anim-init`}
      style={{ margin }}
      onClick={handleClick}
    >
      <IconButton iconWidth="16px" name="search" variation="no-bg" />
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export { SearchBar, SearchBarCollapsed };
