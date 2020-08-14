import {
  GET_INGREDIENTS_STARTED,
  GET_INGREDIENTS_SUCCES,
  GET_INGREDIENTS_FAILURE,
  POST_IN_CURRENT_INGREDIENTS,
  DELETE_IN_CURRENT_INGREDIENTS,
  START_SET_INGREDIENTS,
} from "./actionTypes";

const initialState = {
  ingredientsLoading: false,
  ingredients: [],
  currentIngredients: [],
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_INGREDIENTS_STARTED: {
      return {
        ...state,
        ingredientsLoading: true,
      };
    }
    case GET_INGREDIENTS_SUCCES: {
      return {
        ...state,
        ingredients: action.payload,
        ingredientsLoading: false,
      };
    }
    case GET_INGREDIENTS_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case POST_IN_CURRENT_INGREDIENTS: {
      return {
        ...state,
        currentIngredients: [...state.currentIngredients, action.payload],
      };
    }
    case DELETE_IN_CURRENT_INGREDIENTS: {
      return {
        ...state,
        currentIngredients: state.currentIngredients.filter(
          (ingredient) => ingredient.id !== action.payload.id
        ),
      };
    }
    case START_SET_INGREDIENTS: {
      return {
        ...state,
        currentIngredients: [...action.payload],
      };
    }
    default:
      return state;
  }
}
