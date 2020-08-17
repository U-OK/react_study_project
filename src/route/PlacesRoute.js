import React from "react";
import { Route } from "react-router-dom";
import { PlacesPage } from "../pages";

const isAuth = localStorage.getItem("User data") === null ? false : true;

const PlacesRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth && <PlacesPage>{Component && <Component {...props} />}</PlacesPage>
    }
  />
);

export { PlacesRoute };
