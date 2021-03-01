import { createSlice } from "@reduxjs/toolkit";

import { loadAreasObj } from "../../../common/utils/areas-list";

export const areaLoaderSlice = createSlice({
  name: "areaLoader",
  initialState: {
    loading: true,
    errors: {},
    data: {},
  },
  reducers: {
    setAreaLoading: (state, action) => {
      state.loading = action.payload;
    },
    setAreaErrors: (state, action) => {
      state.loading = action.payload;
    },
    setAreaData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {
  setAreaLoading,
  setAreaErrors,
  setAreaData,
} = areaLoaderSlice.actions;

export const loadAreas = () => async (dispatch, getState) => {
  loadAreasObj()
    .then((areasObj) => {
      dispatch(setAreaData(areasObj));
      dispatch(setAreaLoading(false));
    })
    .catch(() => {
      dispatch(
        setAreaErrors({
          general: "could not load areas",
          ...getState().root.area.errors,
        })
      );
      dispatch(setAreaLoading(false));
    });
};

export const getAreaLoading = (state) => state.root.area.loading;
export const getAreaErrors = (state) => state.root.area.errors;
export const getAreaData = (state) => state.root.area.data;

export default areaLoaderSlice.reducer;
