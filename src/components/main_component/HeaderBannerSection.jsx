import React, { Component } from "react";
import { Image, Card, Button } from "react-bootstrap";
class HeaderBannerSection extends Component {
  state = {};
  render() {
    return (
      <>
        <Card className="bg-dark text-white">
          <Card.Img
            src={require("../../assets/images/" + this.props.imgsource)}
            alt="Card image"
          />
          <Card.ImgOverlay>
            <div className="col-sm-3">
              <Card.Title className="d-none d-sm-block">Datacode.in</Card.Title>
              <a
                variant="primary"
                href={this.props.interlink}
                className=" btn btn-warning btn-lg"
              >
                Start Learning
              </a>
            </div>
          </Card.ImgOverlay>
        </Card>
      </>
    );
  }
}

export default HeaderBannerSection;
