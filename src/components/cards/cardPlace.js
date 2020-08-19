import React from "react";

import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

const cardPlace = ({ name, image, from_hour, to_hour, address, distance }) => {
  const isOpen = (from_hour, to_hour) => {
    const currentHours = new Date().getHours();
    const currentMinutes = new Date().getMinutes();

    const to = Number(to_hour.slice(0, 2)) * 60 + Number(to_hour.slice(3, 5));
    const from =
      Number(from_hour.slice(0, 2)) * 60 + Number(from_hour.slice(3, 5));
    const current = currentHours * 60 + currentMinutes;

    return from <= current && current < to ? "Открыто" : "Закрыто";
  };

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
                {isOpen(from_hour, to_hour)}, {from_hour.slice(0, 5)}-
                {to_hour.slice(0, 5)}
              </Typography>
              <Typography variant="overline">{address}</Typography>
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

export default cardPlace;
