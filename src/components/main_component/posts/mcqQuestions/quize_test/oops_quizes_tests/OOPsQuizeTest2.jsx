import React, { Component } from "react";
import HeaderBannerSection from "../../../../HeaderBannerSection";
import QuizeTest from "../quizeTest";
import ScoreCard from "../../scoreCard";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterComponentUpper from "../../../../../footer_component/FooterComponentUpper";
import MCQTestCardCarousel from "../MCQTestCardCarousel";
import RightSideSection from "../../../../../right_section/RightSideSection";
import RecommendPost from "../../../../../right_section/RecommendPost";

class OOPsQuizeTest2 extends Component {
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
                  <h2>OOPS Quiz Test Intermediate</h2>
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
                question="Which of the following is an abstract data type?"
                correctAnswer="Class"
                v1="int"
                v2="double"
                v3="string"
                v4="Class"
                counter={this.counter}
              />

              <QuizeTest
                quizeNo="2"
                question="Which of the following concepts means adding new components to a program as it runs?"
                correctAnswer="Dynamic loading"
                v1="Data hiding"
                v2="Dynamic loading "
                v3="Dynamic binding"
                v4="Dynamic typing"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="3"
                question="	
                Which of the following statement is correct?"
            
                correctAnswer="A constructor is called at the time of declaration of an object."
                v1="A constructor is called at the time of declaration of an object."
                v2="A constructor is called at the time of use of an object."
                v3="A constructor is called at the time of declaration of a class."
                v4="A constructor is called at the time of use of a class."
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="4"
                question="	
                Which of the following correctly describes overloading of functions?"
                correctAnswer="Ad-hoc polymorphism"
                v1="Virtual polymorphism"
                v2="Transient polymorphism"
                v3="Ad-hoc polymorphism"
                v4="Pseudo polymorphism"
                counter={this.counter}
              />
                  <QuizeTest
                quizeNo="5"
                question="Which of the following is correct about function overloading?"
            
                correctAnswer="Both A and B."
                v1="The types of arguments are different."
                v2="The order of argument is different."
                v3="The number of argument is same."
                v4="Both A and B."
                counter={this.counter}
              />
                  <QuizeTest
                quizeNo="6"
                question="Which of the following is correct about class and structure?"
                correctAnswer="class data members are private by default while that of structure are public by default."
                v1="class can have member functions while structure cannot."
                v2="class data members are private by default while that of structure are public by default."
                v3="class data members are public by default while that of structure are private."
                v4="Pointer to structure or classes cannot be declared."
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="7"
                question="Which of the following functions are performed by a constructor?"
                correctAnswer="Initialize objects"
                v1="Construct a new class"
                v2="Construct a new object"
                v3="Construct a new function"
                v4="Initialize objects"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="8"
                question="Which of the following is the correct way of declaring a function as constant?"
                correctAnswer="int ShowData(void) const { /* statements */ }"
                v1="const int ShowData(void) { /* statements */ }"
                v2="int const ShowData(void) { /* statements */ }"
                v3="int ShowData(void) const { /* statements */ }"
                v4="Both A and B"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="9"
                question="	
                Which of the following ways are legal to access a class data member using this pointer?"
                correctAnswer="this->x"
                v1="this->x"
                v2="this.x"
                v3="*this.x"
                v4="*this-x"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="10"
                question="	
                In which of the following a virtual call is resolved at the time of compilation?"
                correctAnswer="Both A and B."
                v1="From inside the destructor.
                "
                v2="From inside the constructor."
                v3="From inside the main()."
                v4="Both A and B."
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

export default OOPsQuizeTest2;
