import React, { Component } from "react";
class RoadMapCard extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="card mt-3 p-2">
          <div className="row">
            <div className="col-2 d-none d-sm-block">
              <img
                className="card-img-top mx-auto img-fluid img-circle d-block"
                src={require("../../../assets/images/" + this.props.imgsource)}
                alt="avatar"
              />
            </div>
            <div className="col">
              <h6>{this.props.title}</h6>
              <div className="badge badge-success">{this.props.tag1}</div>
              <div className="badge badge-danger">{this.props.tag2}</div>
              <div className="badge badge-primary">{this.props.tag3}</div>
              <div>
                <a href={this.props.link}>
                  <h6>Start Learning</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RoadMapCard;
