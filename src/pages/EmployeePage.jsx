import React from "react";
import { Container, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import Header from "../components/Header.jsx";

import { directoryActions } from "../_actions";
import { connect } from "react-redux";

class EmployeePage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            employeeId: 1,
            newTitle: "Some new title"
        };
    }

    componentDidMount() {
        console.log();
    }

    render() {
        return (
            <Container>
                <Header title="Employee"/>
                <Card>
                    <CardImg top width="100%" src="http://46.101.202.234/static/employees/Julie_Taylor.jpg" alt="Amy" />
                    <CardBody>
                        <CardTitle>Amy Jones</CardTitle>
                        <CardSubtitle>Subtitle</CardSubtitle>
                        <CardText>Some quick example text content.</CardText>
                    </CardBody>
                </Card>
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
        updateTitle: (employeeId, newTitle) => dispatch(directoryActions.updateTitle(employeeId, newTitle)).then(dispatch(directoryActions.fetchDirectory()))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePage);