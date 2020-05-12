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
import RecommendPost from "../../../../right_section/RecommendPost";
import MCQCardCarousel from "../MCQCardCarousel";
import HeaderCard from "../../../HeaderCard";
import LearningSideSection from "../../../../right_section/learning_sidesection/LearningSideSection";
import Technologies from "../../../../right_section/Technologies";
import FbLikeShare from "../../../../FbLikeShare";

class CssMCQ1 extends Component {
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
                  Css Multiple choice Questions Set-1
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
                  to="/index_css_mcqs"
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
                    question="CSS stands for __________"
                    correctAnswer="Cascading Style Sheets"
                    v1="Color Style Sheets"
                    v2="Cascade Sheets Style"
                    v3="Cascade Style Sheet"
                    v4="Cascading Style Sheets"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="2"
                    question="In CSS, “font-size” can be called as ________"
                    correctAnswer="Property-Name"
                    v1="Selector"
                    v2="Rule"
                    v3="Property"
                    v4="Property-Name"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="3"
                    question="Which of the following tag is used to embed css in html page?"
                    correctAnswer=" <style>"
                    v1="<script>"
                    v2=" <style>"
                    v3=" <css>"
                    v4=" <!DOCTYPE html>"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="4"
                    question="Which of the following function adjust the brightness of an element’s color, for use by the filter property?"
                    correctAnswer="brightness()"
                    v1="contrast()"
                    v2="dark()"
                    v3="light()"
                    v4="brightness()"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="5"
                    question="Identify the CSS property defining bottom-left corner shape of the border?"
                    correctAnswer="border-bottom-left-radius"
                    v1="border-radius"
                    v2="border-corner-radius"
                    v3="border-bottom-left-radius"
                    v4="border-left-radius"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="6"
                    question="Which of the following specifies what parts of an element’s content are skipped over when applying any text decoration?"
                    correctAnswer="text-decoration-skip"
                    v1="@font-text"
                    v2="font-style"
                    v3="text-skip"
                    v4="text-decoration-skip"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="7"
                    question="Choose the option that correctly specifies the output of the following CSS."
                    language="css"
                    code={`span {
border: 1px solid red;
outline: green dotted thick;
}`}
                    correctAnswer=""
                    v1="All span elements will have a red border and a green dotted outline"
                    v2="All span elements will have a green thick border and a red outline"
                    v3="All span elements will have an outer red border and inner green dotted border"
                    v4="All span elements will have a outer green dotted border and an inner red border
                "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="8"
                    question="Which of the following property specifies what line decorations, if any, are added to the text?"
                    correctAnswer="text-decoration-line"
                    v1="text-decoration-line"
                    v2="text-line-decoration"
                    v3="text-decoration-style"
                    v4="text-style-decoration"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="9"
                    question="Which of the following property controls the horizontal overflow of a block or inline block?"
                    correctAnswer="overflow-x"
                    v1="overflow-x"
                    v2="overflow"
                    v3="overflow-k"
                    v4="overflow-y"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="10"
                    question="Which property specifies the painting area of the background?"
                    correctAnswer="background-clip"
                    v1="background-clip"
                    v2="background-image"
                    v3="background-size"
                    v4="background-origin"
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
              <FbLikeShare />
              <LearningSideSection language="css" />
              <RightSideSection />
              <Technologies />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CssMCQ1;
