import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlaces } from "../../redux/actions";

import "./places.scss";

import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Title, PlaceItem, Header, Spinner } from "..";

const StyledButton = withStyles({
  root: {
    borderRadius: 0,
    width: "100%",
    height: "40px",
  },
})(Button);

const Places = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getPlaces()), [dispatch]);

  const places = useSelector((state) => state.axiosReducer.places);
  const isLoading = useSelector((state) => state.axiosReducer.loading);

  const Click = () => console.log("Click");

  return (
    <React.Fragment>
      <Header />
      <div className="places">
        <div className="places__sidebar">
          <Title />
          <div className="places__list">
            {isLoading ? (
              <Spinner />
            ) : (
              places.map((place, index) => (
                <PlaceItem name={place.name} key={place + index} />
              ))
            )}
          </div>
          <StyledButton variant="contained" onClick={Click}>
            Добавить заведение
          </StyledButton>
        </div>
        <div className="places__redaction">
          <p>Hello</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Places;
