import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { loadFonts } from "./fontLoaderSlice";

const FontLoader = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFonts());
  }, []);

  return children || null;
};

export { FontLoader };
