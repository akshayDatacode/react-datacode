import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class RightSideSection extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container-fluid text-center text-md-center mb-5 p-5">
          <div class="card border border-white mt-5">
            <img
              className=" card-img-top mx-auto img-fluid img-circle d-block mt-5"
              src={require("../../assets/images/datacodelogo.jpeg")}
              alt="avatar"
            />

            <div class="card-body text-center">
              <h5 class="card-title">Datacode Learning Community</h5>
              <p class="card-text">
                We Love to Code and this is the best way to express our love to
                Computer Science Wolrd
              </p>
            </div>
            <div class="card-footer border border-white bg-white text-center">
              <Link to="/home" className="btn btn-info font-weight-bold">
                Join us
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RightSideSection;
