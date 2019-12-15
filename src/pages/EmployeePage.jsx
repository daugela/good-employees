import React from "react";
import { Container, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import Header from "../components/Header.jsx";

class EmployeePage extends React.Component {

    componentDidMount() {
    }
  
    render() {
      return (
        <Container>
            <Header title="Employee"/>
            <Card>
            <CardImg top width="100%" src="#" alt="Amy" />
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

export default EmployeePage;