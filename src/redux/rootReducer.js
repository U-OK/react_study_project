import { combineReducers } from "redux";
import placesListReducer from "./placesList/reducer";
import placeEditReducer from "./placeEdit/reducer";

export default combineReducers({ placesListReducer, placeEditReducer });
