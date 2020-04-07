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
        <HeaderBannerSection imgsource="pythonmcq.jpeg" />

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
