import {
  GET_PLACES_FAILURE,
  GET_PLACES_SUCCES,
  GET_PLACES_STARTED,
  GET_ALL_PLACES_SUCCESS,
} from "./actionTypes";

const initialState = {
  listPlacesLoading: false,
  places: [],
  allPlaces: [],
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
    case GET_ALL_PLACES_SUCCESS: {
      return {
        ...state,
        listPlacesLoading: false,
        allPlaces: action.payload,
      };
    }
    default:
      return state;
  }
}
