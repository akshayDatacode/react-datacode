import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class CarouselComponent extends Component {
  state = {};
  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <div className="card text-center ">
              <img
                className=" card-img d-block w-100"
                src={require("../../assets/images/webcover1.jpeg")}
                alt="First slide"
              />
              <div className="card-img-overlay d-block d-md-none p-1">
                <h3>Datacode.in</h3>
                <p>We Write Codes</p>
                <Link to="/home">
                  <div className="btn btn-xs btn-default border border-black mt-0 ">
                    Getting Started
                  </div>
                </Link>
              </div>
              <div className="card-img-overlay d-none d-md-block">
                <h1 className="display-1 mt-5">DataCode.in</h1>
                <p>We Write Codes</p>
                <Link to="/home">
                  <div className="btn btn-lg btn-primary mt-5">
                    Getting Started
                  </div>
                </Link>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="card text-center">
              <img
                className=" card-img d-block w-100"
                src={require("../../assets/images/webcover3.jpeg")}
                alt="First slide"
              />
              <div className="card-img-overlay d-block d-md-none p-1">
                <h3>Datacode.in</h3>
                <p>We Write Codes</p>
                <Link to="/home">
                  <div className="btn btn-xs btn-default border border-black mt-0 ">
                    Start Practice
                  </div>
                </Link>
              </div>
              <div className="card-img-overlay d-none d-md-block">
                <h1 className="display-1 mt-5">DataCode.in</h1>
                <p>We Write Codes</p>
                <Link to="/home">
                  <div className="btn btn-lg btn-warning mt-5">
                    Start Practice
                  </div>
                </Link>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="card text-center">
              <img
                className=" card-img d-block w-100"
                src={require("../../assets/images/webcover2.jpeg")}
                alt="First slide"
              />
              <div className="card-img-overlay d-block d-md-none p-1">
                <h3>Datacode.in</h3>
                <p>We Write Codes</p>
                <Link to="/home">
                  <div className="btn btn-xs btn-default border border-black mt-0 ">
                    Register Now
                  </div>
                </Link>
              </div>
              <div className="card-img-overlay d-none d-md-block">
                <h1 className="display-1 mt-5">DataCode.in</h1>
                <p>We Write Codes</p>
                <Link to="/home">
                  <div className="btn btn-lg btn-success mt-5">
                    Register Now
                  </div>
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
