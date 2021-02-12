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

class AngularQuizeTest1 extends Component {
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
                  <h2>Angular Quiz Test Beginner</h2>
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
                    question="What is a controller in MVC?"
                    correctAnswer="It is a software Code that controls the interactions between the Model and View"
                    v1="It is a software Code that stores the data"
                    v2="It is a software Code that renders the user interface"
                    v3="It is a software Code that controls the interactions between the Model and View"
                    v4=" None of the above"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="2"
                    question="Which of the followings are validation directives?"
                    correctAnswer="All of the above"
                    v1="ng-required"
                    v2="ng-minlength "
                    v3="ng-pattern"
                    v4="All of the above"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="3"
                    question="Which components can be injected as a dependency in AngularJS?"

                    correctAnswer="Application Module"
                    v1="Application Module"
                    v2="constant"
                    v3="value"
                    v4=" factory"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="4"
                    question="Which of the following is true about AngularJS expressions"
                    correctAnswer="All of these"
                    v1="Expressions behave in same way as ng-bind directives"
                    v2="Expressions are used to bind application data to html"
                    v3="Expressions are written inside double braces like {{ expression}}"
                    v4="All of these"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="5"
                    question="AngularJS module can be created using ________"

                    correctAnswer=" angular.module();"
                    v1=" angular.module();"
                    v2=" var myModule = new module();"
                    v3="module.create();"
                    v4="angular.create();"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="6"
                    question=" What is link function is used for in angular js?"
                    correctAnswer="It is used for registering DOM listeners as well as instance DOM manipulation"
                    v1="It is used for registering DOM listeners as well as instance DOM manipulation"
                    v2="It is used to retrieve object instances as defined by provider"
                    v3=" It is used for template DOM Manipulation and collect all of the directives"
                    v4="The method traverses the DOM and matches the directives"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="7"
                    question="Angular initializes based upon which of the following scenario?"
                    correctAnswer=" Both of the above"
                    v1="DOMContentLoaded event happens"
                    v2="document.readyState is set to complete"
                    v3=" Both of the above"
                    v4="None of the above"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="8"
                    question="AngularJS expressions are written using.
                "
                    correctAnswer=" double braces like {{ expression}}"
                    v1="single braces like {expression}"
                    v2="small bracket like (expression)"
                    v3="capital bracket like [expression]"
                    v4=" double braces like {{ expression}}"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="9"
                    question="What angular function is used to manually start up an angular application?"
                    correctAnswer="angular.bootstrap"
                    v1="angular.element"
                    v2="angular.bootstrap"
                    v3="angular.copy"
                    v4="None of the above"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="10"
                    question="AngularJS directives are used in ________"
                    correctAnswer="View"
                    v1="Model"
                    v2="Controller"
                    v3="View"
                    v4="Module"
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

export default AngularQuizeTest1;
