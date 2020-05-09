import React, { Component } from "react";
import { Link } from "react-router-dom";
class PostCard extends Component {
  state = {};

  render() {
    return (
      <>
        <div class="card border border-white shadow">
          <img
            className=" card-img-top mx-auto img-fluid img-circle d-block"
            src={require("../../assets/images/" + this.props.imgsource)}
            alt="avatar"
          />

          <div class="card-body">
            <h5 class="card-title">{this.props.title}</h5>
            <p class="card-text">{this.props.paragraph}</p>
          </div>
          <div class="card-footer border border-white bg-white shadow">
            <div className="row">
              <div className="col text-right">
                <Link to={this.props.link}>
                  <h6 className="btn btn-default border border-secondary shadow text-secondary">
                    Read More
                  </h6>
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
