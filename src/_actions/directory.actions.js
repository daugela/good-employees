import { directoryServices }  from "../_services";
import { FETCH_EMPLOYEES_START, FETCH_EMPLOYEES_SUCCESS, FETCH_EMPLOYEES_ERROR, UPDATE_EMPLOYEE_SUCCESS } from "../_constants";

export const directoryActions = {
    fetchDirectory, updateEmployee
};

function fetchDirectory(){

    return dispatch => directoryServices.fetchDirectory()

        .then(res => {

            dispatch({ type: FETCH_EMPLOYEES_START });

            if (res.status === 200) {
                
                dispatch({ type: FETCH_EMPLOYEES_SUCCESS, data: res.data });
                return res.data;

            } else {

                dispatch({ type: FETCH_EMPLOYEES_ERROR, data: res.body });
                throw res.body;

            }
        })
}

function updateEmployee(person){

    return dispatch => directoryServices.updateEmployee(person)

        .then(res => {

            dispatch({ type: FETCH_EMPLOYEES_START });

            // WARNING! Create (POST) requests return status code 201 !!!
            if (res.status === 201) {

                dispatch({ type: UPDATE_EMPLOYEE_SUCCESS, data: res.data });
                return res.data;

            } else {

                dispatch({ type: FETCH_EMPLOYEES_ERROR, data: res.body });
                throw res.body;

            }
        })
}
