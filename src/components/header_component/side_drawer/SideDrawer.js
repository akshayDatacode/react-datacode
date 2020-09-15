import React, { Component } from "react";
import "../../../assets/css/SideDrawer.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAddressBook,
  faQuestion,
  faCheckSquare,
  faUsers,
  faMap,
  faComments,
  faAddressCard,
  faClipboardCheck,
  faDoorOpen,
  faInfoCircle,
  faSplotch,
  faBookOpen,
  faChalkboardTeacher,
  faTasks,
  faLaptopCode,
  faUserTie,
  faCode,
  faFlask,
  faFileCode,
  faNewspaper,
  faClipboardList,
  faAward,
} from "@fortawesome/free-solid-svg-icons";

class SideDrawer extends Component {
  state = {};
  render() {
    let drawerClasses = "side-drawer";
    if (this.props.show) {
      drawerClasses = "side-drawer open";
    }
    return (
      <>
        <nav className={drawerClasses}>
          <ul>
            <li>
              <a href="/react-datacode/#/home">
                <FontAwesomeIcon icon={faHome} className="mr-2" />
                Home
              </a>
            </li>
            <li>
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
                <NavDropdown.Item href="/react-datacode/#/index_training_certification">
                  <FontAwesomeIcon icon={faAward} className="mr-2" />
                  Training & Certification
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
              </NavDropdown>
            </li>
            <li>
              <a href="/react-datacode/#/index_articles">
                <FontAwesomeIcon icon={faNewspaper} /> Blogs
              </a>
            </li>
            <li>
              <a href="/react-datacode/#/index_events">
                <FontAwesomeIcon icon={faClipboardList} /> Events/Contests
              </a>
            </li>
            {/* <li>
                  <a href="#footer" onClick={this.logout}>
                    Log Out
                  </a>
                </li> */}
          </ul>
        </nav>
      </>
    );
  }
}

export default SideDrawer;
