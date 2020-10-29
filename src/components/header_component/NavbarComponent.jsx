// import React, { Component } from "react";
// import "../../assets/css/ToolBar.css";
// import "../../assets/css/Navbar.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   fab,
//   faMeetup,
//   faFacebook,
//   faInstagram,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";
// import {
//   faHome,
//   faAddressCard,
//   faClipboardList,
//   faNewspaper,
//   faTools,
//   faLaptopCode,
//   faUserAstronaut,
//   faUserTie,
//   faUsersCog,
//   faFileCode,
//   faCheckCircle,
//   faPills,
//   faThList,
//   faChalkboardTeacher,
//   faTasks,
//   faBookOpen,
//   faFlask,
//   faCode,
//   faCertificate,
//   faAward,
//   faSignOutAlt,
//   faVideoSlash,
//   faVideo,
//   faUniversity,
//   faInfoCircle,
//   faSplotch,
//   faComments,
//   faSignInAlt
// } from "@fortawesome/free-solid-svg-icons";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// import fire from "../../config/fire";
// import DrawerToggleButton from "./side_drawer/DrawerToggleButton";

// class NavbarComponent extends Component {
//   state = {};

//   // logout() {
//   //   fire.auth().signOut();
//   // }

//   render() {
//     return (
//       <>


// {/* 
//             <div id="top" >
            
//             <div id="navlink">
//   <div id="links" className="hvr-sweep-to-top"  ><a id="ahref" href="/react-datacode/#/index_technologies"> Tutorials/Courses
// </a>
//               </div>
//               <div id="links" className="hvr-sweep-to-top" ><a id="ahref" href="/react-datacode/#/index_training_certification">Training/Certification</a>

//               </div>
//               <div id="links" className="hvr-sweep-to-top"> <a id="ahref" href="/react-datacode/#/index_mcqs">MCQs</a></div>

//               <div id="links" className="hvr-sweep-to-top"><a id="ahref" href="/react-datacode/#/index_interview_questioins">Interview Preparation</a>

//               </div>
//               <div id="links" className="hvr-sweep-to-top"><a id="ahref" href="/react-datacode/#/index_practice_questions">Practice Questions</a>
//               </div>
//               <div id="links" className="hvr-sweep-to-top"><a id="ahref" href="/react-datacode/#/index_quize_tests">Tests</a>
//               </div>
//               <div id="links" className="hvr-sweep-to-top" ><a id="ahref" href="/react-datacode/#/index_programming_questions">Example Questions</a>

//               </div>
// </div>
//    </div> */}

//           {/* <div id="navlink">
//             <div id="links" ><a id="ahref" href="/react-datacode/#/index_technologies"> Tutorials/Courses
// </a>
//               </div>
//               <div id="links" ><a id="ahref" href="/react-datacode/#/index_training_certification">Training/Certification</a>

//               </div>
//               <div id="links" > <a id="ahref" href="/react-datacode/#/index_mcqs">Programming MCQs</a></div>

//               <div id="links" ><a id="ahref" href="/react-datacode/#/index_interview_questioins">Interview Preparation</a>

//               </div>
//               <div id="links" ><a id="ahref" href="/react-datacode/#/index_practice_questions">Practice Questions</a>
//               </div>
//               <div id="links" ><a id="ahref" href="/react-datacode/#/index_quize_tests">Quiz Tests</a>
//               </div>
//               <div id="links" ><a id="ahref" href="/react-datacode/#/index_programming_questions">Example Questions</a>

//               </div>
//             </div> */}

//             {/* This is for Logo and Nev Spaccing */}
//               {/* <ul > */}
               
//                 {/* <li>
//                   <NavDropdown
//                     title={
//                       <span className="my-auto" style={{ color: "#04FFD5" }}>
//                         <FontAwesomeIcon icon={faBookOpen} /> Learn
//                   </span>
//                     }
//                     id="collasible-nav-dropdown"
//                   >
//                     <NavDropdown.Item href="/react-datacode/#/index_technologies">
//                       <FontAwesomeIcon
//                         icon={faChalkboardTeacher}
//                         className="mr-2"
//                       />
//                     Tutorials & Courses
//                     </NavDropdown.Item>
//                     <NavDropdown.Item href="/react-datacode/#/index_training_certification">
//                       <FontAwesomeIcon icon={faAward} className="mr-2" />
//                       Training & Certification
//                     </NavDropdown.Item>
//                     <NavDropdown.Item href="/react-datacode/#/index_mcqs">
//                       <FontAwesomeIcon icon={faTasks} className="mr-2" />
//                       Programming MCQs
//                     </NavDropdown.Item>
//                     <NavDropdown.Item href="/react-datacode/#/index_code_challange">
//                       <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
//                       Code Challange
//                     </NavDropdown.Item>

//                     <NavDropdown.Item href="/react-datacode/#/index_interview_questioins">
//                       <FontAwesomeIcon icon={faUserTie} className="mr-2" />
//                       Interview Preparation
//                     </NavDropdown.Item>
//                     <NavDropdown.Item href="/react-datacode/#/index_practice_questions">
//                       <FontAwesomeIcon icon={faCode} className="mr-2" />
//                       Programming Practice Questions
//                     </NavDropdown.Item>
//                     <NavDropdown.Item href="/react-datacode/#/index_quize_tests">
//                       <FontAwesomeIcon icon={faFlask} className="mr-2" />
//                       Programming Quiz Tests
//                     </NavDropdown.Item>
//                     <NavDropdown.Item href="/react-datacode/#/index_programming_questions">
//                       <FontAwesomeIcon icon={faFileCode} className="mr-2" />
//                       Programming Example Questions
//                     </NavDropdown.Item>
//                   </NavDropdown>
//                 </li> */}
             
              
//                 {/* <li>
//                   <a href="#footer" onClick={this.logout}>
//                     Log Out
//                   </a>
//                 </li> */}
//               {/* </ul> */}
//               {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{marginTop:'70px'}}>
//   <a class="navbar-brand" href="#">Navbar</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div class="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul class="navbar-nav mr-auto">
//       <li class="nav-item active">
//         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Link</a>
//       </li>
//       <li class="nav-item dropdown">
//         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Dropdown
//         </a>
//         <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//           <a class="dropdown-item" href="#">Action</a>
//           <a class="dropdown-item" href="#">Another action</a>
//           <div class="dropdown-divider"></div>
//           <a class="dropdown-item" href="#">Something else here</a>
//         </div>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link disabled" href="#">Disabled</a>
//       </li>
//     </ul>
//     <form class="form-inline my-2 my-lg-0">
//       <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
//       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>
//   </div>
// </nav> */}
//       </>
//     );
//   }
// }

// export default NavbarComponent;
