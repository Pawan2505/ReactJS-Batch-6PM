import { createStore } from "redux";
import { counterReducer } from "./Reducer";

export const store = createStore(counterReducer);