import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "../pages/MainPage";
import PlacesPage from "../pages/PlacesPage";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/owner/places" component={PlacesPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
