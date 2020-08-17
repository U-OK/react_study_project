import React from "react";

import { Places, Header } from "../components";

const PlacesPage = ({ children }) => {
  return (
    <div className="App">
      <Header />
      <Places children={children} />
    </div>
  );
};

export default PlacesPage;
