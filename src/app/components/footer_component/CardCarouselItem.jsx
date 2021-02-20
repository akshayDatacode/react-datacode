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
        <div className="card post-card text-center shadow">
          <img
            className=" card-img-top mx-auto img-fluid img-circle d-block"
            src={require("../../../assets/images/" + this.props.imgsource)}
            alt="avatar"
          />
          <h5 className="text-center mt-2">{this.props.title}</h5>
          <div
            className="card-footer p-1 mt-1"
            style={{ backgroundColor: "#30006b" }}
          >
            <Link to={this.props.link}>
              <div
                className="btn btn-block p-0 m-0 border-0"

              >
                <span className="mt-1 p-0" style={{
                  color: 'white'
                }}>
                  Start Learning
                  <i className="ml-2 fal fa-long-arrow-right" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default CardCarouselItem;
