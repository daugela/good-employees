import React from "react";
import Header from "../components/Header.jsx";
import { Spinner, Container } from "reactstrap";

const Loader = (props) => {
    return (
        <Container>
            <Header title="Loading"/>
            <Spinner type="grow" color="danger" />
        </Container>
    );
};

export default Loader;