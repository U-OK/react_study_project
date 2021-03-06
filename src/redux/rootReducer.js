import { combineReducers } from "redux";
import placesListReducer from "./placesList/reducer";
import placeEditReducer from "./placeEdit/reducer";
import dishesEditReducer from "./dishesEdit/reducer";
import ingredientsReducer from "./ingredients/reducer";
import authReducer from "./auth/reducer";

export default combineReducers({
  placesListReducer,
  placeEditReducer,
  dishesEditReducer,
  ingredientsReducer,
  authReducer,
});
