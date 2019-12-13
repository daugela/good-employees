import React from "react";
import { Container, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import Header from "../components/Header.jsx";
import amy from "../assets/Amy_Jones.jpg";

class EmployeePage extends React.Component {

    componentDidMount() {
    }
  
    render() {
      return (
        <Container>
            <Header/>
            <Card>
            <CardImg top width="100%" src={ amy } alt="Amy" />
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