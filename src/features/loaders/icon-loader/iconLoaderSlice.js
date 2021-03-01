import { createSlice } from "@reduxjs/toolkit";

import { loadMediaIcons } from "../../../common/utils/media-icons";

export const iconLoaderSlice = createSlice({
  name: "iconLoader",
  initialState: {
    loading: true,
    errors: {},
    data: {},
  },
  reducers: {
    setIconLoading: (state, action) => {
      state.loading = action.payload;
    },
    setIconErrors: (state, action) => {
      state.errors = action.payload;
    },
    setIconData: (state, action) => {
      action.payload.forEach(
        (icon) => (state.data[icon.name] = { viewBox: icon.viewBox, d: icon.d })
      );
    },
  },
});

export const {
  setIconLoading,
  setIconErrors,
  setIconData,
} = iconLoaderSlice.actions;

export const loadIcons = () => async (dispatch, getState) => {
  loadMediaIcons()
    .then((icons) => {
      dispatch(setIconData(icons));
      dispatch(setIconLoading(false));
    })
    .catch(() => {
      dispatch(
        setIconErrors({
          general: "could not load icons",
          ...getState().root.icon.errors,
        })
      );
      dispatch(setIconLoading(false));
    });
};

export const getIconLoading = (state) => state.root.icon.loading;
export const getIconErrors = (state) => state.root.icon.errors;
export const getIconData = (state) => state.root.icon.data;

export default iconLoaderSlice.reducer;
