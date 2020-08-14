import {
  GET_DISHES_FAILURE,
  GET_DISH_NEW,
  GET_DISHES_STARTED,
  GET_DISHES_SUCCES,
  GET_DISH_BY_ID_FAILURE,
  GET_DISH_BY_ID_STARTED,
  GET_DISH_BY_ID_SUCCES,
  ADD_SELECTED_INGREDIENTS,
} from "./actionTypes";

import { api } from "../../api";
import { startSetIngredients } from "../ingredients/actions";

export const getDishes = (id) => {
  return (dispatch) => {
    dispatch(getDishesStarted());

    api
      .GET(`dishes/?format=json&place=${id}`)
      .then((res) => {
        dispatch(getDishesSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getDishesFailure(err.message));
      });
  };
};

export const getDishById = (id) => {
  return (dispatch) => {
    dispatch(getDishByIdStarted(id));

    api
      .GET(`dishes/${id}/`)
      .then((res) => {
        dispatch(getDisheByIdSucces(res.data));
        dispatch(startSetIngredients(res.data.ingredients));
      })
      .catch((err) => {
        dispatch(getDishByIdFailure(err.message));
      });
  };
};

export const putDishById = (id, dish) => {
  return (dispatch) => {
    api
      .PUT(`dishes/${id}/`, dish)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteDishById = (id) => {
  return (dispatch) => {
    api
      .DELETE(`dishes/${id}/`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const postDish = (dish) => {
  return (dispatch) => {
    api
      .POST(`dishes/`, dish)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getDishNew = () => ({
  type: GET_DISH_NEW,
});

export const addSelectedIngredients = (selectedIngredients) => ({
  type: ADD_SELECTED_INGREDIENTS,
  payload: selectedIngredients,
});

const getDishesStarted = () => ({
  type: GET_DISHES_STARTED,
});

const getDishesSuccess = (dishes) => ({
  type: GET_DISHES_SUCCES,
  payload: [...dishes],
});

const getDishesFailure = (error) => ({
  type: GET_DISHES_FAILURE,
  payload: {
    error,
  },
});

const getDishByIdStarted = () => ({
  type: GET_DISH_BY_ID_STARTED,
});

const getDisheByIdSucces = (dish) => ({
  type: GET_DISH_BY_ID_SUCCES,
  payload: dish,
});

const getDishByIdFailure = (error) => ({
  type: GET_DISH_BY_ID_FAILURE,
  payload: {
    error,
  },
});
