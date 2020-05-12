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
        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="col-fluid mt-2 ml-2">
                <h2
                  className="text-center mb-4 display-5"
                  style={{ color: "#072C71" }}
                >
                  Angular Multiple choice Questions Set-1
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
                  to="/index_angular_mcqs"
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
                    question="Q.1 Which community Angular JS belongs to?
                    "
                    correctAnswer="Google
                    "
                    v1="Twitter"
                    v2="Google
                    "
                    v3="Microsoft
                    "
                    v4="Facebook"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="2"
                    question="Q.2 AngularJS is entirely based on HTML and JavaScript
                    "
                    correctAnswer="True "
                    v1="True"
                    v2="False"
                    v3="Maybe"
                    v4="Not sure"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="3"
                    question="Q.3 What is the correct syntax to write an expression?
                    "
                    correctAnswer="{{expression}} "
                    v1="{{expression}}"
                    v2="[expression]"
                    v3="{expression}"
                    v4="[[expression]]"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="4"
                    question="Q.4 Which of the following can be used as a prefix for Directive?"
                    correctAnswer="All of the above "
                    v1="ng-"
                    v2="x-"
                    v3="data-"
                    v4="All of the above"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="5"
                    question="Q.5 Which directive is used to start an angularJS application?"
                    correctAnswer="ng-app "
                    v1="ng-start"
                    v2="ng-app"
                    v3="ng-begin"
                    v4="ng-init"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="6"
                    question="Q.6 Which directive binds the values of application data to HTML input controls in angular JS?"
                    correctAnswer="ng-model "
                    v1="ng-bind"
                    v2="None of the above"
                    v3="ng-model"
                    v4="ng-app"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="7"
                    question="Q.7 Which directive binds Application data to HTML tags in angular JS?"
                    correctAnswer="ng-bind "
                    v1="ng-app"
                    v2="ng-model"
                    v3="ng-bind"
                    v4="None of the above"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="8"
                    question="Q.8 Can we create custom directive in Angular JS?"
                    correctAnswer="True "
                    v1="True"
                    v2="False"
                    v3="Maybe"
                    v4="Not sure"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="9"
                    question="Q.9 Which of the following is a filter in Angular Js?"
                    correctAnswer="All of the above "
                    v1="Currency"
                    v2="Date"
                    v3="Uppercase"
                    v4="All of the above"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="10"
                    question="Q.10 How to combine filter with expression?"
                    correctAnswer="Using PIpe {{expression | pipe}} "
                    v1="Using Comma {{expression, pipe}}"
                    v2="Using Dot {{expression. pipe}}"
                    v3="Using PIpe {{expression | pipe}}"
                    v4="Using Slash {{expression / pipe}}"
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
              <LearningSideSection language="angular" />
              <RightSideSection />
              <Technologies />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AngularMCQ1;
