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
  faBloggerB,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faExchangeAlt,
  faUserClock,
  faUserFriends,
  faLaptopCode,
  faListAlt,
  faBlog,
  faNewspaper,
  faTools,
  faUserTie,
  faTasks,
  faChalkboardTeacher,
  faFileCode,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import CardCarousel from "./CardCarousel";

class FooterComponentUpper extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-sm col text-center ">
              <h4 className="align-middle " style={{ color: "#072C71" }}>
                Categories
              </h4>
              <hr
                class="teal accent-3 mb-3 mt-0 d-inline-block mx-auto"
                style={{ width: 120 }}
              />
              <div className="row text-center mb-4">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-6">
                      <Link to="/index_technologies">
                        <FontAwesomeIcon
                          icon={faChalkboardTeacher}
                          color="#072C71"
                          size="3x"
                        />
                        <h6 className="mt-2 text-secondary">
                          Tutorials & Courses
                        </h6>
                      </Link>
                    </div>

                    <div className="col-6">
                      <Link to="/index_articles">
                        <FontAwesomeIcon
                          icon={faNewspaper}
                          color="#072C71"
                          size="3x"
                        />
                        <h6 className="mt-2 text-secondary">
                          Communnity Blogs
                        </h6>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="row">
                    <div className="col-6">
                      <Link to="/index_programming_questions">
                        <FontAwesomeIcon
                          icon={faFileCode}
                          color="#072C71"
                          size="3x"
                        />
                        <h6 className="mt-2 text-secondary">
                          Programming Example Questions
                        </h6>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link to="/index_interview_questioins">
                        <FontAwesomeIcon
                          icon={faUserTie}
                          color="#072C71"
                          size="3x"
                        />
                        <h6 className="mt-2 text-secondary">
                          Interview Preparation
                        </h6>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*  Second Row */}
              <div className="row text-center ">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-6">
                      <Link to="/index_quize_tests">
                        <FontAwesomeIcon
                          icon={faUserClock}
                          color="#072C71"
                          size="3x"
                        />
                        <h6 className="mt-2 text-secondary">
                          Technical Quizz Test
                        </h6>
                      </Link>
                    </div>

                    <div className="col-6">
                      <Link to="/index_mcqs">
                        <FontAwesomeIcon
                          icon={faTasks}
                          color="#072C71"
                          size="3x"
                        />
                        <h6 className="mt-2 text-secondary">
                          Programming MCQs Practice
                        </h6>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="row">
                    <div className="col-6">
                      <Link to="/index_practice_questions">
                        <FontAwesomeIcon
                          icon={faCode}
                          color="#072C71"
                          size="3x"
                        />
                        <h6 className="mt-2 text-secondary">
                          Programming Practice Problems
                        </h6>
                      </Link>
                    </div>

                    <div className="col-6">
                      <Link to="/index_code_challange">
                        <FontAwesomeIcon
                          icon={faLaptopCode}
                          color="#072C71"
                          size="3x"
                        />
                        <h6 className="mt-2 text-secondary">
                          Weekly Code Challange
                        </h6>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-4 pl-5 pr-5">
              <div className="col-sm col-md mt-3 text-center ">
                <h4 style={{ color: "#072C71" }}>Trending For Learning</h4>
                <hr
                  class="teal accent-3 mb-3 mt-0 d-inline-block mx-auto"
                  style={{ width: 280 }}
                />
                <CardCarousel />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FooterComponentUpper;
