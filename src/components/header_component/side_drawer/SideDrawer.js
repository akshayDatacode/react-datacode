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
          <div id="userid">
          <img id="avatarimg"
                     src="https://i.postimg.cc/Lsr6Chgw/icon.png"
                                alt="avatar"
                              />
                              <div id="username">
                                Hello Akshay!
                                </div>
            </div>
          <ul>
            <li>

              <a href="/react-datacode/#/home">Home</a>
              <hr
                style={{
                  backgroundColor: "white",
                  width: "120px",
                  marginLeft: "-3px",
                  marginTop: "-1px",
                  marginBottom: "-5px",
                }}
              />
            </li>

            <li>

              <NavDropdown
              
                title={

                  <span className="my-auto" id="dropcolor">
                    Learn
                  </span>
                }
              >
                <NavDropdown.Item
                  id="items"
                  href="/react-datacode/#/index_technologies"
                >
                  <FontAwesomeIcon
                    icon={faChalkboardTeacher}
                    className="mr-2"
                  />
                  Tutorials/Courses
                </NavDropdown.Item>
                <NavDropdown.Item
                  id="items"
                  href="/react-datacode/#/index_training_certification"
                >
                  <FontAwesomeIcon icon={faAward} className="mr-2" />
                  Training/Certification
                </NavDropdown.Item>
                <NavDropdown.Item
                  id="items"
                  href="/react-datacode/#/index_mcqs"
                >
                  <FontAwesomeIcon icon={faTasks} className="mr-2" />
                  Programming MCQs
                </NavDropdown.Item>
                <NavDropdown.Item
                  id="items"
                  href="/react-datacode/#/index_code_challange"
                >
                  <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
                  Code Challange
                </NavDropdown.Item>

                <NavDropdown.Item
                  id="items"
                  href="/react-datacode/#/index_interview_questioins"
                >
                  <FontAwesomeIcon icon={faUserTie} className="mr-2" />
                  Interview Preparation
                </NavDropdown.Item>
                <NavDropdown.Item
                  id="items"
                  href="/react-datacode/#/index_practice_questions"
                >
                  <FontAwesomeIcon icon={faCode} className="mr-2" />
                  Practice Questions
                </NavDropdown.Item>
                <NavDropdown.Item
                  id="items"
                  href="/react-datacode/#/index_quize_tests"
                >
                  <FontAwesomeIcon icon={faFlask} className="mr-2" />
                  Quiz Tests
                </NavDropdown.Item>
                <NavDropdown.Item
                  id="items"
                  href="/react-datacode/#/index_programming_questions"
                >
                  <FontAwesomeIcon icon={faFileCode} className="mr-2" />
                  Example Questions
                </NavDropdown.Item>
              </NavDropdown>
              <hr
                style={{
                  backgroundColor: "white",
                  width: "120px",
                  marginLeft: "-3px",
                  marginTop: "43px",
                  marginBottom: "5px",
                }}
              />
            </li>
            <li>
              <a href="/react-datacode/#/index_articles">Blogs</a>
              <hr
                style={{
                  backgroundColor: "white",
                  width: "120px",
                  marginLeft: "-3px",
                  marginTop: "3px",
                  marginBottom: "5px",
                }}
              />
            </li>
            <li>
              <a href="/react-datacode/#/index_events">Events</a>
              <hr
                style={{
                  backgroundColor: "white",
                  width: "120px",
                  marginLeft: "-3px",
                  marginTop: "3px",
                  marginBottom: "5px",
                }}
              />
            </li>
            <li>
              <a href="/react-datacode/#/index_events">About</a>
              <hr
                style={{
                  backgroundColor: "white",
                  width: "120px",
                  marginLeft: "-3px",
                  marginTop: "3px",
                  marginBottom: "5px",
                }}
              />
            </li>
            <li>
              <a href="/react-datacode/#/index_events">Login/Signup</a>
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
