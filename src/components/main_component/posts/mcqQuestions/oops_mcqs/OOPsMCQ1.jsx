import React, { Component } from "react";
import HeaderBannerSection from "../../../HeaderBannerSection";
import { Link } from "react-router-dom";
import ScoreCard from "../scoreCard";
import Quize from "../quize";
import RightSideSection from "../../../../right_section/RightSideSection";
import RecommendPost from "../../../../right_section/RecommendPost";

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
        <HeaderBannerSection imgsource="pythonmcq.jpeg" />
        <div className="col-fluid ">
          <Link to="/home" className="badge badge-primary mr-1">
            Home >{" "}
          </Link>
          <Link to="/index_mcqs" className="badge badge-warning mr-1">
            Programming MCQs >{" "}
          </Link>
          <Link to="/index_oops_mcqs" className="badge badge-success mr-1">
          OOPS MCQs >
          </Link>
          <ScoreCard count={this.state.count} />
        </div>
        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="row mt-2 text-center">
                <div className="col">
                  <h2 className="text-secondary">OOPS MCQs Set 1</h2>
                </div>
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
            </div>
            <div className="col-md-4">
              <h5 className="mb-3">Recommended for you</h5>
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
                imgsource="datacodelogo.jpeg"
                RecPostHading="Programminig Quize Test"
                link="/index_quize_tests"
              />
              <RightSideSection />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default OOPsMCQ1;
