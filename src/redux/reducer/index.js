import { combineReducers } from "redux";
import { counterReducer } from "./counter";
import { userReducer } from "./user";

export const rootReducer = combineReducers({ counterReducer, userReducer });
