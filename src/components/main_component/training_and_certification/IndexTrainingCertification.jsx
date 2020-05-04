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
  faGithub,
  faPhp,
  faSwift,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";
import Technologies from "../../right_section/Technologies";
import TrainingCertificationCardCarousel from "./TrainingCertificationCardCarousel";

class IndexTrainingCertification extends Component {
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
              <FontAwesomeIcon icon={faChalkboardTeacher} /> Training &
              Certification
            </h1>
            <Link
              to="/home"
              className="badge mr-1"
              style={{ backgroundColor: "#06CB6C" }}
            >
              <FontAwesomeIcon icon={faHome} size="2x" color="#633974" />
            </Link>

            <div className="card-deck mt-4">
              <div className="card text-center p-2">
                <Link to="/c_traning_certification">
                  <center>
                    <FontAwesomeIcon
                      icon={faCopyright}
                      size="4x"
                      color="#633974"
                    />
                  </center>
                  C Programming
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/python_traning_certification">
                  <center>
                    <FontAwesomeIcon
                      icon={faPython}
                      size="4x"
                      color="#633974"
                    />
                  </center>
                  Python
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/java_traning_certification">
                  <center>
                    <FontAwesomeIcon icon={faJava} size="4x" color="#633974" />
                  </center>
                  Java
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/cpp_traning_certification">
                  <center>
                    <FontAwesomeIcon
                      icon={faCopyright}
                      size="4x"
                      color="#633974"
                    />
                  </center>
                  C++
                </Link>
              </div>
            </div>
            <div className="card-deck mt-4">
              <div className="card text-center p-2">
                <Link to="/js_traning_certification">
                  <center>
                    <FontAwesomeIcon icon={faJs} size="4x" color="#633974" />
                  </center>
                  JavaScript
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/dbms_traning_certification">
                  <center>
                    <FontAwesomeIcon
                      icon={faDatabase}
                      size="4x"
                      color="#633974"
                    />
                  </center>
                  DBMS
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/sql_traning_certification">
                  <center>
                    <FontAwesomeIcon
                      icon={faDatabase}
                      size="4x"
                      color="#633974"
                    />
                  </center>
                  SQL
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/datastructure_traning_certification">
                  <center>
                    <FontAwesomeIcon
                      icon={faDigitalTachograph}
                      size="4x"
                      color="#633974"
                    />
                  </center>
                  Data Structure
                </Link>
              </div>
            </div>
            <div className="card-deck mt-4">
              <div className="card text-center p-2">
                <Link to="/html_traning_certification">
                  <center>
                    <FontAwesomeIcon icon={faHtml5} size="4x" color="#633974" />
                  </center>
                  HTML
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/css_traning_certification">
                  <center>
                    <FontAwesomeIcon icon={faCss3} size="4x" color="#633974" />
                  </center>
                  CSS
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="oops_traning_certification">
                  <center>
                    <FontAwesomeIcon
                      icon={faObjectGroup}
                      size="4x"
                      color="#633974"
                    />
                  </center>
                  OOPs
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/cpp_traning_certification">
                  <center>
                    <FontAwesomeIcon
                      icon={faNetworkWired}
                      size="4x"
                      color="#633974"
                    />
                  </center>
                  CN
                </Link>
              </div>
            </div>
            <div className="card-deck mt-4">
              <div className="card text-center p-2">
                <Link to="/c_traning_certification">
                  <center>
                    <FontAwesomeIcon
                      icon={faNodeJs}
                      size="4x"
                      color="#633974"
                    />
                  </center>
                  Node JS
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/angular_traning_certification">
                  <center>
                    <FontAwesomeIcon
                      icon={faAngular}
                      size="4x"
                      color="#633974"
                    />
                  </center>
                  Angular
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/react_traning_certification">
                  <center>
                    <FontAwesomeIcon icon={faReact} size="4x" color="#633974" />
                  </center>
                  React
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/cpp_traning_certification">
                  <center>
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="4x"
                      color="#633974"
                    />
                  </center>
                  GitHub
                </Link>
              </div>
            </div>
            <div className="card-deck mt-4">
              <div className="card text-center p-2">
                <Link to="/c_traning_certification">
                  <center>
                    <FontAwesomeIcon icon={faPhp} size="4x" color="#633974" />
                  </center>
                  PHP
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/python_traning_certification">
                  <center>
                    <FontAwesomeIcon icon={faSwift} size="4x" color="#633974" />
                  </center>
                  Swift
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/android_traning_certification">
                  <center>
                    <FontAwesomeIcon
                      icon={faAndroid}
                      size="4x"
                      color="#633974"
                    />
                  </center>
                  Android
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/cpp_traning_certification">
                  <center>
                    <FontAwesomeIcon
                      icon={faCopyright}
                      size="4x"
                      color="#633974"
                    />
                  </center>
                  OS
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
                      color="#633974"
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
                      color="#633974"
                    />
                  </center>
                  Python
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="java">
                  <center>
                    <FontAwesomeIcon icon={faJava} size="4x" color="#633974" />
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
                      color="#633974"
                    />
                  </center>
                  C++
                </Link>
              </div>
            </div> */}
            <h4 className="text-secondary mt-5">For More Technologies</h4>
            <TrainingCertificationCardCarousel />
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

export default IndexTrainingCertification;
