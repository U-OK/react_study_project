import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PlacesideRouter from "../../route/PlacesideRouter";
import { getPlaces } from "../../redux/placesList/actions";

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
    overflowX: "hidden",
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
  linkButton: {
    textDecoration: "none",
    color: "#3f51b5",
    "&:hover": {
      color: "#24306b",
      transition: "all 0.25s ease",
    },
  },
  sideBlock: {
    flexGrow: 1,
    paddingTop: "10px",
  },
}));

const Places = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { places, listPlacesLoading } = useSelector(
    (state) => state.placesListReducer
  );

  useEffect(() => dispatch(getPlaces()), [dispatch]);

  return (
    <>
      <div className={classes.root}>
        <Drawer
          variant="permanent"
          className={classes.drawer}
          classes={{ paper: classes.drawerPaper }}
        >
          <Toolbar />

          <Title withBack>Мои заведения</Title>

          <List className={classes.drawerContainer}>
            {listPlacesLoading && <Spinner />}

            {!listPlacesLoading &&
              places.map((place, index) => (
                <Link
                  to={`/owner/places/${place.id}`}
                  key={place + index}
                  className={classes.linkButton}
                >
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar alt="Фотография заведения" src={place.image} />
                    </ListItemAvatar>
                    <ListItemText>{place.name}</ListItemText>
                  </ListItem>
                </Link>
              ))}
          </List>

          <Link to={`/owner/places/new`}>
            <Button variant="contained" fullWidth className={classes.button}>
              Добавить заведение
            </Button>
          </Link>
        </Drawer>

        {/* <div className={classes.sideBlock}> */}
        {/* <PlacesideRouter /> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default Places;
