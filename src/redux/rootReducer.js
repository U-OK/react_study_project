import { combineReducers } from "redux";
import placesListReducer from "./placesList/reducer";
import placeEditReducer from "./placeEdit/reducer";
import dishesEditReducer from "./dishesEdit/reducer";

export default combineReducers({
  placesListReducer,
  placeEditReducer,
  dishesEditReducer,
});
