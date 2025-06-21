// Redux/Store.jsx
import { legacy_createStore, applyMiddleware } from "redux";

import userReducer from "./Reducer";
import { thunk } from "redux-thunk";

const store = legacy_createStore(userReducer, applyMiddleware(thunk));

export default store;

