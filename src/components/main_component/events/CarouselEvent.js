import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class CarouselEvent extends Component {
  state = {};
  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <div className="card text-center p-0 m-0">
              <img
                className=" card-img d-block w-100"
                src={require("../../../assets/images/eventcover1.jpeg")}
                alt="First slide"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default CarouselEvent;
