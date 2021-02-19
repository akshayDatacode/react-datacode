import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../assets/css/Carousel.css";

class CarouselComponent extends Component {
  state = {};
  render() {
    return (
      <>
        <Carousel
          nextIcon=""
          nextLabel=""
          prevIcon=""
          prevLabel=""
          indicators={false}
          id="carousel"
          className="p-0 mt-0"
        >
          <Carousel.Item>
            <div className="carousel-card pt-5 pb-3 pb-0 px-md-5 px-2 text-center">
              <div className="text-left px-3 px-md-0">
                <h1 className="mt-3">
                  {`WelCome ${this.props.name && `Back, ${this.props.name}`} `}
                </h1>
                <h1 className="heading-second">
                  to the Awesome Learning Portal.... :)
                </h1>
                <h2>We are your learning assistant</h2>
              </div>
              <div className="col-12 col-md-6 qoute text-left">
                <h6>
                  <q>
                    The Pessimist Sees Difficulty In Every Opportunity, The
                    Optimist Sees Opportunity In Every Difficulty
                  </q>
                </h6>
                <i>- Akshay Mandliya</i>
              </div>
              <Link to="/signup">
                <button className="btn get-started-button shadow-lg">
                  Get Started
                </button>
              </Link>
            </div>
          </Carousel.Item>
          {/* <Carousel.Item>
            <div className="card text-center border border-white">
              <img
                className=" card-img d-block w-100"
                src={require("../../assets/images/datacodeheader1.jpeg")}
                alt="First slide"
              />
            </div>
          </Carousel.Item> */}
          {/* <Carousel.Item>
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
          </Carousel.Item> */}
        </Carousel>
      </>
    );
  }
}

CarouselComponent.defaultProps = {
  name: "",
};

CarouselComponent.propTypes = {
  name: PropTypes.string,
};

export default CarouselComponent;
