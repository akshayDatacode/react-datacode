import React, { Component } from "react";
import Quize from "../quize";
import HeaderCard from "../../../HeaderCard";
import RecommendPost from "../../../../right_section/RecommendPost";
import RightSideSection from "../../../../right_section/RightSideSection";
import { Link } from "react-router-dom";
import MCQCardCarousel from "../MCQCardCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt, faHome } from "@fortawesome/free-solid-svg-icons";
class JSMCQ1 extends Component {
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
        <HeaderCard
          title="JavaScript MCQs Set 1"
          color="#00FF00"
          textcolor="black"
        />

        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="col-fluid ">
                <Link to="/home" className="badge badge-primary mr-1">
                  <FontAwesomeIcon icon={faHome} size="1x" />
                </Link>
                <Link to="/index_mcqs" className="badge badge-warning mr-1">
                  MCQs >>
                </Link>
                <Link to="/index_js_mcqs" className="badge badge-success mr-1">
                  JS-MCQs >>
                </Link>
              </div>
              <div className="row">
                <div className="col">
                  <Quize
                    quizeNo="1"
                    question="JavaScript is ______ Side Scripting Language."
                    correctAnswer="Browser"
                    v1="Server"
                    v2="Browser"
                    v3="ISP"
                    v4="None of These"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="2"
                    question="JavaScript is designed for following purpose -"
                    correctAnswer="To add interactivity to HTML Pages."
                    v1="To Perform Server Side Scripting Opertion"
                    v2="To Style HTML Pages"
                    v3="To Execute Query Related to DB on Server"
                    v4="To add interactivity to HTML Pages."
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="3"
                    question="JavaScript is can be written -"
                    correctAnswer="Both 1 and 2 "
                    v1="directly into HTML pages"
                    v2="directly into JS file and included into HTML"
                    v3="Both 1 and 2"
                    v4="None of these"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="4"
                    question="Variable can hold ________ value at a time"
                    correctAnswer="Single"
                    v1="Double"
                    v2="None of these"
                    v3="Multiple"
                    v4="Single"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="5"
                    question="Integer Variable is declared using following syntax in JavaScript."
                    correctAnswer="var num;"
                    v1="var num;"
                    v2="Integer num;"
                    v3="int num;"
                    v4="integer num;"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="6"
                    question="We can declare ___________ at a time. Select most appropriate option."
                    correctAnswer="One or more Variables"
                    v1="More than One Variables"
                    v2="One or more Variables"
                    v3="One Variable Only"
                    v4="None of these"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="7"
                    question="Assignment Operators is following type of operator ______________."
                    correctAnswer="Binary"
                    v1="Ternary"
                    v2="Binary"
                    v3="Unarry"
                    v4="None of these"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="8"
                    question="'+=' operator can operate on following data values.
                "
                    correctAnswer="All Options
                "
                    v1="Float
                "
                    v2="Integer
                "
                    v3="String
                "
                    v4="All Options
                "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="9"
                    question="JavaScript contains a _________________ that assigns a value to a variable based on some condition."
                    correctAnswer="Conditional operators"
                    v1="Logical Operator"
                    v2="Bitwise Operator"
                    v3="Assignment operator"
                    v4="Conditional operator"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="10"
                    question="Guess the ternary operator used in the following example !!!"
                    language="js"
                    code={`marks = (mark<35)?'Fail':'Pass';`}
                    correctAnswer=""
                    v1="Colon Operator"
                    v2="Bitwise Operator"
                    v3="Logical Operator"
                    v4="Conditional Operator"
                    counter={this.counter}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h4>For More MCQs Questions</h4>
                  <MCQCardCarousel />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <RightSideSection />
              <h5 className="mb-3">Recommended for you</h5>
              <RecommendPost
                imgsource="python_mcq.jpeg"
                RecPostHading="Python MCQs Questions"
                link="/index_python_mcqs"
              />
              <RecommendPost
                imgsource="java_mcq.jpeg"
                RecPostHading="Java MCQs Questions"
                link="/index_java_mcqs"
              />
              <RecommendPost
                imgsource="c_mcq.jpeg"
                RecPostHading="C MCQs Questions"
                link="/index_c_mcqs"
              />
              <RecommendPost
                imgsource="cpp_mcq.jpeg"
                RecPostHading="C++ MCQs Questions"
                link="/index_cpp_mcqs"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default JSMCQ1;
