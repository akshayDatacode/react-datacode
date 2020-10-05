import React, { Component } from "react";
import "../../assets/css/ToolBar.css";
import "../../assets/css/Header.css";

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
  faAward,
  faSignOutAlt,
  faVideoSlash,
  faVideo,
  faUniversity,
  faInfoCircle,
  faSplotch,
  faComments,
  faSignInAlt
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import fire from "../../config/fire";
import DrawerToggleButton from "./side_drawer/DrawerToggleButton";

class HeaderComponent extends Component {
  state = {};

  // logout() {
  //   fire.auth().signOut();
  // }

  render() {
    return (
      <>
        <header className="toolbar fixed-top" id='tophead'>
          <nav className="toolbar_navigation ">
            <div className="toolbar_toggle-button">
              <DrawerToggleButton clickButton={this.props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo" id="leftsection"
            >
               <img id="logoimg"
                     src="https://i.postimg.cc/Lsr6Chgw/icon.png"
                                alt="avatar"
                              />
              <a href="/react-datacode/#/"><h2 id="HeadName" style={{fontFamily:'Fira Sans'}}>Datacode.in</h2></a>
    </div>
    <br/>
    <a href="/react-datacode/#/"><h2 id="tagline" style={{fontFamily:"Merriweather"}}>A Beginner's Learning Portal</h2></a>

            {/* This is for Logo and Nev Spaccing */}
            <div className="logo-nev-spacer"  />
            <div className="toolbar_navigation-items" >
              <ul >
                <li>
                  <a href="/react-datacode/#/home">
                    <FontAwesomeIcon icon={faHome} className="mr-2" />
                    Home
                  </a>
                </li>
                {/* <li>
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
                </li> */}
                <li>
                  <a href="/react-datacode/#/index_articles">
                    <FontAwesomeIcon icon={faInfoCircle} /> About
                  </a>
                </li>
                <li>
                  <a href="/react-datacode/#/index_events">
                    <FontAwesomeIcon icon={faSignInAlt} /> Login/Signup
                  </a>
                </li>
                {/* <li>
                  <a href="#footer" onClick={this.logout}>
                    Log Out
                  </a>
                </li> */}
              </ul>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default HeaderComponent;
