import React, { Component } from "react";
import Indexposts from "./posts/IndexPosts";
import HeaderBannerSection from "./HeaderBannerSection";
import RightSideSection from "../right_section/RightSideSection";
class HomeComponent extends Component {
  state = {};
  render() {
    return (
      <>
        <HeaderBannerSection imgsource="headermain.jpeg" />

        {/* Index Posts */}
        <div className="row">
          <div className="col-md-9">
            <Indexposts />
          </div>
          <div className="col-md-3">
            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default HomeComponent;
