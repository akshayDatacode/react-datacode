import React, { Component } from "react";
import { Link } from "react-router-dom";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class RecommendPost extends Component {
  state = {};
  render() {
    return (
      <>
        {/* FOr Popular POst */}

        {/* Recommend Post */}
        <div className="container-fluid   mb-2 ">
          <div className="card border border-white">
            <div className="row">
              <div className="col-4 p-0 m-0">
                <img
                  className=" card-img-top mx-auto img-fluid img-circle d-block "
                  src={require("../../assets/images/" + this.props.imgsource)}
                  alt="avatar"
                />
              </div>
              <div className="col ">
                <h6 class="card-title text-left" style={{ color: "#072C71" }}>
                  {this.props.RecPostHading}
                </h6>
                <Link to={this.props.link} className="font-weight-bold">
                  <h6
                    className="btn btn-sm btn-primary border mt-2"
                    style={{ backgroundColor: "#072C71" }}
                  >
                    Start Learning
                    <FontAwesomeIcon icon={faUserNinja} className="ml-1" />
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

export default RecommendPost;
