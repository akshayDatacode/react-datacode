import React, { Component } from "react";
import HeaderBannerSection from "../../HeaderBannerSection";
import RightSideSection from "../../../right_section/RightSideSection";
import { Link } from "react-router-dom";
import PrismCode from "../../../PrismCode";

class PythonBooks extends Component {
  state = {};

  render() {
    return (
      <>
        <HeaderBannerSection imgsource="pythontech.jpeg" />

        <div className="row">
          <div className="col-md-1 border border-primary"></div>
          <div className="col-md-8">
            {/* Head Row Starting  */}
            <div className="row border border-warning mt-3">
              <div className="col">
                <h1 className="text-left">Python Books for Beginners</h1>
                <PrismCode
                  code={`
                  const foo = 'foo';
                  const bar = 'bar';
                  console.log(foo + bar);
                  `}
                  language="c"
                  plugins={["line-numbers"]}
                />
              </div>
            </div>
            {/* Ending of  Head Row */}

            <div className="row">
              <div className="col">
                <div class="card-deck mt-3">
                  <div class="card">
                    <img
                      className=" card-img-top mx-auto img-fluid img-circle d-block"
                      src={require("../../../../assets/images/indexcover2.jpeg")}
                      alt="avatar"
                    />

                    <div class="card-body p-1">
                      <div className="row mb-1">
                        <div className="col-6 text-danger">FREE</div>
                        <div className="col-6">
                          <Link to="/home" className="text-success">
                            Download
                          </Link>
                        </div>
                      </div>
                      <h5 class="card-title">Programming MCQs</h5>
                      <p class="card-text">
                        We Love to Code and this is the best way to express our
                        love to Computer Science Wolrd.
                      </p>
                    </div>
                    <div class="card-footer ">
                      <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6 text-right ">
                          <Link to="/home">Download</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card border border-white">
                    <img
                      className=" card-img-top mx-auto img-fluid img-circle d-block"
                      src={require("../../../../assets/images/programming_boooks.jpeg")}
                      alt="avatar"
                    />

                    <div class="card-body">
                      <h5 class="card-title">Programming Books</h5>
                      <p class="card-text">
                        We Love to Code and this is the best way to express our
                        love to Computer Science Wolrd.
                      </p>
                    </div>
                    <div class="card-footer border border-white bg-white">
                      <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6 text-right ">
                          <Link to="/home">Read More</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card border border-white">
                    <img
                      className=" card-img-top mx-auto img-fluid img-circle d-block"
                      src={require("../../../../assets/images/programming_practices.jpeg")}
                      alt="avatar"
                    />

                    <div class="card-body">
                      <h5 class="card-title">Programming Books</h5>
                      <p class="card-text">
                        We Love to Code and this is the best way to express our
                        love to Computer Science Wolrd.
                      </p>
                    </div>
                    <div class="card-footer border border-white bg-white">
                      <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6 text-right ">
                          <Link to="/home">Read More</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 border border-primary">
            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default PythonBooks;
