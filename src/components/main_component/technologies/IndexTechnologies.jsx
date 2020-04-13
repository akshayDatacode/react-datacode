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
            <h2 className="text-center mb-4">Technologies</h2>
            <Link to="/home" className="badge badge-primary mr-1">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>
            <div className="card-deck mt-4">
              <div className="card text-center p-2">
                <Link to="/c">
                  <center>
                    <FontAwesomeIcon icon={faCopyright} size="4x" />
                  </center>
                  C Programming
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/python">
                  <center>
                    <FontAwesomeIcon icon={faPython} size="4x" />
                  </center>
                  Python
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/java">
                  <center>
                    <FontAwesomeIcon icon={faJava} size="4x" />
                  </center>
                  Java
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/cpp">
                  <center>
                    <FontAwesomeIcon icon={faCopyright} size="4x" />
                  </center>
                  C++
                </Link>
              </div>
            </div>
            <div className="card-deck mt-4">
              <div className="card text-center p-2">
                <Link to="/js">
                  <center>
                    <FontAwesomeIcon icon={faJs} size="4x" />
                  </center>
                  JavaScript
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/python">
                  <center>
                    <FontAwesomeIcon icon={faDatabase} size="4x" />
                  </center>
                  DBMS
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/sql">
                  <center>
                    <FontAwesomeIcon icon={faDatabase} size="4x" />
                  </center>
                  SQL
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/datastructure">
                  <center>
                    <FontAwesomeIcon icon={faDigitalTachograph} size="4x" />
                  </center>
                  Data Structure
                </Link>
              </div>
            </div>
            <div className="card-deck mt-4">
              <div className="card text-center p-2">
                <Link to="/html">
                  <center>
                    <FontAwesomeIcon icon={faHtml5} size="4x" />
                  </center>
                  HTML
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/python">
                  <center>
                    <FontAwesomeIcon icon={faCss3} size="4x" />
                  </center>
                  CSS
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="oops">
                  <center>
                    <FontAwesomeIcon icon={faObjectGroup} size="4x" />
                  </center>
                  OOPs
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/cpp">
                  <center>
                    <FontAwesomeIcon icon={faNetworkWired} size="4x" />
                  </center>
                  CN
                </Link>
              </div>
            </div>
            <div className="card-deck mt-4">
              <div className="card text-center p-2">
                <Link to="/c">
                  <center>
                    <FontAwesomeIcon icon={faNodeJs} size="4x" />
                  </center>
                  Node JS
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/python">
                  <center>
                    <FontAwesomeIcon icon={faAngular} size="4x" />
                  </center>
                  Angular
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="java">
                  <center>
                    <FontAwesomeIcon icon={faReact} size="4x" />
                  </center>
                  React
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/cpp">
                  <center>
                    <FontAwesomeIcon icon={faGithub} size="4x" />
                  </center>
                  GitHub
                </Link>
              </div>
            </div>
            <div className="card-deck mt-4">
              <div className="card text-center p-2">
                <Link to="/c">
                  <center>
                    <FontAwesomeIcon icon={faPhp} size="4x" />
                  </center>
                  PHP
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/python">
                  <center>
                    <FontAwesomeIcon icon={faSwift} size="4x" />
                  </center>
                  Swift
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="java">
                  <center>
                    <FontAwesomeIcon icon={faAndroid} size="4x" />
                  </center>
                  Android
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/cpp">
                  <center>
                    <FontAwesomeIcon icon={faCopyright} size="4x" />
                  </center>
                  C++
                </Link>
              </div>
            </div>
            <div className="card-deck mt-4">
              <div className="card text-center p-2">
                <Link to="/c">
                  <center>
                    <FontAwesomeIcon icon={faCopyright} size="4x" />
                  </center>
                  C Programming
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/python">
                  <center>
                    <FontAwesomeIcon icon={faPython} size="4x" />
                  </center>
                  Python
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="java">
                  <center>
                    <FontAwesomeIcon icon={faJava} size="4x" />
                  </center>
                  Java
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/cpp">
                  <center>
                    <FontAwesomeIcon icon={faCopyright} size="4x" />
                  </center>
                  C++
                </Link>
              </div>
            </div>
            <h4 className="text-secondary mt-5">For More Community Blogs</h4>
            <TechnologiesCardCarousel />
          </div>
          <div className="col-md-3">
            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default IndexTechnologies;
