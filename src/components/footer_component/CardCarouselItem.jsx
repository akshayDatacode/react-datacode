import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
class CardCarouselItem extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="card text-center p-2 ">
          <img
            className=" card-img-top mx-auto img-fluid img-circle d-block"
            src={require("../../assets/images/" + this.props.imgsource)}
            alt="avatar"
          />
          <h6 className="text-left">{this.props.title}</h6>
          <Link to={this.props.link}>
            <div className="btn btn-primary">Start Learning</div>
          </Link>
        </div>
      </>
    );
  }
}

export default CardCarouselItem;
