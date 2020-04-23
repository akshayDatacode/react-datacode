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
class JavaQuizeTest3 extends Component {
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
          <h2>Java Quiz Test Advance</h2>
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
            to="/java_quize_tests"
            className="badge badge-success mr-1"
          >
            Java Quiz >>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col">
              <QuizeTest
                quizeNo="1"
                language="Java"
                question="What will be the output of the following Java code snippet?"
                code={`class A
{
                 
}
                 
enum Enums extends A
{
    ABC, BCD, CDE, DEF;
}`}
                correctAnswer="Compilation Error"
                v1="Runtime Error"
                v2="Compilation Error"
                v3="It runs successfully"
                v4="EnumNotDefined Exception"
                counter={this.counter}
              />

            <QuizeTest
                quizeNo="2"
                language="Java"
                question="What will be the output of the following Java code snippet?"
                code={`enum Enums
{
    A, B, C;
                 
    private Enums()
    {
        System.out.println(10);
    }
}
                 
public class MainClass
{
    public static void main(String[] args)
    {
        Enum en = Enums.B;
    }
}`}
                correctAnswer=""
                v1="10 10 10"
                v2="Compilation Error"
                v3="10 10"
                v4="Runtime Exception"
                counter={this.counter}
              />
              <QuizeTest
                quizeNo="3"
                language="Java"
                question="What will be the output of the following Java code snippet?"
                code={`double a = 0.02;
double b = 0.03;
double c = b - a;
System.out.println(c);
              
BigDecimal _a = new BigDecimal("0.02");
BigDecimal _b = new BigDecimal("0.03");
BigDecimal _c = b.subtract(_a);
System.out.println(_c);`}
                correctAnswer="0.009999999999999998
                0.01"
                v1=" 0.009999999999999998
                0.01"
                v2=" 0.01
                0.009999999999999998"
                v3="   0.01
                0.01"
                v4="0.009999999999999998
                0.009999999999999998"
                counter={this.counter}
              />
              <QuizeTest
                quizeNo="4"
                language="Java"
                question="How to get difference between two dates?"
                correctAnswer="long diffInMilli = java.time.Duration.between(dateTime1, dateTime2).toMillis();"
                v1="long diffInMilli = java.time.Duration.between(dateTime1, dateTime2).toMillis();"
                v2="long diffInMilli = java.time.difference(dateTime1, dateTime2).toMillis();"
                v3="Date diffInMilli = java.time.Duration.between(dateTime1, dateTime2).toMillis();"
                v4="Time diffInMilli = java.time.Duration.between(dateTime1, dateTime2).toMillis();"
                counter={this.counter}
              />
              <QuizeTest
                quizeNo="5"
                language="Java"
                question="What will be the output of the following Java program?"
                code={`class evaluate 
{
    public static void main(String args[]) 
    {
          int a[] = {1,2,3,4,5};
          int d[] = a;
          int sum = 0;
          for (int j = 0; j < 3; ++j)
              sum += (a[j] * d[j + 1]) + (a[j + 1] * d[j]);
          System.out.println(sum);
    } 
}`}
                correctAnswer="40"
                v1="38"
                v2="39"
                v3="40"
                v4="41"
                counter={this.counter}
              />
              <QuizeTest
                quizeNo="6"
                language="Java"
                question="What will be the output of the following Java program?"
                code={`class array_output 
{
    public static void main(String args[]) 
    {
        int array_variable [] = new int[10];
        for (int i = 0; i < 10; ++i) {
              array_variable[i] = i/2;
              array_variable[i]++;
              System.out.print(array_variable[i] + " ");
              i++;
        }
             
    } 
}`}
                correctAnswer=" 1 2 3 4 5"
                v1=" 0 2 4 6 8"
                v2=" 1 2 3 4 5"
                v3="0 1 2 3 4 5 6 7 8 9"
                v4="1 2 3 4 5 6 7 8 9 10"
                counter={this.counter}
              />
              <QuizeTest
                quizeNo="7"
                language="Java"
                question=" What will be the output of the following Java program?"
                code={`class variable_scope 
{
    public static void main(String args[]) 
    {
        int x;
        x = 5;
        {
            int y = 6;
            System.out.print(x + " " + y);
        }
        System.out.println(x + " " + y);
    } 
}`}
                correctAnswer="Compilation error"
                v1="5 6 5 6"
                v2=" 5 6 5"
                v3="Runtime error"
                v4="Compilation error"
                counter={this.counter}
              />
              <QuizeTest
                quizeNo="8"
                language="Java"
                question="What will be the output of the following Java program?"
                code={`class dynamic_initialization 
{
    public static void main(String args[]) 
    {
        double a, b;
        a = 3.0;
        b = 4.0;
        double c = Math.sqrt(a * a + b * b);
        System.out.println(c);
    } 
}`}
                correctAnswer="5.0"
                v1="5.0"
                v2="25.0"
                v3="7.0"
                v4="Compilation Error"
                counter={this.counter}
              />
              <QuizeTest
                quizeNo="9"
                language="Java"
                question="What will be the output of the following Java code?"
                code={`class char_increment 
{
    public static void main(String args[]) 
    {
        char c1 = 'D';
        char c2 = 84;
        c2++;
        c1++;
        System.out.println(c1 + " "  + c2);
    } 
}`}
                correctAnswer="E U"
                v1="E U"
                v2="U E"
                v3="V E"
                v4="U F"
                counter={this.counter}
              />
              <QuizeTest
                quizeNo="10"
                language="Java"
                question="What will be the output of the following Java code?"
                code={`class conversion 
{
    public static void main(String args[]) 
    {
        double a = 295.04;
        int  b = 300;
        byte c = (byte) a;
        byte d = (byte) b;
        System.out.println(c + " "  + d);
    } 
}`}
                correctAnswer=""
                v1="38 43"
                v2="39 44"
                v3="295 300"
                v4="295.04 300"
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

export default JavaQuizeTest3;
