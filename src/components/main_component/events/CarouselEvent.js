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
              <a
                href="https://bit.ly/datacode_beginner_code_challenge"
                target="_blank"
              ></a>
              <img
                className=" card-img d-block w-100"
                src={require("../../../assets/images/beginners_coding_banner.jpeg")}
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
