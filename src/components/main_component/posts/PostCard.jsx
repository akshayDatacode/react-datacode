import React, { Component } from "react";
class PostCard extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="card bg-light shadow rounded">
          <div class="card-footer"></div>
          <img
            className=" card-img-top mx-auto img-fluid img-circle d-block"
            src={require("../../../assets/images/" + this.props.require)}
            alt="avatar"
          />
          <div className="card-body">
            <h5 className="card-title text-info">{this.props.titelHead}</h5>
            <p clsssName=" card-text text-light ">{this.props.paragraph}</p>
          </div>
          <div class="card-footer ">
            <a href="#" class="btn btn-right btn-primary ">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default PostCard;
