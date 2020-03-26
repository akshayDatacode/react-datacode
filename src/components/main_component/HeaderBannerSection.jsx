import React, { Component } from "react";
import { Image, Card, Button, Carousel } from "react-bootstrap";
class HeaderBannerSection extends Component {
  state = {};
  render() {
    return (
      <>
        {/* Card Code */}

        <Card className="bg-dark text-white">
          <Card.Img
            src={require("../../assets/images/" + this.props.imgsource)}
            alt="Card image"
          />
        </Card>
      </>
    );
  }
}

export default HeaderBannerSection;
