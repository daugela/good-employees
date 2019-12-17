import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

const Search = (props) => {
    return (
        <div className="sticky-top" style={ {top: "58px"} }>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Find people:</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Name, surname, email, title etc.." value={ props.query } onChange={ props.filter }/>
            </InputGroup>
        </div>
    );
};

export default Search;