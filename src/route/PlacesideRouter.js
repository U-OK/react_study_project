import React from "react";
import { Switch, Route } from "react-router-dom";

import { EditDishes, EditPlaces } from "../components";

const PlacesideRouter = () => {
  return (
    <Switch>
      <Route
        path="/owner/places/:idPlace/dishes/:idDish"
        component={EditDishes}
      />
      <Route path="/owner/places/:idPlace" component={EditPlaces} />
    </Switch>
  );
};

export default PlacesideRouter;
