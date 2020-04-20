import React, { Component } from "react";
import HeaderBannerSection from "../../../../HeaderBannerSection";
import QuizeTest from "../quizeTest";
import ScoreCard from "../../scoreCard";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterComponentUpper from "../../../../../footer_component/FooterComponentUpper";
class PythonQuizeTest1 extends Component {
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
          <Link to="/home" className="badge badge-primary mr-1">
            Home >
          </Link>
          <Link to="/index_quize_tests" className="badge badge-warning mr-1">
            Quize Test >
          </Link>
          <Link to="/python_quize_tests" className="badge badge-success mr-1">
            Python Quize >
          </Link>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <QuizeTest
                quizeNo="1"
                question="In Python, what is one function to output content to the console?"
                correctAnswer="print"
                v1=" echo
                "
                v2=" output
                "
                v3=" print
                "
                v4=" console.log
                "
                counter={this.counter}
              />

              <QuizeTest
                quizeNo="2"
                question="Which of the following statements is NOT true about Python?"
                correctAnswer="Python’s syntax is much like PHP"
                v1="Python’s syntax is much like PHP"
                v2=" Python can be used for web development"
                v3="Python can run on any type of platform"
                v4="Python can be used to generate dynamic web pages"
                counter={this.counter}
              />

              <QuizeTest
                quizeNo="3"
                question="What symbol can you use to comment out one line of code?"
                correctAnswer="#"
                v1="*"
                v2="(comment)"
                v3="//"
                v4="#"
                counter={this.counter}
              />

              <QuizeTest
                quizeNo="4"
                question="How do you create a variable “a” that is equal to 2?"
                correctAnswer="a = 2"
                v1="var a = 2"
                v2=" int a = 2"
                v3="a = 2"
                v4="variable a = 2"
                counter={this.counter}
              />
              <QuizeTest
                quizeNo="5"
                question=" How would you cast the string variable “a” that is equal to “2” into the integer 2?"
                correctAnswer="int(a)
                "
                v1="castToInt(a)"
                v2="int(a)"
                v3="integer(a)"
                v4="castToInteger(a)"
                counter={this.counter}
              />
              <QuizeTest
                quizeNo="6"
                question="Which of the following is not a valid assignment operator?"
                correctAnswer="X="
                v1="+="
                v2=" -="
                v3=" *="
                v4="X="
                counter={this.counter}
              />

              <QuizeTest
                quizeNo="7"
                question="Which one of the following is a valid Python if statement"
                correctAnswer="if a >= 22:
                "
                v1="if a >= 22:"
                v2="if (a >= 22)"
                v3="if (a => 22)"
                v4="if a >= 22"
                counter={this.counter}
              />

              <QuizeTest
                quizeNo="8"
                question="What keyword would you use to add an alternative condition to an if statement?"
                correctAnswer="elif"
                v1="else if"
                v2="elseif"
                v3="elif"
                v4=" None of the above"
                counter={this.counter}
              />

              <QuizeTest
                quizeNo="9"
                question="Which of the following is a valid way to start a function in Python?"
                correctAnswer="def someFunction():"
                v1="def someFunction():"
                v2="function someFunction()
                "
                v3="def someFunction()
                "
                v4="function someFunction():"
                counter={this.counter}
              />

              <QuizeTest
                quizeNo="10"
                question="Which of the following is a valid for loop in Python?"
                correctAnswer="for a in range(1,3):"
                v1="for(a = 0; a < 3; a++)"
                v2=" for a in range(3)"
                v3=" for a loop 3:
                "
                v4="for a in range(1,3):"
                counter={this.counter}
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <Button variant="primary" onClick={this.handleShow}>
            Show Score
          </Button>
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

export default PythonQuizeTest1;
