import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLevelUpAlt,
  faChartBar,
  faClock,
  faCoins,
  faTags,
  faGlobe,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
class CertificateShowCard extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="card mt-4 shadow border border-secondary">
          <div className="card-body">
            <h3 className="mb-4" style={{ color: "#072C71" }}>
              {this.props.title}
            </h3>
            <div className="row">
              <div className="col-6">
                <FontAwesomeIcon icon={faChartBar} /> <b>{this.props.level}</b>{" "}
              </div>
              <div className="col-6">
                <FontAwesomeIcon icon={faClock} /> <b>{this.props.duration}</b>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-6">
                <FontAwesomeIcon icon={faCoins} /> <b>{this.props.enroll}</b>{" "}
              </div>
              <div className="col-6">
                <FontAwesomeIcon icon={faGlobe} /> <b>{this.props.platform}</b>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <FontAwesomeIcon icon={faTags} />{" "}
                <snap
                  className="rounded badge p-2 text-weight-bold"
                  style={{ backgroundColor: "#2C7A2C", color: "white" }}
                >
                  {" "}
                  {this.props.tag1}
                </snap>{" "}
                <snap
                  className="rounded badge p-2 text-weight-bold"
                  style={{ backgroundColor: "#3A2B6D", color: "white" }}
                >
                  {this.props.tag2}
                </snap>{" "}
                <snap
                  className="rounded badge p-2 text-weight-bold"
                  style={{ backgroundColor: "#8C10DC", color: "white" }}
                >
                  {this.props.tag3}
                </snap>{" "}
              </div>
            </div>
          </div>
          <div
            className="card-footer text-right p-2 "
            style={{ backgroundColor: "#264767" }}
          >
            <div className="row">
              <div className="col-7 text-left">
                <FontAwesomeIcon
                  icon={faAward}
                  size="2x"
                  className="ml-3"
                  color="white"
                />
              </div>
              <div className="col-5">
                <a href={this.props.link} target="_blank">
                  <h6
                    className="btn btn-sm rounded mb-0"
                    style={{ backgroundColor: "#04FFD5", color: "#264767" }}
                  >
                    <b>Enroll Now</b>
                  </h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CertificateShowCard;
