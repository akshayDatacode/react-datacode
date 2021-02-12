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
class JSQuizeTest2 extends Component {
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
                  <h2>JavaScript Quiz Test Intermediate</h2>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Link to="/home" className="badge badge-primary mr-1">
                    Home
          </Link>
                  <Link
                    to="/index_quize_tests"
                    className="badge badge-warning mr-1"
                  >
                    Quize Test
          </Link>
                  <Link
                    to="/js_quize_tests"
                    className="badge badge-success mr-1"
                  >
                    JavaScript Quiz
          </Link>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <QuizeTest
                    quizeNo="1"
                    question="______ tag is an extension to HTML that can enclose any number of JavaScript statements."
                    correctAnswer="<SCRIPT>"
                    v1="<SCRIPT>"
                    v2="<BODY>"
                    v3="<HEAD>"
                    v4="<TITLE>"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="2"
                    question=" How does JavaScript store dates in a date object?"
                    correctAnswer="The number of milliseconds since January 1st, 1970"
                    v1="The number of milliseconds since January 1st, 1970"
                    v2="The number of days since January 1st, 1900 "
                    v3="The number of seconds since Netscape's public stock offering."
                    v4="None of the above
                "
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="3"
                    question="Which of the following attribute can hold the JavaScript version?"

                    correctAnswer="LANGUAGE"
                    v1="LANGUAGE"
                    v2="SCRIPT"
                    v3="VERSION"
                    v4="None of the above"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="4"
                    question="What is the correct JavaScript syntax to write 'Hello World'?"
                    correctAnswer="document.write('Hello World')"
                    v1="System.out.println('Hello World')"
                    v2="println ('Hello World')"
                    v3="document.write('Hello World')"
                    v4="response.write('Hello World')"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="5"
                    question="Which of the following way can be used to indicate the LANGUAGE attribute?"

                    correctAnswer="<SCRIPT LANGUAGE='JavaScriptVersion'>    JavaScript statements…</SCRIPT>"
                    v1="<LANGUAGE='JavaScriptVersion'>"
                    v2="<SCRIPT LANGUAGE='JavaScriptVersion'>"
                    v3=" <SCRIPT LANGUAGE='JavaScriptVersion'>    JavaScript statements…</SCRIPT>"
                    v4="<SCRIPT LANGUAGE='JavaScriptVersion'!>    JavaScript statements…</SCRIPT>"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="6"
                    question="Which is the correct way to write a JavaScript array?"
                    correctAnswer="var txt = new Array('tim','kim','jim')"
                    v1="var txt = new Array(1:'tim',2:'kim',3:'jim')"
                    v2=" var txt = new Array:1=('tim')2=('kim')3=('jim')"
                    v3="var txt = new Array('tim','kim','jim')"
                    v4=" var txt = new Array='tim','kim','jim'"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="7"
                    question=" If para1 is the DOM object for a paragraph, what is the correct syntax to change the text within the paragraph?"
                    correctAnswer=""
                    v1="'New Text'?"
                    v2="para1.value='New Text';"
                    v3="para1.firstChild.nodeValue= 'New Text';"
                    v4="para1.nodeValue='New Text';"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="8"
                    question="Which of the following event fires when the form element loses the focus: <button>, <input>, <label>, <select>, <textarea>?"
                    correctAnswer="onblur"
                    v1="onfocus"
                    v2="onblur"
                    v3="onclick"
                    v4="ondblclick"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="9"
                    question="The syntax of Eval is ________________"
                    correctAnswer=" [objectName.]eval(string)"
                    v1="[objectName.]eval(numeriC."
                    v2="[objectName.]eval(string)"
                    v3="[EvalName.]eval(string)"
                    v4="[EvalName.]eval(numeriC."
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="10"
                    question="Using _______ statement is how you test for a specific condition."
                    correctAnswer=""
                    v1="Select"
                    v2=" If"
                    v3=" Switch"
                    v4="For"
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

export default JSQuizeTest2;
