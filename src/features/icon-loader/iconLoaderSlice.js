import { createSlice } from "@reduxjs/toolkit";

export const iconLoaderSlice = createSlice({
  name: "iconLoader",
  initialState: {
    icons: [],
  },
  reducers: {
    setIcons: (state, action) => {
      state.icons = action.payload;
    },
  },
});

export const { setIcons } = iconLoaderSlice.actions;

export const getIcons = (state) => state.root.icon.icons;

export default iconLoaderSlice.reducer;
