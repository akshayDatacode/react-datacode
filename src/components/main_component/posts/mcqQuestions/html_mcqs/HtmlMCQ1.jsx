import React, { Component } from "react";
import HeaderCard from "../../../HeaderCard";
import { Link } from "react-router-dom";
import ScoreCard from "../scoreCard";
import Quize from "../quize";
import RightSideSection from "../../../../right_section/RightSideSection";
import RecommendPost from "../../../../right_section/RecommendPost";
import MCQCardCarousel from "../MCQCardCarousel";

class HtmlMCQ1 extends Component {
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
        <HeaderCard title="HTML MCQs Set 1" />

        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="col-fluid ">
                <Link to="/home" className="badge badge-primary mr-1">
                  Home >{" "}
                </Link>
                <Link to="/index_mcqs" className="badge badge-warning mr-1">
                  Programming MCQs >{" "}
                </Link>
                <Link to="/index_c_mcqs" className="badge badge-success mr-1">
                  C-MCQs >
                </Link>
                <ScoreCard count={this.state.count} />
              </div>
              <div className="row">
                <div className="col">
                  <Quize
                    quizeNo="1"
                    question="Which of the following prints bold letters in traditional HTML?
                i. <B>Go boldly</B>
ii. <B>Go boldly</b>
iii. <b>Go boldly</B>
iv. <b>Go boldly</b>"
                    correctAnswer="i, ii, iii, and iv"
                    v1="iv"
                    v2="i"
                    v3="i, ii, iii, and iv"
                    v4="both iv and i "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="2"
                    question=" What application can one create even before the introduction of HTML5?"
                    correctAnswer="Forms"
                    v1="Web applications"
                    v2="Mobile applications"
                    v3="Forms"
                    v4=" Browser based games"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="3"
                    question="In HTML Audio/Video DOM, __________ sets or returns whether the audio/video should be loaded when the page loads."
                    correctAnswer="preload"
                    v1="preload"
                    v2="autoplay"
                    v3="buffered "
                    v4="controller"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="4"
                    question="Which of the following is not a HTML5 tag?
"
                    correctAnswer=""
                    v1="<video>"
                    v2="<source>"
                    v3="<track>"
                    v4="<slider>"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="5"
                    question="Which of the following property is common in all drag events?"
                    correctAnswer="dataTransfer"
                    v1="drag effects"
                    v2="drag data"
                    v3="dataTransfer "
                    v4="dragenter"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="6"
                    question="Which tag is used to defines multiple media resources for media elements audio and video?"
                    correctAnswer="<source>"
                    v1="<source>"
                    v2="<canvas>"
                    v3="<audio>"
                    v4="<video>"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="7"
                    question="What is the default type of ‘type’ attribute of <input> element?"
                    correctAnswer="Text"
                    v1="Text"
                    v2="Password"
                    v3=" Numerals"
                    v4="Special Characters"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="8"
                    question="Which attribute is used with <select> element?"
                    correctAnswer="multiple"
                    v1="multiple"
                    v2="selected"
                    v3="name"
                    v4="value"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="9"
                    question=" Which element is used for grouping together related elements?"
                    correctAnswer="<div>"
                    v1=" <div>"
                    v2="<hgroup>"
                    v3="<section>"
                    v4="<header>"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="10"
                    question="How many standard color names does HTML supports?"
                    correctAnswer="140"
                    v1="120"
                    v2="130"
                    v3="140"
                    v4="90"
                    counter={this.counter}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h4>For More MCQs Questions</h4>
                  <MCQCardCarousel />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <RightSideSection />
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
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HtmlMCQ1;
