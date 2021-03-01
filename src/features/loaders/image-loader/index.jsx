import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { loadImages } from "./imageLoaderSlice";

const ImageLoader = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadImages());
  }, []);

  return children || null;
};

export { ImageLoader };
