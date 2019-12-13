import { AUTHENTICATION_START, AUTHENTICATION_FAIL, AUTHENTICATION_ERROR, AUTHENTICATION_SUCCESS, LOGOUT } from "../_constants";

const initialState = {
    loading: false,
    //username: localStorage.getItem(CACHED_USERNAME),
    username: "None",
    authenticated: false,
    errors: {}
};

function authReducer(state=initialState, action) {
  switch (action.type) {

    case AUTHENTICATION_START:
      return {...state, loading: true };

    case AUTHENTICATION_SUCCESS:
      //localStorage.setItem( CACHED_API_KEY, action.data.token );
      //localStorage.setItem( CACHED_USERNAME, action.data.username );
      return {...state, ...action.data, authenticated: true, loading: false, errors: null};

    case AUTHENTICATION_FAIL:
      return {...state, loading: false, errors: { message: "Incorrect password" } };

    case AUTHENTICATION_ERROR:
      return {...state, loading: false, errors: { message: "Some problem with the backend" } };

    case LOGOUT:
      //localStorage.removeItem(CACHED_API_KEY);
      //localStorage.removeItem(CACHED_USERNAME);
      return {...state, errors: action.data, token: null, user: null, authenticated: false, loading: false};

    //Remove below
    case 'USER_DATA':
      return { items: action.user };

    case 'USER_LOADED':
      return {...state, authenticated: true, loading: false, user: action.user };

    case 'LOGIN_SUCCESSFUL':
      return {...state, ...action.data, authenticated: true, loading: false, errors: null };

    default:
      return state;
  }
}

export default authReducer;