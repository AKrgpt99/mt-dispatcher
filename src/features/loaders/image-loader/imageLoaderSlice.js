import { createSlice } from "@reduxjs/toolkit";

import { loadMediaImages } from "../../../common/utils/media-images";

export const imageLoaderSlice = createSlice({
  name: "imageLoader",
  initialState: {
    loading: true,
    errors: {},
    data: {},
  },
  reducers: {
    setImageLoading: (state, action) => {
      state.loading = action.payload;
    },
    setImageErrors: (state, action) => {
      state.errors = action.payload;
    },
    setImageData: (state, action) => {
      action.payload &&
        action.payload.forEach(
          (image) => (state.data[image.name] = { src: image.src })
        );
    },
  },
});

export const {
  setImageLoading,
  setImageErrors,
  setImageData,
} = imageLoaderSlice.actions;

export const loadImages = () => async (dispatch, getState) => {
  loadMediaImages()
    .then((images) => {
      dispatch(setImageData(images));
      dispatch(setImageLoading(false));
    })
    .catch(() => {
      dispatch(
        setImageErrors({
          general: "could not load images",
          ...getState().root.image.errors,
        })
      );
      dispatch(setImageLoading(false));
    });
};

export const getImageLoading = (state) => state.root.image.loading;
export const getImageErrors = (state) => state.root.image.errors;
export const getImageData = (state) => state.root.image.data;

export default imageLoaderSlice.reducer;
