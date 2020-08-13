import React, { useEffect } from "react";

import {
  InputLabel,
  Button,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDishes } from "../../redux/dishesEdit/actions";
import Spinner from "../spinner/spinner";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    width: "80%",
    padding: "10px 0",
  },
  root: {
    height: "90px",
    width: "190px",
    overflowY: "scroll",
    border: "solid 1px",
    borderColor: "#3f51b5",
    padding: "0",
    marginTop: "5px",
  },
  item: {
    height: "30px",
    minWidth: "170px",
    padding: "10px",
  },
  linkButton: {
    width: "50%",
    height: "30%",
    margin: "auto",
    textDecoration: "none",
    color: "#3f51b5",
    "&:hover": {
      color: "#24306b",
      transition: "all 0.25s ease",
    },
  },
}));

const Dishes = ({ idPlace }) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { menu, menuLoading } = useSelector((state) => state.dishesEditReducer);

  useEffect(() => dispatch(getDishes(idPlace)), [dispatch, idPlace]);

  return (
    <div className={classes.wrapper}>
      {menuLoading && <Spinner />}
      {!menuLoading && (
        <>
          <div>
            <InputLabel id="dishes">Блюда</InputLabel>
            <List className={classes.root}>
              {menu.map((dish, id) => (
                <Link
                  to={`/owner/places/${idPlace}/dishes/${dish.id}`}
                  key={dish + id}
                  className={classes.linkButton}
                >
                  <ListItem button className={classes.item}>
                    <ListItemText>{dish.name}</ListItemText>
                  </ListItem>
                </Link>
              ))}
            </List>
          </div>

          <Link
            to={`/owner/places/${idPlace}/dishes/new`}
            className={classes.linkButton}
          >
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Добавить блюдо
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Dishes;
