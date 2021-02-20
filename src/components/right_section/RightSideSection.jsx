import React, { Component } from "react";
import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class RightSideSection extends Component {
  state = {};
  render() {
    return (
      <>
        {/* Desktop Version */}
        <div className="container-fluid text-center text-md-center mb-5 p-5 d-none d-sm-block">
          <div class="card border border-white mt-5">
            <img
              className=" card-img-top mx-auto img-fluid img-circle d-block mt-5"
              src={require("../../assets/images/svg/monolog.svg")}
              alt="avatar"
            />

            <div class="card-body post-card text-center">
              <h6 class="card-title" style={{ color: "#072C71" }}>
                Datacode Learning Community
              </h6>
              <p class="card-text">
                Datacode is a Online Learning Community to find and share the
                best learning courses and tutorials.
              </p>
            </div>
            <div class="card-footer border border-white bg-white text-center">
              <a
                href="https://www.facebook.com/Datacode.in/"
                className="btn font-weight-bold"
                style={{ backgroundColor: "#30006b", color: "#ffffff" }}
                target="_blank"
              >
                <FontAwesomeIcon icon={faConnectdevelop} /> Join us
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RightSideSection;
