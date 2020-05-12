import React, { Component } from "react";
import Quize from "../quize";
import ScoreCard from "../scoreCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCode, faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import RightSideSection from "../../../../right_section/RightSideSection";
import RecommendPost from "../../../../right_section/RecommendPost";
import MCQCardCarousel from "../MCQCardCarousel";
import HeaderCard from "../../../HeaderCard";
import LearningSideSection from "../../../../right_section/learning_sidesection/LearningSideSection";
import Technologies from "../../../../right_section/Technologies";
import FbLikeShare from "../../../FbLikeShare";

class JSMCQ1 extends Component {
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
              JavaScript Multiple choice Questions Set-1
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
              <FontAwesomeIcon icon={faChalkboardTeacher} size="2x" color="#06CB6C" />

            </Link>
            <Link
              to="/index_js_mcqs"
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
                    question="JavaScript is ______ Side Scripting Language."
                    correctAnswer="Browser"
                    v1="Server"
                    v2="Browser"
                    v3="ISP"
                    v4="None of These"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="2"
                    question="JavaScript is designed for following purpose -"
                    correctAnswer="To add interactivity to HTML Pages."
                    v1="To Perform Server Side Scripting Opertion"
                    v2="To Style HTML Pages"
                    v3="To Execute Query Related to DB on Server"
                    v4="To add interactivity to HTML Pages."
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="3"
                    question="JavaScript is can be written -"
                    correctAnswer="Both 1 and 2 "
                    v1="directly into HTML pages"
                    v2="directly into JS file and included into HTML"
                    v3="Both 1 and 2"
                    v4="None of these"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="4"
                    question="Variable can hold ________ value at a time"
                    correctAnswer="Single"
                    v1="Double"
                    v2="None of these"
                    v3="Multiple"
                    v4="Single"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="5"
                    question="Integer Variable is declared using following syntax in JavaScript."
                    correctAnswer="var num;"
                    v1="var num;"
                    v2="Integer num;"
                    v3="int num;"
                    v4="integer num;"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="6"
                    question="We can declare ___________ at a time. Select most appropriate option."
                    correctAnswer="One or more Variables"
                    v1="More than One Variables"
                    v2="One or more Variables"
                    v3="One Variable Only"
                    v4="None of these"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="7"
                    question="Assignment Operators is following type of operator ______________."
                    correctAnswer="Binary"
                    v1="Ternary"
                    v2="Binary"
                    v3="Unarry"
                    v4="None of these"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="8"
                    question="'+=' operator can operate on following data values.
                "
                    correctAnswer="All Options
                "
                    v1="Float
                "
                    v2="Integer
                "
                    v3="String
                "
                    v4="All Options
                "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="9"
                    question="JavaScript contains a _________________ that assigns a value to a variable based on some condition."
                    correctAnswer="Conditional operators"
                    v1="Logical Operator"
                    v2="Bitwise Operator"
                    v3="Assignment operator"
                    v4="Conditional operator"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="10"
                    question="Guess the ternary operator used in the following example !!!"
                    language="js"
                    code={`marks = (mark<35)?'Fail':'Pass';`}
                    correctAnswer=""
                    v1="Colon Operator"
                    v2="Bitwise Operator"
                    v3="Logical Operator"
                    v4="Conditional Operator"
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
            <LearningSideSection language="js" />
            <RightSideSection />
            <Technologies />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default JSMCQ1;
