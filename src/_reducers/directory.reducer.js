import { CACHED_DIRECTORY } from '../_constants';
import {
    FETCH_EMPLOYEES_START,
    FETCH_EMPLOYEES_SUCCESS,
    FETCH_EMPLOYEES_ERROR,
    INCREASE_OPEN_TABS,
    DECREASE_OPEN_TABS } from '../_constants';

const initialState = {
    loading: true,
    error: null,
    directory: [],
    tabs: 0
};

function directoryReducer(state=initialState, action) {
    switch (action.type) {

        case FETCH_EMPLOYEES_START:

            return {
                ...state,
                loading: true // Just pass some loader status (might be useful in UI)
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
            return {
                ...state,
                tabs: state.tabs + 1
            };

        case DECREASE_OPEN_TABS:
            return {
                ...state,
                tabs: state.tabs - 1 
            };

        default:
            return state;
  }
}

export default directoryReducer;