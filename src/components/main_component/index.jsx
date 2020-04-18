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
} from "@fortawesome/free-solid-svg-icons";
import FooterComponentUpper from "../footer_component/FooterComponentUpper";
import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons";

class MainComponent extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <CarouselComponent />
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col">
              <div class="card-deck mt-5">
                <div class="card border border-white">
                  <Link to="/index_quize_tests">
                    <center>
                      <FontAwesomeIcon
                        icon={faUserClock}
                        color="skyblue"
                        size="4x"
                      />
                    </center>
                  </Link>
                  <div class="card-body text-center">
                    <h5 class="card-title ">Technical Quiz Tests</h5>
                    <p class="card-text">#LearnWithCommunity</p>
                  </div>
                  <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_quize_tests">
                      <h6 className="btn border border-secondary ">
                        Read More
                      </h6>
                    </Link>
                  </div>
                </div>
                <div class="card border border-white">
                  <Link to="/index_interview_questioins" activeClass="active">
                    <center>
                      <FontAwesomeIcon
                        icon={faUsers}
                        color="indigo"
                        size="4x"
                      />
                    </center>
                  </Link>
                  <div class="card-body text-center">
                    <h5 class="card-title">Programming Interview FAQs</h5>
                    <p class="card-text">#LearnWithCommunity</p>
                  </div>
                  <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_interview_questioins">
                      <h6 className="btn border border-secondary">Read More</h6>
                    </Link>
                  </div>
                </div>
                <div class="card border border-white">
                  <Link to="/index_mcqs">
                    <center>
                      <FontAwesomeIcon
                        icon={faListAlt}
                        color="green"
                        size="4x"
                      />
                    </center>
                  </Link>
                  <div class="card-body text-center">
                    <h5 class="card-title"> Programming MCQs Practice</h5>
                    <p class="card-text">#LearnWithCommunity</p>
                  </div>
                  <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_mcqs">
                      <h6 className="btn border border-secondary text-weight-bold">
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
        {/* Images Start */}
        <div className="container-fluid p-0 mt-5">
          <div className="row">
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
                  <h1 className="text-center display-4 mt-5">
                    Free Learning Material
                  </h1>
                </div>
                <div className="card-body border border-white bg-white">
                  <div className="card-title text-primary">
                    <h5 className="p-5">
                      Datacode Provides you the Best Learning Content of your
                      faviorate Technologies to Improve your Skills and Make
                      your Learning Easy and Quicke
                    </h5>
                  </div>
                  <center>
                    <Link to="/home">
                      <button className="btn btn-lg btn-primary">
                        Start Learning
                      </button>
                    </Link>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0 mt-5">
          <div className="row">
            <div className="col-md-6 text-center">
              <div className="card border border-white bg-white">
                <div clsssName="card-header border border-white bg-white ">
                  <h1 className="text-center display-4">
                    Learn From the Best Sources
                  </h1>
                </div>
                <div className="card-body border border-white bg-white">
                  <div className="card-title text-center text-secondary">
                    <h5 className="p-5">
                      Datacode Collected the Best Learning Resources for
                      Beginners to make the track more easy and helps to grow
                      the technical skills.
                    </h5>
                  </div>
                  <center>
                    <Link to="/home">
                      <button className="btn btn-lg btn-warning ">
                        Explore Content
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
        {/* ... starting Lower Cards -5  .........................................*/}
        <div className="container-fluid ">
          <div className="row">
            <div className="col p-0">
              <div class="card-deck mt-5 p-2">
                <div class="card border border-white">
                  <center>
                    <FontAwesomeIcon
                      icon={faNewspaper}
                      size="4x"
                      color="gold"
                    />
                  </center>
                  <div class="card-body">
                    <h5 class="card-title">Communnity Blogs</h5>
                    <p class="card-text">
                      Read Our Technical Blogs for Beginners By Experts
                    </p>
                  </div>
                  <div class="card-footer border border-white bg-white">
                    <div className="row">
                      <div className="col-4"></div>
                      <div className="col text-right ">
                        <Link to="/index_articles">
                          <h6 className="btn btn-default border border-light text-secondary">
                            Read More
                          </h6>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card border border-white">
                  <center>
                    <FontAwesomeIcon
                      icon={faLaptopCode}
                      size="4x"
                      color="orange"
                    />
                  </center>
                  <div class="card-body">
                    <h5 class="card-title text-secondary">
                      Weekly Code Challange
                    </h5>
                    <p class="card-text">#LearnWithCommunity</p>
                  </div>
                  <div class="card-footer border border-white bg-white">
                    <div className="row">
                      <div className="col-4"></div>
                      <div className="col text-right ">
                        <Link to="/index_code_challange">
                          <h6 className="btn btn-default border border-light text-secondary">
                            Read More
                          </h6>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card border border-white">
                  <center>
                    <FontAwesomeIcon icon={faTools} size="4x" color="gray" />
                  </center>
                  <div class="card-body">
                    <h5 class="card-title"> Technologies </h5>
                    <p class="card-text">#LearnWithCommunity</p>
                  </div>
                  <div class="card-footer border border-white bg-white">
                    <div className="row">
                      <div className="col-4"></div>
                      <div className="col text-right ">
                        <Link to="/index_technologies">
                          <h6 className="btn btn-default border border-light text-secondary">
                            Read More
                          </h6>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card border border-white">
                  <center>
                    <FontAwesomeIcon
                      icon={faConnectdevelop}
                      size="4x"
                      color="green"
                    />
                  </center>
                  <div class="card-body">
                    <h5 class="card-title">Event & Contests</h5>
                    <p class="card-text">#LearnWithCommunity</p>
                  </div>
                  <div class="card-footer border border-white bg-white">
                    <div className="row">
                      <div className="col-4"></div>
                      <div className="col text-right ">
                        <Link to="/index_books">
                          <h6 className="btn btn-default border border-light text-secondary">
                            Read More
                          </h6>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card border border-white">
                  <center>
                    <FontAwesomeIcon icon={faFileCode} size="4x" />
                  </center>
                  <div class="card-body">
                    <h5 class="card-title"> Programming Practice CODE</h5>
                    <p class="card-text">#LearnWithCommunity</p>
                  </div>
                  <div class="card-footer border border-white bg-white">
                    <div className="row">
                      <div className="col-4"></div>
                      <div className="col text-right ">
                        <Link to="/index_programming_questions">
                          <h6 className="btn btn-default border border-light text-secondary">
                            Read More
                          </h6>
                        </Link>
                      </div>
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

export default MainComponent;
