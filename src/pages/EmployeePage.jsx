import React from "react";
import { Container, Card, ListGroup, ListGroupItem, Media, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import Header from "../components/Header.jsx";
import { DECREASE_OPEN_TABS } from "../_constants"
import { directoryActions } from "../_actions";
import { connect } from "react-redux";

class EmployeePage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            employeeId: this.props.employeeId,
            newTitle: "Some new title"
        };
        this.tabClose = this.tabClose.bind(this);
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

    render() {
        return (
            <Container>
                <Header title="Employee"/>
                <Card>
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
                    </ListGroup>
                    <CardBody>
                        <CardTitle onClick={ this.closeCurrent }>Amy Jones</CardTitle>
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
        error: redux_state.directoryReducer.error,
        loading: redux_state.directoryReducer.loading,
        tab: redux_state.directoryReducer.windows
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateTitle: (employeeId, newTitle) => dispatch(directoryActions.updateTitle(employeeId, newTitle)).then(dispatch(directoryActions.fetchDirectory())),
        removeTab: () => dispatch({ type: DECREASE_OPEN_TABS })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePage);