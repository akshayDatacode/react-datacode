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
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import CardCarousel from "./CardCarousel";

class FooterComponentUpper extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-sm col text-center ">
              <h4 className="text-secondary align-middle ">Categories</h4>
              <hr
                class="teal accent-3 mb-3 mt-0 d-inline-block mx-auto"
                style={{ width: 100 }}
              />
              <div className="row text-center">
                <div className="col">
                  <div className="row">
                    <div className="col-4">
                      <Link to="/index_quize_tests">
                        <FontAwesomeIcon
                          icon={faUserClock}
                          color="skyblue"
                          size="2x"
                        />
                        <p className="mt-1 text-secondary">
                          Technical Quize Test
                        </p>
                      </Link>
                    </div>

                    <div className="col-4">
                      <Link to="/index_interview_questioins">
                        <FontAwesomeIcon
                          icon={faUserFriends}
                          color="skyblue"
                          size="2x"
                        />
                        <p className="mt-1 text-secondary">
                          Interview Preparations
                        </p>
                      </Link>
                    </div>
                    <div className="col-4">
                      <Link to="/index_articles">
                        <FontAwesomeIcon
                          icon={faNewspaper}
                          color="skyblue"
                          size="2x"
                        />
                        <p className="mt-1 text-secondary">Community Blogs </p>
                      </Link>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-4">
                      <Link to="/index_code_challange">
                        <FontAwesomeIcon
                          icon={faLaptopCode}
                          color="skyblue"
                          size="2x"
                        />
                        <p className="mt-1 text-secondary">
                          Programming Code Challanges
                        </p>
                      </Link>
                    </div>
                    <div className="col-4">
                      <Link to="/index_mcqs">
                        <FontAwesomeIcon
                          icon={faListAlt}
                          color="skyblue"
                          size="2x"
                        />
                        <p className="mt-1 text-secondary">
                          Programming MCQs Practices
                        </p>
                      </Link>
                    </div>
                    <div className="col-4">
                      <Link to="/index_technologies">
                        <FontAwesomeIcon
                          icon={faTools}
                          color="skyblue"
                          size="2x"
                        />
                        <p className="mt-1 text-secondary">Technologies</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm col-md mt-3 text-center ">
              <h3 className="text-secondary ">Trending For Learning</h3>
              <hr
                class="teal accent-3 mb-3 mt-0 d-inline-block mx-auto"
                style={{ width: 190 }}
              />
              <CardCarousel />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FooterComponentUpper;
