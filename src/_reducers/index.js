import { combineReducers } from 'redux';
import employeesReducer from "./employees.reducer";
import authReducer from "./auth.reducer";

const rootReducer = combineReducers({
  authReducer, employeesReducer
});

export default rootReducer;