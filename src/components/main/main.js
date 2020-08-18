import React, { useEffect } from "react";
import {
  Container,
  Grid,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getAllPlaces } from "../../redux/placesList/actions";

const Main = () => {
  const dispatch = useDispatch();
  const { allPlaces } = useSelector((state) => state.placesListReducer);

  useEffect(() => dispatch(getAllPlaces()), [dispatch]);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Paper elevation={3}>Тут будет 9 задание</Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper elevation={3}>
            {allPlaces.map((place) => (
              <CardPlace {...place} />
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

const CardPlace = ({
  name,
  image,
  from_hour,
  to_hour,
  address,
  latitude_deg,
  longitude_deg,
}) => {
  const isOpen = (from_hour, to_hour) => {
    const currentHours = new Date().getHours();
    const currentMinutes = new Date().getMinutes();

    const to = Number(to_hour.slice(0, 2)) * 60 + Number(to_hour.slice(3, 5));
    const from =
      Number(from_hour.slice(0, 2)) * 60 + Number(from_hour.slice(3, 5));
    const current = currentHours * 60 + currentMinutes;

    console.log(from, current, to);
  };
  isOpen(from_hour, to_hour);
  // console.log(
  //   name,
  //   image,
  //   from_hour,
  //   to_hour,
  //   address,
  //   latitude_deg,
  //   longitude_deg
  // );
  return (
    <Button style={{ width: "100%" }}>
      <Card style={{ width: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <Typography component="h2" variant="h6">
                {name}
              </Typography>
              <Typography variant="body1">
                Открыто-закрыто, {from_hour.slice(0, 5)}-{to_hour.slice(0, 5)}
              </Typography>
              <Typography variant="overline">{address}</Typography>
              <Typography variant="caption">Сколько км от нас</Typography>
            </CardContent>
          </Grid>
          <Grid item xs={4}>
            <CardMedia
              style={{ height: "100%" }}
              image={`${image}`}
              title="Paella dish"
            />
          </Grid>
        </Grid>
      </Card>
    </Button>
  );
};

export default Main;
