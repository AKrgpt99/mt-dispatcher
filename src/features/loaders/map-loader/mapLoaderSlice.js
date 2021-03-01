import { createSlice } from "@reduxjs/toolkit";

import {
  loadMapScript,
  useMap,
  loadMarkerClusteringScript,
} from "../../../common/utils/gmaps-script";

export const mapLoaderSlice = createSlice({
  name: "mapLoader",
  initialState: {
    loading: true,
    errors: {},
    data: {},
    Component: null,
  },
  reducers: {
    setMapLoading: (state, action) => {
      state.loading = action.payload;
    },
    setMapErrors: (state, action) => {
      state.loading = action.payload;
    },
    setMapData: (state, action) => {
      state.data = action.payload;
    },
    setMapComponent: (state, action) => {
      state.Component = action.payload;
    },
  },
});

export const {
  setMapLoading,
  setMapErrors,
  setMapData,
  setMapComponent,
} = mapLoaderSlice.actions;

export const loadMap = () => (dispatch, getState) => {
  const googleMapScript = loadMapScript();
  loadMarkerClusteringScript();
  let markers = [];

  googleMapScript.addEventListener("load", () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (getState().root.driver.data.active) {
          Object.keys(getState().root.driver.data.active).map((driverId) => {
            markers.push({
              label: getState().root.driver.data.active[driverId].car,
              ...getState().root.driver.data.active[driverId].location,
            });
          });
        }

        dispatch(setMapComponent(useMap(position, markers)));
        dispatch(setMapLoading(false));
      },
      (err) => {
        dispatch(
          setMapErrors({
            [err.code]: err.message,
            ...getState().root.map.errors,
          })
        );
      },
      {
        enableHighAccuracy: true,
      }
    );
  });
};

export const getMapLoading = (state) => state.root.map.loading;
export const getMapData = (state) => state.root.map.data;

export default mapLoaderSlice.reducer;
