import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = (props) => {
  return (
    <div className="Header">
      <Link to="/">Главная страница</Link>
      <p>Войти</p>
    </div>
  );
};

export default Header;
