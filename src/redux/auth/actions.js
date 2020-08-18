import {
  POST_AUTH_FAILURE,
  POST_AUTH_STARTED,
  POST_AUTH_SUCCES,
} from "./actionTypes";

import { api } from "../../api";

export const postAuth = (authData) => {
  return (dispatch) => {
    dispatch(postAuthStarted());

    api
      .POST("/auth/token/", authData)
      .then((res) => {
        localStorage.setItem("User data", JSON.stringify(res.data));
        dispatch(postAuthSuccess());
      })
      .catch((err) => {
        dispatch(postAuthFailure(err));
      });
  };
};

export const postUser = (userData) => {
  return (dispatch) => {
    api.POST("/users/", userData).catch((err) => {
      dispatch(postAuthFailure(err));
    });
  };
};

const postAuthStarted = () => ({
  type: POST_AUTH_STARTED,
});

const postAuthSuccess = () => ({
  type: POST_AUTH_SUCCES,
});

const postAuthFailure = (err) => ({
  type: POST_AUTH_FAILURE,
  payload: err,
});
