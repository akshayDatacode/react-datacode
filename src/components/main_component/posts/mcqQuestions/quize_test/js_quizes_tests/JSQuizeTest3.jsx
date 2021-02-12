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
class JSQuizeTest3 extends Component {
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
                  <h2>JavaScript Quiz Test Advance</h2>
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
                    question="Which of the following is the structure of an if statement?"
                    correctAnswer=" if (conditional expression is true)   {then execute this code>->}"
                    v1="if (conditional expression is true) thenexecute this codeend if"
                    v2="if (conditional expression is true)execute this codeend if"
                    v3="if (conditional expression is true)   {then execute this code>->}"
                    v4="if (conditional expression is true) then {execute this code}"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="2"
                    question="How to create a Date object in JavaScript?"
                    correctAnswer="dateObjectName = new Date([parameters])"
                    v1="dateObjectName = new Date([parameters])"
                    v2="dateObjectName.new Date([parameters]) "
                    v3="dateObjectName := new Date([parameters])"
                    v4="dateObjectName Date([parameters])"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="3"
                    question="To set up the window to capture all Click events, we use which of the following statement?"
                    correctAnswer="window.captureEvents(Event.CLICK);"
                    v1="window.captureEvents(Event.CLICK);"
                    v2="window.handleEvents (Event.CLICK);"
                    v3="window.routeEvents(Event.CLICK );"
                    v4="window.raiseEvents(Event.CLICK );"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="4"
                    question="Which tag(s) can handle mouse events in Netscape?"
                    correctAnswer="<A>"
                    v1="<IMG>"
                    v2="<A>"
                    v3="<BR>"
                    v4="None of the above"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="5"
                    question="To enable data tainting, the end user sets the _________ environment variable."
                    correctAnswer="NS_ENABLE_TAINT"
                    v1="ENABLE_TAINT"
                    v2="MS_ENABLE_TAINT"
                    v3="NS_ENABLE_TAINT"
                    v4="ENABLE_TAINT_NS"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="6"
                    question="To automatically open the console when a JavaScript error occurs which of the following is added to prefs.js?"
                    correctAnswer="user_pref('javascript.console.open_on_error', true);"
                    v1="user_pref('javascript.console.open_on_error', false);"
                    v2="user_pref('javascript.console.open_error ', true);"
                    v3="user_pref('javascript.console.open_error ', false);
                "
                    v4="user_pref('javascript.console.open_on_error', true);"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="7"
                    question="To open a dialog box each time an error occurs, which of the following is added to prefs.js?"
                    correctAnswer=""
                    v1="user_pref('javascript.classic.error_alerts', true);"
                    v2="user_pref('javascript.classic.error_alerts ', false);"
                    v3="user_pref('javascript.console.open_on_error ', true);"
                    v4="user_pref('javascript.console.open_on_error ', false);"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="8"
                    question="Output------?"
                    language="js"
                    code={`<script type="text/javascript">
x=4+"4";
document.write(x);
</script>`}
                    correctAnswer="44"
                    v1="44"
                    v2="8"
                    v3="4"
                    v4="Error output"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="9"
                    question="Output------?"
                    language="js"
                    code={`<script>
document.write(navigator.appCodeName);
</script>`}
                    correctAnswer="get code name of the browser of a visitor"
                    v1="get code name of the browser of a visitor"
                    v2="set code name of the browser of a visitor"
                    v3="name code name of the browser of a visitor"
                    v4="None of the above"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="10"
                    question="Output------?"
                    language="js"
                    code={`<script type="text/javascript">
var s = "9123456 or 80000?";
var pattern = /\d{4}/;
var output = s.match(pattern);
document.write(output);
</script>`}
                    correctAnswer="9123"
                    v1="9123"
                    v2="91234"
                    v3="80000"
                    v4="None of the above"
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

export default JSQuizeTest3;
