import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { IconLoader } from "../icon-loader";
import { ImageLoader } from "../image-loader";
import { MapLoader } from "../map-loader";
import { FontLoader } from "../font-loader";
import { AreaLoader } from "../area-loader";
import { DriverLoader } from "../driver-loader";
import { getIconLoading } from "../icon-loader/iconLoaderSlice";
import { getImageLoading } from "../image-loader/imageLoaderSlice";
import { getMapLoading } from "../map-loader/mapLoaderSlice";
import { getFontLoading } from "../font-loader/fontLoaderSlice";
import { getAreaLoading } from "../area-loader/areaLoaderSlice";
import { getDriverLoading } from "../driver-loader/driverLoaderSlice";
import { loadApp, getAppLoading } from "./appLoaderSlice";
import { Loading } from "../../../common/components/loading";

export default ({ children }) => {
  const dispatch = useDispatch();
  const appLoading = useSelector(getAppLoading);
  const loaders = {
    isIconLoading: useSelector(getIconLoading),
    isImageLoading: useSelector(getImageLoading),
    isMapLoading: useSelector(getMapLoading),
    isFontLoading: useSelector(getFontLoading),
    isAreaLoading: useSelector(getAreaLoading),
    isDriverLoading: useSelector(getDriverLoading),
  };

  useEffect(() => {
    dispatch(loadApp(loaders));
  }, [
    loaders.isMapLoading,
    loaders.isImageLoading,
    loaders.isIconLoading,
    loaders.isFontLoading,
    loaders.isAreaLoading,
    loaders.isDriverLoading,
  ]);

  return (
    <>
      {appLoading ? <Loading /> : children}
      <IconLoader />
      <ImageLoader />
      <MapLoader />
      <FontLoader />
      <AreaLoader />
      <DriverLoader />
    </>
  );
};
