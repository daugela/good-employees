import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../_reducers";

//Add thunk middleware to extend redux actions
export const store = createStore(rootReducer, applyMiddleware(thunk));