import { createSlice } from "@reduxjs/toolkit";

export const appLoaderSlice = createSlice({
  name: "appLoader",
  initialState: {
    loading: true,
    data: {},
  },
  reducers: {
    setAppLoading: (state, action) => {
      state.loading = action.payload;
    },
    setAppData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setAppLoading, setAppData } = appLoaderSlice.actions;

export const loadApp = ({
  isIconLoading,
  isImageLoading,
  isFontLoading,
  isMapLoading,
  isAreaLoading,
  isDriverLoading,
}) => (dispatch, getState) => {
  const appLoading = getState().root.app.loading;

  if (
    !isIconLoading &&
    !isImageLoading &&
    !isFontLoading &&
    !isMapLoading &&
    !isDriverLoading &&
    !isAreaLoading
  ) {
    if (appLoading) {
      dispatch(setAppLoading(false));
    }
  } else if (
    isIconLoading ||
    isImageLoading ||
    isFontLoading ||
    isMapLoading ||
    isDriverLoading ||
    isAreaLoading
  ) {
    if (!appLoading) {
      dispatch(setAppLoading(true));
    }
  }
};

export const getAppLoading = (state) => state.root.app.loading;
export const getAppData = (state) => state.root.app.data;

export default appLoaderSlice.reducer;
