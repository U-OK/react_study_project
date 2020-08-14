import React from "react";
import { Route } from "react-router-dom";
import { PlacesPage } from "../pages";

const PlacesRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <PlacesPage>{Component && <Component {...props} />}</PlacesPage>
    )}
  />
);

export { PlacesRoute };
