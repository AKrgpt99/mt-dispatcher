import React from "react";

import "./dispatch-toolbar.css";
import IconButton from "../icon-button";

const DispatchToolbar = () => {
  return (
    <div className="ak-row ak-dispatch-toolbar">
      <div className="ak-row ak-dispatch-toolbar__section1">
        <IconButton
          width="48px"
          name="list"
          iconWidth="16px"
          iconInitial="light"
          variation="glass-darker-bg"
          margin="0.5rem"
        />
      </div>
    </div>
  );
};

export default DispatchToolbar;
