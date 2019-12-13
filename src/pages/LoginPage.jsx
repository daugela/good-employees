import React from "react";
import { Container, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

class EmployeePage extends React.Component {

    componentDidMount() {
    }
  
    render() {
        return (
        <Container>
            <h2>It would be nice if you authenticated yourself:)</h2>
            <Form className="form">
            <Col>
                <FormGroup>
                <Label for="username">Username</Label>
                <Input type="email" name="email" id="username" placeholder="some@gmail.com"/>
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                <Label for="userpassword">Password</Label>
                <Input type="password" name="password" id="userpassword" placeholder="********"/>
                </FormGroup>
            </Col>
            <Button>Login</Button>
            </Form>
        </Container>
        );
  }
}

export default EmployeePage;