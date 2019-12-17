import React from "react";
import { Container } from "reactstrap";
import Header from "../components/Header.jsx";
import Loader from "../components/Loader.jsx";
import Search from "../components/Search.jsx";
import EmployeeList from "../components/EmployeeList.jsx";
import { INCREASE_OPEN_TABS, SELECT_EMPLOYEE } from "../_constants";
import { directoryActions } from "../_actions";
import { connect } from "react-redux";

class HomePage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            filtered: [],
            query: ""
        };
        this.employeeClick = this.employeeClick.bind(this);
        this.filterSearch = this.filterSearch.bind(this);
    }

    componentDidMount() {
        this.props.fetchDirectory().then(() => {
            this.setState({ filtered: this.props.directory });
        })
    }

    employeeClick = (event) => {
        // Do some sanity check on the attribute required
        if(event.target.getAttribute("data-id").match(/^[0-9]+$/)){
            this.props.selectEmployee(event.target.getAttribute("data-id"));
            if(this.props.tabs < parseInt(process.env.REACT_APP_MAX_TABS)){
                this.props.addTab();
                window.open("/employee", "_blank");
            }else{
                // TODO: Make some ~nicer popup/modal in the future..
                alert("Cannot open more than " + process.env.REACT_APP_MAX_TABS + " tabs!");
            }
        }else{
            console.error("Some bad entity was clicked...");
        }
    }

    filterSearch = (event) => {

        if(!event.target.value || event.target.value === " " || event.target.value === ""){
            this.setState({ filtered: [], query: "" });

        }else {
            let match = [];
            let query = event.target.value.toLowerCase();
            match = this.props.directory.filter(
                person => person["firstName"].toLowerCase().includes(query) ||
                    person["title"].toLowerCase().includes(query) ||
                    person["lastName"].toLowerCase().includes(query) ||
                    person["email"].toLowerCase().includes(query)
            );

            let filtered = [];
            match.forEach((item) => {
                filtered.push(item.id)
            });

            this.setState({ filtered, query });
        }
    };

    render() {

        if(this.props.loading){
            return <Loader/>
        }
        return (
            <Container>
                <Header title="Employee directory"/>
                <Search filter={ this.filterSearch } query={ this.state.query }/>
                <EmployeeList employees={ this.props.directory } filter={ this.state.filtered } query={ this.state.query } handler={ this.employeeClick } />
            </Container>
        );
    }
}

const mapStateToProps = (redux_state) => {
    return {
        error: redux_state.directoryReducer.error,
        loading: redux_state.directoryReducer.loading,
        directory: redux_state.directoryReducer.directory,
        tabs: redux_state.directoryReducer.tabs
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDirectory: () => dispatch(directoryActions.fetchDirectory()),
        selectEmployee: (id) => dispatch({ type: SELECT_EMPLOYEE, id }),
        addTab: () => dispatch({ type: INCREASE_OPEN_TABS })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)