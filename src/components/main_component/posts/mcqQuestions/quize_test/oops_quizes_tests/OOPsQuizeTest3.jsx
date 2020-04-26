import React, { Component } from "react";
import HeaderBannerSection from "../../../../HeaderBannerSection";
import QuizeTest from "../quizeTest";
import ScoreCard from "../../scoreCard";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterComponentUpper from "../../../../../footer_component/FooterComponentUpper";
import MCQTestCardCarousel from "../MCQTestCardCarousel";
import RightSideSection from "../../../../../right_section/RightSideSection";
import RecommendPost from "../../../../../right_section/RecommendPost";

class OOPsQuizeTest3 extends Component {
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
                  <h2>OOPS Quiz Test Beginner </h2>
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
                    Quizz Test >>
                  </Link>
                  <Link
                    to="/oops_quize_tests"
                    className="badge badge-success mr-1"
                  >
                    OOPS Quiz >>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col">
              <QuizeTest
                quizeNo="1"
                question="Which one of the following is the correct way to declare a pure virtual function?"
                correctAnswer="virtual void Display(void) = 0;
                "
                v1="virtual void Display(void){0};"
                v2="virtual void Display = 0;"
                v3="virtual void Display(void) = 0;
                "
                v4="void Display(void) = 0;"
                counter={this.counter}
              />

              <QuizeTest
                quizeNo="2"
                question="	
                Which of the following header file includes definition of cin and cout?"
                correctAnswer=""
                v1="istream.h"
                v2="ostream.h "
                v3="iomanip.h"
                v4="iostream.h"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="3"
                question="	
                Which inheritance type is used in the class given below?"
code={`class A : public X, public Y
{}`}           
                correctAnswer="Multiple inheritance"
                v1="Multilevel inheritance"
                v2="Hybrid inheritance"
                v3="Multiple inheritance"
                v4="Hierarchical Inheritance"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="4"
                question="Which of the following is an invalid visibility label while inheriting a class?"
                correctAnswer="friend"
                v1="public"
                v2="private"
                v3="protected"
                v4="friend"
                counter={this.counter}
              />
                  <QuizeTest
                quizeNo="5"
                question="Which of the following is used to make an abstract class?"
            
                correctAnswer="Making at least one member function as pure virtual function."
                v1="Making at least one member function as pure virtual function."
                v2="Declaring it abstract using virtual keyword"
                v3="Making at least one member function as virtual function."
                v4="Declaring it abstract using static keyword."
                counter={this.counter}
              />
                  <QuizeTest
                quizeNo="6"
                question=" How much memory will be allocated for an object of class given below?"
code={`class Test
{
	int mark1;
	int mark2;
	float avg;
	char name[10];
};`}                
                
                correctAnswer="22 Bytes"
                v1="22 Bytes"
                v2="24 Bytes"
                v3="20 Bytes"
                v4="18 Bytes"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="7"
                question="Which type of inheritance is illustrated by the following code?"
code={`class student{ public: int marks; };
class topper: public student { public: char grade; };
class average{ public: int makrs_needed; };
class section: public average{ public: char name[10];  };
class overall: public average{  public: int students;  };`}
                correctAnswer="Hierarchical"
                v1="Single level"
                v2="Multilevel and single level"
                v3="Hierarchical"
                v4="Hierarchical and single level"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="8"
                question="Which among function will be overridden from the function defined in derived class below:"
code={`class A
{
	int i;
	void show()
	{ 
		cout&lt;&lt;i; 
	}
	void print()
	{ 
		cout &lt;&lt;i; 
	}
};
class B
{
	int j;
	void show()
	{ 
		cout&lt;&lt;j; 
	}
};`}
                correctAnswer="show()"
                v1="print()"
                v2="show() and print()"
                v3="show()"
                v4="Compile time error"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="9"
                question="Which among the following is the correct syntax to access static data member without using member function?"
                correctAnswer="className :: staticDataMember;"
                v1="className -> staticDataMember;"
                v2="className :: staticDataMember;"
                v3="className : staticDataMember;"
                v4="className . staticDataMember;"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="10"
                question="What is the output of the following program?"
code={`class Test
{
	private:	static int x;
	public: static void fun()
	{
		cout &lt;&lt; ++x &lt;&lt; “ ”;
	}
};
int Test :: x =20;
void main()
{
	Test x;
	x.fun();
	x.fun();
}`}
                correctAnswer="21 22"
                v1="20 22"
                v2="20 21"
                v3="21 22"
                v4="22 23"
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
            <div className="col-md-4 mt-md-4">
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

export default OOPsQuizeTest3;
