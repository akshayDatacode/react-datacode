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
              <img
                className=" card-img d-block w-100"
                src={require("../../assets/images/datacodeheader1.jpeg")}
                alt="First slide"
              />
              <div className="card-img-overlay d-none d-md-block"></div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="card text-center border border-white">
              <img
                className=" card-img d-block w-100"
                src={require("../../assets/images/datacodeheader2.jpeg")}
                alt="First slide"
              />

              <div className="card-img-overlay d-none d-md-block">
                <h1 className="h1 display-1 mt-5  ml-5 text-weight-bold">
                  DataCode.in
                </h1>
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
            <div className="card text-center border border-white">
              <img
                className=" card-img d-block w-100"
                src={require("../../assets/images/datacodeheader3.jpeg")}
                alt="First slide"
              />

              <div className="card-img-overlay d-none d-md-block">
                <h1 className="display-1 mt-5 text-weight-bold">DataCode.in</h1>
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
