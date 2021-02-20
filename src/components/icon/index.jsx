import React, { Component } from "react";

import "./icon.css";

import icons from "../../util/icon-lib";

class Icon extends Component {
  render() {
    const { name, width, color, variation, margin } = this.props;
    const icon = icons[name];

    return (
      <svg className="ak-icon" width={width} height={width} style={{margin}} viewBox={icon.viewBox}>
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
  }
}

export default Icon;
