import { combineReducers } from 'redux';
import directoryReducer from "./directory.reducer";
import authReducer from "./auth.reducer";
import { withReduxStateSync } from "redux-state-sync";

const rootReducer = combineReducers({
  authReducer, directoryReducer
});

//export default rootReducer;
export default withReduxStateSync(rootReducer);