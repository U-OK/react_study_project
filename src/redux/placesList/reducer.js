import {
  GET_PLACES_FAILURE,
  GET_PLACES_SUCCES,
  GET_PLACES_STARTED,
} from "./actionTypes";

const initialState = {
  listPlacesLoading: false,
  places: [],
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PLACES_STARTED: {
      return {
        ...state,
        listPlacesLoading: true,
      };
    }
    case GET_PLACES_SUCCES: {
      return {
        ...state,
        listPlacesLoading: false,
        places: action.payload,
      };
    }
    case GET_PLACES_FAILURE: {
      return {
        ...state,
        listPlacesLoading: false,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
}
