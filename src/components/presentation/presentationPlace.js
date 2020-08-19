import React, { useEffect } from "react";
import { Paper, makeStyles, Grid, Container } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import CardPlace from "../cards/cardPlace";
import CardDish from "../cards/cardDish";
import { useSelector, useDispatch } from "react-redux";
import { getDishes } from "../../redux/dishesEdit/actions";
import { Map } from "..";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexGrow: 1,
    height: "100%",
    padding: "10px 8px",
  },
  spinnerContainer: {
    margin: "auto",
  },
  paper: {
    width: "100%",
  },
  gridContainer: {
    padding: "10px",
  },
  menu: {
    display: "flex",
    overflowY: "scroll",
  },
}));

const PresentationPlace = () => {
  const classes = useStyles();
  const location = useLocation();

  const dispatch = useDispatch();
  const { menu } = useSelector((state) => state.dishesEditReducer);
  console.log(menu);
  useEffect(() => dispatch(getDishes(location.state.id)), [dispatch]);

  return (
    <Container className={classes.container}>
      <Paper elevation={3} className={classes.paper}>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={8}>
            <Grid item xs={12}>
              <CardPlace {...location.state} />
            </Grid>
            <Grid item xs={12} className={classes.menu}>
              {menu.map((menuItem, index) => (
                <CardDish {...menuItem} key={menuItem + index} />
              ))}
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Map />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default PresentationPlace;
