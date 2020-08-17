import React, { useState } from "react";

import {
  InputLabel,
  Button,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Modal } from "..";
import IngredientMenu from "./ingredientMenu";

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
  button: {
    width: "50%",
    height: "30%",
    margin: "auto",
  },
  linkButton: {
    textDecoration: "none",
    color: "#3f51b5",
    "&:hover": {
      color: "#24306b",
      transition: "all 0.25s ease",
    },
  },
}));

const Ingredients = ({ ingredients }) => {
  const classes = useStyles();

  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className={classes.wrapper}>
      <div>
        <InputLabel id="ingredients">Ингредиенты</InputLabel>
        <List className={classes.root}>
          {ingredients.map((ingredient, id) => (
            <ListItem button className={classes.item} key={ingredient + id}>
              <ListItemText>{ingredient.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
      <Button
        onClick={() => setIsOpenModal(true)}
        className={classes.button}
        variant="contained"
        color="primary"
      >
        Изменить ингредиенты
      </Button>
      <Modal
        title={"Добавить ингредиент"}
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        component={IngredientMenu}
      />
    </div>
  );
};

export default Ingredients;
