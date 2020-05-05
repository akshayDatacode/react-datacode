import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLevelUpAlt,
  faChartBar,
  faClock,
  faCoins,
  faTags,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
class CertificateShowCard extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="card mt-4 shadow">
          <div className="card-body">
            <h3 className="mb-4" style={{ color: "#072C71" }}>
              {this.props.title}
            </h3>
            <div className="row">
              <div className="col-6">
                <FontAwesomeIcon icon={faChartBar} /> {this.props.level}
              </div>
              <div className="col-6">
                <FontAwesomeIcon icon={faClock} /> {this.props.duration}
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-6">
                <FontAwesomeIcon icon={faCoins} /> {this.props.enroll}
              </div>
              <div className="col-6">
                <FontAwesomeIcon icon={faGlobe} /> {this.props.platform}
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <FontAwesomeIcon icon={faTags} />{" "}
                <snap
                  className="rounded  pl-1 pr-1 text-weight-bold"
                  style={{ backgroundColor: "blue", color: "white" }}
                >
                  {" "}
                  {this.props.tag1}
                </snap>{" "}
                <snap
                  className="rounded  pl-1 pr-1 text-weight-bold"
                  style={{ backgroundColor: "orange", color: "black" }}
                >
                  {this.props.tag2}
                </snap>{" "}
                <snap
                  className="rounded  pl-1 pr-1 text-weight-bold"
                  style={{ backgroundColor: "skyblue", color: "black" }}
                >
                  {this.props.tag3}
                </snap>{" "}
                <snap
                  className="rounded pl-1 pr-1 text-weight-bold "
                  style={{ backgroundColor: "grey", color: "white" }}
                >
                  {this.props.tag4}
                </snap>
              </div>
            </div>
          </div>
          <div className="card-footer text-right p-2 ">
            <a href={this.props.link} target="_blank">
              <h6
                className="btn btn-sm border rounded mb-0"
                style={{ backgroundColor: "green", color: "white" }}
              >
                Enroll Now
              </h6>
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default CertificateShowCard;
