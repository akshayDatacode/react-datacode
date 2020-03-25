import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Indexposts from "./posts/IndexPosts";
import HeaderBannerSection from "./HeaderBannerSection";
class MainComponent extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row">
          <div className="col border border-primary ">
            <HeaderBannerSection imgsource="h2.jpeg" interlink="#btn_header" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Indexposts />
          </div>
        </div>
      </>
    );
  }
}

export default MainComponent;
