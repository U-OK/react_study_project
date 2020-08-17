import {
  GET_PLACE_FAILURE,
  GET_PLACE_STARTED,
  GET_PLACE_SUCCES,
  GET_PLACE_NEW,
} from "./actionTypes";

const initialState = {
  placeLoading: false,
  currentPlace: {
    name: "Введите название",
    image: "",
    from_hour: "08:00:00",
    to_hour: "21:00:00",
    address: "Введите адрес",
  },
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PLACE_STARTED: {
      return {
        ...state,
        placeLoading: true,
      };
    }
    case GET_PLACE_SUCCES: {
      return {
        ...state,
        placeLoading: false,
        currentPlace: action.payload,
      };
    }
    case GET_PLACE_FAILURE: {
      return {
        ...state,
        placeLoading: false,
        error: action.payload.error,
      };
    }
    case GET_PLACE_NEW: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
}
