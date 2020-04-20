import React, { Component } from "react";
import HeaderCard from "../../../HeaderCard";
import { Link } from "react-router-dom";
import ScoreCard from "../scoreCard";
import Quize from "../quize";
import RightSideSection from "../../../../right_section/RightSideSection";
import RecommendPost from "../../../../right_section/RecommendPost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

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
        <HeaderCard title="Angular MCQs Set 1" />

        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="col-fluid ">
                <Link to="/home" className="badge badge-primary mr-1">
                  <FontAwesomeIcon icon={faHome} size="1x" />
                </Link>
                <Link to="/index_mcqs" className="badge badge-warning mr-1">
                  MCQs >>
                </Link>
                <Link
                  to="/index_angular_mcqs"
                  className="badge badge-success mr-1"
                >
                  Angular MCQs >>
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
            </div>
            <div className="col-md-4">
              <RightSideSection />
              <h5 className="mb-3">Recommended for you</h5>
              <RecommendPost
                imgsource="html_mcq.jpeg"
                RecPostHading="HTML MCQs Questions"
                link="/index_html_mcqs"
              />
              <RecommendPost
                imgsource="js_mcq.jpeg"
                RecPostHading="JavaScript MCQs Questions"
                link="/index_java_mcqs"
              />
              <RecommendPost
                imgsource="react_mcq.jpeg"
                RecPostHading="React MCQs Questions"
                link="/index_react_mcqs"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AngularMCQ1;
