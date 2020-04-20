import React, { Component } from "react";
import HeaderCard from "../../../HeaderCard";
import { Link } from "react-router-dom";
import ScoreCard from "../scoreCard";
import Quize from "../quize";
import RightSideSection from "../../../../right_section/RightSideSection";
import RecommendPost from "../../../../right_section/RecommendPost";
import MCQCardCarousel from "../MCQCardCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

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
        <HeaderCard title="Android MCQs Set 1" />

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
                <Link
                  to="/index_android_mcqs"
                  className="badge badge-success mr-1"
                >
                  Android MCQs >>
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
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AndroidMCQ1;
