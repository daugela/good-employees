import React from "react";
import {
    Container,Card,
    ListGroup, ListGroupItem,
    Media, CardBody, CardTitle,
    CardSubtitle, CardText,
    Button, Input, Row, Col
} from "reactstrap";
import Header from "../components/Header.jsx";
import { DECREASE_OPEN_TABS } from "../_constants"
import { directoryActions } from "../_actions";
import { connect } from "react-redux";

class EmployeePage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            employeeId: this.props.employeeId,
            newTitle: "Some new title",
            editable: false
        };
        this.tabClose = this.tabClose.bind(this);
        this.toggleEditable = this.toggleEditable.bind(this);
    }

    componentDidMount() {
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
                                            <Media object src="http://46.101.202.234/static/employees/Julie_Taylor.jpg" alt="{ singlePerson.firstName }" />
                                        </Media>
                                        <Media body>
                                            <Media heading>Amy Jones</Media>
                                            Office lady {"\n"}
                                            <span className="tw-handle">@handler</span>
                                        </Media>
                                        </Media>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        { this.state.editable ?
                                            <>
                                            <Input placeholder="New title here" />
                                            <Button color="success" onClick={ this.toggleEditable }>Save changes</Button>
                                            </>
                                        : <>
                                            <CardSubtitle>Subtitle</CardSubtitle>
                                            <Button color="secondary" onClick={ this.toggleEditable }>Edit title</Button>
                                            </>
                                        }
                                        <CardText>Some quick example text content.</CardText>
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
        tab: redux_state.directoryReducer.windows
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateTitle: (employeeId, newTitle) => dispatch(directoryActions.updateTitle(employeeId, newTitle)).then(dispatch(directoryActions.fetchDirectory())),
        fetchEmployees: () => dispatch(directoryActions.fetchDirectory()),
        removeTab: () => dispatch({ type: DECREASE_OPEN_TABS }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePage);