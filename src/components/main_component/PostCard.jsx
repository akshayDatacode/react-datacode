import React, { Component } from "react";
import { Link } from "react-router-dom";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class PostCard extends Component {
  state = {};

  render() {
    return (
      <>
        <div class="card post-card  border border-white shadow mb-3">
          <Link to={this.props.link}>
            <img
              className=" card-img-top mx-auto img-fluid img-circle d-block"
              src={require("../../assets/images/" + this.props.imgsource)}
              alt="avatar"
            />
          </Link>
          <div class="card-body">
            <Link to={this.props.link}>
              <h5 class="card-title" style={{ color: "#072C71" }}>
                {this.props.title}
              </h5>
            </Link>
            <p class="card-text">{this.props.paragraph}</p>
          </div>
          <div class="card-footer border border-white bg-white shadow pt-1">
            <div className="row m-0">
              <div className="col text-right p-0 align-itmes-center">
                <Link to={this.props.link} >
                  <span className="align-itmes-center">Start Learning <i className="fal fa-long-arrow-right" /></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PostCard;
