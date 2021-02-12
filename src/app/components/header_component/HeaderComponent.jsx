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
              <a href="/react-datacode/#/"><h2 id="HeadName" style={{fontFamily:'Rubik'}}>Datacode.in</h2></a>
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
      
          <nav class="navbar navbar-default"  id="navlinkbar">
               <div id="navlinks"> 
               <div id="links" className="hvr-sweep-to-top "  ><a id="ahref" href="/react-datacode/#/index_technologies"> Tutorials/Courses
 </a>
               </div>               
               <div id="links" className="hvr-sweep-to-top" ><a id="ahref" href="/react-datacode/#/index_training_certification">Training/Certification</a>

               </div>
            <div id="links" className="hvr-sweep-to-top"> <a id="ahref" href="/react-datacode/#/index_mcqs">MCQs</a></div>

               <div id="links" className="hvr-sweep-to-top"><a id="ahref" href="/react-datacode/#/index_interview_questioins">Interview Preparation</a>

              </div>
              <div id="links" className="hvr-sweep-to-top"><a id="ahref" href="/react-datacode/#/index_practice_questions">Practice Questions</a>
             </div>
              <div id="links" className="hvr-sweep-to-top"><a id="ahref" href="/react-datacode/#/index_quize_tests">Tests</a>
             </div>
<div id="links" className="hvr-sweep-to-top" ><a id="ahref" href="/react-datacode/#/index_programming_questions">Example Questions</a>
</div>
<div id="links" className="hvr-sweep-to-top"><a id="ahref" href="/react-datacode/#/index_events">Events</a>

</div>
<div id="links" className="hvr-sweep-to-top"><a id="ahref" href="/react-datacode/#/index_articles">Blogs</a>
</div>
<div id="links" className="hvr-sweep-to-top"  ><a class="ahrefcolor" href="/mock_drive" >Mock Drive</a>
</div> 

              </div>
         
          </nav>
        </header>
      </>
    );
  }
}

export default HeaderComponent;
