import React, { Component } from "react";
import { Link } from "react-router-dom";
import RightSideSection from "../../../../right_section/RightSideSection";
import McqsShowCard from "../McqsShowCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt, faHome } from "@fortawesome/free-solid-svg-icons";
class IndexSQLMCQ extends Component {
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
                Android MCQs Sets
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-8 mt-4">
            <Link to="/home" className="badge badge-primary mr-1">
              <FontAwesomeIcon icon={faHome} size="1x" />
            </Link>
            <Link to="/index_mcqs" className="badge badge-warning mr-1 mb-4">
              MCQs>>
            </Link>

            <div className="card-deck m-2">
              <McqsShowCard
                link="android_mcq_1"
                title="Android MCQs Questions Set 1"
              />
              <McqsShowCard link="index_android_mcqs" title="Upcoming" />
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

export default IndexSQLMCQ;
