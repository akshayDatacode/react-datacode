import React, { Component } from "react";
import Indexposts from "./posts/IndexPosts";
import HeaderBannerSection from "./HeaderBannerSection";
import RightSideSection from "../right_section/RightSideSection";
import { Helmet } from "react-helmet";

class HomeComponent extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Helmet>
          <title>Datacode | Computer Science Learning Community</title>
        </Helmet>
        <HeaderBannerSection imgsource="datacodelive.png" />
        {/* Index Posts */}
        <div className="row ">
          <div className="col-md-1 d-none d-sm-block"></div>
          <div className="col-md-8 p-0">
            <Indexposts />
          </div>
          <div className="col-md-3 ">
            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default HomeComponent;
