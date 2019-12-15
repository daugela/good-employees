import React from "react";
import { Container } from "reactstrap";

import Header from "../components/Header.jsx";
import EmployeeList from "../components/EmployeeList.jsx"

import { directoryActions } from "../_actions";
import { connect } from "react-redux";


class HomePage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            employees: []
        };
    }

    componentDidMount() {
        this.props.fetchEmployees();
    }

    render() {
        return (
            <Container>

                <Header title="Employee directory"/>
                <EmployeeList employees={ this.props.employees }/>

            </Container>
        );
    }
}

const mapStateToProps = (redux_state) => {
    return {
        error: redux_state.error,
        employees: redux_state.directoryReducer.employees,
        loading: redux_state.loading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchEmployees: () => dispatch(directoryActions.fetchDirectory()),
        updateTitle: (employeeId, newTitle) => dispatch(directoryActions.updateTitle(employeeId, newTitle)).then(dispatch(directoryActions.fetchDirectory()))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);