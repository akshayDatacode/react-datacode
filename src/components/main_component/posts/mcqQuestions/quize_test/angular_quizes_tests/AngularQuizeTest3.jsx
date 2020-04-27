import React, { Component } from "react";
import HeaderBannerSection from "../../../../HeaderBannerSection";
import QuizeTest from "../quizeTest";
import ScoreCard from "../../scoreCard";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterComponentUpper from "../../../../../footer_component/FooterComponentUpper";
import RightSideSection from "../../../../../right_section/RightSideSection";
import RecommendPost from "../../../../../right_section/RecommendPost";
import MCQTestCardCarousel from "../MCQTestCardCarousel";

class AngularQuizeTest3 extends Component {
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
          <h2>Angular Quiz Test Advance</h2>
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
                language="Angular"
                question="Check whether the code below is correct"
code={`app.config(function ($routeProvider) {
  $routeProvider
     .when('/inbox', {
        templateUrl: 'views/inbox.html',
        controller: 'InboxCtrl',
        controllerAs: 'inbox'
     })
     .when('/inbox/email/:id', {
        templateUrl: 'views/email.html',
        controller: 'EmailCtrl',
        controllerAs: 'email'
     })
     .otherwise({
        redirectTo: '/inbox'
       });
   });`}                
                correctAnswer="Yes"
                v1="Yes"
                v2="May be"
                v3="Can be"
                v4="No"
                counter={this.counter}
              />

              <QuizeTest
                quizeNo="2"
                question="Which of the following is valid for AngualarJS module"
                correctAnswer="var app = angular.module('myApp', []);"
                v1="var app = angular.module(['myApp','param');
                "
                v2="var app = angular.module('myApp', []); "
                v3="var app = angular.module();"
                v4="var app = angular.module('myApp');"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="3"
                language="Angular"

                question="Check whether the code syntax is correct"
code={`app.factory('TestFactory', function myTestFactory($rootScope, $http, $location) {
  return function myTestReusable() {
  // processing goes here
  };
});`}
                correctAnswer=""
                v1="May be"
                v2="Can be"
                v3="Yes"
                v4="No"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="4"
                language="Angular"

                question="What will be the output of below program?"
code={`function f(input: boolean) {
  let a = 100;
  
  if (input) {
  let b = a + 1;
  return b;
  }
  return b;
  }`}                
                correctAnswer=""
                v1=" Undefined"
                v2="101"
                v3="Compilation error for a"
                v4="Compilation error for b"
                counter={this.counter}
              />
                  <QuizeTest
                quizeNo="5"
                question="In Angular routing, below tag is used to render matched component via active route."
            
                correctAnswer=""
                v1="<router></router>"
                v2="<router-output></router-output>"
                v3="<router-outlet></router-outlet>"
                v4=" <router-display></router-display>"
                counter={this.counter}
              />
                  <QuizeTest
                quizeNo="6"
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="7"
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="8"
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="9"
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="10"
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
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

export default AngularQuizeTest3;
