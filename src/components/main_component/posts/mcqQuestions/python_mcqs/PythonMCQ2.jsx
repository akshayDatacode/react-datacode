import React, { Component } from "react";
import Quize from "../quize";
import ScoreCard from "../scoreCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCode,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
import RightSideSection from "../../../../right_section/RightSideSection";
import MCQCardCarousel from "../MCQCardCarousel";
import LearningSideSection from "../../../../right_section/learning_sidesection/LearningSideSection";
import Technologies from "../../../../right_section/Technologies";

class PythonMCQ2 extends Component {
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
                  Python Multiple choice Questions Set-2
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
                  <FontAwesomeIcon
                    icon={faChalkboardTeacher}
                    size="2x"
                    color="#06CB6C"
                  />
                </Link>
                <Link
                  to="/index_python_mcqs"
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
                    quizeNo="11"
                    question="Write a list comprehension equivalent for the Python code shown below."
                    language="python"
                    code={`for i in range(1, 101):
if int(i*0.5)==i*0.5:
print(i)`}
                    correctAnswer="[i for i in range(1, 101) if int(i*0.5)==(i*0.5)]"
                    v1="[i for i in range(1, 100) if int(i*0.5)==(i*0.5)]"
                    v2="[i for i in range(1, 101) if int(i*0.5)==(i*0.5)]"
                    v3="[i for i in range(1, 101) if int(i*0.5)=(i*0.5)]"
                    v4="[i for i in range(1, 100) if int(i*0.5)=(i*0.5)]"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="12"
                    question="What will be the output of the following Python code?"
                    language="python"
                    code={`A = [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]
[A[row][1] for row in (0, 1, 2)]`}
                    correctAnswer="[2, 5, 8]"
                    v1="[7, 8, 9]"
                    v2="[4, 5, 6]"
                    v3="[2, 5, 8]"
                    v4="[1, 4, 7]"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="13"
                    question="Is the following Python code valid?"
                    language="python"
                    code={`>>> a,b=1,2,3`}
                    correctAnswer="No, too many values to unpack"
                    v1="Yes, this is an example of tuple unpacking. a=1 and b=2"
                    v2="Yes, this is an example of tuple unpacking. a=(1,2) and b=3"
                    v3="No, too many values to unpack"
                    v4="Yes, this is an example of tuple unpacking. a=1 and b=(2,3)"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="14"
                    question="If we have two sets, s1 and s2, and we want to check if all the elements of s1 are present in s2 or not, we can use the function:"
                    correctAnswer="s1.issuperset(s2)"
                    v1="s2.issubset(s1)"
                    v2="s2.issuperset(s1)"
                    v3="s1.issuperset(s2)"
                    v4="s1.isset(s2)"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="15"
                    question="What will be the output of the following Python code?"
                    language="python"
                    code={`a={}
a[2]=1
a[1]=[2,3,4]
print(a[1][1])`}
                    correctAnswer=""
                    v1="[2,3,4]"
                    v2="3"
                    v3="2"
                    v4="An exception is thrown"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="16"
                    question="What will be the output of the following Python function?"
                    language="python"
                    code={`float(' -12345)
(Note that the number of blank spaces before the number is ‘5’)`}
                    correctAnswer="-12345.0"
                    v1="  -12345.0 (5 blank spaces before the number)"
                    v2="-12345.0"
                    v3="Error"
                    v4="-12345.000000000…. (infinite decimal places)"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="17"
                    question="What will be the output of the following Python code?"
                    language="python"
                    code={`elements = [0, 1, 2]
def incr(x):
   return x+1
print(list(map(elements, incr)))`}
                    correctAnswer="error"
                    v1="[1, 2, 3]"
                    v2="[0, 1, 2]"
                    v3="error"
                    v4="none of the mentioned"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="18"
                    question="What will be the output of the following Python code?"
                    language="python"
                    code={`import sys
sys.stdin.readline() 
Datacode is best`}
                    correctAnswer="‘Datacode is best\n’"
                    v1="‘Datacode is best\n’"
                    v2="‘Datacode is best’"
                    v3="‘Datacode is best10’"
                    v4="Error"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="19"
                    question="What will be the output of the following Python code?"
                    language="python"
                    code={`import datetime
d=datetime.date(2017,06,18)
print(d)`}
                    correctAnswer="Error"
                    v1="Error"
                    v2="2017-06-18"
                    v3="18-06-2017"
                    v4="06-18-2017"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="20"
                    question="Which of the following is the use of id() function in python?"
                    correctAnswer="Id returns the identity of the object"
                    v1="Every object doesn’t have a unique id"
                    v2=" Id returns the identity of the object"
                    v3="All of the mentioned"
                    v4=" None of the mentioned"
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

export default PythonMCQ2;
