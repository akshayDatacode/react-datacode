import React, { Component } from "react";
import HeaderBannerSection from "../../../../HeaderBannerSection";
import QuizeTest from "../quizeTest";
import ScoreCard from "../../scoreCard";
import { Button, Modal } from "react-bootstrap";
class PythonQuizeTest1 extends Component {
  state = {
    isCorrect: false,
    isClicked: false,
    count: 0,
    status: "",
    show: false
  };

  counter = count => {
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
        <HeaderBannerSection imgsource="pythonmcq.jpeg" />
        <h1>Python Quize Test 1</h1>

        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <QuizeTest
                quizeNo="1"
                question="Which of the following is not a keyword?"
                correctAnswer="Programming"
                v1="eval"
                v2="assert"
                v3=" nonlocal"
                v4="pass"
                counter={this.counter}
              />
              <QuizeTest
                quizeNo="2"
                question="Which of the following is an invalid statement?"
                correctAnswer="a b c = 1000 2000 3000"
                v1="abc = 1,000,000"
                v2="a b c = 1000 2000 3000"
                v3="a,b,c = 1000, 2000, 3000"
                v4="a_b_c = 1,000,000"
                counter={this.counter}
              />
              <QuizeTest
                quizeNo="3"
                question="Which of the following will run without errors?"
                correctAnswer="round(45.8)"
                v1="round(45.8)"
                v2="round(6352.898,2,5)"
                v3="round()"
                v4="round(7463.123,2,1)"
                counter={this.counter}
              />
              <QuizeTest
                quizeNo="4"
                question="Which of the following is incorrect?"
                correctAnswer="float(’12+34′)"
                v1="float(‘inf’)"
                v2="float(‘nan’)"
                v3="float(’56’+’78’)"
                v4="float(’12+34′)"
                counter={this.counter}
              />
            </div>
          </div>
        </div>

        <Button variant="primary" onClick={this.handleShow}>
          Show Score
        </Button>
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

export default PythonQuizeTest1;
