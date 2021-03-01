import React, { Component, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./icon.css";
import {
  getIconData,
  getIconErrors,
} from "../../../features/loaders/icon-loader/iconLoaderSlice";
import { getAppLoading } from "../../../features/loaders/app-loader/appLoaderSlice";

const IconSvg = ({ name, width, color, variation, margin }) => {
  const [viewBox, setViewBox] = useState("");
  const [d, setD] = useState("");
  const appLoading = useSelector(getAppLoading);
  const iconErrors = useSelector(getIconErrors);
  const iconData = useSelector(getIconData);

  useEffect(() => {
    if (!appLoading && Object.keys(iconErrors).length === 0) {
      setViewBox(iconData[name].viewBox);
      setD(iconData[name].d);
    }
  }, [appLoading]);

  return (
    <svg
      className="ak-icon"
      width={width}
      height={width}
      style={{ margin }}
      viewBox={viewBox}
    >
      <path
        d={d}
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
