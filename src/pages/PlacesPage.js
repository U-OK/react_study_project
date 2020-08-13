import React from "react";

import { Places, Header, EditPlaces, EditDishes } from "../components";
import { useParams } from "react-router-dom";

const PlacesPage = ({ isEditPlaces, isEditDishes }) => {
  return (
    <div className="App">
      <Header />
      <Places />
      {isEditPlaces && <EditPlaces />}
      {isEditDishes && <EditDishes />}
    </div>
  );
};

export default PlacesPage;
