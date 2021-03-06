import {
  GET_PLACE_FAILURE,
  GET_PLACE_STARTED,
  GET_PLACE_SUCCES,
  GET_PLACE_NEW,
} from "./actionTypes";

import { api } from "../../api";

export const getPlaceById = (id) => {
  return (dispatch) => {
    dispatch(getPlaceStarted());

    api
      .GET(`places/${id}`)
      .then((res) => {
        dispatch(getPlaceSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getPlaceFailure(err.message));
      });
  };
};

export const putPlaceById = (id, place) => {
  return (dispatch) => {
    api
      .PUT(`places/${id}/`, place)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deletePlaceById = (id) => {
  return (dispatch) => {
    api
      .DELETE(`places/${id}/`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const postPlace = (place) => {
  return (dispatch) => {
    api
      .POST(`places/`, place)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getPlaceStarted = () => ({
  type: GET_PLACE_STARTED,
});

const getPlaceSuccess = (currentPlace) => ({
  type: GET_PLACE_SUCCES,
  payload: currentPlace,
});

const getPlaceFailure = (error) => ({
  type: GET_PLACE_FAILURE,
  payload: {
    error,
  },
});

export const getPlaceNew = () => ({
  type: GET_PLACE_NEW,
});
