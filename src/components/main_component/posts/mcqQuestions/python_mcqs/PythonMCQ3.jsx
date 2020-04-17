import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScoreCard from "../scoreCard";
import Quize from "../quize";
import RightSideSection from "../../../../right_section/RightSideSection";
import RecommendPost from "../../../../right_section/RecommendPost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faListAlt } from "@fortawesome/free-solid-svg-icons";
import MCQCardCarousel from "../MCQCardCarousel";

class PythonMCQ3 extends Component {
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
        <div className="row">
          <div className="col">
            <div className="card bg-warning">
              <div className="card-body p-2">
                <h1 className="card-title text-dark m-0 p-0">
                  Python MCQs Set 3
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="col-fluid mt-2 ml-2">
                <Link to="/home" className="badge badge-primary mr-1">
                  <FontAwesomeIcon icon={faHome} size="2x" />
                </Link>
                <Link to="/index_mcqs" className="badge badge-info  mr-1">
                  <FontAwesomeIcon
                    icon={faListAlt}
                    size="2x"
                    className="mr-1"
                  />
                  MCQs
                </Link>
                <Link
                  to="/index_python_mcqs"
                  className="badge badge-success mr-1"
                >
                  Python MCQs
                </Link>
                <ScoreCard count={this.state.count} />
              </div>
              <div className="row">
                <div className="col">
                  <Quize
                    quizeNo="21"
                    question=" What is the output of the code shown below?"
                    language="Python"
                    code={`import math
[str(round(math.pi)) for i in range (1, 6)]`}
                    correctAnswer="[‘3’, ‘3’, ‘3’, ‘3’, ‘3’]"
                    v1="[‘3’, ‘3’, ‘3’, ‘3’, ‘3’, ‘3’]"
                    v2="[‘3.1’, ‘3.14’, ‘3.142’, ‘3.1416’, ‘3.14159’, ‘3.141582’]"
                    v3="[‘3’, ‘3’, ‘3’, ‘3’, ‘3’]"
                    v4="[‘3.1’, ‘3.14’, ‘3.142’, ‘3.1416’, ‘3.14159’]"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="22"
                    question="What is the output of the code shown below?"
                    language="Python"
                    code={`t=32.00
[round((x-32)*5/9) for x in t]`}
                    correctAnswer="Error"
                    v1="[0]"
                    v2="0"
                    v3="[0.00]"
                    v4="Error"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="23"
                    question="What is the output of the following piece of code when executed in the python shell?"
                    language="Python"
                    code={`a={1,2,3}
a.intersection_update({2,3,4,5})
a`}
                    correctAnswer="{2,3}"
                    v1="{2,3}"
                    v2="Error, duplicate item present in list"
                    v3="Error, no method called intersection_update for set data type"
                    v4="{1,4,5}"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="24"
                    question="What is the output of the code shown below?"
                    language="Python"
                    code={`s=set([1, 2, 3])
s.union([4, 5])
s|([4, 5])`}
                    correctAnswer="{1, 2, 3, 4, 5}Error"
                    v1="{1, 2, 3, 4, 5}{1, 2, 3, 4, 5}"
                    v2="Error{1, 2, 3, 4, 5}"
                    v3="{1, 2, 3, 4, 5}Error"
                    v4="ErrorError"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="25"
                    question="Suppose i is 5 and j is 4, i + j is same as"
                    correctAnswer="i.__add__(j)"
                    v1="i.__add(j)"
                    v2="i.__add__(j)"
                    v3="i.__Add(j)"
                    v4="i.__ADD(j)"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="26"
                    question="What is the output of the code shown below?"
                    language="Python"
                    code={`l1=[1, 2, 3, [4]]
l2=list(l1)
id(l1)==id(l2)`}
                    correctAnswer="False"
                    v1=" True"
                    v2="False"
                    v3=" Error"
                    v4="Address of l1"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="27"
                    question="What is the output of the code shown below?"
                    language="Python"
                    code={`'The {} side {1} {2}'.format('bright', 'of', 'life')`}
                    correctAnswer="Error"
                    v1="Error"
                    v2="‘The bright side of life’"
                    v3="‘The {bright} side {of} {life}’"
                    v4="No output"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="28"
                    question="Which of these is a private data field?"
                    language="Python"
                    code={`def Demo:
def __init__(self):
    __a = 1
    self.__b = 1
    self.__c__ = 1
    __d__= 1`}
                    correctAnswer="__b"
                    v1=" __a"
                    v2="__b"
                    v3="__c__"
                    v4="__d__"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="29"
                    question="What is the output of the code shown below?"
                    language="Python"
                    code={`def f(x):
yield x+1
print('test')
yield x+2
g=f(9)`}
                    correctAnswer="No output"
                    v1="Error"
                    v2="test"
                    v3="test1012"
                    v4="No output"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="30"
                    question="What is the value of this expression:"
                    language="Python"
                    code={`bin(10-2)+bin(12^4)`}
                    correctAnswer="0b10000b1000"
                    v1="0b10000"
                    v2="0b10001000"
                    v3="0b1000b1000"
                    v4="0b10000b1000"
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

export default PythonMCQ3;
