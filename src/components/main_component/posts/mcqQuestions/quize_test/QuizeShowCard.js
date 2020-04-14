import React, { Component } from "react";
import { Link } from "react-router-dom";
class QuizeShowCard extends Component {
  state = {};

  //   getColorChange = () => {
  //     let classes = "";
  //     if (this.props.level == "Beginner") {
  //       classes = "text-success";
  //     } else if (this.state.status == "Medium") {
  //       classes = "text-primary";
  //     } else if (this.state.status == "advance") {
  //       classes = "text-danger";
  //     }
  //     return classes;
  //   };
  render() {
    return (
      <>
        <div className="card  p-2">
          <h6 className="text-center">{this.props.title}</h6>
          <div className="card-body p-1">
            <div class="row">
              <div className="col-5 text-left">
                <img
                  className=" card-img-top mx-auto img-fluid img-circle d-block"
                  src={require("../../../../../assets/images/" +
                    this.props.imgsource)}
                  alt="avatar"
                />
              </div>
              <div className="col-7 text-right">
                <h5 className="text-secondary">{this.props.level}</h5>
                <Link to={this.props.link}>
                  <h6 className="btn border border-secondary text-secondary mt-2 mb-0 p-1">
                    Start Quize
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

export default QuizeShowCard;
