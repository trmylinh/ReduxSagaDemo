import { combineReducers } from "redux";
import { counterReducers } from "./CounterReducers";
export const rootReducers = combineReducers({
    counter: counterReducers
})