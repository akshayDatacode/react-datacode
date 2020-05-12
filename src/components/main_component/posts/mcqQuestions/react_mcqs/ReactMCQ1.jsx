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

class ReactMCQ1 extends Component {
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
              React Multiple choice Questions Set-1
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
              to="/index_react_mcqs"
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
                    question="React is a ________ "
                    correctAnswer="Javascript library"
                    v1="Javascript library"
                    v2="Javascript framework"
                    v3="Both of above"
                    v4="None of above "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="2"
                    question="ReactJS covers _________ "
                    correctAnswer="User Interface layer in an application"
                    v1="User Interface layer in an application"
                    v2="Data layer in an application"
                    v3="Both a and b"
                    v4=" None of above"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="3"
                    question=" ReactJS uses _____ to increase performance"
                    correctAnswer="Virtual DOM"
                    v1="Original DOM"
                    v2="Virtual DOM"
                    v3="Both of above"
                    v4=" None of above"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="4"
                    question="What will be the output following"
                    language="React"
                    code={`var Helloword=(props)=>
{
 return(
 <div>
 hello world 1
 </div>
 <div>
 Hello world 2
 </div>
 );
}
ReactDOM.render(<Helloworld/>,mountNode)`}
                    correctAnswer="Error"
                    v1="Hello world 1"
                    v2="Hello world 2"
                    v3="Hello world 1 Hello world 2"
                    v4=" Error"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="5"
                    question="Number of elements, a valid react component can return  "
                    correctAnswer="1"
                    v1="1"
                    v2="2"
                    v3="3"
                    v4=" 4"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="6"
                    question=" State in react is________"
                    correctAnswer="Both of above"
                    v1="A permanent storage"
                    v2="Internal storage of the component

                "
                    v3="Both of above"
                    v4="None of above "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="7"
                    question="props in react can________ "
                    correctAnswer="Not be changed in the component"
                    v1="Be changed inside the component"
                    v2="Be changed in side other component"
                    v3="Not be changed in the component"
                    v4=" None of above"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="8"
                    question=" Keys are given to a list of elements in react. These keys should be "
                    correctAnswer="Unique among the siblings only"
                    v1="Unique in the DOM"
                    v2="Unique among the siblings only"
                    v3="Do not requires to be unique"
                    v4=" None of above"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="9"
                    question="For controlled components in react "
                    correctAnswer="Source of truth is component state"
                    v1="Source of truth is DOM"
                    v2="Source of truth can be anything"
                    v3="Source of truth is component state"
                    v4="None of above "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="10"
                    question=" In which directory react components are saved?"
                    correctAnswer="inside js/components/"
                    v1="inside vendor/components"
                    v2="inside external/components"
                    v3="inside vendor/components"
                    v4="inside js/components/ "
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
            <LearningSideSection language="python" />
            <RightSideSection />
            <Technologies />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ReactMCQ1;
