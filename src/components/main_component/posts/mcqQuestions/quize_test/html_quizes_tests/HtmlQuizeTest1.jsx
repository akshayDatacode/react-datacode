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

class HtmlQuizeTest1 extends Component {
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
                  <h2>HTML & CSS Quiz Test Beginner</h2>
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
                    question="HTML stands for?"
                    correctAnswer="Hyper Text Markup Language"
                    v1="	Hyper Text Markup Language"
                    v2="	High Text Markup Language"
                    v3="Hyper Tabular Markup Language"
                    v4="None of these"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="2"
                    question="which of the following tag is used to mark a begining of paragraph ?"
                    correctAnswer="<P>"
                    v1="<TD>"
                    v2="<br> "
                    v3="<P>"
                    v4="<TR>"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="3"
                    question="From which tag descriptive list starts ?"
                    correctAnswer="<DL>"
                    v1="<LL>"
                    v2="<DD>"
                    v3="<DL>"
                    v4="<DS>"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="4"
                    question=" 
                Correct HTML tag for the largest heading is"
                    correctAnswer=""
                    v1="<head>"
                    v2="<h6>"
                    v3="<heading>"
                    v4="<h1>"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="5"
                    question="The attribute of <form> tag"

                    correctAnswer="Both (a)&(b)"
                    v1="Method"
                    v2="Action"
                    v3="Both (a)&(b)"
                    v4="None of these"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="6"
                    question="If we want define style for an unique element, then which css selector will we use ?
                "
                    correctAnswer="Id"
                    v1="Id"
                    v2="text"
                    v3="class"
                    v4="name"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="7"
                    question="If we don't want to allow a floating div to the left side of an element, which css property will we use ?
                "
                    correctAnswer="clear"
                    v1="margin"
                    v2="clear"
                    v3="float"
                    v4="padding"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="8"
                    question="Suppose we want to arragnge five nos. of DIVs so that DIV4 is placed above DIV1. Now, which css property will we use to control the order of stack?"
                    correctAnswer=""
                    v1="d-index"
                    v2="s-index"
                    v3="x-index"
                    v4="z-index"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="9"
                    question="Can we align a Block element by setting the left and right margins ?"
                    correctAnswer="Not Possible"
                    v1="Yes, we can"
                    v2="Not Possible"
                    v3="Maybe"
                    v4="Not possible"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="10"
                    question="If we want to wrap a block of text around an image, which css property will we use ?"
                    correctAnswer="float"
                    v1="wrap"
                    v2="push"
                    v3="float"
                    v4="align"
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

export default HtmlQuizeTest1;
