import {
  GET_INGREDIENTS_STARTED,
  GET_INGREDIENTS_SUCCES,
  GET_INGREDIENTS_FAILURE,
  POST_IN_CURRENT_INGREDIENTS,
  DELETE_IN_CURRENT_INGREDIENTS,
  START_SET_INGREDIENTS,
} from "./actionTypes";

import { api } from "../../api";

export const getIngredients = () => {
  return (dispatch) => {
    dispatch(getIngretientsStarted());

    api
      .GET("ingredients")
      .then((res) => {
        dispatch(getIngredientsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getIngredientsFailure(err));
      });
  };
};

export const postIngredients = (newIngredient) => {
  return (dispatch) => {
    api
      .POST("ingredients/", newIngredient)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const startSetIngredients = (ingredients) => ({
  type: START_SET_INGREDIENTS,
  payload: ingredients,
});

export const postInCurrentIngredients = (ingredient) => ({
  type: POST_IN_CURRENT_INGREDIENTS,
  payload: ingredient,
});

export const deleteInCurrentIngredients = (deleteIngredient) => ({
  type: DELETE_IN_CURRENT_INGREDIENTS,
  payload: deleteIngredient,
});

const getIngretientsStarted = () => ({
  type: GET_INGREDIENTS_STARTED,
});

const getIngredientsSuccess = (ingredients) => ({
  type: GET_INGREDIENTS_SUCCES,
  payload: ingredients,
});

const getIngredientsFailure = (error) => ({
  type: GET_INGREDIENTS_FAILURE,
  payload: error,
});
