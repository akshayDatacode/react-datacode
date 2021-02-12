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
class HtmlQuizeTest2 extends Component {
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
                  <h2>HTML & CSS Quiz Test Intermediate</h2>
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
                    question="Markup tags tell the web browser"
                    correctAnswer="How to display the page"
                    v1="How to organise the page"
                    v2="How to display the page"
                    v3="How to display message box on page"
                    v4="None of these"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="2"
                    question="www is based on which model?"
                    correctAnswer="Client-server"
                    v1="Local-server"
                    v2="Client-server "
                    v3="3-tier"
                    v4="None of these"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="3"
                    question="What are Empty elements and is it valid?"

                    correctAnswer="Empty elements are element with no data"
                    v1="No, there is no such terms as Empty Element"
                    v2="Empty elements are element with no data"
                    v3="No, it is not valid to use Empty Element"
                    v4="None of these"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="4"
                    question="Which of the following attributes of text box control allow to limit the maximum character?"
                    correctAnswer="maxlength"
                    v1="size"
                    v2="len"
                    v3="maxlength"
                    v4="all of these"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="5"
                    question="Web pages starts with which ofthe following tag?"

                    correctAnswer=""
                    v1="<Body>"
                    v2="<Title>"
                    v3="<HTML>"
                    v4="<Form>"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="6"
                    question="Can we define the text direction via css property ?"
                    correctAnswer="Yes, we canB"
                    v1="Yes, we can"
                    v2="No, we can't"
                    v3="Maybe"
                    v4="Not sure"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="7"
                    question="Is it possible to declare font-weight, font-face & font-size by using ONLY ONE css propery ?
                "
                    correctAnswer="Yes, it's possible"
                    v1="Yes, it's possible"
                    v2="No, not possible"
                    v3="Maybe"
                    v4="Not sure"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="8"
                    question="If we want to show an Arrow as cursor, then which value we will use ?"
                    correctAnswer="default"
                    v1="pointer"
                    v2="default"
                    v3="arrow"
                    v4="arr"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="9"
                    question="If we want to use a nice looking green dotted border around an image, which css property will we use?"
                    correctAnswer="border-style"
                    v1="border-color"
                    v2="border-decoration"
                    v3="border-style"
                    v4="border-line"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="10"
                    question="Which of the following properties will we use to display border around a cell without any content ?"
                    correctAnswer="empty-cell"
                    v1="empty-cell"
                    v2="blank-cell"
                    v3="noncontent-cell"
                    v4="void-cell"
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

export default HtmlQuizeTest2;
