import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PostCard from "./PostCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChessQueen,
  faListOl,
  faListAlt,
  faUser,
  faUsers,
  faTerminal
} from "@fortawesome/free-solid-svg-icons";

class IndexPosts extends Component {
  state = {};
  render() {
    return (
      <>
        {/* First 3 Post Cards */}
        <div className="container-fluid mt-5">
          <div class="row ">
            <div className="col">
              <div class="card-deck mt-3">
                <div class="card border border-white">
                  <img
                    className=" card-img-top mx-auto img-fluid img-circle d-block"
                    src={require("../../../assets/images/indexcover2.jpeg")}
                    alt="avatar"
                  />

                  <div class="card-body">
                    <h5 class="card-title">Programming MCQs</h5>
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
                    src={require("../../../assets/images/programming_boooks.jpeg")}
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
                    src={require("../../../assets/images/programming_practices.jpeg")}
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
        {/* First Row 3 Post Cards Ending >>>>>>>>>>>>>>>>>>>>> */}
        {/* First 3 Post Cards */}
        <div className="container-fluid mt-5">
          <div class="row ">
            <div className="col">
              <div class="card-deck mt-3">
                <div class="card border border-white">
                  <img
                    className=" card-img-top mx-auto img-fluid img-circle d-block"
                    src={require("../../../assets/images/cprogramming_practice_question.jpeg")}
                    alt="avatar"
                  />

                  <div class="card-body">
                    <h5 class="card-title">C Programming Practice Questions</h5>
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
                    src={require("../../../assets/images/dsa_programming_questions.jpeg")}
                    alt="avatar"
                  />

                  <div class="card-body">
                    <h5 class="card-title">DataStructure And Algoritham</h5>
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
                    src={require("../../../assets/images/python_programming.jpeg")}
                    alt="avatar"
                  />

                  <div class="card-body">
                    <h5 class="card-title">Python Programming</h5>
                    <p class="card-text">
                      We Love to Code and this is the best way to express our
                      love to Computer Science Wolrd.
                    </p>
                  </div>
                  <div class="card-footer border border-white bg-white">
                    <div className="row">
                      <div className="col-6"></div>
                      <div className="col-6 text-right ">
                        <Link to="/python_mcqs">Read More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* First Row 3 Post Cards Ending >>>>>>>>>>>>>>>>>>>>> */}
      </>
    );
  }
}

export default IndexPosts;
