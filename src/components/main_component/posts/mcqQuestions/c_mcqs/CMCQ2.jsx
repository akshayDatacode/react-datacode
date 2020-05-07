import React, { Component } from "react";
import HeaderCard from "../../../HeaderCard";
import { Link } from "react-router-dom";
import ScoreCard from "../scoreCard";
import Quize from "../quize";
import RightSideSection from "../../../../right_section/RightSideSection";
import RecommendPost from "../../../../right_section/RecommendPost";
import MCQCardCarousel from "../MCQCardCarousel";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LearningSideSection from "../../../../right_section/learning_sidesection/LearningSideSection";

class CMCQ2 extends Component {
  state = {
    isCorrect: false,
    isClicked: false,
    count: 0,
    status: "",
  };
  d = () => {
    window.location.reload();
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
        <HeaderCard title="C MCQs Set 2" color="#FFD700" textcolor="black" />
        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="col-fluid mt-2 ml-2">
                <Link to="/home" className="badge badge-primary mr-1">
                  <FontAwesomeIcon icon={faHome} size="1x" />
                </Link>
                <Link to="/index_mcqs" className="badge badge-info  mr-1">
                  MCQs >>
                </Link>
                <Link to="/index_c_mcqs" className="badge badge-success mr-1">
                  C MCQs >>
                </Link>
                <ScoreCard count={this.state.count} />
              </div>
              <div className="row">
                <div className="col">
                  <Quize
                    quizeNo="1"
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
            <div className="col-md-4">
              <LearningSideSection language="c" />
              <RightSideSection />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CMCQ2;
