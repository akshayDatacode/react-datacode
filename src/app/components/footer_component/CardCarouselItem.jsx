import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint, faUserNinja } from "@fortawesome/free-solid-svg-icons";
class CardCarouselItem extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="card text-center shadow">
          <img
            className=" card-img-top mx-auto img-fluid img-circle d-block"
            src={require("../../../assets/images/" + this.props.imgsource)}
            alt="avatar"
          />
          <h6 className="text-center mt-2">{this.props.title}</h6>
          <div
            className="card-footer p-1 mt-1"
            style={{ backgroundColor: "#072C71" }}
          >
            <Link to={this.props.link}>
              <div
                className="btn btn-primary btn-block p-0 m-0 border-0"
                style={{ backgroundColor: "#072C71" }}
              >
                <h6 className="mt-1 p-0">
                  Start Learning
                  <FontAwesomeIcon icon={faUserNinja} className="ml-1" />
                </h6>
              </div>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default CardCarouselItem;
