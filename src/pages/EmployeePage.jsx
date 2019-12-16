import React from "react";
import {
    Container,Card,
    ListGroup, ListGroupItem,
    Media, CardBody,
    Badge, CardText,
    Button, Input, Row, Col
} from "reactstrap";
import Header from "../components/Header.jsx";
import Loader from "../components/Loader.jsx";
import { DECREASE_OPEN_TABS } from "../_constants"
import { directoryActions } from "../_actions";
import { connect } from "react-redux";

class EmployeePage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            newTitle: "Some new title",
            editable: false,
            employee: {},
            loading: true
        };
        this.tabClose = this.tabClose.bind(this);
        this.toggleEditable = this.toggleEditable.bind(this);
    }

    componentDidMount() {

        // Implement a loader while solving state sync delay at the same time
        setTimeout(() =>{
            let index = this.props.directory.findIndex(person => person.id === this.props.employeeId);
            this.setState({ employee: this.props.directory[index] }, () => {
                this.setState({ loading: false });
            });
        }, 500)

        // Add event listener for this tab close event
        window.addEventListener("beforeunload", this.tabClose);
    }
      
    componentWillUnmount() {
        this.props.removeTab();
        // Remove event listener
        window.removeEventListener("beforeunload", this.tabClose);
    }
      
    tabClose = event => {
        this.props.removeTab(); // Adjust redux tab count...
        var message = "Tab will be closed now. I hope you saved your work!";
        event.returnValue = message;
        return message;
    }

    toggleEditable = () => {
        this.setState((prevState) => ({
            editable: !prevState.editable
        }));
        this.props.fetchEmployees(); //Call update from api
    }

    render() {

        if(this.props.loading){
            return <Loader/>
        }
        
        return (
            <Container>
                <Header title="Employee"/>
                <Card>
                    <CardBody>
                        <Row>
                            <Col></Col>
                            <Col>
                                <ListGroup>
                                    <ListGroupItem>
                                        <Media>
                                        <Media left>
                                            <Media object src={ this.state.employee.pic } alt="{ singlePerson.firstName }" />
                                        </Media>
                                        <Media body>
                                            <Media heading>{ this.state.employee.firstName } { this.state.employee.lastName }</Media>
                                            
                                                { this.state.editable ?
                                                <>
                                                    <Input placeholder="New title here" /> {"\n"}
                                                    <Button color="success" size="sm" onClick={ this.toggleEditable }>Save changes</Button>{"\n"}
                                                </>
                                                :<>
                                                    <p style={{ marginBottom: "0.9rem" }}>{ this.state.employee.title }</p> {"\n"}
                                                    <Button color="secondary" size="sm" onClick={ this.toggleEditable }>Edit title</Button>{"\n"}
                                                </>
                                                }

                                            <span className="tw-handle">{ this.state.employee.twitterId }</span>
                                        </Media>
                                        </Media>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <CardText>Department:
                                            { this.state.employee.department } @ <Badge color="success" pill>{ this.state.employee.city }</Badge>
                                        </CardText>
                                        <CardText>Mobile: <a href="tel:{ this.state.employee.mobilePhone }">
                                            { this.state.employee.mobilePhone }</a>
                                        </CardText>
                                        <CardText>Office: <a href="tel:{ this.state.employee.mobilePhone }">
                                            { this.state.employee.officePhone }</a>
                                        </CardText>
                                        <CardText>www: <a href="{ this.state.employee.blog }">
                                            { this.state.employee.blog }</a>
                                        </CardText>
                                    </ListGroupItem>
                                </ListGroup>
                            </Col>
                            <Col></Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        );
    }
}

const mapStateToProps = (redux_state) => {
    return {
        error: redux_state.directoryReducer.error,
        loading: redux_state.directoryReducer.loading,
        tab: redux_state.directoryReducer.windows,
        directory: redux_state.directoryReducer.directory,
        employeeId: redux_state.directoryReducer.employeeId
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateTitle: (employeeId, newTitle) => dispatch(directoryActions.updateTitle(employeeId, newTitle)).then(dispatch(directoryActions.fetchDirectory())),
        fetchEmployees: () => dispatch(directoryActions.fetchDirectory()),
        removeTab: () => dispatch({ type: DECREASE_OPEN_TABS })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePage);