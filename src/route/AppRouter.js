import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { MainPage, PlacesPage } from "../pages";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route
          path="/owner/places/:idPlace/dishes/:idDish"
          component={() => <PlacesPage isEditDishes />}
        />
        <Route
          path="/owner/places/:idPlace"
          component={() => <PlacesPage isEditPlaces />}
        />
        <Route path="/owner/places/" component={PlacesPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
