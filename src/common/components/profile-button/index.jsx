import { Link } from "react-router-dom";

import "./profile-button.css";

export default () => {
  return (
    <Link to="/profile" className="ak-row ak-profile">
      <div className="ak-profile--thumbnail">
        <div className="ak-profile--thumbnail__bg">
          <p>D1</p>
        </div>
      </div>
    </Link>
  );
};
