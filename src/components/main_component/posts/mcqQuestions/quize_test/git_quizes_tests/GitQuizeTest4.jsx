import React, { Component } from "react";
import HeaderBannerSection from "../../../../HeaderBannerSection";
import QuizeTest from "../quizeTest";
import ScoreCard from "../../scoreCard";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterComponentUpper from "../../../../../../app/components/footer_component/FooterComponentUpper";
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
        <HeaderBannerSection imgsource="pythonmcq.jpeg" />

        <div class="container-fluid">
          <Link to="/home" className="badge badge-primary mr-1">
            Home >
          </Link>
          <Link to="/index_quize_tests" className="badge badge-warning mr-1">
            Quize Test >
          </Link>
          <Link to="/oops_quize_tests" className="badge badge-success mr-1">
            OOPS Quize >
          </Link>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <QuizeTest
                quizeNo="1"
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />

              <QuizeTest
                quizeNo="2"
                question=""
                code={``}
                correctAnswer=""
                v1=""
                v2=" "
                v3=""
                v4=""
                counter={this.counter}
              />

              <QuizeTest
                quizeNo="3"
                question=""

                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />

              <QuizeTest
                quizeNo="4"
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
              <QuizeTest
                quizeNo="5"
                question=""

                correctAnswer=""
                v1=""
                v2=""
                v3="="
                v4=""
                counter={this.counter}
              />
              <QuizeTest
                quizeNo="6"
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />

              <QuizeTest
                quizeNo="7"
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />

              <QuizeTest
                quizeNo="8"
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />

              <QuizeTest
                quizeNo="9"
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />

              <QuizeTest
                quizeNo="10"
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
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

export default OOPsQuizeTest1;
