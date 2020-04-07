import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animateScroll as scroll } from "react-scroll";
import {
  faPython,
  faJava,
  faPhp,
  faJsSquare,
  faHtml5,
  faCss3,
  faReact,
  faAngular,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faExchangeAlt,
  faUserClock,
  faUserFriends,
  faLaptopCode,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class FooterComponentUpper extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-sm col-md-4 ">
              <h5 className="test-secondary align-middle ">Categories</h5>
              <hr
                class="teal accent-3 mb-3 mt-0 d-inline-block mx-auto"
                style={{ width: 100 }}
              />
              <div className="row text-center">
                <div className="col">
                  <div className="row">
                    <div className="col-6">
                      <Link to="/index_quize_tests">
                        <FontAwesomeIcon
                          icon={faUserClock}
                          color="gray"
                          size="4x"
                        />
                        <p className="mt-1 text-secondary">
                          Technical Quize Test
                        </p>
                      </Link>
                    </div>

                    <div className="col-6">
                      <Link to="/index_interview_questioins">
                        <FontAwesomeIcon
                          icon={faUserFriends}
                          color="gray"
                          size="4x"
                        />
                        <p className="mt-1 text-secondary">
                          Interview Preparations
                        </p>
                      </Link>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-6">
                      <Link to="/index_code_challange">
                        <FontAwesomeIcon
                          icon={faLaptopCode}
                          color="gray"
                          size="4x"
                        />
                        <p className="mt-1 text-secondary">
                          Programming Code Challanges
                        </p>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link to="/index_mcqs">
                        <FontAwesomeIcon
                          icon={faListAlt}
                          color="gray"
                          size="4x"
                        />
                        <p className="mt-1 text-secondary">
                          Programming MCQs Practices
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm col-md-8 mt-3 ">
              <h5 className="test-secondary align-middle">
                Trending Technology
              </h5>
              <hr
                class="teal accent-3 mb-3 mt-0 d-inline-block mx-auto"
                style={{ width: 190 }}
              />

              <div className="card-deck">
                <div className="card">
                  <Link to="python" activeClass="active" smooth={true}>
                    <div className="row">
                      <div className="col-4 ml-4 p-1">
                        <FontAwesomeIcon
                          icon={faPython}
                          color="blue"
                          size="2x"
                        />
                      </div>
                      <div className="col-6 mt-1 pt-1">
                        <span className="">Python</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="card">
                  <div className="row">
                    <div className="col-4 ml-4 p-1">
                      <FontAwesomeIcon icon={faReact} size="2x" />
                    </div>
                    <div className="col-6 mt-1 pt-1">
                      <span className="">React</span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="row">
                    <div className="col-4 ml-4 p-1">
                      <FontAwesomeIcon icon={faAngular} size="2x" />
                    </div>
                    <div className="col-6 mt-1 pt-1">
                      <span className="">Angular</span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="row">
                    <div className="col-4 ml-4 p-1">
                      <FontAwesomeIcon icon={faNodeJs} size="2x" />
                    </div>
                    <div className="col-6 mt-1 pt-1">
                      <span className="">NodeJS</span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <Link to="sql">
                    <div className="row">
                      <div className="col-4 ml-4 p-1">
                        <FontAwesomeIcon
                          icon={faDatabase}
                          color="red"
                          size="2x"
                        />
                      </div>
                      <div className="col-6 mt-1 pt-1">
                        <span className="">SQL</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              {/* Card Deck Row 2  */}
              <div className="card-deck mt-2 mb-2">
                <div className="card">
                  <Link to="java">
                    <div className="row">
                      <div className="col-4 ml-4 p-1">
                        <FontAwesomeIcon icon={faJava} color="blue" size="2x" />
                      </div>
                      <div className="col-6 mt-1 pt-1">
                        <span className="">Java</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="card">
                  <div className="row">
                    <div className="col-4 ml-4 p-1">
                      <FontAwesomeIcon icon={faPhp} size="2x" />
                    </div>
                    <div className="col-6 mt-1 pt-1">
                      <span className="">PHP</span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <Link to="js">
                    <div className="row">
                      <div className="col-4 ml-4 p-1">
                        <FontAwesomeIcon
                          icon={faJsSquare}
                          color="magenta"
                          size="2x"
                        />
                      </div>
                      <div className="col-6 mt-1 pt-1">
                        <span className="">JS</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="card">
                  <Link to="html">
                    <div className="row">
                      <div className="col-4 ml-4 p-1">
                        <FontAwesomeIcon
                          icon={faHtml5}
                          color="orange"
                          size="2x"
                        />
                      </div>
                      <div className="col-6 mt-1 pt-1">
                        <span className="">HTML</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="card">
                  <div className="row">
                    <div className="col-4 ml-4 p-1">
                      <FontAwesomeIcon icon={faCss3} size="2x" />
                    </div>
                    <div className="col-6 mt-1 pt-1">
                      <span className="">CSS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FooterComponentUpper;
