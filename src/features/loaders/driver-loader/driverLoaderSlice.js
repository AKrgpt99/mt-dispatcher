import { createSlice } from "@reduxjs/toolkit";
import io from "socket.io-client";

export const driverLoaderSlice = createSlice({
  name: "driverLoader",
  initialState: {
    loading: true,
    errors: {},
    data: {},
  },
  reducers: {
    setDriverLoading: (state, action) => {
      state.loading = action.payload;
    },
    setDriverErrors: (state, action) => {
      state.loading = action.payload;
    },
    setDriverData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {
  setDriverLoading,
  setDriverErrors,
  setDriverData,
} = driverLoaderSlice.actions;

export const loadDrivers = () => async (dispatch, getState) => {
  const driverSocket = io("http://localhost:3002/", {
    transports: ["websockets", "polling"],
  });

  driverSocket.on("connect", () => {
    driverSocket.emit("drivers");
  });

  driverSocket.on("connected", (activeDrivers) => {
    dispatch(setDriverData({ active: activeDrivers }));
    dispatch(setDriverLoading(false));
  });

  driverSocket.on("driver connected", (driver) => {
    dispatch(
      setDriverData({
        active: {
          [driver.name]: {
            car: driver.car,
            time: driver.time,
            area: driver.area,
            phone: driver.phone,
            order: driver.order || "",
            pickup: driver.pickup || "",
            destination: driver.destination || "",
          },
          ...getState().root.driver.active,
        },
      })
    );
  });
};

export const getDriverLoading = (state) => state.root.driver.loading;
export const getDriverErrors = (state) => state.root.driver.errors;
export const getDriverData = (state) => state.root.driver.data;

export default driverLoaderSlice.reducer;
