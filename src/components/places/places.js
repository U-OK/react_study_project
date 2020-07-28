import React from "react";

import "./places.scss";

import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Title, PlaceItem, Header } from "..";

const StyledButton = withStyles({
  root: {
    borderRadius: 0,
    width: "100%",
    height: "40px",
  },
})(Button);

const Places = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="places">
        <div className="places__sidebar">
          <Title />
          <div className="places__list">
            <PlaceItem />
            <PlaceItem />
            <PlaceItem />
          </div>
          <StyledButton variant="contained">Добавить заведение</StyledButton>
        </div>
        <div className="places__redaction">
          <p>Hello</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Places;
