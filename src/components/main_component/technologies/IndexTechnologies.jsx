import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCopyright,
  faDatabase,
  faDigitalTachograph,
  faObjectGroup,
  faNetworkWired,
  faAmericanSignLanguageInterpreting,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
import RightSideSection from "../../right_section/RightSideSection";
import {
  faPython,
  faJava,
  faJs,
  faHtml5,
  faCss3,
  faNodeJs,
  faAngular,
  faReact,
  faGit,
  faGithub,
  faPhp,
  faAppStoreIos,
  faSwift,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";
import TechnologiesCardCarousel from "./TechnologiesCardCarousel";
import Technologies from "../../right_section/Technologies";
class IndexTechnologies extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-8 mt-4">
            <h1
              className="text-center mb-4 rounded p-2"
              style={{ backgroundColor: "#06CB6C", color: "#072C71" }}
            >
              <FontAwesomeIcon icon={faChalkboardTeacher} /> Tutorials & Courses
            </h1>
            <Link
              to="/home"
              className="badge mr-1"
              style={{ backgroundColor: "#06CB6C" }}
            >
              <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" />
            </Link>

            <div className="card-deck mt-4">
              <div className="card text-center p-2">
                <Link to="/c">
                  <center>
                    <FontAwesomeIcon
                      icon={faCopyright}
                      size="4x"
                      color="#072C71"
                    />
                  </center>
                  C Programming
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/python">
                  <center>
                    <FontAwesomeIcon
                      icon={faPython}
                      size="4x"
                      color="#072C71"
                    />
                  </center>
                  Python
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/java">
                  <center>
                    <FontAwesomeIcon icon={faJava} size="4x" color="#072C71" />
                  </center>
                  Java
                </Link>
              </div>

            </div>

            <div className="card-deck mt-4">
              <div className="card text-center p-2">
                <Link to="/cpp">
                  <center>
                    <FontAwesomeIcon
                      icon={faCopyright}
                      size="4x"
                      color="#072C71"
                    />
                  </center>
                  C++
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/js">
                  <center>
                    <FontAwesomeIcon icon={faJs} size="4x" color="#072C71" />
                  </center>
                  JavaScript
                </Link>
              </div>

              <div className="card text-center p-2">
                <Link to="/sql">
                  <center>
                    <FontAwesomeIcon
                      icon={faDatabase}
                      size="4x"
                      color="#072C71"
                    />
                  </center>
                  SQL
                </Link>
              </div>

            </div>

            <div className="card-deck mt-4">
              <div className="card text-center p-2">
                <Link to="/html">
                  <center>
                    <FontAwesomeIcon icon={faHtml5} size="4x" color="#072C71" />
                  </center>
                  HTML
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/datastructure">
                  <center>
                    <FontAwesomeIcon
                      icon={faDigitalTachograph}
                      size="4x"
                      color="#072C71"
                    />
                  </center>
                  Data Structure
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/angular">
                  <center>
                    <FontAwesomeIcon
                      icon={faAngular}
                      size="4x"
                      color="#072C71"
                    />
                  </center>
                  Angular
                </Link>
              </div>
            </div>

            <div className="card-deck mt-4">


              <div className="card text-center p-2">
                <Link to="/react">
                  <center>
                    <FontAwesomeIcon icon={faReact} size="4x" color="#072C71" />
                  </center>
                  React
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/android">
                  <center>
                    <FontAwesomeIcon
                      icon={faAndroid}
                      size="4x"
                      color="#072C71"
                    />
                  </center>
                  Android
                </Link>
              </div>
            </div>



            {/* <div className="card-deck mt-4">
              <div className="card text-center p-2">
                <Link to="/c">
                  <center>
                    <FontAwesomeIcon
                      icon={faCopyright}
                      size="4x"
                      color="#072C71"
                    />
                  </center>
                  C Programming
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/python">
                  <center>
                    <FontAwesomeIcon
                      icon={faPython}
                      size="4x"
                      color="#072C71"
                    />
                  </center>
                  Python
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="java">
                  <center>
                    <FontAwesomeIcon icon={faJava} size="4x" color="#072C71" />
                  </center>
                  Java
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/cpp">
                  <center>
                    <FontAwesomeIcon
                      icon={faCopyright}
                      size="4x"
                      color="#072C71"
                    />
                  </center>
                  C++
                </Link>
              </div>
            </div>
             <div className="card-deck mt-4">
            
             
            
              <div className="card text-center p-2">
                <Link to="/cpp">
                  <center>
                    <FontAwesomeIcon
                      icon={faCopyright}
                      size="4x"
                      color="#072C71"
                    />
                  </center>
                  OS
                </Link>
              </div>
            </div> */}
            <h4 className="text-secondary mt-5">For More Technologies</h4>
            <TechnologiesCardCarousel />
          </div>
          <div className="col-md-3">
            <RightSideSection />
            <Technologies />
          </div>
        </div>
      </>
    );
  }
}

export default IndexTechnologies;
