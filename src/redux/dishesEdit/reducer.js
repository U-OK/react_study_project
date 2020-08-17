import {
  GET_DISHES_FAILURE,
  GET_DISH_NEW,
  GET_DISHES_STARTED,
  GET_DISHES_SUCCES,
  GET_DISH_BY_ID_SUCCES,
  GET_DISH_BY_ID_STARTED,
  GET_DISH_BY_ID_FAILURE,
  ADD_SELECTED_INGREDIENTS,
} from "./actionTypes";

const initialState = {
  menuLoading: false,
  menu: [],
  errorMenu: null,
  dishLoading: false,
  dish: {
    name: "Введите название блюда",
    photo: "",
    ingredients: [],
    calories: "0",
    price: "0",
  },
  errorDish: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DISHES_STARTED: {
      return {
        ...state,
        menuLoading: true,
      };
    }
    case GET_DISHES_SUCCES: {
      return {
        ...state,
        menuLoading: false,
        menu: action.payload,
      };
    }
    case GET_DISHES_FAILURE: {
      return {
        ...state,
        menuLoading: false,
        error: action.payload.error,
      };
    }

    case GET_DISH_BY_ID_STARTED: {
      return {
        ...state,
        dishLoading: true,
      };
    }
    case GET_DISH_BY_ID_SUCCES: {
      return {
        ...state,
        dishLoading: false,
        dish: action.payload,
      };
    }
    case GET_DISH_BY_ID_FAILURE: {
      return {
        ...state,
        dishLoading: false,
        error: action.payload.error,
      };
    }

    case GET_DISH_NEW: {
      return {
        ...state,
        dishLoading: initialState.dishLoading,
        dish: initialState.dish,
        errorDish: initialState.errorDish,
      };
    }
    case ADD_SELECTED_INGREDIENTS: {
      return {
        ...state,
        dish: {
          ...state.dish,
          ingredients: [...action.payload],
        },
      };
    }
    default:
      return state;
  }
}
