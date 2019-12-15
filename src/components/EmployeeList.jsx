import React from "react";
import { Media, ListGroup, ListGroupItem } from "reactstrap";

const EmployeeList = (props) => {
    return (
        <>
        <ListGroup>
            {props.employees && props.employees.length ? props.employees.map((singlePerson, index) => {

                return <ListGroupItem key={`employee-${ singlePerson.id }`} onClick={ props.handler }>
                        <Media>
                        <Media left>
                            <Media object src={ singlePerson.pic } alt="{ singlePerson.firstName }" />
                        </Media>
                        <Media body>
                            <Media heading>{ singlePerson.firstName } { singlePerson.lastName }</Media>
                            { singlePerson.title } {"\n"}
                            <span className="tw-handle">{ singlePerson.twitterId }</span>
                        </Media>
                    </Media>
                    </ListGroupItem>

            }) : <ListGroupItem>No people?.., Nervous yay ~?</ListGroupItem>}
        </ListGroup>
        </>
    );
};

export default EmployeeList;
