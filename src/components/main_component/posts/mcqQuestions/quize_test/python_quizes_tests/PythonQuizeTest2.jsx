import React, { Component } from "react";
import HeaderBannerSection from "../../../../HeaderBannerSection";
import QuizeTest from "../quizeTest";
import ScoreCard from "../../scoreCard";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterComponentUpper from "../../../../../footer_component/FooterComponentUpper";
import MCQTestCardCarousel from "../MCQTestCardCarousel";
import RecommendPost from "../../../../../right_section/RecommendPost";
import RightSideSection from "../../../../../right_section/RightSideSection";
class PythonQuizeTest2 extends Component {
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
                  <h2>Python Quiz Test Intermediate</h2>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Link to="/home" className="badge badge-primary mr-1">
                    Home >
                  </Link>
                  <Link
                    to="/index_quize_tests"
                    className="badge badge-warning mr-1"
                  >
                    Quizz Test >>
                  </Link>
                  <Link
                    to="/python_quize_tests"
                    className="badge badge-success mr-1"
                  >
                    Python Quiz >>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <QuizeTest
                    quizeNo="1"
                    question="If you have a variable “example”, how do you check to see what type of variable you are working with?"
                    correctAnswer="type(example)"
                    v1="getType(example)"
                    v2="Type(example)"
                    v3="type(example)"
                    v4="example.type"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="2"
                    question="How can you replace all of the letter a in a string variable “example” with the letter b?"
                    correctAnswer="example.replace(‘a’,’b’)"
                    v1="example.swap(‘b’, ‘a’)"
                    v2="example.replace(‘a’,’b’) "
                    v3=" example.match(‘b’,’a’)"
                    v4="example.replace(‘b’,’a’)"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="3"
                    question="Which of the following is a valid list in Python?"
                    correctAnswer=" sampleList = [1,2,3,4,5]"
                    v1="sampleList = {1,2,3,4,5}"
                    v2="sampleList = (1,2,3,4,5)"
                    v3="sampleList = /1,2,3,4,5/"
                    v4=" sampleList = [1,2,3,4,5]"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="4"
                    question="Which of the following is a valid tuple in Python?"
                    correctAnswer="sampleTuple = (1,2,3,4,5)"
                    v1="sampleTuple = (1,2,3,4,5)"
                    v2="sampleTuple = {1,2,3,4,5}"
                    v3="sampleTuple = [1,2,3,4,5]"
                    v4="sampleTuple = /1,2,3,4,5/"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="5"
                    question="Which of the following is a valid dictionary in Python?"
                    correctAnswer="myExample = {‘someItem’: 2, ‘otherItem’: 20}"
                    v1="myExample = {‘someItem’=>2, ‘otherItem’=>20}"
                    v2="myExample = {‘someItem’: 2, ‘otherItem’: 20}"
                    v3="myExample = (‘someItem’=>2, ‘otherItem’=>20)"
                    v4="myExample = (‘someItem’: 2, ‘otherItem’: 20)"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="6"
                    question="How would you print the second item in the list variable “example”?"
                    correctAnswer="print(example[1])"
                    v1="print(example[2])"
                    v2="echo(example[2]) "
                    v3="print(example[1]) "
                    v4="print(example(2))"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="7"
                    question="What would the statement “print(‘%.2f’ % 123.444)” print out?"
                    correctAnswer="123.44"
                    v1="123.44"
                    v2="12"
                    v3=" 123.44"
                    v4="44"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="8"
                    question="What is the keyword used after the try statement to handle exceptions?"
                    correctAnswer="except"
                    v1="catch"
                    v2="exception"
                    v3="catch(a)
                "
                    v4="except"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="9"
                    question="What is the proper way to open a file that you intend to read from?"
                    correctAnswer="f = open(“test.txt”, “r”)
                "
                    v1=" f = open(“test.txt”, “read”)
                "
                    v2=" f = open(“r”,”test.txt”)"
                    v3="f = open(“test.txt”, “r”)"
                    v4="f = open(“read”,”test.txt”)"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="10"
                    question="What is the proper way to open a file that you plan to write to?"
                    correctAnswer="f = open(“test.txt”,”w”)"
                    v1="f = open(“test.txt”,”w”)"
                    v2="f = open(“test.txt”,”write”)"
                    v3="f = open(“write”,”test.txt”)"
                    v4="f = open(“w”,”test.txt”)"
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

export default PythonQuizeTest2;
