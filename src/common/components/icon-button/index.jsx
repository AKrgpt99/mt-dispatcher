import React, { useEffect, useRef, useState } from "react";

import "./icon-button.css";

import Icon from "../icon";

const IconButton = ({
  width,
  name,
  margin,
  iconWidth,
  iconColor,
  iconInitial,
  variation,
  onClick,
}) => {
  const ref = useRef();

  const [iconVariation, setIconVariation] = useState(iconInitial || "main");

  useEffect(() => {
    ref.current.addEventListener("mouseover", () => {
      setIconVariation("dark");
    });
    ref.current.addEventListener("mouseleave", () => {
      setIconVariation(iconInitial || "main");
    });
  }, []);

  return (
    <button
      ref={ref}
      className={`ak-icon-button ak-icon-button${
        (variation && `--${variation}`) || "--glass-dark-bg"
      }`}
      style={{ width, height: width, margin: margin || "unset" }}
      onClick={onClick}
    >
      <Icon
        name={name}
        width={iconWidth}
        color={iconColor || "secondary"}
        variation={iconVariation}
      />
    </button>
  );
};

export default IconButton;
