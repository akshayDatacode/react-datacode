import React, { Component } from "react";
import { Image, Card, Button, Carousel } from "react-bootstrap";
class HeaderBannerSection extends Component {
  state = {};
  render() {
    return (
      <>
        {/* Card Code */}

        <div className="card text-white border border-white">
          <img
            className=" card-img-top mx-auto img-fluid img-circle d-block"
            src={require("../../assets/images/" + this.props.imgsource)}
            alt="avatar"
          />
        </div>
      </>
    );
  }
}

export default HeaderBannerSection;
