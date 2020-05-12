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

class CMCQ1 extends Component {
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
              C Multiple choice Questions Set-1
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
              to="/index_c_mcqs"
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
                    question="Which of the following is not a valid variable name declaration?"
                    correctAnswer="int 3_a;"
                    v1="int _a3;"
                    v2="int a_3;"
                    v3="int 3_a;"
                    v4=" int _3a"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="2"
                    question="Which of the following is not a valid C variable name?"
                    correctAnswer="int $main;"
                    v1="int number;"
                    v2="float rate;"
                    v3="int variable_count;"
                    v4="int $main;"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="3"
                    language="c"
                    question="What will be the output of the following C code?"
                    code={`#include <stdio.h>
int main()
{
  int a[5] = {1, 2, 3, 4, 5};
  int i;
  for (i = 0; i < 5; i++)
    if ((char)a[i] == '5')
      printf('%d', a[i]);
    else
      printf('FAIL');
}`}
                    correctAnswer="The program will compile and print FAIL for 5 times"
                    v1="The compiler will flag an error"
                    v2="The program will compile and print the output 5"
                    v3="The program will compile and print the ASCII value of 5"
                    v4="The program will compile and print FAIL for 5 times"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="4"
                    question="Which of the following is a User-defined data type?"
                    correctAnswer=" all of the mentioned"
                    v1="typedef int Boolean;"
                    v2="typedef enum {Mon, Tue, Wed, Thu, Fri} Workdays;"
                    v3="struct {char name[10], int age};"
                    v4=" all of the mentioned"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="5"
                    language="c"
                    question="What will be the output of the following C code?"
                    code={`#include <stdio.h>
int main()
{
    float f1 = 0.1;
    if (f1 == 0.1f)
        printf('equal');
    else
        printf('not equal');
}`}
                    correctAnswer="equal"
                    v1="equal"
                    v2="not equal"
                    v3="output depends on compiler"
                    v4="error"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="6"
                    language="c"
                    question="What will be the output of the following C code on a 32-bit machine?"
                    code={`#include <stdio.h>
int main()
{
  int x = 10000;
  double y = 56;
  int *p = &x;
  double *q = &y;
  printf('p and q are %d and %d', sizeof(p), sizeof(q));
  return 0;
}
`}
                    correctAnswer="p and q are 4 and 4"
                    v1="p and q are 4 and 4"
                    v2="compiler error"
                    v3=" p and q are 4 and 8"
                    v4="p and q are 2 and 8"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="7"
                    question="Which of the following is not a pointer declaration?"
                    correctAnswer="char a;"
                    v1="char a[10];"
                    v2="char a[] = {‘1’, ‘2’, ‘3’, ‘4’};"
                    v3="char *str;"
                    v4="char a;"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="8"
                    language="c"
                    question="What will be the output of the following C code?"
                    code={`#include <stdio.h>
void main()
{
int k = 4;
float k = 4;
printf('%d', k)
}`}
                    correctAnswer=" Compile time error"
                    v1=" Compile time error"
                    v2="4"
                    v3=" 4.0000000"
                    v4="4.4"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="9"
                    language="c"
                    question="What will be the output of the following C code?"
                    code={`#include <stdio.h>
void main()
{
    int a = 3;
    int b = ++a + a++ + --a;
    printf('Value of b is %d', b);
}`}
                    correctAnswer="Undefined behaviour"
                    v1="Value of x is 12"
                    v2="Value of x is 13"
                    v3="Value of x is 10"
                    v4="Undefined behaviour"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="10"
                    language="c"
                    question="What will be the output of the following C code?"
                    code={`#include <stdio.h>
int main()
{
    int i = -3;
    int k = i % 2;
    printf('%d', k);
}`}
                    correctAnswer="-1"
                    v1="Compile time error"
                    v2="-1"
                    v3="1"
                    v4="Implementation defined"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="11"
                    language="c"
                    question="What will be the output of the following C code considering the size of a short int is 2, char is 1 and int is 4 bytes?"
                    code={`#include <stdio.h>
int main()
{
    short int i = 20;
    char c = 97;
    printf('%d, %d, %d', sizeof(i), sizeof(c), sizeof(c + i));
    return 0;
}`}
                    correctAnswer="2, 1, 4"
                    v1="2, 1, 2"
                    v2="2, 1, 1"
                    v3="2, 1, 4"
                    v4="2, 2, 8"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="12"
                    question="When do you need to use type-conversions?"
                    correctAnswer="All of the mentioned"
                    v1="The value to be stored is beyond the max limit"
                    v2="The value to be stored is in a form not supported by that data type"
                    v3="To reduce the memory in use, relevant to the value"
                    v4="All of the mentioned"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="13"
                    language="c"
                    question="What will be the output of the following C code?"
                    code={`#include <stdio.h>
int main()
{
    int a = 1, b = 1, c;
    c = a++ + b;
    printf('%d, %d', a, b);
}`}
                    correctAnswer="a = 2, b = 1"
                    v1="a = 1, b = 1"
                    v2="a = 2, b = 1"
                    v3="a = 1, b = 2"
                    v4="a = 2, b = 2"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="14"
                    language="c"
                    question=" What will be the output of the following C code? "
                    code={`#include <stdio.h>
void main()
{
    int x = 4, y, z;
    y = --x;
    z = x--;
    printf('%d%d%d', x,  y, z);
}`}
                    correctAnswer="2 3 3"
                    v1="3 2 3"
                    v2="2 3 3"
                    v3="3 2 2"
                    v4="2 3 4"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="15"
                    language="c"
                    question="What will be the output of the following C code?"
                    code={`#include <stdio.h>
void main()
{
    int k = 8;
    int m = 7;
    k < m ? k++ : m = k;
    printf('%d', k);
}`}
                    correctAnswer="Compile time error"
                    v1="7"
                    v2="8"
                    v3="Compile time error"
                    v4="Run time error"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="16"
                    question="The following C code can be rewritten as _______

                c = (n) ? a : b;"
                    correctAnswer=" if (!n)c = b;
                else c = a;"
                    v1=" if (!n)c = b;
                else c = a;"
                    v2="if (n <;= 0)c = b;
                else c = a;"
                    v3="if (n > 0)c = a;
                else c = b;"
                    v4="All of the mentioned"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="17"
                    language="c"
                    question=" What will be the output of the following C code?"
                    code={`#include <stdio.h>
void main()
{
    int a[3] = {1, 2, 3};
    int *p = a;
    printf('%p\t%p', p, a);
}`}
                    correctAnswer="Same address is printed"
                    v1="Same address is printed"
                    v2=" Different address is printed"
                    v3="Compile time error"
                    v4="Nothing"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="18"
                    language="c"
                    question=" What will be the output of the following C code?"
                    code={`#include <stdio.h>
int main()
{
    int ary[4] = {1, 2, 3, 4};
    int *p = ary + 3;
    printf('%d', p[-2]);
}`}
                    correctAnswer="2"
                    v1="1"
                    v2="2"
                    v3="Compile time error"
                    v4=" Some garbage value"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="19"
                    language="c"
                    question="What will be the output of the following C code?"
                    code={`#include <stdio.h>
void main()
{
    struct student
    {
        int no;
        char name[20];
    };
    struct student s;
    no = 8;
    printf('%d;, no);
}`}
                    correctAnswer="Compile time error"
                    v1="Nothing"
                    v2="Compile time error"
                    v3="Junk"
                    v4="8"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="20"
                    language="c"
                    question="What will be the output of the following C code?"
                    code={`#include <stdio.h>
int main()
{
    void foo();
    printf('1 ');
    foo();
}
void foo()
{
    printf('2 ');
}`}
                    correctAnswer="1 2"
                    v1="1 2"
                    v2="Compile time error"
                    v3="1 2 1 2"
                    v4="Depends on the compiler"
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
            <div className="col-md-4 ">
              <LearningSideSection language="c" />

              <RightSideSection />
              <Technologies />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CMCQ1;
