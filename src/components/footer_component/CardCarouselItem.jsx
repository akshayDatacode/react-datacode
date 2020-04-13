import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
class CardCarouselItem extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="card text-center">
          <img
            className=" card-img-top mx-auto img-fluid img-circle d-block"
            src={require("../../assets/images/" + this.props.imgsource)}
            alt="avatar"
          />
          <h6 className="text-center mt-2">{this.props.title}</h6>
          <div className="card-footer">
            <Link to={this.props.link}>
              <div className="btn btn-primary btn-lg btn-block p-0">
                <h6 className="mt-1">Start Learning</h6>
              </div>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default CardCarouselItem;
