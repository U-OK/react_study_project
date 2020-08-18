import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { MainPage } from "../pages";
import { EditDishes, EditPlaces } from "../components";
import { PlacesRoute } from "./PlacesRoute";
import AuthPage from "../pages/AuthPage";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/auth/:type" component={AuthPage} />
        <PlacesRoute exact path="/owner/places/" />
        <PlacesRoute
          exact
          path="/owner/places/:idPlace"
          component={EditPlaces}
        />
        <PlacesRoute
          exact
          path="/owner/places/:idPlace/dishes/:idDish"
          component={EditDishes}
        />
      </Switch>
    </Router>
  );
};

export default AppRouter;
