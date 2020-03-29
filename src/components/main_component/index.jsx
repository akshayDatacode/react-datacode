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
import { faChessQueen } from "@fortawesome/free-solid-svg-icons";

class MainComponent extends Component {
  state = {};
  render() {
    return (
      <>
        <CarouselComponent />

        <div className="row d-block d-md-none">
          <div className="col center">
            <center>
              <a
                variant="primary"
                href="/react-datacode/#/home"
                className=" btn btn-warning btn-lg"
              >
                Start Learning
              </a>
            </center>
          </div>
        </div>

        <div className="container-fluid border border-primary">
          <div class="row m-5">
            <div class="col-md-3 ml-5 mr-5">
              <div className="card-fluid bg-light shadow rounded m-3 pt-3">
                <center>
                  <FontAwesomeIcon icon={faCodepen} size="10x" />
                </center>
                <div className="card-body">
                  <h5 className="card-title text-info">Code Pen</h5>
                  <p clsssName=" card-text text-light ">
                    This Card is Just only using herf="/home"
                  </p>
                </div>

                <div className="row">
                  <div className="col-6"></div>
                  <div className="col-5 mb-2  pr-2">
                    <a to="/home">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 ml-5 mr-5">
              <div className="card-fluid bg-light shadow rounded m-3 pt-3">
                <center>
                  <FontAwesomeIcon icon={faFirstOrder} size="10x" />
                </center>
                <div className="card-body">
                  <h5 className="card-title text-info">Code Pen</h5>
                  <p clsssName=" card-text text-light ">
                    This Card is Using LINK TAG LINK to = "/home"
                  </p>
                </div>

                <div className="row">
                  <div className="col-6"></div>
                  <div className="col-5 mb-2 pr-2">
                    <Link to="/home">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 ml-5 mr-5">
              <div className="card-fluid bg-light shadow rounded m-3 pt-3">
                <center>
                  <FontAwesomeIcon icon={faChessQueen} size="10x" />
                </center>
                <div className="card-body">
                  <h5 className="card-title text-info">Datacode Kings</h5>
                  <p clsssName=" card-text text-light ">
                    This Card is Using href = "/react-datacode/#/home" so Check
                    all Once
                  </p>
                </div>

                <div className="row">
                  <div className="col-6"></div>
                  <div className="col-5 mb-2 pr-2">
                    <a href="/react-datacode/#/home">Read More</a>
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
