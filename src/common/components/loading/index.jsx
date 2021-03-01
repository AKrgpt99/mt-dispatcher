import Icon from "../../../common/components/icon";

import "./loading.css";

export const Loading = () => {
  return (
    <div className="ak-col ak-loader">
      <div className="ak-loader__animation-wrapper">
        <Icon width="48px" name="spinner" color="primary" margin="1rem" />
      </div>
      <h1>MISSISSAUGA TAXI</h1>
    </div>
  );
};
