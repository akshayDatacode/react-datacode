import React, { Component } from "react";
class Certificate extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="card">
          <div className="card-header p-1 m-1">
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
          <div className="card-body">
            <h5 class="card-title">{this.props.title}</h5>
            <p class="card-text">{this.props.paragraph}</p>
          </div>
          <div class="card-footer border border-white bg-white">
            <div className="row">
              <div className="col text-right">
                <a href={this.props.link} target="_blank">
                  <h6>Start Certification</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Certificate;
