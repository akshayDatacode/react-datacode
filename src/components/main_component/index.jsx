import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import Indexposts from "./posts/IndexPosts";
import HeaderBannerSection from "./HeaderBannerSection";
import CarouselComponent from "./CarouselComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  fab,
  faCodepen,
  faDashcube,
  faHtml5,
  faJava,
  faFirstOrder
} from "@fortawesome/free-brands-svg-icons";
import {
  faChessQueen,
  faListOl,
  faListAlt,
  faUser,
  faUsers,
  faTerminal
} from "@fortawesome/free-solid-svg-icons";

class MainComponent extends Component {
  state = {};
  render() {
    return (
      <>
        <CarouselComponent />

        <div className="container-fluid ">
          <div className="row">
            <div className="col">
              <div class="card-deck mt-3">
                <div class="card border border-white">
                  <center>
                    <FontAwesomeIcon icon={faTerminal} size="8x" />
                  </center>
                  <div class="card-body">
                    <h5 class="card-title">We Write Codes</h5>
                    <p class="card-text">
                      We Love to Code and this is the best way to express our
                      love to Computer Science Wolrd.
                    </p>
                  </div>
                  <div class="card-footer border border-white bg-white">
                    <div className="row">
                      <div className="col-6"></div>
                      <div className="col-5 text-right ">
                        <Link to="/home">Read More</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card border border-white">
                  <center>
                    <FontAwesomeIcon icon={faUsers} size="10x" />
                  </center>
                  <div class="card-body">
                    <h5 class="card-title">Programming Interview FAQs</h5>
                    <p class="card-text">
                      This card has supporting text below as a natural lead-in
                      to additional content.dfdfldfldfldkfldkfldkfldkfdlkfdlfkdl
                    </p>
                  </div>
                  <div class="card-footer border border-white bg-white">
                    <div className="row">
                      <div className="col-6"></div>
                      <div className="col-5 text-right ">
                        <Link to="/home">Read More</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card border border-white">
                  <center>
                    <FontAwesomeIcon icon={faListAlt} size="10x" />
                  </center>
                  <div class="card-body">
                    <h5 class="card-title"> Programming MCQs Practice</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </p>
                  </div>
                  <div class="card-footer border border-white bg-white">
                    <div className="row">
                      <div className="col-6"></div>
                      <div className="col-5 text-right ">
                        <Link to="/home">Read More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>First -3  Cards Ending  ...............*/}

        {/* Images Start */}
        <div className="container-fluid ">
          <div className="row m-2">
            <div className="card-deck border border-light p-2">
              <div className="col-md-6">
                <div className="card">
                  <img
                    className=" card-img-top mx-auto img-fluid img-circle d-block"
                    src={require("../../assets/images/indexcover1.jpeg")}
                    alt="avatar"
                  />
                </div>
              </div>
              <div className="card border border-white bg-white">
                <div clsssName="card-header border border-white bg-white ">
                  <h1 className="text-center p-2 display-1">WE Love Code</h1>
                </div>
                <div className="card-body border border-white bg-white">
                  <div className="card-title">
                    Technical Interview Question Practice
                  </div>
                  <center>
                    <button className="btn btn-lg btn-primary m-2">
                      Getting Start
                    </button>
                  </center>
                </div>
              </div>
            </div>
          </div>
          <div className="row m-2">
            <div className="card-deck border border-light p-2">
              <div className="card border border-white bg-white">
                <div clsssName="card-header border border-white bg-white ">
                  <h1 className="text-center p-2 display-1">Keep Learning</h1>
                </div>
                <div className="card-body border border-white bg-white">
                  <div className="card-title">
                    Technical Interview Question Practice
                  </div>
                  <center>
                    <button className="btn btn-lg btn-warning m-2">
                      Start Practice
                    </button>
                  </center>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <img
                    className=" card-img-top mx-auto img-fluid img-circle d-block"
                    src={require("../../assets/images/indexcover2.jpeg")}
                    alt="avatar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* IMages End */}

        {/* ... starting Lower Cards -4  .........................................*/}
        <div className="container-fluid ">
          <div className="row">
            <div class="card-deck mt-5 p-2">
              <div class="card border border-white">
                <center>
                  <FontAwesomeIcon icon={faTerminal} size="8x" />
                </center>
                <div class="card-body">
                  <h5 class="card-title">We Write Codes</h5>
                  <p class="card-text">
                    We Love to Code and this is the best way to express our love
                    to Computer Science Wolrd.
                  </p>
                </div>
                <div class="card-footer border border-white bg-white">
                  <div className="row">
                    <div className="col-4"></div>
                    <div className="col text-right ">
                      <Link to="/python_mcqs">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card border border-white">
                <center>
                  <FontAwesomeIcon icon={faUsers} size="8x" />
                </center>
                <div class="card-body">
                  <h5 class="card-title">Programming Interview FAQs</h5>
                  <p class="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.dfdfldfldfldkfldkfldkfldkfdlkfdlfkdl
                  </p>
                </div>
                <div class="card-footer border border-white bg-white">
                  <div className="row">
                    <div className="col-4"></div>
                    <div className="col text-right ">
                      <Link to="/home">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card border border-white">
                <center>
                  <FontAwesomeIcon icon={faListAlt} size="8x" />
                </center>
                <div class="card-body">
                  <h5 class="card-title"> Programming MCQs Practice</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has eve
                  </p>
                </div>
                <div class="card-footer border border-white bg-white">
                  <div className="row">
                    <div className="col-4"></div>
                    <div className="col text-right ">
                      <Link to="/home">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card border border-white">
                <center>
                  <FontAwesomeIcon icon={faListAlt} size="8x" />
                </center>
                <div class="card-body">
                  <h5 class="card-title"> Programming MCQs Practice</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. .
                  </p>
                </div>
                <div class="card-footer border border-white bg-white">
                  <div className="row">
                    <div className="col-4"></div>
                    <div className="col text-right ">
                      <Link to="/home">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card border border-white">
                <center>
                  <FontAwesomeIcon icon={faListAlt} size="8x" />
                </center>
                <div class="card-body">
                  <h5 class="card-title"> Programming MCQs Practice</h5>
                  <p class="card-text">
                    This is a wider card equal height action.
                  </p>
                </div>
                <div class="card-footer border border-white bg-white">
                  <div className="row">
                    <div className="col-4"></div>
                    <div className="col text-right ">
                      <Link to="/home">Read More</Link>
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
