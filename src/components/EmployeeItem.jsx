import React from "react"
import { ListGroupItem, Media } from "reactstrap"

const EmployeeItem = (props) => {
  return (
    <ListGroupItem data-id={ props.person.id } onClick={ props.handler }>
        <Media data-id={ props.person.id }>
            <Media left data-id={ props.person.id }>
                <Media object data-id={ props.person.id } src={ props.person.pic } alt="{ props.person.firstName }" />
            </Media>
            <Media body data-id={ props.person.id }>
                <Media heading data-id={ props.person.id }>{ props.person.firstName } { props.person.lastName }</Media>
                { props.person.title } {"\n"}
                <span className="tw-handle" data-id={ props.person.id }>{ props.person.twitterId }</span>
            </Media>
        </Media>
    </ListGroupItem>
  );
};

export default EmployeeItem