import React, { Component } from "react";
import HeaderCard from "../../../HeaderCard";
import { Link } from "react-router-dom";
import ScoreCard from "../scoreCard";
import Quize from "../quize";
import RightSideSection from "../../../../right_section/RightSideSection";
import RecommendPost from "../../../../right_section/RecommendPost";
import MCQCardCarousel from "../MCQCardCarousel";

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
        <HeaderCard title="React MCQs Set 1" />

        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="col-fluid ">
                <Link to="/home" className="badge badge-primary mr-1">
                  Home >{" "}
                </Link>
                <Link to="/index_mcqs" className="badge badge-warning mr-1">
                  Programming MCQs >{" "}
                </Link>
                <Link
                  to="/index_react_mcqs"
                  className="badge badge-success mr-1"
                >
                  React MCQs >
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
            <div className="col-md-4">
              <RightSideSection />
              <h5 className="mb-3">Recommended for you</h5>
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
                imgsource="datacodelogo.jpeg"
                RecPostHading="Programminig Quize Test"
                link="/index_quize_tests"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ReactMCQ1;
