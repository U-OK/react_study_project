import React, { useEffect, useState } from "react";
import {
  makeStyles,
  Button,
  Checkbox,
  FormControl,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";
import {
  getIngredients,
  postInCurrentIngredients,
  deleteInCurrentIngredients,
} from "../../redux/ingredients/actions";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedIngredients } from "../../redux/dishesEdit/actions";
import { Modal, IngredientNew } from "..";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "400px",
    width: "100%",
    overflowY: "scroll",
    border: "solid 1px",
    borderColor: "#3f51b5",
  },
  item: {
    height: "30px",
    minWidth: "170px",
    padding: "10px",
  },
  selectedItem: {
    backgroundColor: "#24306b",
    color: "red",
  },
  buttonBlock: {
    display: "flex",
    paddingTop: "10px",
    justifyContent: "space-between",
  },
}));

const IngredientMenu = ({ onClose }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { ingredients, currentIngredients } = useSelector(
    (state) => state.ingredientsReducer
  );

  useEffect(() => dispatch(getIngredients()), [dispatch]);

  const selectItem = (selectIngredient) => {
    currentIngredients.find(
      (ingredient) => ingredient.id === selectIngredient.id
    )
      ? dispatch(deleteInCurrentIngredients(selectIngredient))
      : dispatch(postInCurrentIngredients(selectIngredient));
  };

  const checkStartPosition = (selectIngredient) => {
    return currentIngredients.find(
      (ingredient) => ingredient.id === selectIngredient.id
    )
      ? true
      : false;
  };

  const sumbitSelectedItems = () => {
    onClose();
    dispatch(addSelectedIngredients(currentIngredients));
  };

  return (
    <div>
      <FormControl className={classes.root}>
        <FormGroup>
          {ingredients.map((ingredient, id) => (
            <FormControlLabel
              control={
                <Checkbox
                  onClick={() => selectItem(ingredient)}
                  checked={checkStartPosition(ingredient)}
                />
              }
              label={ingredient.name}
              className={classes.item}
              key={ingredient + id}
            />
          ))}
        </FormGroup>
      </FormControl>
      <div className={classes.buttonBlock}>
        <Button
          variant="contained"
          color="primary"
          onClick={sumbitSelectedItems}
        >
          Добавить выбранные ингредиенты
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsOpenModal(true)}
        >
          Создать новый ингредиент
        </Button>
        <Modal
          title={"Создать ингредиент"}
          isOpen={isOpenModal}
          onClose={() => setIsOpenModal(false)}
          component={IngredientNew}
        />
      </div>
    </div>
  );
};

export default IngredientMenu;
