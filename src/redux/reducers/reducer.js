import filterReducer from "./filterReducer";
import contactReducer from "./contactReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  filter: filterReducer,
  contacts: contactReducer,
});

export default reducer;
