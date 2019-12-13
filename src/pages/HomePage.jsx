import React from "react";
import { Container, ListGroup, ListGroupItem, Media, ListGroupItemHeading, ListGroupItemText } from "reactstrap";
import Header from "../components/Header.jsx";
import amy from "../assets/Amy_Jones.jpg";

class HomePage extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
        <Container>
            <Header/>
            <ListGroup>
            <ListGroupItem>
                <Media>
                    <Media left href="#">
                        <Media object src={ amy } alt="Amy" />
                    </Media>
                    <Media body>
                        <Media heading>Amy1</Media>
                         Some text
                    </Media>
                </Media>
            </ListGroupItem>
            <ListGroupItem>
                <Media>
                    <Media left href="#">
                        <Media object src={ amy } alt="Amy" />
                    </Media>
                    <Media body>
                        <Media heading>Amy2</Media>
                         Some text
                    </Media>
                </Media>
            </ListGroupItem>
            <ListGroupItem>
                <Media>
                    <Media left href="#">
                        <Media object src={ amy } alt="Amy" />
                    </Media>
                    <Media body>
                        <Media heading>Amy3</Media>
                         Some text
                    </Media>
                </Media>
            </ListGroupItem>
        </ListGroup>
      </Container>
    );
  }
}
export default HomePage;