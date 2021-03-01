import React, { Component, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./image.css";
import {
  getImageData,
  getImageErrors,
} from "../../../features/loaders/image-loader/imageLoaderSlice";
import { getAppLoading } from "../../../features/loaders/app-loader/appLoaderSlice";

const Img = ({ name, style }) => {
  const [src, setSrc] = useState("");
  const appLoading = useSelector(getAppLoading);
  const imageErrors = useSelector(getImageErrors);
  const imageData = useSelector(getImageData);

  useEffect(() => {
    if (!appLoading && Object.keys(imageErrors).length === 0) {
      setSrc(imageData[name].src);
    }
  }, [appLoading]);

  return <img src={src} alt={name} style={style} className="ak-image" />;
};

class Image extends Component {
  render() {
    const { name, style } = this.props;

    return <Img name={name} style={style} />;
  }
}

export default Image;
