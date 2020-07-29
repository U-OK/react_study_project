import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = (props) => {
  return (
    <div className="header">
      <Link className="header__link" to="/">
        Главная страница
      </Link>
      <p className="header__link">Войти</p>
    </div>
  );
};

export default Header;
