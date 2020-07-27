import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "../pages/MainPage";
import ShopPage from "../pages/ShopPage";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/test-page" component={ShopPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
