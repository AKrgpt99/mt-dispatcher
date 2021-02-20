import "./App.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Settings from "./pages/settings";
import Accounts from "./pages/accounts";
import Drivers from "./pages/drivers";
import Customers from "./pages/customers";
import Bookings from "./pages/bookings";
import Reports from "./pages/reports";
import Dispatch from "./pages/dispatch";
import { TopBar, Nav } from "./components/layout";

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Nav />
        <Switch>
          <Route exact path="/" render={() => <Dashboard />} />
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
