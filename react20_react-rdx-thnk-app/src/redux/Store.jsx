import { legacy_createStore, applyMiddleware } from "redux";
import { createReducer } from "./Reducer";
import { thunk } from "redux-thunk";

export const store = legacy_createStore(createReducer,applyMiddleware(thunk));