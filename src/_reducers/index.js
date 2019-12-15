import { combineReducers } from 'redux';
import directoryReducer from "./directory.reducer";
import authReducer from "./auth.reducer";

const rootReducer = combineReducers({
  authReducer, directoryReducer
});

export default rootReducer;