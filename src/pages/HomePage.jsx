import React from "react";
import { Container, Spinner } from "reactstrap";

import Header from "../components/Header.jsx";
import Loader from "../components/Loader.jsx";
import EmployeeList from "../components/EmployeeList.jsx"

import { directoryActions } from "../_actions";
import { connect } from "react-redux";

class HomePage extends React.Component {

    constructor(props){
        super(props);
        //this.state = {
        //    directory: []
        //};
        this.employeeClick = this.employeeClick.bind(this);
    }

    componentDidMount() {

        console.log(this.props);
        this.props.fetchEmployees();
    }

    employeeClick = (event, employeeId) => {
        //event.preventDefault();
        console.log(employeeId);
        //let win = window.open("http://localhost:3000/employee", "_blank");
    }

    render() {

        if(this.props.loading){
            return <Loader/>
        }

        return (
            <Container>

                <Header title="Employee directory"/>
                <EmployeeList employees={ this.props.directory } handler={ this.employeeClick } />

            </Container>
        );
    }
}

const mapStateToProps = (redux_state) => {
    return {
        error: redux_state.directoryReducer.error,
        loading: redux_state.directoryReducer.loading,
        directory: redux_state.directoryReducer.directory
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchEmployees: () => dispatch(directoryActions.fetchDirectory())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);