import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = (props) => {
  return (
    <ul className="Header">
      <Link to="/">Главная страница</Link>
      <p>Войти</p>
    </ul>
  );
};

export default Header;
