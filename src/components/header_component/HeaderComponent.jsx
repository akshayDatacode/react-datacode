import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fab,
  faMeetup,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faAddressCard,
  faClipboardList,
  faNewspaper,
  faTools,
  faLaptopCode,
  faUserAstronaut,
  faUserTie,
  faUsersCog,
  faFileCode,
  faCheckCircle,
  faPills,
  faThList,
  faChalkboardTeacher,
  faTasks,
  faBookOpen,
  faFlask,
  faCode,
  faCertificate,
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
          expand="lg"
          variant="dark"
          className="m-0 p-0"
          style={{ backgroundColor: "#264767" }}
        >
          <Navbar.Brand
            collapseOnSelect="false"
            aria-controls="responsive-navbar-nav"
          >
            <Nav.Link
              href="/react-datacode/#/"
              className="text-white h3 p-0 ml-3 mr-0 mt-0 mb-0 "
            >
              Datacode.in
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="mr-1 border-0"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto ml-2">
              <Nav.Link
                href="/react-datacode/#/home"
                style={{ color: "#04FFD5" }}
              >
                <FontAwesomeIcon icon={faHome} /> Home
              </Nav.Link>

              <NavDropdown
                title={
                  <span className="my-auto" style={{ color: "#04FFD5" }}>
                    <FontAwesomeIcon icon={faBookOpen} /> Learn
                  </span>
                }
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="/react-datacode/#/index_technologies">
                  <FontAwesomeIcon
                    icon={faChalkboardTeacher}
                    className="mr-2"
                  />
                  Tutorials & Courses
                </NavDropdown.Item>
                <NavDropdown.Item href="/react-datacode/#/index_mcqs">
                  <FontAwesomeIcon icon={faTasks} className="mr-2" />
                  Programming MCQs
                </NavDropdown.Item>
                <NavDropdown.Item href="/react-datacode/#/index_code_challange">
                  <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
                  Code Challange
                </NavDropdown.Item>

                <NavDropdown.Item href="/react-datacode/#/index_interview_questioins">
                  <FontAwesomeIcon icon={faUserTie} className="mr-2" />
                  Interview Preparation
                </NavDropdown.Item>
                <NavDropdown.Item href="/react-datacode/#/index_practice_questions">
                  <FontAwesomeIcon icon={faCode} className="mr-2" />
                  Programming Practice Questions
                </NavDropdown.Item>
                <NavDropdown.Item href="/react-datacode/#/index_quize_tests">
                  <FontAwesomeIcon icon={faFlask} className="mr-2" />
                  Programming Quiz Tests
                </NavDropdown.Item>
                <NavDropdown.Item href="/react-datacode/#/index_programming_questions">
                  <FontAwesomeIcon icon={faFileCode} className="mr-2" />
                  Programming Example Questions
                </NavDropdown.Item>
                <NavDropdown.Item href="/react-datacode/#/index_learning_platforms">
                  <FontAwesomeIcon icon={faCertificate} className="mr-2" />
                  Online Learning Paltforms
                </NavDropdown.Item>
                <NavDropdown.Item href="/react-datacode/#/index_traning_certification">
                  <FontAwesomeIcon icon={faCertificate} className="mr-2" />
                  Training & Certification
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                href="/react-datacode/#/index_articles"
                style={{ color: "#04FFD5" }}
              >
                <FontAwesomeIcon icon={faNewspaper} /> Blogs
              </Nav.Link>
              <Nav.Link
                href="/react-datacode/#/index_events"
                style={{ color: "#04FFD5" }}
              >
                <FontAwesomeIcon icon={faClipboardList} /> Events
              </Nav.Link>
            </Nav>
            <NavDropdown.Divider />
            <Nav>
              <Nav.Item className="ml-2 ">
                <a
                  href="https://www.facebook.com/Datacode.in"
                  className="text-white mr-3"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a
                  href="https://www.instagram.com/datacode.in/"
                  className="text-white mr-3"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a
                  href="https://www.facebook.com/Datacode.in"
                  className="text-white mr-3"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default HeaderComponent;
