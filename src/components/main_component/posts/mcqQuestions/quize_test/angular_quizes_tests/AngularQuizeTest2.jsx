import React, { Component } from "react";
import HeaderBannerSection from "../../../../HeaderBannerSection";
import QuizeTest from "../quizeTest";
import ScoreCard from "../../scoreCard";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterComponentUpper from "../../../../../../app/components/footer_component/FooterComponentUpper";
import RightSideSection from "../../../../../right_section/RightSideSection";
import RecommendPost from "../../../../../right_section/RecommendPost";
import MCQTestCardCarousel from "../MCQTestCardCarousel";

class AngularQuizeTest2 extends Component {
  state = {
    isCorrect: false,
    isClicked: false,
    count: 0,
    status: "",
    show: false,
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  counter = (count) => {
    this.setState({ count: this.state.count + 1 });
  };

  showQuizeScore = () => {
    this.setState({ show: true });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <>
        <HeaderBannerSection imgsource="headerdark.jpeg" />

        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="row">
                <div className="col text-center mt-3 mb-3">
                  <h2>Angular Quiz Test Intermediate </h2>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Link to="/home" className="badge badge-primary mr-1">
                    Home >>
          </Link>
                  <Link
                    to="/index_quize_tests"
                    className="badge badge-warning mr-1"
                  >
                    Quize Test >>
          </Link>
                  <Link
                    to="/angular_quize_tests"
                    className="badge badge-success mr-1"
                  >
                    Angular Quize >>
          </Link>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <QuizeTest
                    quizeNo="1"
                    question="Which of the following statements are invalid AngularJS filters?"
                    correctAnswer="aggregate filter"
                    v1="lowercase filter"
                    v2="aggregate filter"
                    v3="orderby filter"
                    v4="currency filter"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="2"
                    question="Which of the service modes can be easiest to test while using AngularJS?"
                    correctAnswer="Service Oriented Architecture"
                    v1="N-Tier"
                    v2="Event-driven "
                    v3="Service Oriented Architecture"
                    v4="Model View Controller"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="3"
                    question="Assuming that myTestApp has previously been defined. The below script will"
                    code={`var application = angular.module('myTestApp', []);
application.controller('MyTestController', function($scope) {
    $scope.firstName = "Michael";
    $scope.lastName = "Stephany";
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    };
});`}
                    correctAnswer="Will run successfully"
                    v1="Will run successfully"
                    v2="Will show warnings"
                    v3="Runtime errors"
                    v4="Give compilation errors"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="4"
                    question="Can AngularJS be used to create a service?"
                    correctAnswer="Yes
                "
                    v1="Can be"
                    v2="May be"
                    v3="No"
                    v4="Yes
                "
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="5"
                    question="In AngularJS, what is $scope variable used for?
                "

                    correctAnswer="Get/set values for model, view and controller"
                    v1="To get values of variables within the implementation scope"
                    v2="Store data"
                    v3="Get/set values in a function callGet/set values for model, view and controller"
                    v4="one way"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="6"
                    question="In AngularJS data binding is __________."
                    correctAnswer="two way"
                    v1="sychronous"
                    v2="simplex"
                    v3="one way"
                    v4="two way"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="7"
                    question="Elements of AngularJS MVC views are rendered in which order?"
                    correctAnswer="Random"
                    v1="Priotization"
                    v2="Sequential"
                    v3="
                Random"
                    v4="Not listed above"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="8"
                    question="In context of AngularJS, what does SPA stand for?"
                    correctAnswer="Single Page Application"
                    v1="Software Publisher Association"
                    v2="Single Page Application"
                    v3="Single Point of Access"
                    v4="Software Product Assessment"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="9"
                    question="Is the syntax correct:-"
                    code={`<html ng-app="myApp">
<head>
</head>
<body>
    <div ng-view></div>
</body>
</html>
`}
                    correctAnswer="Yes
                "
                    v1="No"
                    v2="Yes
                "
                    v3="Can be"
                    v4="May be"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="10"
                    question="What is the correct syntax for a variable “a” in AngularJS?"
                    correctAnswer="{{a}}"
                    v1="[{a}]"
                    v2="{[a]}"
                    v3="{(a)}"
                    v4="{{a}}"
                    counter={this.counter}
                  />
                </div>
              </div>
              <div className="text-center mb-3">
                <Button variant="primary" onClick={this.handleShow}>
                  Show Score
                </Button>
              </div>
              <div className="row">
                <div className="col">
                  <h5> For More Quiz Test</h5>
                  <MCQTestCardCarousel />
                </div>
              </div>
            </div>
            <div className="col-md-4  mt-md-4">
              <h4>Recommendation</h4>
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
                imgsource="c_mcq.jpeg"
                RecPostHading="C MCQs Questions"
                link="/index_c_mcqs"
              />
              <RightSideSection />
            </div>
          </div>
        </div>
        <ScoreCard
          handleShow={this.handleShow}
          handleClose={this.handleClose}
          show={this.state.show}
          count={this.state.count}
        />
        <div className="container-fluid mt-5">
          <FooterComponentUpper />
        </div>
      </>
    );
  }
}

export default AngularQuizeTest2;
