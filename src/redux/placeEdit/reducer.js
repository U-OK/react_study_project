import {
  GET_PLACE_FAILURE,
  GET_PLACE_STARTED,
  GET_PLACE_SUCCES,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  currentPlace: {
    name: "",
    image: "",
    from_hour: "",
    to_hour: "",
    address: "",
  },
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PLACE_STARTED: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_PLACE_SUCCES: {
      return {
        ...state,
        loading: false,
        currentPlace: action.payload,
      };
    }
    case GET_PLACE_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
}
