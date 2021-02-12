import React, { Component } from "react";
import HeaderBannerSection from "../../../../HeaderBannerSection";
import QuizeTest from "../quizeTest";
import ScoreCard from "../../scoreCard";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterComponentUpper from "../../../../../../app/components/footer_component/FooterComponentUpper";
import MCQTestCardCarousel from "../MCQTestCardCarousel";
import RightSideSection from "../../../../../right_section/RightSideSection";
import RecommendPost from "../../../../../right_section/RecommendPost";

class OOPsQuizeTest1 extends Component {
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
                  <h2>OOPS Quiz Test Beginner </h2>
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
                    Quizz Test >>
                  </Link>
                  <Link
                    to="/oops_quize_tests"
                    className="badge badge-success mr-1"
                  >
                    OOPS Quiz >>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <QuizeTest
                    quizeNo="1"
                    question="	
                Which of the following type of class allows only one object of it to be created?"
                    correctAnswer="Singleton class"
                    v1="Virtual class"
                    v2="Abstract class"
                    v3="Singleton class"
                    v4="Friend class"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="2"
                    question="Which of the following is not a type of constructor?"
                    correctAnswer="Friend constructor"
                    v1="Copy constructor"
                    v2="Friend constructor "
                    v3="Default constructor"
                    v4="Parameterized constructor"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="3"
                    question="Which of the following statements is correct?"
                    correctAnswer="Derived class pointer cannot point to base class."
                    v1="Base class pointer cannot point to derived class."
                    v2="Derived class pointer cannot point to base class."
                    v3="Pointer to derived class cannot be created."
                    v4="Pointer to base class cannot be created."
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="4"
                    question="Which of the following is not the member of class?"
                    correctAnswer="Friend function"
                    v1="Static function"
                    v2="Const function"
                    v3="Virtual function"
                    v4="Friend function"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="5"
                    question="	
                Which of the following concepts means determining at runtime what method to invoke?"

                    correctAnswer="Dynamic binding"
                    v1="Data hiding"
                    v2="Dynamic Typing"
                    v3="Dynamic binding"
                    v4="Dynamic loading"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="6"
                    question="Which of the following concept of oops allows compiler to insert arguments in a function call if it is not specified?

                "
                    correctAnswer="Default arguments"
                    v1="Call by value"
                    v2="Call by reference"
                    v3="Call by pointer"
                    v4="Default arguments"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="7"
                    question="How many instances of an abstract class can be created?"
                    correctAnswer="0"
                    v1="0"
                    v2="1"
                    v3="5"
                    v4="13"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="8"
                    question="Which of the following concepts of OOPS means exposing only necessary information to client?"
                    correctAnswer="Data hiding"
                    v1="Encapsulation"
                    v2="Abstraction"
                    v3="Data hiding"
                    v4="Data binding"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="9"
                    question="Why reference is not same as a pointer?"
                    correctAnswer=""
                    v1="A reference can never be null."
                    v2="A reference once established cannot be changed."
                    v3="Reference doesn't need an explicit dereferencing mechanism."
                    v4="All of the above."
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="10"
                    question="Which of the following concepts provides facility of using object of one class inside another class?"
                    correctAnswer="Composition"
                    v1="Encapsulation"
                    v2="Abstraction"
                    v3="Composition"
                    v4="Inheritance
                "
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
            <div className="col-md-4 mt-md-4">
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

export default OOPsQuizeTest1;
