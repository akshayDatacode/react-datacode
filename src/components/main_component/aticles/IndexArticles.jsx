import React, { Component } from "react";
import HeaderBannerSection from "../HeaderBannerSection";
import { Link } from "react-router-dom";
class IndexArticles extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <HeaderBannerSection imgsource="pythontech.jpeg" />
        <Link to="/prog_lan_blog"> Programming Languages Blog</Link>
      </>
    );
  }
}

export default IndexArticles;
