import React, { useEffect } from "react";
import {
  Container,
  Grid,
  Paper,
  Slider,
  Typography,
  Switch,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getAllPlaces } from "../../redux/placesList/actions";
import usePosition from "../../hooks/usePosition";
import { CardPlace, FieldText } from "..";
import { Formik, Form, Field } from "formik";
import { useHistory } from "react-router-dom";
import { distanceTo } from "../../utilities/distanceTo";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
    margin: "auto",
    padding: "15px",
  },
}));

const Main = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { allPlaces } = useSelector((state) => state.placesListReducer);
  const userPosition = usePosition();
  const history = useHistory();
  console.log(allPlaces);

  useEffect(() => {
    dispatch(getAllPlaces());
  }, [dispatch]);

  const handleSubmit = (values) => {
    history.push(
      `/?name=${values.name}&price=${values.price}&open=${values.isOpen}`
    );
  };

  return (
    <Container maxWidth={false} style={{ height: "90%" }}>
      <Grid container spacing={2} style={{ height: "100%" }}>
        <Grid item xs={5}>
          <Paper elevation={3}>
            <Formik
              enableReinitialize
              initialValues={{
                name: "",
                price: 500,
                isOpen: false,
              }}
              onSubmit={(values) => handleSubmit(values)}
            >
              {({ values, submitForm, setFieldValue }) => (
                <Form className={classes.form}>
                  <Field
                    component={FieldText}
                    name="name"
                    label="Название заведения"
                    value={values.name}
                  />
                  <Typography id="price-slider" gutterBottom>
                    Средний чек заведения
                  </Typography>
                  <Slider
                    aria-labelledby="price-slider"
                    valueLabelDisplay="auto"
                    defaultValue={500}
                    step={100}
                    min={100}
                    max={5000}
                    onChange={(event, value) => setFieldValue("price", value)}
                  />
                  <Typography gutterBottom>Только открытые</Typography>
                  <Switch
                    color="primary"
                    onChange={(event, value) => setFieldValue("isOpen", value)}
                  />
                  <Button type="submit">Поиск</Button>
                </Form>
              )}
            </Formik>
          </Paper>
        </Grid>
        <Grid item xs={7} style={{ height: "100%" }}>
          <Paper elevation={3} style={{ overflowY: "scroll", height: "100%" }}>
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
