import React, { Component } from "react";
import HeaderBannerSection from "../../../../HeaderBannerSection";
import QuizeTest from "../quizeTest";
import ScoreCard from "../../scoreCard";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterComponentUpper from "../../../../../../app/components/footer_component/FooterComponentUpper";
import RightSideSection from "../../../../../right_section/RightSideSection";
import RecommendPost from "../../../../../right_section/RecommendPost";
import MCQTestCardCarousel from "../MCQTestCardCarousel";
class JSQuizeTest1 extends Component {
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
                  <h2>JavaScript Quiz Test Beginner</h2>
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
                    to="/js_quize_tests"
                    className="badge badge-success mr-1"
                  >
                    JavaScript Quiz >>
          </Link>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <QuizeTest
                    quizeNo="1"
                    question="Why so JavaScript and Java have similar name?
                "
                    correctAnswer="JavaScript's syntax is loosely based on Java's"
                    v1="JavaScript is a stripped-down version of Java"
                    v2="JavaScript's syntax is loosely based on Java's"
                    v3="They both originated on the island of Java"
                    v4="None of the above"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="2"
                    question="When a user views a page containing a JavaScript program, which machine actually executes the script?"
                    correctAnswer="The User's machine running a Web browser"
                    v1="The User's machine running a Web browser"
                    v2="The Web server "
                    v3="A central machine deep within Netscape's corporate offices"
                    v4="None of the above"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="3"
                    question="  ______ JavaScript is also called client-side JavaScript."

                    correctAnswer="Navigator"
                    v1=" Microsoft"
                    v2="Navigator"
                    v3="LiveWire"
                    v4=" Native"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="4"
                    question=" __________ JavaScript is also called server-side JavaScript."
                    correctAnswer="LiveWire"
                    v1="Microsoft"
                    v2="Navigator"
                    v3="LiveWire"
                    v4="Native"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="5"
                    question="What are variables used for in JavaScript Programs?"

                    correctAnswer="Storing numbers, dates, or other values"
                    v1="Storing numbers, dates, or other values"
                    v2="Varying randomly"
                    v3="Causing high-school algebra flashbacks"
                    v4="None of the above"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="6"
                    question="_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation."
                    correctAnswer="Client-side"
                    v1="Client-side"
                    v2="Server-side"
                    v3="Local"
                    v4="Native"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="7"
                    question="What should appear at the very end of your JavaScript?
                The <script LANGUAGE='JavaScript'>tag"
                    correctAnswer="The </script>"
                    v1="The </script>"
                    v2="The <script>"
                    v3="The END statement"
                    v4="None of the above"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="8"
                    question="Which of the following can't be done with client-side JavaScript?"
                    correctAnswer="Storing the form's contents to a database file on the server"
                    v1="Validating a form"
                    v2="Sending a form's contents by email"
                    v3="Storing the form's contents to a database file on the server"
                    v4="None of the above"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="9"
                    question="Which of the following are capabilities of functions in JavaScript?"
                    correctAnswer="Accept parameters"
                    v1="Return a value"
                    v2="Accept parameters and Return a value"
                    v3="Accept parameters"
                    v4="None of the above"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="10"
                    question="Which of the following is not a valid JavaScript variable name?"
                    correctAnswer="2names"
                    v1="2names"
                    v2=" _first_and_last_names"
                    v3=" FirstAndLast"
                    v4=" None of the above"
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
        <div className="container-fluid mt-5">
          <FooterComponentUpper />
        </div>
      </>
    );
  }
}

export default JSQuizeTest1;
