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
class ReactQuizeTest1 extends Component {
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
          <h2>React Quiz Test Beginner</h2>
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
            to="/react_quize_tests"
            className="badge badge-success mr-1"
          >
               React Quize >>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col">
              <QuizeTest
                quizeNo="1"
                question="What is ReactJS?"
                correctAnswer="Both"
                v1="Server-side Framework"
                v2="User-interface framework"
                v3="Both"
                v4="None"
                counter={this.counter}
              />

              <QuizeTest
                quizeNo="2"
                question="What are the limitations of ReactJS?"
                correctAnswer="All of these"
                v1="React is only for view layer of the app so we still need the help of other technologies to get a complete tooling set for development"
                v2="React is using inline templating and JSX. This can seem awkward to some developers "
                v3="The library of react is too large"
                v4="All of these"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="3"
                question="How can you access the state of a component from inside of a member function?
                "
            
                correctAnswer="this.values"
                v1="this.getState()"
                v2="this.prototype.stateValue"
                v3=" this.state"
                v4="this.values"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="4"
                question="Props are __________ into other components"
                correctAnswer="Methods"
                v1=" Injected"
                v2="Methods"
                v3="Both A and B"
                v4="All of these"
                counter={this.counter}
              />
                  <QuizeTest
                quizeNo="5"
                question=" Which of the following API is a MUST for every ReactJS component?"
            
                correctAnswer="renderComponent"
                v1="getInitialState"
                v2="render"
                v3="renderComponent"
                v4="None
                "
                counter={this.counter}
              />
                  <QuizeTest
                quizeNo="6"
                question="At the highest level, React components have lifecycle events that fall into"
                correctAnswer=" All of these"
                v1="Initialization"
                v2="State/Property Updates"
                v3="Destruction"
                v4=" All of these"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="7"
                question="What are the advantages of React JS?"
                correctAnswer="All of the above"
                v1="React can be used on client and as well as server side too"
                v2="Using React increases readability and makes maintainability easier. Component, Data patterns improves readability and thus makes it easier for manitaining larger apps"
                v3="React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer"
                v4="All of the above"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="8"
                question="How does React handle Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA) standard?"
                correctAnswer="React is yet to support WAI-ARIA standard"
                v1="React is yet to support WAI-ARIA standard"
                v2="aria-* HTML attributes are fully supported in JSX. Where most DOM properties and attributes in React are camelCased, these attributes should be lowercased"
                v3="aria-* attributes should be converted to camelCase like other attributes eg. className, onChange and so on"
                v4="React processes aria-* attributes separately and update the DOM for accessibility if the user requires it"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="9"
                question="What does the “webpack” command do?"
                correctAnswer="Transpiles all the Javascript down into one file"
                v1="Runs react local development server"
                v2="Transpiles all the Javascript down into one file"
                v3="Both A and B"
                v4="None"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="10"
                question="What is a react.js in MVC?"
                correctAnswer="Controller"
                v1="Middleware"
                v2=" Model"
                v3="Controller"
                v4="Router"
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

export default ReactQuizeTest1;
