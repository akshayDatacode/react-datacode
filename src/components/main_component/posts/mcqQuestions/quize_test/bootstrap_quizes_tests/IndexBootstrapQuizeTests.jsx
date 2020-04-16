import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUsersCog } from "@fortawesome/free-solid-svg-icons";
import RightSideSection from "../../../../../right_section/RightSideSection";
import QuizeShowCard from "../QuizeShowCard";
class IndexBootstrapQuizeTests extends Component {
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
            <h2 className="text-center mb-4">Bootstrap Quize Test</h2>
            <Link to="/home" className="badge badge-primary mr-1 mb-3">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>
            <Link
              to="/index_quize_tests"
              className="badge badge-success mr-1 mb-3"
            >
              <FontAwesomeIcon icon={faUsersCog} size="2x" className="mr-1" />
              Quize Tests
            </Link>

            <div className="card-deck mb-5">
              <QuizeShowCard
                title="Bootstrap Quize Set 1"
                level="Beginner"
                imgsource="ds_mcqs.jpeg"
                link="bootstrap_quize_test_1"
              />
              <QuizeShowCard
                title="Bootstrap Quize Set 1"
                level="Medium"
                imgsource="ds_mcqs.jpeg"
                link="bootstrap_quize_test_2"
              />
              <QuizeShowCard
                title="Bootstrap Quize Set 1"
                level="Advance"
                imgsource="ds_mcqs.jpeg"
                link="bootstrap_quize_test_3"
              />
            </div>
          </div>
          <div className="col-md-3">
            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default IndexBootstrapQuizeTests;
