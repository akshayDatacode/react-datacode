import React, { Component } from "react";
import { FacebookProvider, Like } from "react-facebook";

class RoadMapCard extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="card mt-3 p-2">
          <div className="row pl-0 pr-0 ml-0 mr-0">
            {/* <div className="col-2 d-none d-sm-block">
              <img
                className="card-img-top mx-auto img-fluid img-circle d-block"
                src={require("../../../assets/images/" + this.props.imgsource)}
                alt="avatar"
              />
            </div> */}
            <div className="col-3 border border-white col-md-1 m-0 p-0">
              <div className="card m-0 p-0 border border-white">
                <FacebookProvider appId="682148765561455">
                  <Like
                    href={this.props.link}
                    layout="box_count"
                    size="large"
                  />
                </FacebookProvider>
              </div>
            </div>
            <div className="col-9 ml-md-5">
              <h6 style={{ color: "#072C71" }}>{this.props.title}</h6>

              <snap className="badge badge-success">{this.props.tag1}</snap>
              <snap className="ml-2 badge badge-danger">{this.props.tag2}</snap>
              <snap className="ml-2 badge badge-primary">
                {this.props.tag3}
              </snap>
              <snap className="ml-3 text-secondary">{this.props.source}</snap>
              <div>
                <a href={this.props.link} target="_blank">
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
