import  usersReducer  from "./users/reducers";
import { combineReducers, createStore } from "redux";

const reducer = combineReducers({
  users: usersReducer,
});

export default createStore(reducer);
