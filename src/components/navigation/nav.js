import React from "react";
import { Link } from "react-router-dom";

import "./nav.scss";

const Nav = (props) => {
  return (
    <ul className="Nav">
      <Link to="/">Home</Link>
      <Link to="/test-page">Test page</Link>
    </ul>
  );
};

export default Nav;
