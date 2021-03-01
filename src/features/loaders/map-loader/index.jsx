import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { loadMap } from "./mapLoaderSlice";

export const MapLoader = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMap());
  }, []);

  return children || null;
};
