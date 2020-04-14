import React, { Component } from "react";
import HeaderBannerSection from "../../../HeaderBannerSection";
import { Link } from "react-router-dom";
import ScoreCard from "../scoreCard";
import Quize from "../quize";
import RightSideSection from "../../../../right_section/RightSideSection";
import RecommendPost from "../../../../right_section/RecommendPost";

class SQLMCQ1 extends Component {
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
        <HeaderBannerSection imgsource="pythonmcq.jpeg" />
        <div className="col-fluid ">
          <Link to="/home" className="badge badge-primary mr-1">
            Home >{" "}
          </Link>
          <Link to="/index_mcqs" className="badge badge-warning mr-1">
            Programming MCQs >{" "}
          </Link>
          <Link to="/index_cpp_mcqs" className="badge badge-success mr-1">
            C++ MCQs >
          </Link>
          <ScoreCard count={this.state.count} />
        </div>
        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="row mt-2 text-center">
                <div className="col">
                  <h2 className="text-secondary">Cpp MCQs Set 1</h2>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Quize
                    quizeNo="1"
                    question="Wrapping data and its related functionality into a single entity is known as _____________ "
                    correctAnswer=" Encapsulation"
                    v1="Abstraction"
                    v2=" Encapsulation"
                    v3=" Polymorphism"
                    v4=" Modularity"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="2"
                    question="What is virtual inheritance? "
                    correctAnswer="C++ technique to avoid multiple copies of the base class into children/derived class"
                    v1="C++ technique to avoid multiple copies of the base class into children/derived class"
                    v2="C++ technique to avoid multiple inheritances of classes"
                    v3="C++ technique to enhance multiple inheritance"
                    v4="C++ technique to ensure that a private member of the base class can be accessed somehow "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="3"
                    question="What will be the output of the following C++ code?"
                    language="c++"
                    code={`#include <iostream>
using namespace std;
class A{
public:
   A(){
    cout<<'Constructor called';
      }
  ~A(){
    cout<<'Destructor called';
      }
};
int main(int argc, char const *argv[])
{
  A *a = new A[5];
  delete a;
  return 0;
}`}
                    correctAnswer="Segmentation fault"
                    v1="“Constructor called” five times and then “Destructor called” five times"
                    v2="“Constructor called” five times and then “Destructor called” once"
                    v3="Error"
                    v4="Segmentation fault "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="4"
                    question="What does ‘\a’ escape code represent? "
                    correctAnswer="alert"
                    v1="alert"
                    v2="backslash"
                    v3="tab"
                    v4="form feed "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="5"
                    question=" What happens if the following code is compiled on both C and C++?"
                    language="C++"
                    code={`#include<stdio.h>
struct STRUCT
{
private:
  int a;
};
int main()
{
  printf('%d\n', (int)sizeof(struct STRUCT));
  return 0;
}`}
                    correctAnswer="The program gives an error in case of C but runs perfectly in case of C++"
                    v1="The program runs fine and both prints output “HELLO THIS IS STRUCTURE”"
                    v2="The program gives an error in case of C but runs perfectly in case of C++"
                    v3="The program gives an error in case of C++ but runs perfectly in case of C"
                    v4="  The program gives an error in case of both C and C++"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="6"
                    question="  What is the value of the bool?"
                    language="C++"
                    code={`bool is_int(789.54)`}
                    correctAnswer="False"
                    v1="True"
                    v2="False"
                    v3="1"
                    v4=" 2"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="7"
                    question="Given the variables p, q are of char type and r, s, t are of int type. Select the right statement?"
                    language="C++"
                    code={`1. t = (r * s) / (r + s);
2. t = (p * q) / (r + s);`}
                    correctAnswer="both 1 and 2 are true"
                    v1="1 is true but 2 is false"
                    v2="1 is false and 2 is true"
                    v3="both 1 and 2 are true"
                    v4="both 1 and 2 are false "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="8"
                    question="What is the range of the floating point numbers? "
                    correctAnswer="-3.4E+38 to +3.4E+38"
                    v1="-3.4E+38 to +3.4E+38"
                    v2="-3.4E+38 to +3.4E+34"
                    v3="-3.4E+38 to +3.4E+36"
                    v4="-3.4E+38 to +3.4E+32 "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="9"
                    question="What will happen in the following C++ code snippet?"
                    language="C++"
                    code={`int a = 100, b = 200;
int *p = and a, *q = &b;
p = q;`}
                    correctAnswer="p now points to b"
                    v1="b is assigned to a"
                    v2="p now points to b"
                    v3="a is assigned to b"
                    v4="q now points to a"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="10"
                    question=" What will be the output of the following C++ code?"
                    language="C++"
                    code={`#include <iostream>
using namespace std;
int main()
{
    int a = 5, b = 10, c = 15;
    int *arr[ ] = {&a, &b, &c};
    cout << arr[1];
    return 0;
}`}
                    correctAnswer="it will return some random number"
                    v1="5"
                    v2="10"
                    v3="15"
                    v4="it will return some random number"
                    counter={this.counter}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
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
              <RightSideSection />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SQLMCQ1;
