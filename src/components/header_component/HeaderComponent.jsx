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
        <Navbar
          collapseOnSelect
          fixed="top"
          bg="dark"
          expand="lg"
          variant="dark "
        >
          <Navbar.Brand
            collapseOnSelect="false"
            aria-controls="responsive-navbar-nav"
          >
            <Nav.Link href="/react-datacode/#/" className="text-white h3 p-0">
              Datacode.in
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/react-datacode/#/home">
                <FontAwesomeIcon icon={faHome} /> Home
              </Nav.Link>
              <a href="/aboutus">
                <FontAwesomeIcon icon={faAddressCard} /> About us
              </a>
              <NavDropdown title="Technologies" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/react-datacode/#/dbms_interview_question">
                  DBMS
                </NavDropdown.Item>

                <NavDropdown.Item href="/react-datacode/#/python_mcqs">
                  Python MCQs
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="/index_articles">Articles</Link>
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
