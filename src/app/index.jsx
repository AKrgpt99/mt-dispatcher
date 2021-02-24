import React, { useEffect } from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";

import "./App.css";
import { setIcons } from "../features/icon-loader/iconLoaderSlice";
import Dashboard from "../features/pages/dashboard";
import Settings from "../features/pages/settings";
import Accounts from "../features/pages/accounts";
import Drivers from "../features/pages/drivers";
import Customers from "../features/pages/customers";
import Bookings from "../features/pages/bookings";
import Reports from "../features/pages/reports";
import Dispatch from "../features/pages/dispatch";
import { TopBar, Nav } from "../common/components/layout";

const mediaServerUrl = process.env.MEDIA_SERVER_URL || "http://localhost:3000";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Load icons from media server
    fetch(`${mediaServerUrl}/icons`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(
          setIcons(
            data.data.icons.map((icon) => (data.data.icons[icon.name] = icon))
          )
        );
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <TopBar />
        <Nav />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/dispatch" />} />
          <Route exact path="/dashboard" render={() => <Dashboard />} />
          <Route exact path="/settings" render={() => <Settings />} />
          <Route exact path="/accounts" render={() => <Accounts />} />
          <Route exact path="/drivers" render={() => <Drivers />} />
          <Route exact path="/customers" render={() => <Customers />} />
          <Route exact path="/bookings" render={() => <Bookings />} />
          <Route exact path="/reports" render={() => <Reports />} />
          <Route exact path="/dispatch" render={() => <Dispatch />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
