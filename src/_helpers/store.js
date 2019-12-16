import { createStore, applyMiddleware } from "redux";
import { createStateSyncMiddleware } from "redux-state-sync";
// Extends redux actions
import thunk from "redux-thunk";
import rootReducer from "../_reducers";

//export const store = createStore(rootReducer, applyMiddleware(thunk));

const config = {
    whitelist: [
        "FETCH_EMPLOYEES_START",
        "FETCH_EMPLOYEES_SUCCESS",
        "FETCH_EMPLOYEES_ERROR",
        "DECREASE_OPEN_TABS"
    ], // Synced actions
    channel: "employee_tabs",
    initiateWithState: false
};

const middlewares = [thunk, createStateSyncMiddleware(config)];

export const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));