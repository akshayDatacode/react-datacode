import React, { Component } from "react";
class LearningPlatformCard extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="card mb-5 border-0 shadow">
          <div className="card-header p-1 ml-1 bg-white border-0">
            <snap className="text-right text-white badge badge-primary">
              {this.props.tag1}
            </snap>
            <snap className="text-right text-white ml-2 badge badge-success">
              {this.props.tag2}
            </snap>
            <snap className="text-right text-white ml-2 badge badge-danger">
              {this.props.tag3}
            </snap>
          </div>
          <img
            className=" card-img-top mx-auto img-fluid img-circle d-block"
            src={require("../../../assets/images/" + this.props.imgsource)}
            alt="avatar"
          />
          <div className="card-body p-2">
            <h5 class="card-title">{this.props.title}</h5>
            <p class="card-text">{this.props.paragraph}</p>
          </div>
          <div class="card-footer border border-white bg-white p-0 m-1">
            <div className="row">
              <div className="col text-right">
                <a href={this.props.link} target="_blank">
                  <h6 className="mb-1 mr-2">Start Learning</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LearningPlatformCard;
