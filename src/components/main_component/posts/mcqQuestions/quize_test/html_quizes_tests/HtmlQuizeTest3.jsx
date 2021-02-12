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

class HtmlQuizeTest3 extends Component {
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
                  <h2>HTML & CSS Quiz Test Advance</h2>
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
                    to="/html_quize_tests"
                    className="badge badge-success mr-1"
                  >
                    HTML & CSS Quiz >>
          </Link>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <QuizeTest
                    quizeNo="1"
                    question="What is the correct HTML for adding a background color?"
                    correctAnswer="<body bg color = 'yellow'>"
                    v1="<background>yellow<Background>"
                    v2="<body color = 'yellow'>"
                    v3="<body bg color = 'yellow'>"
                    v4="<body bg ='yellow'>"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="2"
                    question="Main container for <TR>, <TD> and <TH> is"
                    correctAnswer="<TABLE>"
                    v1="<TABLE>"
                    v2="<GROUP> "
                    v3="<DATA>"
                    v4="All of these"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="3"
                    question="The body tag usually used after"

                    correctAnswer="HEAD tag"
                    v1="Title tag"
                    v2="HEAD tag"
                    v3="EM tag"
                    v4="FORM tag"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="4"
                    question="How can you make an e-mail link?"
                    correctAnswer="<a href ='mail to: xxx@y.com'>"
                    v1="<mail href +'xxx@y.com'>"
                    v2="<a href ='mail to: xxx@y.com'>"
                    v3="<a href = 'xxx@y.com'>"
                    v4="Both (b) and (c)"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="5"
                    question="Which tag creates a number/order list?"

                    correctAnswer="<OL>"
                    v1="<UL>"
                    v2="<OL>"
                    v3="<OT>"
                    v4="None of these"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="6"
                    question="What should be the table width, so that the width of a table adjust to the current width of the browser window?"
                    correctAnswer="100%"
                    v1="640 pixels"
                    v2="100%"
                    v3="full-screen"
                    v4="1024 px"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="7"
                    question="Which element is used in the <HEAD> section on an HTML / XHTMLpage, if we want to use an external style sheet file to decorate the page ?"
                    correctAnswer="<link>"
                    v1="<src>"
                    v2="<link>"
                    v3="<style>"
                    v4="<css>"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="8"
                    question="Which attribute can be added to many HTML / XHTML elements to identify them as a member of a specific group ?"
                    correctAnswer="class"
                    v1="Id"
                    v2="div"
                    v3="class"
                    v4="span"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="9"
                    question="When we write <img src='img.png'>, what 'img.png' inside double quote implies?
                "
                    correctAnswer="value"
                    v1="element"
                    v2="attribute"
                    v3="value"
                    v4="operator"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="10"
                    question="	
                How can we write comment along with CSS code ?"
                    correctAnswer="/* a comment */"
                    v1="/* a comment */"
                    v2="// a comment //"
                    v3="/ a comment /"
                    v4="<' a comment'>"
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

export default HtmlQuizeTest3;
