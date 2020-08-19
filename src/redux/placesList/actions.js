import {
  GET_PLACES_FAILURE,
  GET_PLACES_STARTED,
  GET_PLACES_SUCCES,
  GET_ALL_PLACES_SUCCESS,
} from "./actionTypes";

import { api } from "../../api";

export const getPlaces = () => {
  return (dispatch) => {
    dispatch(getPlacesStarted());

    const {
      user: { pk },
    } = JSON.parse(localStorage.getItem("User data"));

    api
      .GET(`places/?format=json&owner=${pk}`)
      .then((res) => {
        dispatch(getPlacesSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getPlacesFailure(err.message));
      });
  };
};

export const getAllPlaces = () => {
  return (dispatch) => {
    dispatch(getPlacesStarted());

    api
      .GET("places")
      .then((res) => {
        dispatch(getAllPlacesSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getPlacesFailure(err.message));
      });
  };
};

const getPlacesStarted = () => ({
  type: GET_PLACES_STARTED,
});

const getPlacesSuccess = (places) => ({
  type: GET_PLACES_SUCCES,
  payload: [...places],
});

const getPlacesFailure = (error) => ({
  type: GET_PLACES_FAILURE,
  payload: {
    error,
  },
});

const getAllPlacesSuccess = (allPlaces) => ({
  type: GET_ALL_PLACES_SUCCESS,
  payload: [...allPlaces],
});
