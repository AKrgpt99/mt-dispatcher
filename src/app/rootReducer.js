import { combineReducers } from "@reduxjs/toolkit";

import appReducer from "../features/loaders/app-loader/appLoaderSlice";
import areaReducer from "../features/loaders/area-loader/areaLoaderSlice";
import driverReducer from "../features/loaders/driver-loader/driverLoaderSlice";
import fontReducer from "../features/loaders/font-loader/fontLoaderSlice";
import iconReducer from "../features/loaders/icon-loader/iconLoaderSlice";
import imageReducer from "../features/loaders/image-loader/imageLoaderSlice";
import mapReducer from "../features/loaders/map-loader/mapLoaderSlice";
import accountReducer from "../features/pages/accounts/accountSlice";
import bookingReducer from "../features/pages/bookings/bookingSlice";
import customerReducer from "../features/pages/customers/customerSlice";
import dashboardReducer from "../features/pages/dashboard/dashboardSlice";
import dispatchReducer from "../features/pages/dispatch/dispatchSlice";
// import driverReducer from "../features/pages/drivers/driverSlice";
import reportReducer from "../features/pages/reports/reportSlice";
import settingReducer from "../features/pages/settings/settingSlice";

export default combineReducers({
  app: appReducer,
  area: areaReducer,
  font: fontReducer,
  icon: iconReducer,
  image: imageReducer,
  map: mapReducer,
  account: accountReducer,
  booking: bookingReducer,
  customer: customerReducer,
  dashboard: dashboardReducer,
  dispatch: dispatchReducer,
  driver: driverReducer,
  report: reportReducer,
  setting: settingReducer,
});
