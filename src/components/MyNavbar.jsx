import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

class MyNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Bookstore</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Link to="/FormValidation">
                <Nav.Link href="#Registration">Registration</Nav.Link>
              </Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(MyNavbar);
