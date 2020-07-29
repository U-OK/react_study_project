import {
  GET_PLACES_FAILURE,
  GET_PLACES_STARTED,
  GET_PLACES_SUCCES,
} from "./actionTypes";

import axios from "axios";

export const getPlaces = () => {
  return (dispatch) => {
    dispatch(getPlacesStarted());

    axios
      .get(`http://37.140.197.3/api/places/`)
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
