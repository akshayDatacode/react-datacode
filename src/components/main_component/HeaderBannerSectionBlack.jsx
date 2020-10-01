import React, { Component } from "react";
import { Image, Card, Button, Carousel } from "react-bootstrap";
class HeaderBannerSectionBlack extends Component {
  state = {};
  render() {
    return (
      <>
        {/* Card Code */}

        <img
          className=" card-img-top mx-auto img-fluid img-circle d-block"
          src={require("../../assets/images/" + this.props.imgsource)}
          alt="avatar"
        />
      </>
    );
  }
}

export default HeaderBannerSectionBlack;
