import { directoryServices }  from "../_services";
import { FETCH_EMPLOYEES_START, FETCH_EMPLOYEES_SUCCESS, FETCH_EMPLOYEES_ERROR } from "../_constants";

export const directoryActions = {
    fetchDirectory, updateTitle
};

function fetchDirectory(){

    return dispatch => directoryServices.fetchDirectory()

        .then(res => {

            dispatch({ type: FETCH_EMPLOYEES_START });

            console.log(res.status);

            if (res.status === 200) {
                
                dispatch({ type: FETCH_EMPLOYEES_SUCCESS, data: res.data });
                return res.data;

            } else {

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

                dispatch({ type: FETCH_EMPLOYEES_SUCCESS, data: res.data });
                return res.data;

            } else {

                dispatch({ type: FETCH_EMPLOYEES_ERROR, data: res.body });
                throw res.body;

            }
        })
}
