import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TestPage from "../pages/TestPage";
import MainPage from "../pages/MainPage";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/test-page" component={TestPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
