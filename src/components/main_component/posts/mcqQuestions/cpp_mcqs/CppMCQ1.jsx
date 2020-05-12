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


class CppMCQ1 extends Component {
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
              C++ Multiple choice Questions Set-1
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
              to="/index_cpp_mcqs"
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
                    language="c"
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
                    language="c"
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
                    language="c"
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
                    language="c"
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
                    language="c"
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
                    language="c"
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
              <div className="row">
                <div className="col">
                  <h4>For More MCQs Questions</h4>
                  <MCQCardCarousel />
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-md-5 mt-3">
            <LearningSideSection language="cpp" />
            <RightSideSection />
            <Technologies />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CppMCQ1;
