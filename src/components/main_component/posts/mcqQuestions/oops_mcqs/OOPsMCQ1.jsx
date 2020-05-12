import React, { Component } from "react";
import Quize from "../quize";
import ScoreCard from "../scoreCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCode, faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import RightSideSection from "../../../../right_section/RightSideSection";
import RecommendPost from "../../../../right_section/RecommendPost";
import MCQCardCarousel from "../MCQCardCarousel";
import HeaderCard from "../../../HeaderCard";
import LearningSideSection from "../../../../right_section/learning_sidesection/LearningSideSection";
import Technologies from "../../../../right_section/Technologies";
import FbLikeShare from "../../../FbLikeShare";

class OOPsMCQ1 extends Component {
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
     <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="col-fluid mt-2 ml-2">
            <h2
              className="text-center mb-4 display-5"
              style={{ color: "#072C71" }}
            >
              OOPs Multiple choice Questions Set-1
            </h2>
            <Link
              to="/home"
              className="badge mr-1"
              style={{ backgroundColor: "#06CB6C" }}
            >
              <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" /> 
            </Link>
            <Link
              to="/index_mcqs"
              className="badge mr-1"
              style={{ backgroundColor: "#072C71" }}

            >
              <FontAwesomeIcon icon={faChalkboardTeacher} size="2x" color="#06CB6C" />

            </Link>
            <Link
              to="/index_oops_mcqs"
              className="badge mr-1 text-white"
              style={{ backgroundColor: "#072C71" }}
            >
              <FontAwesomeIcon
                  icon={faCode}
                  size="1x"
                  color="#06CB6C"
                  className="mr-2"
                />
                back to Index
            </Link>

                <ScoreCard count={this.state.count} />
              </div>
              <div className="row">
                <div className="col">
                  <Quize
                    quizeNo="1"
                    question="Which is not feature of OOP in general definitions? "
                    correctAnswer="Duplicate/Redundant data"
                    v1="Code reusability"
                    v2="Modularity"
                    v3="Duplicate/Redundant data"
                    v4="Efficient Code"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="1"
                    question="Which of the following is not type of class? "
                    correctAnswer="Start Class"
                    v1="Abstract Class"
                    v2="Final Class"
                    v3="Start Class"
                    v4="String Class"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="1"
                    question="Which definition best describes an object? "
                    correctAnswer="Instance of a class"
                    v1="Instance of a class"
                    v2="Instance of itself"
                    v3="Child of a class"
                    v4="Overview of a class
                    "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="1"
                    question="Which feature of OOP indicates code reusability? "
                    correctAnswer="Inheritance"
                    v1="Encapsulation"
                    v2="Inheritance"
                    v3="Abstraction"
                    v4="Polymorphism"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="1"
                    question="What do you call the languages that support classes but not polymorphism? "
                    correctAnswer=" Object-based language"
                    v1="Class based language"
                    v2="Procedure Oriented language"
                    v3=" Object-based language"
                    v4="If classes are supported, polymorphism will always be supported"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="1"
                    question="If data members are private, what can we do to access them from the class object? "
                    correctAnswer=" Create public member functions to access those data members"
                    v1=" Create public member functions to access those data members"
                    v2="Create private member functions to access those data members"
                    v3="Create protected member functions to access those data members"
                    v4="Private data members can never be accessed from outside the classFind which of the following uses encapsulation?"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="1"
                    question="Find which of the following uses encapsulation? "
                    correctAnswer="class student{int a; public: void disp(){ cout<<a;} };"
                    v1="void main(){ int a; void fun( int a=10; cout<<a); fun(); }"
                    v2="class student{ int a; public: int b;};"
                    v3="class student{int a; public: void disp(){ cout<<a;} };"
                    v4="struct topper{ char name[10]; public : int marks; }"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="1"
                    question="Hiding the implementation complexity can ____________ "
                    correctAnswer="Make the programming easy"
                    v1="Make the programming easy"
                    v2="Make the programming complex"
                    v3="Provide more number of features"
                    v4="Provide better features"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="1"
                    question="Which among the following is not a necessary condition for constructors? "
                    correctAnswer="It must contain a definition body"
                    v1="Its name must be same as that of class"
                    v2="It must not have any return type"
                    v3="It must contain a definition body"
                    v4="It can contains arguments"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="1"
                    question="How many types of constructors are available for use in general (with respect to parameters)? "
                    correctAnswer="2"
                    v1="2"
                    v2="3"
                    v3="4"
                    v4="5"
                    counter={this.counter}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h4>For More MCQs Questions</h4>
                  <MCQCardCarousel />
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-md-5 mt-3">
            <LearningSideSection language="oops" />
            <RightSideSection />
            <Technologies />
          
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default OOPsMCQ1;
