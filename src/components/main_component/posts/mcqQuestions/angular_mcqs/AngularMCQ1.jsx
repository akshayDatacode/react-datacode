import React, { Component } from "react";
import HeaderBannerSection from "../../../HeaderBannerSection";
import { Link } from "react-router-dom";
import ScoreCard from "../scoreCard";
import Quize from "../quize";
import RightSideSection from "../../../../right_section/RightSideSection";
import RecommendPost from "../../../../right_section/RecommendPost";

class AngularMCQ1 extends Component {
  state = {
    isCorrect: false,
    isClicked: false,
    count: 0,
    status: "",
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  counter = (count) => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <HeaderBannerSection imgsource="pythonmcq.jpeg" />
        <div className="col-fluid ">
          <Link to="/home" className="badge badge-primary mr-1">
            Home >{" "}
          </Link>
          <Link to="/index_mcqs" className="badge badge-warning mr-1">
            Programming MCQs >{" "}
          </Link>
          <Link to="/index_angular_mcqs" className="badge badge-success mr-1">
            Angular MCQs >
          </Link>
          <ScoreCard count={this.state.count} />
        </div>
        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="row mt-2 text-center">
                <div className="col">
                  <h2 className="text-secondary">Angular MCQs Set 1</h2>
                </div>
              </div>
              <div className="row">
                <div className="col"></div>
              </div>
            </div>
            <div className="col-md-4">
              <h5 className="mb-3">Recommended for you</h5>
              <RecommendPost
                imgsource="python_mcqs.jpeg"
                RecPostHading="Python MCQs Questions"
                link="/index_python_mcqs"
              />
              <RecommendPost
                imgsource="java_mcqs.jpeg"
                RecPostHading="Java MCQs Questions"
                link="/index_java_mcqs"
              />
              <RecommendPost
                imgsource="datacodelogo.jpeg"
                RecPostHading="Programminig Quize Test"
                link="/index_quize_tests"
              />
              <RightSideSection />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AngularMCQ1;
