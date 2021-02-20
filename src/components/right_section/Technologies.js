import React, { Component } from "react";
import { Link } from "react-router-dom";

class Technologies extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="card card-shadow text-center mt-5 mb-4">
          <h6 className="ml-4 mt-2 text-center" style={{ color: "#072C71" }}>
            More Technologies
          </h6>
          <div className="row p-3">
            <div className="col-3">
              {" "}
              <Link to="/c">
                <img
                  className="card-img-top mx-auto img-fluid img-circle d-block"
                  src={require("../../assets/images/c_tech.jpeg")}
                  alt="datacode"
                />
              </Link>
            </div>
            <div className="col-3">
              {" "}
              <Link to="/cpp">
                <img
                  className="card-img-top mx-auto img-fluid img-circle d-block"
                  src={require("../../assets/images/cpp_tech.jpeg")}
                  alt="datacode"
                />
              </Link>
            </div>
            <div className="col-3">
              {" "}
              <Link to="/python">
                <img
                  className="card-img-top mx-auto img-fluid img-circle d-block"
                  src={require("../../assets/images/python_tech.jpeg")}
                  alt="datacode"
                />
              </Link>
            </div>
            <div className="col-3">
              {" "}
              <Link to="/java">
                <img
                  className="card-img-top mx-auto img-fluid img-circle d-block"
                  src={require("../../assets/images/java_tech.jpeg")}
                  alt="datacode"
                />
              </Link>
            </div>
          </div>
          <div className="row p-3">
            <div className="col-3">
              {" "}
              <Link to="/dbms">
                <img
                  className="card-img-top mx-auto img-fluid img-circle d-block"
                  src={require("../../assets/images/dbms_tech.jpeg")}
                  alt="datacode"
                />
              </Link>
              DBMS
            </div>
            <div className="col-3">
              {" "}
              <Link to="/sql">
                <img
                  className="card-img-top mx-auto img-fluid img-circle d-block"
                  src={require("../../assets/images/sql_tech.jpeg")}
                  alt="datacode"
                />
              </Link>
            </div>
            <div className="col-3">
              {" "}
              <Link to="/html">
                <img
                  className="card-img-top mx-auto img-fluid img-circle d-block"
                  src={require("../../assets/images/html_tech.jpeg")}
                  alt="datacode"
                />
              </Link>
            </div>
            <div className="col-3">
              {" "}
              <Link to="/css">
                <img
                  className="card-img-top mx-auto img-fluid img-circle d-block"
                  src={require("../../assets/images/css_tech.jpeg")}
                  alt="datacode"
                />
              </Link>
            </div>
          </div>
          <div className="row p-3">
            <div className="col-3">
              {" "}
              <Link to="/datastructure">
                <img
                  className="card-img-top mx-auto img-fluid img-circle d-block"
                  src={require("../../assets/images/ds_tech.jpeg")}
                  alt="datacode"
                />
              </Link>
              DS
            </div>
            <div className="col-3">
              {" "}
              <Link to="/oops">
                <img
                  className="card-img-top mx-auto img-fluid img-circle d-block"
                  src={require("../../assets/images/oops_tech.jpeg")}
                  alt="datacode"
                />
              </Link>
              OOPs
            </div>
            <div className="col-3">
              {" "}
              <Link to="/cn">
                <img
                  className="card-img-top mx-auto img-fluid img-circle d-block"
                  src={require("../../assets/images/cn_tech.jpeg")}
                  alt="datacode"
                />
              </Link>
              CN
            </div>
            <div className="col-3">
              {" "}
              <Link to="/os">
                <img
                  className="card-img-top mx-auto img-fluid img-circle d-block"
                  src={require("../../assets/images/os_tech.jpeg")}
                  alt="datacode"
                />
              </Link>
              OS
            </div>
          </div>
          <div className="row p-3">
            <div className="col-3">
              {" "}
              <Link to="/js">
                <img
                  className="card-img-top mx-auto img-fluid img-circle d-block mt-0"
                  src={require("../../assets/images/js_tech.jpeg")}
                  alt="datacode"
                />
              </Link>
            </div>
            <div className="col-3">
              {" "}
              <Link to="/react">
                <img
                  className="card-img-top mx-auto img-fluid img-circle d-block"
                  src={require("../../assets/images/react_tech.jpeg")}
                  alt="datacode"
                />
              </Link>
            </div>
            <div className="col-3">
              {" "}
              <Link to="/angular">
                <img
                  className="card-img-top mx-auto img-fluid img-circle d-block"
                  src={require("../../assets/images/angular_tech.jpeg")}
                  alt="datacode"
                />
              </Link>
            </div>
            <div className="col-3">
              {" "}
              <Link to="/android">
                <img
                  className="card-img-top mx-auto img-fluid img-circle d-block"
                  src={require("../../assets/images/android_tech.jpeg")}
                  alt="datacode"
                />
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Technologies;
