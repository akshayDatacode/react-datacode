import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class CarouselComponent extends Component {
  state = {};
  render() {
    return (
      <>
        <Carousel indicators={false}>
          <Carousel.Item>
            <div className="card text-center border border-white">
              <a href="https://bit.ly/datacodelive" target="_blank">
                <img
                  className=" card-img d-block w-100"
                  src={require("../../assets/images/datacodelive.png")}
                  alt="First slide"
                />
              </a>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="card text-center border border-white">
              <img
                className=" card-img d-block w-100"
                src={require("../../assets/images/datacodeheader1.jpeg")}
                alt="First slide"
              />

              {/* <div className="card-img-overlay d-none d-md-block">
                <h1 className="display-1 mt-5 text-weight-bold">DataCode.in</h1>
                <p>We Write Codes</p>
                <Link to="/home">
                  <div className="btn btn-lg btn-success mt-5">
                    Register Now
                  </div>
                </Link>
              </div> */}
              {/* <div className="card-img-overlay d-block d-sm-none m-0 p-0 text-left">
                <h2 className="text-weight-bold p-0 ">DataCode.in</h2>
                <p>Find | Learn | Code</p>
                <Link to="/home">
                  <div className="btn btn-success">Getting Start</div>
                </Link>
              </div> */}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="card text-center border border-white">
              <img
                className=" card-img d-block w-100"
                src={require("../../assets/images/datacodeheader2.jpeg")}
                alt="First slide"
              />

              <div className="card-img-overlay d-none d-md-block text-right text-align-center ml-5 mr-1 pl-5 mr-1 mt-5 pr-1">
                <h2 className="h1 display-5 m-5 pl-5 pr-0  text-weight-bold">
                  Datacode helps people to provide Online Learning Tutorials and
                  Courses from all over the Internet.
                </h2>
                <center>
                  <Link to="/home">
                    <button className="btn btn-lg btn-default border border-primary rounded-0 pl-5 pr-5 pt-3 pb-3">
                      <h5 className="text-primary">Getting Started</h5>
                    </button>
                  </Link>
                </center>
              </div>
              <div className="card-img-overlay d-block d-sm-none m-0 p-0 text-right">
                <h2 className="text-weight-bold p-0 ">Free Learning</h2>
                <p>Find | Learn | Code</p>
                <Link to="/home">
                  <div className="btn btn-warning">Getting Start</div>
                </Link>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default CarouselComponent;
