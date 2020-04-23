import React, { Component } from "react";
import HeaderBannerSection from "../../../../HeaderBannerSection";
import QuizeTest from "../quizeTest";
import ScoreCard from "../../scoreCard";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterComponentUpper from "../../../../../footer_component/FooterComponentUpper";
import RecommendPost from "../../../../../right_section/RecommendPost";
import RightSideSection from "../../../../../right_section/RightSideSection";
import MCQTestCardCarousel from "../MCQTestCardCarousel";
class PythonQuizeTest3 extends Component {
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
                  <h2>Python Quiz Test Advance</h2>
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
                    to="/python_quize_tests"
                    className="badge badge-success mr-1"
                  >
                    Python Quiz >>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <QuizeTest
                    quizeNo="1"
                    question="What are the method(s) that iterator object must implement?
                "
                    correctAnswer="__iter__()"
                    v1="__iter__()

                "
                    v2="__iter__() and __next__()"
                    v3="__iter__() and __super__()"
                    v4="__iter__(), __super__() and __next__()"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="2"
                    question="What is the output for −"
                    language="pythons"
                    code={`S = [['him', 'sell'], [90, 28, 43]]

S[0][1][1]`}
                    correctAnswer="e''"
                    v1="'i'"
                    v2="'90' "
                    v3="'e'"
                    v4="'h'"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="3"
                    language="pythons"
                    question="When the given code is executed how many times ' 'you are learning python ' ' will be printed."
                    code={`a = 0
while a<10:
   … print(''you are learning python'')
   … pass`}
                    correctAnswer="Infinite number of times."
                    v1="9"
                    v2="10"
                    v3="11"
                    v4="Infinite number of times."
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="4"
                    language="python"
                    question=" Guess the output −"
                    code={`def main(): 
   try: 
     func() 
       print(''print this after function call'') 
   except ZeroDivisionError: 
       print('Divided By Zero! Not Possible! ') 
   except: 
       print('Its an Exception!') 
def func(): 
   print(1/0) 
main()`}
                    correctAnswer="Divided By Zero! Not possible!"
                    v1="Its an Exception!"
                    v2="Divided By Zero! Not possible!"
                    v3="print this after function call’ followed by ‘Divided By Zero! Not Possible!"
                    v4="print this after function call’ followed by ‘Its an Exception!"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="5"
                    language="python"
                    question="What is output of following code −"
                    code={`num=3
while True:
    if (num%0o12 == 0):
        break
print(num)
num += 1`}
                    correctAnswer="3 4 5 6 7 8 9"
                    v1="3 4 5 6 7 8 9 10 11 12"
                    v2="3 4 5 6 7 8 9"
                    v3="3 4 5 6 7 8 9 10 11"
                    v4="None of the above"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="6"
                    language="python"
                    question="what is output of following code −"
                    code={`class Count:
   def __init__(self, count=0):
        self.__count=count
a=Count(2)
b=Count(2)
print(id(a)==id(b), end = '' '')
             
c= ''hello''
d= ''hello''
print(id(c)==id(d))`}
                    correctAnswer="False True"
                    v1="True False"
                    v2="False True "
                    v3=" False False "
                    v4="True True"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="7"
                    language="python"
                    question="Find the output of the code?"
                    code={`def f(a, b = 1, c = 2):
   print('a is: ',a, 'b is: ', b, 'c is: ', c)
f(2, c = 2)
f(c = 100, a = 110)`}
                    correctAnswer="a is: 2 b is: 1 c is: 2

                a is: 110 b is: 1 c is: 100"
                    v1="a is: 2 b is: 1 c is: 2  

                a is: 110 b is: 1 c is: 100"
                    v2=" a is: 2 b is: 2 c is: 2

                a is: 110 b is: 2 c is: 100"
                    v3="a is: 0 b is: 2 c is: 2

                a is: 110 b is: 0 c is: 100"
                    v4="a is: 110 b is: 0 c is: 100

                a is: 110 b is: 0 c is: 100"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="8"
                    language="python"
                    question="What is the output of the code?"
                    code={`try: 
    list = 5*[0]+5*[10] 
    x = list[9] 
    print(''Done!'') 
except IndexError: 
    print(''Index out of Bond! '') 
else: 
    print(''Nothing is wrong!'') 
finally: 
    print(''Finally block!'') `}
                    correctAnswer="‘Done!’ follow by ‘Nothing is wrong!’ followed by ‘Finally block."
                    v1="Finally Block!"
                    v2="Done!’ follow by ‘Nothing is wrong!"
                    v3="Nothing is wrong!’ followed by ‘Finally block!"
                    v4="‘Done!’ follow by ‘Nothing is wrong!’ followed by ‘Finally block."
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="9"
                    question="Select the correct code to create a button under a parent window with command processButton"
                    correctAnswer=" Button(window ,text= ''Hello'' ,command=processButton)"
                    v1="Button(set.text= ''Hello'' )"
                    v2="Button(window ,text= ''Ok'' ,fg= ''black '')"
                    v3=" Button(window ,text= ''Hello'' ,command=processButton)"
                    v4="Button(text= ''hello'' ,command=processButton)"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="10"
                    language="python"
                    question="What is this:"
                    code={`exec((lambda x:x).func_code.__class__
(0,0,0,0,"\x91\x03\x30d\x37\x13",(),(),(),"","",0,""))`}
                    correctAnswer="both 2 & 3"
                    v1="Some random invalid code"
                    v2="Valid code in python 2"
                    v3="A way to execute python bytecode"
                    v4="both 2 & 3"
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
      </>
    );
  }
}

export default PythonQuizeTest3;
