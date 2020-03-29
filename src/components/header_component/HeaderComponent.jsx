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
          <Navbar.Brand href="/react-datacode/#/">Datacode.in</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/react-datacode/#/home">
                <FontAwesomeIcon icon={faHome} /> Home
              </Nav.Link>
              <a href="/aboutus">
                <FontAwesomeIcon icon={faAddressCard} /> About us
              </a>
              <NavDropdown title="Technologies" id="basic-nav-dropdown">
                <NavDropdown.Item href="/react-datacode/#/dbms_interview_question">
                  DBMS
                </NavDropdown.Item>

                <NavDropdown.Item href="/react-datacode/#/python_mcqs">
                  Python MCQs
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="/articles">Articles</Link>
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="/action/3.100">
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
