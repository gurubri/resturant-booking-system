import { combineReducers } from "redux";
import resturant from "./resturant_reducer";
import user from "./user_reducer";
import book from "./booking_reducer";

const rootReducer = combineReducers({
  resturant,
  user,
  book,
});

export default rootReducer;
