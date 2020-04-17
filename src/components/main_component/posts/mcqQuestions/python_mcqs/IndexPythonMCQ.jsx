import React, { Component } from "react";
import { Link } from "react-router-dom";
import McqsShowCard from "../McqsShowCard";
import RightSideSection from "../../../../right_section/RightSideSection";
import { faHome, faListAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class IndexPythonMCQ extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
<div className="row">
          <div className="col">
            <div className="card bg-warning">
              <div className="card-body p-2">
                <h1 className="card-title text-dark m-0 p-0">
                  Python MCQs Sets
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-8 mt-4">
            <Link to="/home" className="badge badge-primary mr-1">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>
            <Link to="/index_mcqs" className="badge badge-warning mr-1 mb-4">
              MCQs>>
            </Link>

            <div className="card-deck m-2">
              <McqsShowCard
                link="python_mcq_1"
                title="Python MCQs Questions Set 1"
              />
              <McqsShowCard
                link="python_mcq_2"
                title="Python MCQs Questions Set 2"
              />
            </div>
            <div className="card-deck m-2">
              <McqsShowCard
                link="python_mcq_3"
                title="Python MCQs Questions Set 3"
              />
              <McqsShowCard
                link="python_mcq_4"
                title="Python MCQs Questions Set 4"
              />
            </div>
            <div className="card-deck m-2">
              <McqsShowCard
                link="python_mcq_5"
                title="Python MCQs Questions Set 5"
              />
              <McqsShowCard link="index_css_mcqs" title="Upcoming" />
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

export default IndexPythonMCQ;
