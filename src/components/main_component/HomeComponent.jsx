import React, { Component } from "react";
import Indexposts from "./posts/IndexPosts";
import HeaderBannerSection from "./HeaderBannerSection";
import RightSideSection from "../right_section/RightSideSection";
import FooterComponentUpper from "../footer_component/FooterComponentUpper";
class HomeComponent extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <HeaderBannerSection imgsource="headermain.jpeg" />
        {/* Index Posts */}
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-8 p-0">
            <Indexposts />
          </div>
          <div className="col-md-3 ">
            <RightSideSection />
          </div>
        </div>
        <FooterComponentUpper />
      </>
    );
  }
}

export default HomeComponent;
