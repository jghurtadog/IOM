import { combineReducers } from "redux";
import noteReducer from "./noteReducers";

export default combineReducers({
  notes: noteReducer,
});
