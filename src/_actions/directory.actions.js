import { directoryServices }  from "../_services";
import { FETCH_EMPLOYEES_START, FETCH_EMPLOYEES_SUCCESS, FETCH_EMPLOYEES_ERROR } from "../_constants";

export const directoryActions = {
    fetchDirectory, updateTitle
};

function fetchDirectory(){

    return dispatch => directoryServices.fetchDirectory()

        .then(res => {

            dispatch({ type: FETCH_EMPLOYEES_START });

            if (res.status === 200) {

                //Save data to redux state by calling dispatch action
                //dispatch({type: 'LOGIN_SUCCESSFUL', data: res.data });

                //console.log( "Fetched METALS! Count: " + res.data.length );
                //TODO: Check consistency of the response before saving to redux

                //console.log(res);

                dispatch({ type: FETCH_EMPLOYEES_SUCCESS, data: res.data });
                return res.data;

            } else {

                //console.log("Metal Backend ERROR");
                //console.log(res.data);

                dispatch({ type: FETCH_EMPLOYEES_ERROR, data: res.body });
                throw res.body;

            }
        })
}

function updateTitle(id, title){

    return dispatch => directoryServices.updateTitle(id, title)

        .then(res => {

            dispatch({ type: FETCH_EMPLOYEES_START });

            // WARNING! Create (POST) requests return status code 201 !!!
            if (res.status === 201) {

                //Save data to redux state by calling dispatch action
                // dispatch({type: 'LOGIN_SUCCESSFUL', data: res.data });

                //console.log( "Fetched METALS! Count: " + res.data.length );
                //TODO: Check consistency of the response before saving to redux

                dispatch({ type: FETCH_EMPLOYEES_SUCCESS, data: res.data });
                return res.data;

            } else {

                //console.log("Metal Backend ERROR");
                //console.log(res.data);

                dispatch({ type: FETCH_EMPLOYEES_ERROR, data: res.body });
                throw res.body;

            }
        })
}