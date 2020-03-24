import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Indexposts from "./posts/IndexPosts";
import HeaderBannerSection from "./HeaderBannerSection";
class MainComponent extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row ">
          <div className="col-12 mb-5">
            <HeaderBannerSection imgsource="h2.jpeg" />
          </div>
          <div className="row">
            <div className="col-1"></div>

            <div className="col-10">
              <Indexposts />
            </div>

            <div className="col-1"></div>
          </div>
        </div>
      </>
    );
  }
}

export default MainComponent;
