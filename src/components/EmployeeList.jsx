import React from "react"
import { ListGroup, ListGroupItem } from "reactstrap"
import EmployeeItem from "../components/EmployeeItem.jsx"

const EmployeeList = (props) => {

    if(props.query.length > 0){
        return (
            <ListGroup>
                {props.employees && props.employees.length ? props.employees.map((singlePerson) => {
                    if(props.filter.indexOf(singlePerson.id) > -1){
                        return <EmployeeItem key={`employee-${ singlePerson.id }`} person={ singlePerson } handler={ props.handler }/>
                    }else{
                        return null;
                    }
                }) : <ListGroupItem>No people?.., Nervous yay ~?</ListGroupItem>}
            </ListGroup>
        );
    }

    return (
        <ListGroup>
            {props.employees && props.employees.length ? props.employees.map((singlePerson) => {
                return <EmployeeItem key={`employee-${ singlePerson.id }`} person={ singlePerson } handler={ props.handler }/>
            }) : <ListGroupItem>No people?.., Nervous yay ~?</ListGroupItem>}
        </ListGroup>
    );

};

export default EmployeeList