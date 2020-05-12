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
              src={require("../../assets/images/datacodelogo.jpeg")}
              alt="avatar"
            />

            <div class="card-body text-center">
              <h5 class="card-title" style={{ color: "#072C71" }}>
                Datacode Learning Community
              </h5>
              <p class="card-text">
                Datacode is a Online Learning Community to find and share the
                best learning courses and tutorials.
              </p>
            </div>
            <div class="card-footer border border-white bg-white text-center">
              <a
                href="https://www.facebook.com/Datacode.in/"
                className="btn font-weight-bold"
                style={{ backgroundColor: "#06CB6C", color: "#072C71" }}
                target="_blank"
              >
                <FontAwesomeIcon icon={faConnectdevelop} /> Join us
              </a>
            </div>
          </div>
        </div>
        {/* Mobile Version */}
        <div className="container-fluid text-center text-md-center  mb-5 d-block d-md-none">
          <div class="card border border-white ">
            <img
              className=" card-img-top mx-auto img-fluid img-circle d-block mt-2"
              src={require("../../assets/images/datacodelogo.jpeg")}
              alt="avatar"
            />

            <div class="card-body text-center">
              <h5 class="card-title">Datacode Learning Community</h5>
              <p class="card-text">
                Datacode is a Online Learning Community to find and share the
                best learning courses and tutorials.
              </p>
            </div>
            <div class="card-footer border border-white bg-white text-center">
              <a
                href="https://www.facebook.com/Datacode.in/"
                className="btn font-weight-bold"
                style={{ backgroundColor: "#06CB6C", color: "#072C71" }}
                target="_blank"
              >
                Join us
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RightSideSection;
