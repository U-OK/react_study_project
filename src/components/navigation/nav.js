import React from "react";
import { Link } from "react-router-dom";

import "./nav.scss";

const Nav = (props) => {
  return (
    <div className="Nav">
      <Link className="Nav__link" to="/">
        Главная
      </Link>
      <Link className="Nav__link" to="/owner/places">
        Страница заведений
      </Link>
    </div>
  );
};

export default Nav;
