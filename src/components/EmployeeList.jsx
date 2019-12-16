import React from "react";
import { Media, ListGroup, ListGroupItem } from "reactstrap";

const EmployeeList = (props) => {
    return (
        <ListGroup>
            {props.employees && props.employees.length ? props.employees.map((singlePerson) => {
                return <ListGroupItem key={`employee-${ singlePerson.id }`} data-id={ singlePerson.id } onClick={ props.handler }>
                        <Media data-id={ singlePerson.id }>
                            <Media left data-id={ singlePerson.id }>
                                <Media object data-id={ singlePerson.id } src={ singlePerson.pic } alt="{ singlePerson.firstName }" />
                            </Media>
                            <Media body data-id={ singlePerson.id }>
                                <Media heading data-id={ singlePerson.id }>{ singlePerson.firstName } { singlePerson.lastName }</Media>
                                { singlePerson.title } {"\n"}
                                <span className="tw-handle" data-id={ singlePerson.id }>{ singlePerson.twitterId }</span>
                            </Media>
                        </Media>
                    </ListGroupItem>
            }) : <ListGroupItem>No people?.., Nervous yay ~?</ListGroupItem>}
        </ListGroup>
    );
};

export default EmployeeList;
