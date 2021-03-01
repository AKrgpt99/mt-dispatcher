import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { loadIcons } from "./iconLoaderSlice";

const IconLoader = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadIcons());
  }, []);

  return children || null;
};

export { IconLoader };
