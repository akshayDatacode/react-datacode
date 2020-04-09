import React, { Component } from "react";
import { Link } from "react-router-dom";
class CodeChallangeShowCard extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="card text-center mt-2">
          <img
            className=" card-img-top mx-auto img-fluid img-circle d-block"
            src={require("../../../assets/images/" + this.props.imgsource)}
            alt="avatar"
          />
          <div class="card-img-overlay">
            <Link to={this.props.link}>
              <h4 className="text-white">{this.props.title}</h4>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default CodeChallangeShowCard;
