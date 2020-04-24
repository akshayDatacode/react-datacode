import React, { Component } from "react";
import FbLikeShare from "../FbLikeShare";

class HeaderCard extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row mb-3">
          <div className="col">
            <div
              className="card "
              style={{
                backgroundColor: this.props.color,
              }}
            >
              <div className="card-body">
                <h1
                  className="card-title"
                  style={{
                    color: this.props.textcolor,
                  }}
                >
                  {this.props.title}
                </h1>
                <FbLikeShare />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HeaderCard;
