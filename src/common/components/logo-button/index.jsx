import { Link } from "react-router-dom";

import "./logo-button.css";

const LogoButton = () => {
  return (
    <Link to="/">
      <div className="ak-logo">
        <p className="ak-logo__text">MISSISSAUGA TAXI</p>
      </div>
    </Link>
  );
};

export default LogoButton;
