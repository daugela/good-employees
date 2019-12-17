import { CACHED_DIRECTORY } from '../_constants';
import {
    FETCH_EMPLOYEES_START,
    FETCH_EMPLOYEES_SUCCESS,
    FETCH_EMPLOYEES_ERROR,
    INCREASE_OPEN_TABS,
    DECREASE_OPEN_TABS,
    UPDATE_EMPLOYEE_SUCCESS,
    SELECT_EMPLOYEE } from '../_constants';

const initialState = {
    loading: true,
    error: null,
    directory: [],
    tabs: 0,
    employeeId: 9
};

function directoryReducer(state=initialState, action) {
    switch (action.type) {

        case FETCH_EMPLOYEES_START:

            return {
                ...state,
                loading: true // Just pass some loader status (might be useful in UI)
            };

        case UPDATE_EMPLOYEE_SUCCESS:

            return {
                ...state,
                loading: false,
                error: action.error
            };

        case FETCH_EMPLOYEES_SUCCESS:

            //TODO: Check if payload is valid before saving to local storage
            localStorage.setItem(CACHED_DIRECTORY, JSON.stringify(action.data));

            return {
                ...state,
                loading: false,
                directory: action.data // Add employees to redux state :)
            };

        case FETCH_EMPLOYEES_ERROR:

            return {
                ...state,
                loading: false,
                error: action.error
            };
        
        case INCREASE_OPEN_TABS:
            // Do some sanity checks on tab count..
            if(state.tabs > parseInt(process.env.REACT_APP_MAX_TABS)){
                return {
                    ...state,
                    tabs: parseInt(process.env.REACT_APP_MAX_TABS)
                };
            }else{
                return {
                    ...state,
                    tabs: state.tabs + 1
                };
            }

        case DECREASE_OPEN_TABS:
            if(state.tabs < 1){
                return {
                    ...state,
                    tabs: 0
                };
            }else{
                return {
                    ...state,
                    tabs: state.tabs - 1 
                };
            }

        case SELECT_EMPLOYEE:
                return {
                    ...state,
                    employeeId: parseInt(action.id)
                };
        default:
            return state;
  }
}

export default directoryReducer;