import {
  GET_PLACES_FAILURE,
  GET_PLACES_STARTED,
  GET_PLACES_SUCCES,
} from "./actionTypes";

import { api } from "../../api";

export const getPlaces = () => {
  return (dispatch) => {
    dispatch(getPlacesStarted());

    api
      .GET("places")
      .then((res) => {
        dispatch(getPlacesSuccess(res.data));
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
