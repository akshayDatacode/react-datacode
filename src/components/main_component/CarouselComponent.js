import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
class CarouselComponent extends Component {
  state = {};
  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../assets/images/webcover1.jpeg")}
              alt="First slide"
            />
            <Carousel.Caption className="text-dark">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../assets/images/webcover2.jpeg")}
              alt="Third slide"
            />
            <Carousel.Caption className="text-dark">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../assets/images/webcover3.jpeg")}
              alt="Third slide"
            />
            <Carousel.Caption className="text-dark ">
              <a
                variant="primary"
                href="/home"
                className=" btn btn-warning btn-lg m-5"
              >
                Start Learning
              </a>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default CarouselComponent;
