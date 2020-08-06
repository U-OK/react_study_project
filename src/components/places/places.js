import React, { useEffect } from "react";
import { Switch, Link, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getPlaces } from "../../redux/places/actions";

import { Title, Spinner } from "..";

import {
  Button,
  makeStyles,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import EditPlaces from "../editPlaces/editPlaces";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: "270px",
  },
  drawerPaper: {
    width: "270px",
  },
  drawerContainer: {
    flexGrow: 1,
    overflowY: "scroll",
  },
  button: {
    backgroundColor: "#3f51b5",
    borderRadius: 0,
    color: "white",
    textDecoration: "none",
    "&:hover": {
      color: "#ffc841",
      backgroundColor: "#3f51b5",
      transition: "all 0.25s ease",
    },
  },
}));

const Places = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { places, isLoading } = useSelector((state) => state.placesReducer);

  useEffect(() => dispatch(getPlaces()), [dispatch]);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Drawer
          variant="permanent"
          className={classes.drawer}
          classes={{ paper: classes.drawerPaper }}
        >
          <Toolbar />

          <Title withBack>Мои заведения</Title>

          <List className={classes.drawerContainer}>
            {isLoading && <Spinner />}

            {!isLoading &&
              places.map((place, index) => (
                <ListItem button key={place + index}>
                  <ListItemAvatar>
                    <Avatar alt="Фотография заведения" src={place.image} />
                  </ListItemAvatar>
                  <ListItemText>{place.name}</ListItemText>
                </ListItem>
              ))}
          </List>

          <Link to="/owner/places/1">
            <Button variant="contained" fullWidth className={classes.button}>
              Добавить заведение
            </Button>
          </Link>
        </Drawer>

        <div className={classes.side}>
          <Switch>
            <Route path="/owner/places/1" component={EditPlaces} />
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Places;
