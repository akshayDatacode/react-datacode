import React, { Component } from "react";
import HeaderBannerSection from "../../../HeaderBannerSection";
import { Link } from "react-router-dom";
import ScoreCard from "../scoreCard";
import Quize from "../quize";
import RightSideSection from "../../../../right_section/RightSideSection";
import RecommendPost from "../../../../right_section/RecommendPost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import MCQCardCarousel from "../MCQCardCarousel";

class PythonMCQ4 extends Component {
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
                  Python MCQs Set 4
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
                  MCQs >
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
                    quizeNo="31"
                    question="What is the output of the code shown below?"
                    language="Python"
                    code={`class Truth:
pass
x=Truth()
bool(x)`}
                    correctAnswer="true"
                    v1="pass"
                    v2="true"
                    v3="false"
                    v4="error"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="32"
                    question="Python allows string slicing. What is the output of below code:"
                    language="Python"
                    code={`s='cppbuzz chicago'
print(s[3:5])`}
                    correctAnswer="bu"
                    v1="pbuzz"
                    v2="buzzc"
                    v3="bu"
                    v4="None of these"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="33"
                    question="What does the following code print?"
                    language="Python"
                    code={`lst = []
nums = [15, 6]
lst.append(nums)
nums = [10, 30, 20]
lst.append(nums)
lst.sort()
print lst`}
                    correctAnswer=""
                    v1="[6, 10, 15, 20, 30]"
                    v2="[[6, 15], [10, 20, 30]]"
                    v3="[[15, 6], [10, 30, 20]] "
                    v4="[[10, 30, 20], [15, 6]]"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="34"
                    question="What is the output of the following code?"
                    language="Python"
                    code={`def make_pretty(func):
def inner():
    print('I got decorated')
    func()
return inner

def ordinary():
print('I am ordinary')

pretty = make_pretty(ordinary)
pretty()`}
                    correctAnswer="I got decorated I am ordinary"
                    v1="I got decorated"
                    v2="I am pretty"
                    v3={`I got decorated
                         I am ordinary`}
                    v4="I am ordinary I got decorated"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="35"
                    question="What is the more pythonic way to use getters and setters?"
                    correctAnswer="@property"
                    v1="Decorators"
                    v2="Generators"
                    v3=" Iterators"
                    v4="@property"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="36"
                    question="What is the output of the following program?."
                    language="Python"
                    code={`z = lambda x : x * x     
print(z(6))`}
                    correctAnswer="36"
                    v1="6"
                    v2="36"
                    v3="0"
                    v4="error"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="37"
                    question="Choose the correct option with reference to below Python code?."
                    language="Python"
                    code={`def fn(a):        
print(a)
x=90
fn(x)`}
                    correctAnswer=" x is the actual argument."
                    v1="x is the formal argument."
                    v2="a is the actual argument."
                    v3="fn(x) is the function signature."
                    v4=" x is the actual argument."
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="38"
                    question="Which of the following is False with respect Python code?."
                    language="Python"
                    code={`class Student:
def __init__(self,id,age):
  self.id=id
  self.age=age
std=Student(1,20)`}
                    correctAnswer="Every class must have a constructor."
                    v1="'std' is the reference variable for object Student(1,20)"
                    v2="id and age are called the parameters."
                    v3="Every class must have a constructor."
                    v4="None of the above"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="39"
                    question="Which of the following is correct?."
                    language="Python"
                    code={`class Book:
def __init__(self,author):
  self.author=author
book1=Book('V.M.Shah')
book2=book1`}
                    correctAnswer="id(book1) and id(book2) will have same value."
                    v1="Both book1 and book2 will have reference to two different objects of class Book."
                    v2="id(book1) and id(book2) will have same value."
                    v3="It will throw error as multiple references to same object is not possible."
                    v4="None of the above"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="40"
                    question=" What will be the output of following Python code?."
                    language="Python"
                    code={`set1={0,0,9}     
print(set1)`}
                    correctAnswer="{0,9}"
                    v1="{0,0,9}"
                    v2="{0,9}"
                    v3="{9}"
                    v4="It will throw an error as there are two 0 while creating the set."
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

export default PythonMCQ4;
