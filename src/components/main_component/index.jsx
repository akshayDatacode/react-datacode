import React, { Component } from "react";
import CarouselComponent from "./CarouselComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {
  faListAlt,
  faUsers,
  faBookOpen,
  faFileCode,
  faTools,
  faNewspaper,
  faUserClock,
  faLaptopCode,
  faBookReader,
  faBookDead,
  faAddressBook,
  faSwatchbook,
  faBook,
  faPuzzlePiece,
  faChalkboardTeacher,
  faTerminal,
  faSearchMinus,
  faPlus,
  faCartPlus,
  faSlash,
  faArrowRight,
  faUserTie,
  faTasks,
  faCodeBranch,
  faCode,
  faSearch,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";
import FooterComponentUpper from "../footer_component/FooterComponentUpper";
import {
  faConnectdevelop,
  faSearchengin,
  faResearchgate,
  faCreativeCommonsSa,
  faDAndD,
  faDAndDBeyond,
} from "@fortawesome/free-brands-svg-icons";

class MainComponent extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        {/* <CarouselComponent /> */}
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col">
              <h2 className="text-center mt-5" style={{ color: "#072C71" }}>
                What you will Find on Learning Community
              </h2>
              <div class="card-deck mt-5 ml-md-5 mr-md-5 pr-md-5 pl-md-5">
                <div class="card border border-white ml-md-5 mr-md-5 pr-md-5 pl-md-5">
                  <Link to="/home">
                    <center>
                      <FontAwesomeIcon
                        icon={faSearch}
                        color="#072C71"
                        size="4x"
                      />
                    </center>
                  </Link>
                  <div class="card-body text-left">
                    <h5 class="card-title ">Find Tutorials</h5>
                    <p class="card-text text-secondary">
                      From building websites to analyzing data, the choice is
                      yours. Find the best of the best courses to learn.
                    </p>
                  </div>
                  {/* <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_quize_tests">
                      <h6 className="btn border border-secondary ">
                        Read More
                      </h6>
                    </Link>
                  </div> */}
                </div>
                <div class="card border border-white ml-md-5 mr-md-5 pr-md-5 pl-md-5">
                  <Link to="/home" activeClass="active">
                    <center>
                      <FontAwesomeIcon
                        icon={faBook}
                        color="#072C71"
                        size="4x"
                      />
                    </center>
                  </Link>
                  <div class="card-body text-left">
                    <h5 class="card-title">Learn from Courses</h5>
                    <p class="card-text text-secondary">
                      Learn How to Code; Coding skills have never been more
                      in-demand. Learn everything you need to take your career
                      to the next level.
                    </p>
                  </div>
                  {/* <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_interview_questioins">
                      <h6 className="btn border border-secondary">Read More</h6>
                    </Link>
                  </div> */}
                </div>
              </div>

              {/* Second Row of intro */}

              <div class="card-deck mt-5 ml-md-5 mr-md-5 pr-md-5 pl-md-5">
                <div class="card border border-white ml-md-5 mr-md-5 pr-md-5 pl-md-5">
                  <Link to="/home">
                    <center>
                      <FontAwesomeIcon
                        icon={faPuzzlePiece}
                        color="#072C71"
                        size="4x"
                      />
                    </center>
                  </Link>
                  <div class="card-body text-left">
                    <h5 class="card-title">Practice</h5>
                    <p class="card-text text-secondary">
                      Apply your learning with real-world projects and test your
                      knowledge with tailor-made quizzes & MCQ's.{" "}
                    </p>
                  </div>
                  {/* <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_mcqs">
                      <h6 className="btn border border-secondary text-weight-bold">
                        Read More
                      </h6>
                    </Link>
                  </div> */}
                </div>
                <div class="card border border-white ml-md-5 mr-md-5 pr-md-5 pl-md-5">
                  <Link to="/home">
                    <center>
                      <FontAwesomeIcon
                        icon={faTerminal}
                        color="#072C71"
                        size="4x"
                      />
                    </center>
                  </Link>
                  <div class="card-body text-left">
                    <h5 class="card-title">Code</h5>
                    <p class="card-text text-secondary">
                      Show your Practice with Code and Join the Contests and
                      Hackathons to Sharpen your Skills
                    </p>
                  </div>
                  {/* <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_mcqs">
                      <h6 className="btn border border-secondary text-weight-bold">
                        Read More
                      </h6>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Images Start */}
        <div className="container-fluid p-0 mt-5">
          <div className="row mr-md-5 ml-md-5">
            <div className="col-md-6">
              <img
                className=" card-img-top mx-auto img-fluid img-circle d-block"
                src={require("../../assets/images/cover3.jpeg")}
                alt="avatar"
              />
            </div>
            <div className="col-md-6 text-center">
              <div className="card border border-white bg-white">
                <div clsssName="card-header border border-white bg-white ">
                  <h1 className="text-center mt-5">Free Online Learning</h1>
                </div>
                <div className="card-body border border-white bg-white">
                  <div className="card-title text-primary text-left">
                    <h5 className="p-5">
                      Datacode Provides you the Best Learning Content from all
                      over the world to Improve your Skills and Make your
                      Learning Easy and Quick.
                    </h5>
                  </div>

                  <Link to="/home">
                    <button className="btn btn-lg btn-default border border-dark rounded-0 pl-5 pr-5 pt-3 pb-3">
                      <h5>Start Learning</h5>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0 mt-5">
          <div className="row mr-md-5 ml-md-5">
            <div className="col-md-6 text-center">
              <div className="card border border-white bg-white">
                <div clsssName="card-header border border-white bg-white ">
                  <h1 className="text-center">Learn From the Best Sources</h1>
                </div>
                <div className="card-body border border-white bg-white">
                  <div className="card-title text-left text-secondary">
                    <h5 className="p-5">
                      Datacode Collected the Best Learning Resources. Either one
                      is at Beginners or at Advance level you find your track
                      and learn from it.
                    </h5>
                  </div>
                  <center>
                    <Link to="/home">
                      <button className="btn btn-lg btn-default border border-primary rounded-0 pl-5 pr-5 pt-3 pb-3">
                        <h5 className="text-primary">Getting Started</h5>
                      </button>
                    </Link>
                  </center>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                className=" card-img-top mx-auto img-fluid img-circle d-block"
                src={require("../../assets/images/cover4.jpeg")}
                alt="avatar"
              />
            </div>
          </div>
        </div>

        {/* IMages End */}

        {/* First Row of Find and Learn */}

        <div className="container-fluid p-0 mt-5">
          <div className="row">
            <div className="col">
              <h4 className="text-center text-dark">
                {" "}
                <FontAwesomeIcon
                  icon={faSearchengin}
                  color="#072C71"
                /> Find{" "}
                <FontAwesomeIcon
                  icon={faDAndD}
                  color="#072C71"
                  className="mr-4 ml-3"
                />
                <FontAwesomeIcon icon={faBook} color="#072C71" /> Learn
              </h4>
              <div class="card-deck mt-5">
                <div class="card border border-white">
                  <center>
                    <FontAwesomeIcon
                      icon={faChalkboardTeacher}
                      size="3x"
                      color="#072C71"
                    />
                  </center>
                  <div class="card-body">
                    <h5 class="card-title"> Tutorials & Courses </h5>
                    <p class="card-text text-secondary">
                      Learn your favorite technology from various articles,
                      programming questions and more Collected for you
                    </p>
                  </div>
                  <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_technologies">
                      <h6 className="btn btn-default border border-dark ">
                        Read More
                      </h6>
                    </Link>
                  </div>
                </div>
                <div class="card border border-white">
                  <center>
                    <FontAwesomeIcon
                      icon={faNewspaper}
                      size="3x"
                      color="#072C71"
                    />
                  </center>
                  <div class="card-body">
                    <h5 class="card-title">Communnity Blogs</h5>
                    <p class="card-text text-secondary">
                      Various Blogs on various Technologies
                    </p>
                  </div>
                  <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_articles">
                      <h6 className="btn btn-default border border-dark ">
                        Read More
                      </h6>
                    </Link>
                  </div>
                </div>
                <div class="card border border-white">
                  <Link to="/index_interview_questioins" activeClass="active">
                    <center>
                      <FontAwesomeIcon
                        icon={faUserTie}
                        color="#072C71"
                        size="3x"
                      />
                    </center>
                  </Link>
                  <div class="card-body text-left">
                    <h5 class="card-title">Interview Preparation</h5>
                    <p class="card-text text-secondary">
                      {" "}
                      Read example questions you'll be asked in a technical
                      interview, and read tips on the best ways to answer.
                    </p>
                  </div>
                  <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_interview_questioins">
                      <h6 className="btn border border-dark">Read More</h6>
                    </Link>
                  </div>
                </div>
                <div class="card border border-white">
                  <center>
                    <FontAwesomeIcon
                      icon={faFileCode}
                      size="3x"
                      color="#072C71"
                    />
                  </center>
                  <div class="card-body">
                    <h5 class="card-title"> Programming Example Questions</h5>
                    <p class="card-text text-secondary">
                      Sharpen your coding skills by finding the best programming
                      questions meant only for you.
                    </p>
                  </div>
                  <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_programming_questions">
                      <h6 className="btn btn-default border border-dark ">
                        Read More
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>First -3  Cards Ending  ...............*/}
        {/* ... starting Lower Cards -5  .........................................*/}
        <div
          className="container-fluid mt-5 rounded pt-4 ml-0 mr-0"
          style={{ backgroundColor: "#072C71" }}
        >
          <div className="row">
            <div className="col p-0">
              <h4 className="text-center text-light">
                {" "}
                <FontAwesomeIcon icon={faPuzzlePiece} color="#06CB6C" />{" "}
                Practice{" "}
                <FontAwesomeIcon
                  icon={faPlus}
                  color="#06CB6C"
                  className="mr-4 ml-3"
                />
                Code
                <FontAwesomeIcon
                  icon={faCode}
                  color="#06CB6C"
                  className="ml-2"
                />
              </h4>
              <div class="card-deck mt-3 p-4 ml-0 mr-0">
                <div class="card border border-white pt-3">
                  <Link to="/index_mcqs">
                    <center>
                      <FontAwesomeIcon
                        icon={faTasks}
                        color="#072C71"
                        size="4x"
                      />
                    </center>
                  </Link>
                  <div class="card-body text-left">
                    <h5 class="card-title"> Programming MCQs Practice</h5>
                    <p class="card-text text-secondary">
                      Multiple choice questions of Multiple Technologies are
                      useful for the campus placement & tests
                    </p>
                  </div>
                  <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_mcqs">
                      <h6 className="btn border border-secondary text-weight-bold">
                        Read More
                      </h6>
                    </Link>
                  </div>
                </div>
                <div class="card border border-white pt-3">
                  <Link to="/index_quize_tests">
                    <center>
                      <FontAwesomeIcon
                        icon={faFlask}
                        color="#072C71"
                        size="4x"
                      />
                    </center>
                  </Link>
                  <div class="card-body text-left">
                    <h5 class="card-title ">Technical Quizz Tests</h5>
                    <p class="card-text text-secondary">
                      Find the best Technical quizzes to test your Technical
                      knowledge
                    </p>
                  </div>
                  <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_quize_tests">
                      <h6 className="btn border border-secondary ">
                        Read More
                      </h6>
                    </Link>
                  </div>
                </div>

                <div class="card border border-white pt-3">
                  <center>
                    <FontAwesomeIcon
                      icon={faLaptopCode}
                      size="4x"
                      color="#072C71"
                    />
                  </center>
                  <div class="card-body">
                    <h5 class="card-title">Weekly Code Challange</h5>
                    <p class="card-text text-secondary">
                      Challange your coding skills with Weekly Code Challanges
                    </p>
                  </div>
                  <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_code_challange">
                      <h6 className="btn btn-default border border-dark ">
                        Read More
                      </h6>
                    </Link>
                  </div>
                </div>

                <div class="card border border-white pt-3">
                  <center>
                    <FontAwesomeIcon icon={faCode} size="4x" color="#072C71" />
                  </center>
                  <div class="card-body">
                    <h5 class="card-title">Programming Practice Problems</h5>
                    <p class="card-text text-secondary">
                      find the events and Contests hosted by us and be a part of
                      it.
                    </p>
                  </div>
                  <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_practice_questions">
                      <h6 className="btn btn-default border border-dark ">
                        Read More
                      </h6>
                    </Link>
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

export default MainComponent;
