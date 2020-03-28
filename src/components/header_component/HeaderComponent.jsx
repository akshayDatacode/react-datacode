import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faHome, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
class HeaderComponent extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar fixed="top" bg="dark" expand="md" variant="dark ">
          <Navbar.Brand href="react-datacode.in/">Datacode.in</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="react-datacode.in/home">
                <FontAwesomeIcon icon={faHome} /> Home
              </Nav.Link>

              <Nav.Link href="react-datacode.in/aboutus">
                <FontAwesomeIcon icon={faAddressCard} /> About us
              </Nav.Link>

              <NavDropdown title="Technologies" id="basic-nav-dropdown">
                <Nav.Link href="react-datacode.in/dbms_interview_question">
                  <NavDropdown.Item>DBMS</NavDropdown.Item>
                </Nav.Link>
                <Nav.Link href="react-datacode.in/python_mcqs">
                  <NavDropdown.Item>Python MCQs</NavDropdown.Item>
                </Nav.Link>
                <Nav.Link href="react-datacode.in/dbms_interview_question">
                  <NavDropdown.Item>Articles</NavDropdown.Item>
                </Nav.Link>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/action/3.90">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default HeaderComponent;
