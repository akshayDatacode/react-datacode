import React, { Component } from "react";
import Indexposts from "./posts/IndexPosts";
import HeaderBannerSection from "./HeaderBannerSection";

class HomeComponent extends Component {
  state = {};
  render() {
    return (
      <>
        <HeaderBannerSection imgsource="headermain.jpeg" />

        {/* Index Posts */}
        <div className="row">
          <div className="col">
            <Indexposts />
          </div>
        </div>
      </>
    );
  }
}

export default HomeComponent;
