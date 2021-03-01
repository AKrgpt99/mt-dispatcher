import React, { Component } from "react";

import "./dispatch.css";
import Map from "../../../common/components/map";
import AreasList from "../../../common/components/areas-list";
import DispatchToolbar from "../../../common/components/dispatch-toolbar";

class Dispatch extends Component {
  render() {
    return (
      <div className="ak-page ak-dispatch">
        <DispatchToolbar />
        <AreasList />
        <Map />
      </div>
    );
  }
}

export default Dispatch;
