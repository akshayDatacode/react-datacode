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
import Countdown from 'react-countdown'

class CQuizeTest1 extends Component {
  state = {
    isCorrect: false,
    isClicked: false,
    count: 0,
    status: "",
    show: false,
    startQuiz: false,
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

  renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <h1>Time Completed</h1>
    } else {
      // Render a countdown
      return <h1>{hours}:{`0${minutes}`}:{seconds}</h1>;
    }
  };

  handleStartQuiz = () => {
    this.setState({ startQuiz: true })
  }

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
                  <h2>C Quiz Test Beginner</h2>
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
                    to="/c_quize_tests"
                    className="badge badge-success mr-1"
                  >
                    C Quiz >>
                  </Link>
                </div>
              </div>
              <div className="row">
                <button
                  className="btn btn-primary"
                  onClick={() => this.handleStartQuiz()}
                >
                  Start Quiz
                </button>
              </div>
              {this.state.startQuiz &&
                <>
                  <div className="row">
                    <Countdown
                      date={Date.now() + 600000}
                      renderer={this.renderer}
                    />
                  </div>
                  <div className="row">
                    <div className="col">
                      <QuizeTest
                        quizeNo="1"
                        question="Which of the following has a global scope in the program?"
                        correctAnswer="Macros"
                        v1="Formal parameters"
                        v2="Constants"
                        v3="Macros"
                        v4="Local variables"
                        counter={this.counter}
                      />

                      <QuizeTest
                        quizeNo="2"
                        question="Which of the following statements about functions is false?"
                        correctAnswer=""
                        v1="The main() function can be called recursively"
                        v2="Functions cannot return more than one value at a time "
                        v3="A function can have multiple return statements with different return values"
                        v4="The maximum number of arguments a function can take is 128"
                        counter={this.counter}
                      />

                      <QuizeTest
                        quizeNo="3"
                        question="What is the correct way of treating 9.81 as a long double?"
                        correctAnswer="9.81L"
                        v1="9.81L"
                        v2="9.81LD"
                        v3="9.81D"
                        v4="9.81DL"
                        counter={this.counter}
                      />

                      <QuizeTest
                        quizeNo="4"
                        question="Which function would you use to convert 1.98 to 1?"
                        correctAnswer="ceil()"
                        v1="floor()
                "
                        v2="fabs()"
                        v3="abs()"
                        v4="ceil()"
                        counter={this.counter}
                      />
                      <QuizeTest
                        quizeNo="5"
                        question="Which of the following statements about the null pointer is correct?"
                        correctAnswer="You can declare a null pointer as char* p = (char*)0
                "
                        v1="The null pointer is similar to an uninitialized pointer"
                        v2="You can declare a null pointer as char* p = (char*)0
                "
                        v3="The NULL macro is defined only in the stdio.h header
                "
                        v4="The sizeof( NULL) operation would return the value 1"
                        counter={this.counter}
                      />
                      <QuizeTest
                        quizeNo="6"
                        question="Which of the following statements about unions is incorrect?"
                        correctAnswer="A bit field cannot be used in a union"
                        v1="A bit field cannot be used in a union"
                        v2="A pointer to a union exists
                "
                        v3="Union elements can be of different sizes"
                        v4="A union can be nested into a structure"
                        counter={this.counter}
                      />

                      <QuizeTest
                        quizeNo="7"
                        question="What is the range of double data type for a 16-bit compiler?"
                        correctAnswer="-1.7e-308 to +1.7e-308"
                        v1="-1.7e-328 to +1.7e-328"
                        v2="-1.7e-348 to +1.7e-348
                "
                        v3="-1.7e-308 to +1.7e-308"
                        v4="-1.7e-328 to +1.7e-328"
                        counter={this.counter}
                      />

                      <QuizeTest
                        quizeNo="8"
                        question="What is the output of this C code?"
                        code={`#include <stdio.h>
int main()
{
    printf("Hello World! %d \n", x);
    return 0;
}
                `}
                        correctAnswer="Compile time error"
                        v1="Hello World! x;"
                        v2="Hello World! followed by a junk value"
                        v3="Compile time error"
                        v4="Hello World!"
                        counter={this.counter}
                      />

                      <QuizeTest
                        quizeNo="9"
                        question="Which among the following is NOT a logical or relational operator?"
                        correctAnswer=""
                        v1="!="
                        v2="=="
                        v3="||"
                        v4="="
                        counter={this.counter}
                      />

                      <QuizeTest
                        quizeNo="10"
                        question=" How many times is Hello world printed ?"
                        code={`int main()
{
   fork();
   fork();
   printf("Hello world\n");
}
              `}
                        correctAnswer="4"
                        v1="1"
                        v2="2"
                        v3="4"
                        v4="8"
                        counter={this.counter}
                      />
                    </div>
                  </div>
                </>
              }
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
      </>
    );
  }
}

export default CQuizeTest1;
