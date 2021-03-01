import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { loadDrivers } from "./driverLoaderSlice";

export const DriverLoader = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDrivers());
  }, []);

  return children || null;
};
