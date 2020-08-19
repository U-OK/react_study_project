import React, { useEffect } from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getAllPlaces } from "../../redux/placesList/actions";
import usePosition from "../../hooks/usePosition";
import { CardPlace } from "..";

const Main = () => {
  const dispatch = useDispatch();
  const { allPlaces } = useSelector((state) => state.placesListReducer);
  const userPosition = usePosition();

  useEffect(() => {
    dispatch(getAllPlaces());
  }, [dispatch]);

  const distanceTo = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance.toFixed(0);
  };

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  return (
    <Container style={{ paddingTop: "8px" }} maxWidth={false}>
      <Grid container spacing={2}>
        <Grid item xs={5} style={{ maxHeight: "100%" }}>
          <Paper elevation={3}>{/* {Место для фильтров поиска} */}</Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper elevation={3}>
            {allPlaces
              .map((place) => {
                place.distance = distanceTo(
                  userPosition.latitude,
                  userPosition.longitude,
                  place.latitude_deg,
                  place.longitude_deg
                );
                return place;
              })
              .sort((place, placeNext) => place.distance - placeNext.distance)
              .map((place, index) => (
                <CardPlace {...place} key={index} />
              ))}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
