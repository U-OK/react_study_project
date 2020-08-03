import React from "react";

const PlaceItem = ({ name = "новое заведение" }) => (
  <div className="element">{name}</div>
);

export default PlaceItem;
