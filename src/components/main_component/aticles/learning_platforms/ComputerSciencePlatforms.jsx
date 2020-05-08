import React, { Component } from "react";
import HeaderCard from "../../HeaderCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import MCQCardCarousel from "../../posts/mcqQuestions/MCQCardCarousel";
import RecommendPost from "../../../right_section/RecommendPost";
import RightSideSection from "../../../right_section/RightSideSection";
class ComputerSciencePlatforms extends Component {
  state = {};
  render() {
    return (
      <>
        <HeaderCard
          title="ComputerScience Learning Platforms"
          color="#FF9B00"
          textcolor="black"
        />

        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="col-fluid mt-2 ml-2">
                <Link to="/home" className="badge badge-primary mr-1">
                  <FontAwesomeIcon icon={faHome} size="1x" />
                </Link>
                <Link to="/index_mcqs" className="badge badge-info  mr-1">
                  MCQs >>
                </Link>
                <Link
                  to="/index_python_mcqs"
                  className="badge badge-success mr-1"
                >
                  Python MCQs >>
                </Link>
              </div>
              <div className="row">
                <div className="col"></div>
              </div>
              <div className="row">
                <div className="col">
                  <h4>For More MCQs Questions</h4>
                  <MCQCardCarousel />
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <h4>Recommended for you</h4>
              <RecommendPost
                imgsource="python_mcq.jpeg"
                RecPostHading="Python MCQs Set 2"
                link="/python_mcq_2"
              />
              <RecommendPost
                imgsource="python_mcq.jpeg"
                RecPostHading="Python MCQs Set 3"
                link="/python_mcq_3"
              />
              <RecommendPost
                imgsource="python_mcq.jpeg"
                RecPostHading="Python MCQs Set 4"
                link="/python_mcq_4"
              />
              <RecommendPost
                imgsource="python_mcq.jpeg"
                RecPostHading="Python MCQs Set 5"
                link="/python_mcq_5"
              />
              <RightSideSection />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ComputerSciencePlatforms;
