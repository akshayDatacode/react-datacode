import React, { Component } from "react";
import HeaderBannerSection from "../../../HeaderBannerSection";
import { Link } from "react-router-dom";
import ScoreCard from "../scoreCard";
import Quize from "../quize";
import RightSideSection from "../../../../right_section/RightSideSection";
import RecommendPost from "../../../../right_section/RecommendPost";
import MCQCardCarousel from "../MCQCardCarousel";
import HeaderCard from "../../../HeaderCard";

class PythonMCQ5 extends Component {
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
        <HeaderCard title="Python MCQs Set 5" />

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
                  to="/index_python_mcqs"
                  className="badge badge-success mr-1"
                >
                  Python MCQs >
                </Link>
                <ScoreCard count={this.state.count} />
              </div>
              <div className="row">
                <div className="col">
                  <Quize
                    quizeNo="41"
                    question="What will the be the result of below Python code?."
                    language="Python"
                    code={`set1={1,2,3}     
set1.add(4)
set1.add(4)
print(set1)`}
                    correctAnswer="{1,2,3,4}"
                    v1="{1,2,3,4}"
                    v2="{1,2,3}"
                    v3="{1,2,3,4,4}"
                    v4="It will throw an error as same element is added twice"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="42"
                    question="Which of the following will delete key_value pair for key='tiger' in dictionary?."
                    language="Python"
                    code={`dic={'lion':'wild','tiger':'wild','cat':'domestic','dog':'domestic}`}
                    correctAnswer="del dic['tiger']"
                    v1="del dic['tiger']"
                    v2="dic['tiger'].delete()"
                    v3=" delete(dic.['tiger'])"
                    v4="del(dic.['tiger'])"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="43"
                    question="Which of the following options will not result in an error when performed on tuples in Python where tupl=(5,2,7,0,3)?."
                    correctAnswer="tupl1=tupl+tupl"
                    v1="tupl[1]=2"
                    v2="tupl.append(2)"
                    v3="tupl1=tupl+tupl"
                    v4="tupl.sort()"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="44"
                    question="Which of the following is the property of variable argument count?."
                    correctAnswer="More than one argument can be used while calling the function."
                    v1="More than one argument can be used while calling the function."
                    v2=" It should be always last while declaring the arguments."
                    v3=" It should be always last "
                    v4="None of these"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="45"
                    question="What will be the output of the following Python code?."
                    language="Python"
                    code={`def function1(var1=5, var2=7):
var2=9
var1=3
print (var1, ' ', var2)
function1(10,12)`}
                    correctAnswer="3 9"
                    v1="5 7"
                    v2="3 9"
                    v3="10 12"
                    v4="Error"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="46"
                    question="What will be output of this expression:."
                    language="Python"
                    code={`'p' + 'q' if '12'.isdigit() else 'r' + 's'`}
                    correctAnswer="pq"
                    v1="pq"
                    v2="rs"
                    v3="pqrs"
                    v4="pq12"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="47"
                    question="What will be the output of the following code snippet?"
                    language="Python"
                    code={`class Sales:
def __init__(self, id):
    self.id = id
    id = 100

val = Sales(123)
print (val.id)`}
                    correctAnswer="123"
                    v1="SyntaxError, this program will not run"
                    v2="100"
                    v3="123"
                    v4="None of the above"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="48"
                    question="Which of the following statements are correct about the given code snippet?"
                    language="Python"
                    code={`class A:
def __init__(self, i = 0):
    self.i = i

class B(A):
def __init__(self, j = 0):
    self.j = j

def main():
b = B()
print(b.i)
print(b.j)

main()`}
                    correctAnswer="Class B inherits A, but the data field “i” in A is not inherited."
                    v1="Class B inherits A, but the data field “i” in A is not inherited."
                    v2="Class B inherits A, thus automatically inherits all data fields in A."
                    v3="When you create an object of B, you have to pass an argument such as B(5)."
                    v4="The data field “j” cannot be accessed by object b."
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="49"
                    question=" Which of the following statements can be used to check, whether an object “obj” is an instance of class A or not?"
                    correctAnswer="isinstance(obj, A)"
                    v1="obj.isinstance(A)"
                    v2="A.isinstance(obj)"
                    v3="isinstance(obj, A)"
                    v4=" isinstance(A, obj)"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="50"
                    question="Which of the following is the output of the below Python code?"
                    language="Python"
                    code={`class A:
def __init__(self):
    self.x = 1
    self.__y = 1

def getY(self):
    return self.__y
a = A()
a.x = 45
print(a.x)`}
                    correctAnswer="The program runs fine and prints 45."
                    v1="The program runs fine and prints 45."
                    v2="The program has an error because you cannot name a variable using __y."
                    v3="The program runs fine and prints 1."
                    v4="The program has an error because x is private and cannot be access outside of the class."
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

export default PythonMCQ5;
