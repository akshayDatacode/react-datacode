import React, { Component } from "react";
import HeaderBannerSection from "../../../../HeaderBannerSection";
import QuizeTest from "../quizeTest";
import ScoreCard from "../../scoreCard";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterComponentUpper from "../../../../../footer_component/FooterComponentUpper";
import RightSideSection from "../../../../../right_section/RightSideSection";
import RecommendPost from "../../../../../right_section/RecommendPost";
import MCQTestCardCarousel from "../MCQTestCardCarousel";

class CQuizeTest3 extends Component {
  state = {
    isCorrect: false,
    isClicked: false,
    count: 0,
    status: "",
    show: false,
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  counter = (count) => {
    this.setState({ count: this.state.count + 1 });
  };

  showQuizeScore = () => {
    this.setState({ show: true });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <>
       <HeaderBannerSection imgsource="headerdark.jpeg" />

<div class="container-fluid">
  <div className="row">
    <div className="col-1"></div>
    <div className="col-md-7 ">
      <div className="row">
        <div className="col text-center mt-3 mb-3">
          <h2>C Quiz Test Beginner</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Link to="/home" className="badge badge-primary mr-1">
            Home >>
          </Link>
          <Link
            to="/index_quize_tests"
            className="badge badge-warning mr-1"
          >
            Quize Test >>
          </Link>
          <Link
            to="/c_quize_tests"
            className="badge badge-success mr-1"
          >
            C Quiz >>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col">
            <QuizeTest
                quizeNo="1"
                language="C"
                question="Predict the output of the following segment of code:"
                code={`// ASSUME 64-bit compiler
// Add stdio.h and stdlib.h header file in below code
                
int main()
{
struct DataFlair
{
int value;
struct DataFlair *link;
struct DataFlair *x, *y;
x = (struct DataFlair *) malloc(sizeof(struct DataFlair));
y = (struct DataFlair *) malloc(sizeof(struct DataFlair));
printf("%ld %ld",sizeof(x),sizeof(y));
return 0;
}`}
                correctAnswer="8 8"
                v1="2 2"
                v2="4 4"
                v3="8 8"
                v4="Compile error"
                counter={this.counter}
              />

              <QuizeTest
                quizeNo="2"
                language="C"
                question="Predict the output of the following segment of code:"
                code={`// ASSUME 64-bit compiler
// Add stdio.h header file in below code
                
struct DataFlair
{
int a;
float b;
char array[20];
}d;
int main()
{
printf("%ld", sizeof(struct DataFlair));
return 0;
}`}
                correctAnswer="28"
                v1="20"
                v2="28"
                v3="26"
                v4="29"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="3"
                language="C"
                question="Predict the output of the following segment of code:If n and p are unsigned int variables in a C program. We wish to set p to nC3. If n is large, which of the following statements is most likely to set p correctly?
                "
                correctAnswer="p = n * (n-1) / 2 * (n-2) / 3;"
                v1="p = n * (n-1) * (n-2) / 6;"
                v2="p = n * (n-1) / 2 * (n-2) / 3;"
                v3="p = n * (n-1) / 3 * (n-2) / 2;"
                v4="p = n * (n-1) * (n-2) / 6.0;"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="4"
                language="C"
                question="Predict the output of the following segment of code:"
                code={`// Add stdio.h header file in below code

int main()
{
if(sizeof(double) > -1)
printf("M");
else
printf("m");
return 0;
}`}
                correctAnswer="m"
                v1="M"
                v2="m"
                v3="Compile error"
                v4="None of the above"
                counter={this.counter}
              />
                  <QuizeTest
                quizeNo="5"
                language="C"
                question="What will be the output of the following C code?"
                code={`    #include <stdio.h>
int main()
{
    int x = 3, i = 0;
    do {
        x = x++;
        i++;
    } while (i != 3);
      printf("%d\n", x);
}`}
                correctAnswer="Output will be 6"
                v1="Undefined behaviour"
                v2="Output will be 3"
                v3="Output will be 6"
                v4="Output will be 5"
                counter={this.counter}
              />
                  <QuizeTest
                quizeNo="6"
                language="C"
                question="What will be the output of the following C code?"
                code={`    #include <stdio.h>
struct p
{
    char x : 2;
    int y : 2;
};
int main()
{
    struct p p;
    p.x = 2;
    p.y = 1;
    p.x = p.x & p.y;
    printf("%d\n", p.x);
}`}
                correctAnswer=" 0"
                v1="0"
                v2="Compile time error"
                v3="Undefined behaviour"
                v4="Depends on the standard"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="7"
                language="C"
                question="What will be the output of the following C code?"
                code={`  #include <stdio.h>
union u
{
    struct p
    {
        unsigned char x : 2;
        unsigned int y : 2;
    };
    int x;
};
int main()
{
    union u u;
    u.p.x = 2;
    printf("%d\n", u.p.x);
}`}
                correctAnswer="Compile time error"
                v1="Compile time error"
                v2="Undefined behaviour"
                v3="Depends on the standard"
                v4="2"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="8"
                language="C"
                question="What will be the output of the following C code?"
                code={`#include<stdio.h>
main()
{
    int n;
    n=f1(4);
    printf("%d",n);
}
f1(int x)
{
    int b;
    if(x==1)
      return 1;
    else
      b=x*f1(x-1);
      return b;
}`}
                correctAnswer="24"
                v1="24"
                v2="4"
                v3="12"
                v4="10"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="9"
                language="C"
                question="What will be the output of the following C code?"
                code={`#include<stdio.h>
main()
{
    int n,i;
    n=f(6);
    printf("%d",n);
}
f(int x)
{
    if(x==2)
        return 2;
    else
    {
         printf("+");
         f(x-1);
    }
}
                `}
                correctAnswer=" ++++2"
                v1="+++++2"
                v2=" ++++2"
                v3="+++++"
                v4="2"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="10"
                language="C"
                question="What will be the output of the following C code if the input given to the code shown below is “datacode”?"
                code={`#include<stdio.h>
#define NL '\n'
main()
{
    void f(void);
    printf("enter the word\n");
    f();
}
void f(void)
{
    char c;
    if((c=getchar())!=NL)
{
f();
    printf("%c",c);
}
return;
}`}
                correctAnswer="edocatad"
                v1="datacode"
                v2="infinite loop"
                v3="edocatad"
                v4="atacdeod"
                counter={this.counter}
              />
              
              </div>
              </div>
              <div className="text-center mb-3">
                <Button variant="primary" onClick={this.handleShow}>
                  Show Score
                </Button>
              </div>
              <div className="row">
                <div className="col">
                  <h5> For More Quiz Test</h5>
                  <MCQTestCardCarousel />
                </div>
              </div>
            </div>
            <div className="col-md-4  mt-md-4">
              <h4>Recommendation</h4>
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
                imgsource="c_mcq.jpeg"
                RecPostHading="C MCQs Questions"
                link="/index_c_mcqs"
              />
              <RightSideSection />
            </div>
          </div>
        </div>
        <ScoreCard
          handleShow={this.handleShow}
          handleClose={this.handleClose}
          show={this.state.show}
          count={this.state.count}
        />
        <div className="container-fluid mt-5">
          <FooterComponentUpper />
        </div>
      </>
    );
  }
}

export default CQuizeTest3;
