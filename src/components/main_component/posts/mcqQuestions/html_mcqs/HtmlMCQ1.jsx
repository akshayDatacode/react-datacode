import React, { Component } from "react";
import Quize from "../quize";
import ScoreCard from "../scoreCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCode,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
import RightSideSection from "../../../../right_section/RightSideSection";
import MCQCardCarousel from "../MCQCardCarousel";
import LearningSideSection from "../../../../right_section/learning_sidesection/LearningSideSection";
import Technologies from "../../../../right_section/Technologies";

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
        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="col-fluid mt-2 ml-2">
                <h2
                  className="text-center mb-4 display-5"
                  style={{ color: "#072C71" }}
                >
                  HTML Multiple choice Questions Set-1
                </h2>
                <Link
                  to="/home"
                  className="badge mr-1"
                  style={{ backgroundColor: "#06CB6C" }}
                >
                  <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" />
                </Link>
                <Link
                  to="/index_mcqs"
                  className="badge mr-1"
                  style={{ backgroundColor: "#072C71" }}
                >
                  <FontAwesomeIcon
                    icon={faChalkboardTeacher}
                    size="2x"
                    color="#06CB6C"
                  />
                </Link>
                <Link
                  to="/index_html_mcqs"
                  className="badge mr-1 text-white"
                  style={{ backgroundColor: "#072C71" }}
                >
                  <FontAwesomeIcon
                    icon={faCode}
                    size="1x"
                    color="#06CB6C"
                    className="mr-2"
                  />
                  back to Index
                </Link>
                <ScoreCard count={this.state.count} />
              </div>
              <div className="row">
                <div className="col">
                  <Quize
                    quizeNo="1"
                    language="HTML"
                    question="Which of the following prints bold letters in traditional HTML?"
                    code={`i. <B>Go boldly</B>
ii. <B>Go boldly</b>
iii. <b>Go boldly</B>
iv. <b>Go boldly</b>`}
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
            <div className="col-md-4 mt-md-5 mt-3">
              <LearningSideSection language="html" />
              <RightSideSection />
              <Technologies />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HtmlMCQ1;
