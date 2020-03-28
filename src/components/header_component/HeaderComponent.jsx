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
          <Navbar.Brand href="/">Datacode.in</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Link to="/home">
                <Nav.Link>
                  <FontAwesomeIcon icon={faHome} /> Home
                </Nav.Link>
              </Link>
              <Link to="/aboutus">
                <Nav.Link>
                  <FontAwesomeIcon icon={faAddressCard} /> About us
                </Nav.Link>
              </Link>
              <NavDropdown title="Technologies" id="basic-nav-dropdown">
                <Link to="/dbms_interview_question">
                  <NavDropdown.Item>DBMS</NavDropdown.Item>
                </Link>
                <Link to="/python_mcqs">
                  <NavDropdown.Item>Python MCQs</NavDropdown.Item>
                </Link>
                <Link to="/dbms_interview_question">
                  <NavDropdown.Item>Articles</NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/action/3.4">
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
