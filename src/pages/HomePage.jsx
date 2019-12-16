import React from "react";
import { Container } from "reactstrap";
import Header from "../components/Header.jsx";
import Loader from "../components/Loader.jsx";
import EmployeeList from "../components/EmployeeList.jsx";
import { INCREASE_OPEN_TABS } from "../_constants";
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

        //console.log(this.props);
        this.props.fetchEmployees();
    }

    employeeClick = (event, employeeId) => {
        if(this.props.tabs < process.env.REACT_APP_MAX_TABS){
            this.props.addTab();
            window.open("/employee", "_blank");
        }else{
            alert("Cannot open more than " + process.env.REACT_APP_MAX_TABS + " tabs!");
        }
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
    //console.log(redux_state.directoryReducer);
    return {
        error: redux_state.directoryReducer.error,
        loading: redux_state.directoryReducer.loading,
        directory: redux_state.directoryReducer.directory,
        tabs: redux_state.directoryReducer.tabs
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchEmployees: () => dispatch(directoryActions.fetchDirectory()),
        addTab: () => dispatch({ type: INCREASE_OPEN_TABS })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);