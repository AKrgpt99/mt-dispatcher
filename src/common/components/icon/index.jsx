import React, { Component, useEffect } from "react";
import { useSelector } from "react-redux";

import "./icon.css";

const IconSvg = ({ name, width, color, variation, margin }) => {
  let iconState = useSelector((state) => state.root.icon.icons);
  let icon;

  useEffect(() => {
    if (iconState !== []) {
      icon = iconState.find((i) => i.name === name);
    }
  }, [iconState]);

  return (
    <svg
      className="ak-icon"
      width={width}
      height={width}
      style={{ margin }}
      viewBox={icon.viewBox}
    >
      <path
        d={icon.d}
        style={{
          fill: color
            ? `var(--${color}-${variation || "main"})`
            : "var(--primary-main)",
        }}
      ></path>
    </svg>
  );
};

class Icon extends Component {
  render() {
    const { name, width, color, variation, margin } = this.props;

    return (
      <IconSvg
        name={name}
        width={width}
        color={color}
        variation={variation}
        margin={margin}
      />
    );
  }
}

export default Icon;
