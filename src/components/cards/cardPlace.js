import React from "react";

import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { useLocation } from "react-router-dom";

const CardPlace = ({
  name,
  image,
  from_hour,
  to_hour,
  address,
  distance,
  average_price,
}) => {
  const location = useLocation();

  const checkIsOpen = (from_hour, to_hour) => {
    const currentHours = new Date().getHours();
    const currentMinutes = new Date().getMinutes();

    const to = Number(to_hour.slice(0, 2)) * 60 + Number(to_hour.slice(3, 5));
    const from =
      Number(from_hour.slice(0, 2)) * 60 + Number(from_hour.slice(3, 5));
    const current = currentHours * 60 + currentMinutes;

    return from <= current && current < to;
  };

  const isOpen = checkIsOpen(from_hour, to_hour);

  const checkParams = (name, average_price, isOpen) => {
    if (location.search) {
      const params = new URLSearchParams(location.search);

      const searchName = params.get("name");
      const searchPrice = params.get("price");
      const searchIsOpen = params.get("isOpen");

      if (
        searchName &&
        !name.toLowerCase().includes(searchName.toLowerCase())
      ) {
        return false;
      }

      if (searchPrice < average_price) {
        return false;
      }

      if (searchIsOpen === "true" && !isOpen) {
        return false;
      }

      return true;
    } else return true;
  };

  if (!checkParams(name, average_price, isOpen)) {
    return <></>;
  }

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
                {isOpen ? "Открыто" : "Закрыто"}, {from_hour.slice(0, 5)}-
                {to_hour.slice(0, 5)}
              </Typography>
              <Typography variant="overline">{address}</Typography>
              <Typography variant="overline">
                Средний чек: {average_price.toFixed(0)} руб.
              </Typography>
              <Typography variant="caption">{distance} км от нас</Typography>
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

export default CardPlace;
