import { combineReducers } from "redux";

import iconReducer from "../features/icon-loader/iconLoaderSlice";
import accountReducer from "../features/pages/accounts/accountSlice";
import bookingReducer from "../features/pages/bookings/bookingSlice";
import customerReducer from "../features/pages/customers/customerSlice";
import dashboardReducer from "../features/pages/dashboard/dashboardSlice";
import dispatchReducer from "../features/pages/dispatch/dispatchSlice";
import driverReducer from "../features/pages/drivers/driverSlice";
import reportReducer from "../features/pages/reports/reportSlice";
import settingReducer from "../features/pages/settings/settingSlice";

export default combineReducers({
  icon: iconReducer,
  account: accountReducer,
  booking: bookingReducer,
  customer: customerReducer,
  dashboard: dashboardReducer,
  dispatch: dispatchReducer,
  driver: driverReducer,
  report: reportReducer,
  setting: settingReducer,
});
