import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/styles/styles.css";

//Redux store with initialisation
import { Provider } from "react-redux";
import { store } from "./_helpers";
import { initStateWithPrevTab } from "redux-state-sync";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import EmployeePage from "./pages/EmployeePage";

// Fetch store from other tabs if exists
initStateWithPrevTab(store);

//store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact render={ props => <HomePage {...props} />}/>
                <Route path="/login" exact render={ props => <LoginPage {...props} />}/>
                <Route path="/employee" exact render={ props => <EmployeePage {...props} />}/>
            </Switch>
        </BrowserRouter>
    </Provider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
