import { AUTH_HEADER } from "../_helpers";

export const directoryServices = {
    fetchDirectory, updateTitle
};

async function fetchDirectory() {

    const requestOptions = {
        method: "GET", // GET method invoked
        headers: AUTH_HEADER
    };

    const res = await fetch(process.env.REACT_APP_EMPLOYEE_API, requestOptions);
    if (res.status < 500) {
        return res.json().then(data => {
            return { status: res.status, data };
        });
    } else {
        throw res;
    }
}

async function updateTitle(id, title) {

    const requestOptions = {
        method: "POST", // POST method invoked
        headers: AUTH_HEADER,
        body: JSON.stringify({ id: id, title: title })
    };

    const res = await fetch(process.env.REACT_APP_EMPLOYEE_API, requestOptions);
    if (res.status < 500) {
        return res.json().then(data => {
            return { status: res.status, data };
        });
    } else {
        throw res;
    }
}