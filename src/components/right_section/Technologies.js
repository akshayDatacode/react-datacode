import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
class Technologies extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="card text-center mt-5 mb-4">
          <div className="row text-center">
            <h5 className="ml-4 mt-2" style={{ color: "#072C71" }}>
              More Technologies
            </h5>
          </div>
          <div className="row p-2">
            <div className="col-3">
              {" "}
              <img
                className="card-img-top mx-auto img-fluid img-circle d-block"
                src={require("../../assets/images/c_tech.jpeg")}
                alt="avatar"
              />
            </div>
            <div className="col-3">
              {" "}
              <img
                className="card-img-top mx-auto img-fluid img-circle d-block"
                src={require("../../assets/images/cpp_tech.jpeg")}
                alt="avatar"
              />
            </div>
            <div className="col-3">
              {" "}
              <img
                className="card-img-top mx-auto img-fluid img-circle d-block"
                src={require("../../assets/images/python_tech.jpeg")}
                alt="avatar"
              />
            </div>
            <div className="col-3">
              {" "}
              <img
                className="card-img-top mx-auto img-fluid img-circle d-block"
                src={require("../../assets/images/java_tech.jpeg")}
                alt="avatar"
              />
            </div>
          </div>
          <div className="row p-3">
            <div className="col-3">
              {" "}
              <img
                className="card-img-top mx-auto img-fluid img-circle d-block"
                src={require("../../assets/images/dbms_tech.jpeg")}
                alt="avatar"
              />
              DBMS
            </div>
            <div className="col-3">
              {" "}
              <img
                className="card-img-top mx-auto img-fluid img-circle d-block"
                src={require("../../assets/images/sql_tech.jpeg")}
                alt="avatar"
              />
            </div>
            <div className="col-3">
              {" "}
              <img
                className="card-img-top mx-auto img-fluid img-circle d-block"
                src={require("../../assets/images/html_tech.jpeg")}
                alt="avatar"
              />
            </div>
            <div className="col-3">
              {" "}
              <img
                className="card-img-top mx-auto img-fluid img-circle d-block"
                src={require("../../assets/images/css_tech.jpeg")}
                alt="avatar"
              />
            </div>
          </div>
          <div className="row p-3">
            <div className="col-3">
              {" "}
              <img
                className="card-img-top mx-auto img-fluid img-circle d-block"
                src={require("../../assets/images/ds_tech.jpeg")}
                alt="avatar"
              />
              DS
            </div>
            <div className="col-3">
              {" "}
              <img
                className="card-img-top mx-auto img-fluid img-circle d-block"
                src={require("../../assets/images/oops_tech.jpeg")}
                alt="avatar"
              />
              OOPs
            </div>
            <div className="col-3">
              {" "}
              <img
                className="card-img-top mx-auto img-fluid img-circle d-block"
                src={require("../../assets/images/cn_tech.jpeg")}
                alt="avatar"
              />
              CN
            </div>
            <div className="col-3">
              {" "}
              <img
                className="card-img-top mx-auto img-fluid img-circle d-block"
                src={require("../../assets/images/os_tech.jpeg")}
                alt="avatar"
              />
              OS
            </div>
          </div>
          <div className="row p-3">
            <div className="col-3">
              {" "}
              <img
                className="card-img-top mx-auto img-fluid img-circle d-block mt-0"
                src={require("../../assets/images/js_tech.jpeg")}
                alt="avatar"
              />
            </div>
            <div className="col-3">
              {" "}
              <img
                className="card-img-top mx-auto img-fluid img-circle d-block"
                src={require("../../assets/images/react_tech.jpeg")}
                alt="avatar"
              />
            </div>
            <div className="col-3">
              {" "}
              <img
                className="card-img-top mx-auto img-fluid img-circle d-block"
                src={require("../../assets/images/angular_tech.jpeg")}
                alt="avatar"
              />
            </div>
            <div className="col-3">
              {" "}
              <img
                className="card-img-top mx-auto img-fluid img-circle d-block"
                src={require("../../assets/images/android_tech.jpeg")}
                alt="avatar"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Technologies;
