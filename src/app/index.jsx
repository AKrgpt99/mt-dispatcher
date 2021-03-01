import React from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";
import Dashboard from "../features/pages/dashboard";
import Settings from "../features/pages/settings";
import Accounts from "../features/pages/accounts";
import Drivers from "../features/pages/drivers";
import Customers from "../features/pages/customers";
import Bookings from "../features/pages/bookings";
import Reports from "../features/pages/reports";
import Dispatch from "../features/pages/dispatch";
import Layout from "../common/components/layout";
import AppLoader from "../features/loaders/app-loader";

function App() {
  return (
    <div className="App">
      <AppLoader>
        <Router>
          <Layout>
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/dispatch" />}
              />
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
              <Route exact path="/settings">
                <Settings />
              </Route>
              <Route exact path="/accounts">
                <Accounts />
              </Route>
              <Route exact path="/drivers">
                <Drivers />
              </Route>
              <Route exact path="/customers">
                <Customers />
              </Route>
              <Route exact path="/bookings">
                <Bookings />
              </Route>
              <Route exact path="/reports">
                <Reports />
              </Route>
              <Route exact path="/dispatch">
                <Dispatch />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </AppLoader>
    </div>
  );
}

export default App;
