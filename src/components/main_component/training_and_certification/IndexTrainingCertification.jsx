import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCopyright,
  faDatabase,
  faDigitalTachograph,
  faObjectGroup,
  faAward,
  faColumns,
  faTv,
  faCogs,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import RightSideSection from "../../right_section/RightSideSection";
import {
  faPython,
  faJava,
  faJs,
  faHtml5,
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
              style={{ backgroundColor: "#30006b", color: "#ffffff" }}
            >
              <FontAwesomeIcon icon={faAward} /> Training & Certification
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
                <Link to="/webdevelopment_training_certification">
                  <center>
                    <FontAwesomeIcon
                      icon={faColumns}
                      size="4x"
                      color="#072C71"
                    />
                  </center>
                  Web Development
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/datascience_training_certification">
                  <center>
                    <FontAwesomeIcon icon={faBrain} size="4x" color="#072C71" />
                  </center>
                  DataScience
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/machinelearning_training_certification">
                  <center>
                    <FontAwesomeIcon icon={faCogs} size="4x" color="#072C71" />
                  </center>
                  Machine Learning
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/computerscience_training_certification">
                  <center>
                    <FontAwesomeIcon icon={faTv} size="4x" color="#072C71" />
                  </center>
                  Computer Science
                </Link>
              </div>
            </div>
            <div className="card-deck mt-4">
              <div className="card text-center p-2">
                <Link to="/c_training_certification">
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
                <Link to="/python_training_certification">
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
                <Link to="/java_training_certification">
                  <center>
                    <FontAwesomeIcon icon={faJava} size="4x" color="#072C71" />
                  </center>
                  Java
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/cpp_training_certification">
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
                <Link to="oops_training_certification">
                  <center>
                    <FontAwesomeIcon
                      icon={faObjectGroup}
                      size="4x"
                      color="#072C71"
                    />
                  </center>
                  OOPs
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/dbms_training_certification">
                  <center>
                    <FontAwesomeIcon
                      icon={faDatabase}
                      size="4x"
                      color="#072C71"
                    />
                  </center>
                  DBMS/SQL
                </Link>
              </div>

              <div className="card text-center p-2">
                <Link to="/datastructure_training_certification">
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
                <Link to="/html_training_certification">
                  <center>
                    <FontAwesomeIcon icon={faHtml5} size="4x" color="#072C71" />
                  </center>
                  HTML/CSS
                </Link>
              </div>
            </div>
            <div className="card-deck mt-4">
              <div className="card text-center p-2">
                <Link to="/js_training_certification">
                  <center>
                    <FontAwesomeIcon icon={faJs} size="4x" color="#072C71" />
                  </center>
                  JavaScript
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/nodejs_training_certification">
                  <center>
                    <FontAwesomeIcon
                      icon={faNodeJs}
                      size="4x"
                      color="#072C71"
                    />
                  </center>
                  Node JS
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/angular_training_certification">
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
              <div className="card text-center p-2">
                <Link to="/react_training_certification">
                  <center>
                    <FontAwesomeIcon icon={faReact} size="4x" color="#072C71" />
                  </center>
                  React
                </Link>
              </div>
            </div>
            <div className="card-deck mt-4">
              <div className="card text-center p-2">
                <Link to="/php_training_certification">
                  <center>
                    <FontAwesomeIcon icon={faPhp} size="4x" color="#072C71" />
                  </center>
                  PHP
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/swift_training_certification">
                  <center>
                    <FontAwesomeIcon icon={faSwift} size="4x" color="#072C71" />
                  </center>
                  Swift
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/android_training_certification">
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
              <div className="card text-center p-2">
                <Link to="/github_training_certification">
                  <center>
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="4x"
                      color="#072C71"
                    />
                  </center>
                  GitHub
                </Link>
              </div>
            </div>
            <h4 className="text-secondary mt-5">
              <code className="text-primary">
                {" "}
                For More Training & Certification
              </code>
            </h4>
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
