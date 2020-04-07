import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faMeetup } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faAddressCard,
  faClipboardList,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
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
              <Nav.Link href="/react-datacode/#/index_articles">
                <FontAwesomeIcon icon={faNewspaper} /> Blogs
              </Nav.Link>

              <NavDropdown title="Learning" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/react-datacode/#/index_technologies">
                  Technologies
                </NavDropdown.Item>

                <NavDropdown.Item href="/react-datacode/#/index_code_challange">
                  Code Challange
                </NavDropdown.Item>

                <NavDropdown.Item href="/react-datacode/#/index_interview_questioins">
                  Placment Preparation
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="/react-datacode/#/index_quize_tests">
                  Programming Tests
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/react-datacode/#/index_events">
                <FontAwesomeIcon icon={faClipboardList} /> Events
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default HeaderComponent;
