import React, { Component } from "react";
import Quize from "../quize";
import ScoreCard from "../scoreCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCode, faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import RightSideSection from "../../../../right_section/RightSideSection";
import RecommendPost from "../../../../right_section/RecommendPost";
import MCQCardCarousel from "../MCQCardCarousel";
import HeaderCard from "../../../HeaderCard";
import LearningSideSection from "../../../../right_section/learning_sidesection/LearningSideSection";
import Technologies from "../../../../right_section/Technologies";
import FbLikeShare from "../../../FbLikeShare";

class AndroidMCQ1 extends Component {
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
      <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="col-fluid mt-2 ml-2">
            <h2
              className="text-center mb-4 display-5"
              style={{ color: "#072C71" }}
            >
              Android Multiple choice Questions Set-1
            </h2>
            <Link
              to="/home"
              className="badge mr-1"
              style={{ backgroundColor: "#06CB6C" }}
            >
              <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" /> 
            </Link>
            <Link
              to="/index_mcqs"
              className="badge mr-1"
              style={{ backgroundColor: "#072C71" }}

            >
              <FontAwesomeIcon icon={faChalkboardTeacher} size="2x" color="#06CB6C" />

            </Link>
            <Link
              to="/index_android_mcqs"
              className="badge mr-1 text-white"
              style={{ backgroundColor: "#072C71" }}
            >
              <FontAwesomeIcon
                  icon={faCode}
                  size="1x"
                  color="#06CB6C"
                  className="mr-2"
                />
                back to Index
            </Link>

                <ScoreCard count={this.state.count} />
              </div>
              <div className="row">
                <div className="col">
                  <Quize
                    quizeNo="1"
                    question="Q 1 - How to pass the data between activities in Android?

                    "
                    correctAnswer=" Intent"
                    v1=" Intent"
                    v2=" Content Provider"
                    v3="Broadcast receiver"
                    v4="None of the Above"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="2"
                    question="How many sizes are supported by Android? "
                    correctAnswer=""
                    v1="Android supported all sizes"
                    v2="Android does not support all sizes

                    "
                    v3=" supports small,normal, large and extra-large sizes

                    "
                    v4="Size is undefined in android"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="3"
                    question="What are the return values of onStartCommand() in android services? "
                    correctAnswer=" All of the above"
                    v1="START_STICKY"
                    v2="START_NOT_STICKY"
                    v3=" START_REDELIVER_INTENT"
                    v4=" All of the above"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="4"
                    question="How to upgrade SQlite the database from a lower version to higher version in android SQlite? "
                    correctAnswer="Using helper Class"
                    v1="Using helper Class"
                    v2="Using cursor"
                    v3="Using intent"
                    v4="None of the above"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="5"
                    question=" How to get current location in android? "
                    correctAnswer="A & B"
                    v1="Using with GPRS"
                    v2="Using location provider"
                    v3="A & B"
                    v4=" SQlite"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="6"
                    question=" What is ADB in android? "
                    correctAnswer="Android Debug Bridge"
                    v1="Image tool"
                    v2="Development tool"
                    v3="Android Debug Bridge"
                    v4="None of the above."
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="7"
                    question="What is JSON in android? "
                    correctAnswer=" Java Script Object Notation"
                    v1="Java Script Object Native"
                    v2="Java Script Oriented Notation"
                    v3=" Java Script Object Notation"
                    v4="None of the Above"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="8"
                    question="What are the JSON elements in android? "
                    correctAnswer="Number, string, boolean, null, array, and object

                    "
                    v1="integer, boolean

                    "
                    v2=" boolean"
                    v3=" null"
                    v4="Number, string, boolean, null, array, and object

                    "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="9"
                    question=" Why don't we give MIN SDK as 1 in android? "
                    correctAnswer="Android deprecated version"
                    v1="Android deprecated version"
                    v2="There is no value for 1"
                    v3="Android doesn't allow min version 1"
                    v4="None of the above"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="10"
                    question="What is off-line synchronization in android? "
                    correctAnswer=""
                    v1="Synchronization with internet"
                    v2=" Background synchronization"
                    v3=" Synchronization without internet"
                    v4="None of the above"
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
            <div className="col-md-4 mt-md-5 mt-3">
            <LearningSideSection language="android" />
            
            <RightSideSection />
            <Technologies />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AndroidMCQ1;
