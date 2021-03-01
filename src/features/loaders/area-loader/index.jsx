import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { loadAreas } from "./areaLoaderSlice";

export const AreaLoader = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAreas());
  }, []);

  return children || null;
};
