import React, { Component } from "react";
import { Link } from "react-router-dom";
import McqsShowCard from "../McqsShowCard";
import RightSideSection from "../../../../right_section/RightSideSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt, faHome } from "@fortawesome/free-solid-svg-icons";
class IndexDjangoMCQ extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <h1>Index of Django MCQs</h1>
        <Link to="/django_mcq_1">
          <h6>Django MCQs Questions 1</h6>
        </Link>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-8 mt-4">
            <h2 className="text-center mb-4">Django MCQs Practice Question</h2>
            <Link to="/home" className="badge badge-primary mr-1">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>
            <Link to="/index_mcqs" className="badge badge-warning mr-1 mb-4">
              <FontAwesomeIcon icon={faListAlt} size="2x" />
              MCQs
            </Link>

            <div className="card-deck m-2">
              <McqsShowCard
                link="django_mcq_1"
                title="Django MCQs Questions Set 1"
              />
              <McqsShowCard link="index_django_mcqs" title="Upcoming" />
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

export default IndexDjangoMCQ;
