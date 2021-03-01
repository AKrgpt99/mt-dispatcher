import { createSlice } from "@reduxjs/toolkit";

import { loadFontLink } from "../../../common/utils/gfonts-link";

export const fontLoaderSlice = createSlice({
  name: "fontLoader",
  initialState: {
    loading: true,
    data: {},
  },
  reducers: {
    setFontLoading: (state, action) => {
      state.loading = action.payload;
    },
    setFontData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setFontLoading, setFontData } = fontLoaderSlice.actions;

export const loadFonts = () => (dispatch) => {
  const googleFontLink = loadFontLink();
  googleFontLink.addEventListener("load", () => {
    dispatch(setFontLoading(false));
  });
};

export const getFontLoading = (state) => state.root.font.loading;
export const getFontData = (state) => state.root.font.data;

export default fontLoaderSlice.reducer;
