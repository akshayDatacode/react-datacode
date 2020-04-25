import React, { Component } from "react";
import { Link } from "react-router-dom";
import RightSideSection from "../../../../right_section/RightSideSection";
import McqsShowCard from "../McqsShowCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faListAlt } from "@fortawesome/free-solid-svg-icons";
import HeaderCard from "../../../HeaderCard";


class IndexCMCQ extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
      <HeaderCard
          title="C MCQs Practice"
          color="#FFD700"
          textcolor="black"
        />
   

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
                link="c_mcq_1"
                title="C Programming MCQs Questions Set 1"
              />
              <McqsShowCard
                link="c_mcq_2"
                title="C Programming MCQs Questions Set 2"
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

export default IndexCMCQ;
