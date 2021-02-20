import React, { useEffect, useRef, useState } from "react";

import "./icon-button.css";

import Icon from "../icon";

export default function IconButton({
  width,
  name,
  iconWidth,
  iconColor,
  iconInitial,
  variation,
}) {
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
      className={`ak-icon-button${(variation && `--${variation}`) || ""}`}
      style={{ width, height: width }}
    >
      <Icon
        name={name}
        width={iconWidth}
        color={iconColor || "secondary"}
        variation={iconVariation}
      />
    </button>
  );
}
