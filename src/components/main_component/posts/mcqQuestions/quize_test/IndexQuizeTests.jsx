import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCopyright } from "@fortawesome/free-solid-svg-icons";
import RightSideSection from "../../../../right_section/RightSideSection";
import { faPython, faJava } from "@fortawesome/free-brands-svg-icons";
import MCQTestCardCarousel from "./MCQTestCardCarousel";
class IndexQuizeTests extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-8 mt-4">
            <h2 className="text-center mb-4">Programming Quize Test</h2>
            <Link to="/home" className="badge badge-primary mr-1 mb-3">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>
            <h5 className="text-secondary">C Programming Quize Test</h5>
            <hr
              class="teal accent-3 mt-0 d-inline-block mx-auto"
              style={{ width: 240 }}
            />
            <div className="card-deck mb-5">
              <div className="card  p-2">
                <h6 className="text-center">C Programming Quize Test</h6>
                <div className="card-body p-1">
                  <div class="row">
                    <div className="col-4 text-left">
                      <Link to="/c_quize_tests">
                        <FontAwesomeIcon icon={faCopyright} size="3x" />
                      </Link>
                    </div>
                    <div className="col-8 text-right">
                      <h5 className="text-warning m-0">Beginner Level</h5>
                      <h6 className="btn border border-secondary text-secondary mt-2 mb-0 p-1">
                        Start Quize
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card  p-2">
                <h6 className="text-center">C Programming Quize Test</h6>
                <div className="card-body p-1">
                  <div class="row">
                    <div className="col-4 text-left">
                      <Link to="/c_quize_tests">
                        <FontAwesomeIcon icon={faCopyright} size="3x" />
                      </Link>
                    </div>
                    <div className="col-8 text-right">
                      <h5 className="text-primary m-0">Medium Level</h5>
                      <h6 className="btn border border-secondary text-secondary mt-2 mb-0 p-1">
                        Start Quize
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card  p-2">
                <h6 className="text-center">C Programming Quize Test</h6>
                <div className="card-body p-1">
                  <div class="row">
                    <div className="col-4 text-left">
                      <Link to="/c_quize_tests">
                        <FontAwesomeIcon icon={faCopyright} size="3x" />
                      </Link>
                    </div>
                    <div className="col-8 text-right">
                      <h5 className="text-danger m-0">Advance Level</h5>
                      <h6 className="btn border border-secondary text-secondary mt-2 mb-0 p-1">
                        Start Quize
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h5 className="text-secondary">Python Programming Quize Test</h5>
            <hr
              class="teal accent-3  mt-0 d-inline-block mx-auto"
              style={{ width: 300 }}
            />
            <div className="card-deck mb-5">
              <div className="card  p-2">
                <h6 className="text-center">Python Programming Quize Test</h6>
                <div className="card-body p-1">
                  <div class="row">
                    <div className="col-4 text-left">
                      <Link to="/python_quize_tests">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                      </Link>
                    </div>
                    <div className="col-8 text-right">
                      <h5 className="text-warning m-0">Beginner Level</h5>
                      <h6 className="btn border border-secondary text-secondary mt-2 mb-0 p-1">
                        Start Quize
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card  p-2">
                <h6 className="text-center">Python Programming Quize Test</h6>
                <div className="card-body p-1">
                  <div class="row">
                    <div className="col-4 text-left">
                      <Link to="/c_quize_tests">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                      </Link>
                    </div>
                    <div className="col-8 text-right">
                      <h5 className="text-primary m-0">Medium Level</h5>
                      <h6 className="btn border border-secondary text-secondary mt-2 mb-0 p-1">
                        Start Quize
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card  p-2">
                <h6 className="text-center">Python Programming Quize Test</h6>
                <div className="card-body p-1">
                  <div class="row">
                    <div className="col-4 text-left">
                      <Link to="/c_quize_tests">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                      </Link>
                    </div>
                    <div className="col-8 text-right">
                      <h5 className="text-danger m-0">Advance Level</h5>
                      <h6 className="btn border border-secondary text-secondary mt-2 mb-0 p-1">
                        Start Quize
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h5 className="text-secondary">Java Programming Quize Test</h5>
            <hr
              class="teal accent-3  mt-0 d-inline-block mx-auto"
              style={{ width: 300 }}
            />
            <div className="card-deck mb-5">
              <div className="card  p-2">
                <h6 className="text-center">Java Programming Quize Test</h6>
                <div className="card-body p-1">
                  <div class="row">
                    <div className="col-4 text-left">
                      <Link to="/c_quize_tests">
                        <FontAwesomeIcon icon={faJava} size="3x" />
                      </Link>
                    </div>
                    <div className="col-8 text-right">
                      <h5 className="text-warning m-0">Beginner Level</h5>
                      <h6 className="btn border border-secondary text-secondary mt-2 mb-0 p-1">
                        Start Quize
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card  p-2">
                <h6 className="text-center">Java Programming Quize Test</h6>
                <div className="card-body p-1">
                  <div class="row">
                    <div className="col-4 text-left">
                      <Link to="/c_quize_tests">
                        <FontAwesomeIcon icon={faJava} size="3x" />
                      </Link>
                    </div>
                    <div className="col-8 text-right">
                      <h5 className="text-primary m-0">Medium Level</h5>
                      <h6 className="btn border border-secondary text-secondary mt-2 mb-0 p-1">
                        Start Quize
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card  p-2">
                <h6 className="text-center">Java Programming Quize Test</h6>
                <div className="card-body p-1">
                  <div class="row">
                    <div className="col-4 text-left">
                      <Link to="/c_quize_tests">
                        <FontAwesomeIcon icon={faJava} size="3x" />
                      </Link>
                    </div>
                    <div className="col-8 text-right">
                      <h5 className="text-danger m-0">Advance Level</h5>
                      <h6 className="btn border border-secondary text-secondary mt-2 mb-0 p-1">
                        Start Quize
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="text-secondary mt-3">For More Quize Tests</h4>
            <MCQTestCardCarousel />
          </div>

          <div className="col-md-3">
            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default IndexQuizeTests;
