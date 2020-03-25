import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import Indexposts from "./posts/IndexPosts";
import HeaderBannerSection from "./HeaderBannerSection";
import CarouselComponent from "./CarouselComponent";
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
                href="/home"
                className=" btn btn-warning btn-lg"
              >
                Start Learning
              </a>
            </center>
          </div>
        </div>
      </>
    );
  }
}

export default MainComponent;
