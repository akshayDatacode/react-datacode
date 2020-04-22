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

class JavaQuizeTest2 extends Component {
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
          <h2>Java Quiz Test Intermediate</h2>
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
                language="java"
                question="What will be the output of the following Java code?"
                code={`class average {
    public static void main(String args[])
    {
        double num[] = {5.5, 10.1, 11, 12.8, 56.9, 2.5};
        double result;
        result = 0;
        for (int i = 0; i < 6; ++i) 
            result = result + num[i];
        System.out.print(result/6);
           
    } 
}`}
                correctAnswer="16.46666666666667"
                v1="16.34"
                v2="16.566666644"
                v3="16.46666666666667"
                v4="16.46666666666666"
                counter={this.counter}
              />

             <QuizeTest
                quizeNo="2"
                language="java"
                question="What will be the output of the following Java statement?"
                code={`class output {
      public static void main(String args[]) 
      {
            double a, b,c;
            a = 3.0/0;
            b = 0/4.0;
            c=0/0.0;
           
            System.out.println(a);
            System.out.println(b);
            System.out.println(c);
      } 
  }
          `}
                correctAnswer=""
                v1="Infinity"
                v2="0.0"
                v3="NaN"
                v4="all of the mentioned"
                counter={this.counter}
              />
                 <QuizeTest
                quizeNo="3"
                language="java"
                question="What will be the output of the following Java code?"
                code={`class increment {
    public static void main(String args[]) 
    {        
          int g = 3;
          System.out.print(++g * 8);
    } 
}`}
                correctAnswer="32"
                v1=" 25"
                v2=" 24"
                v3="32"
                v4="33"
                counter={this.counter}
              />
                 <QuizeTest
                quizeNo="4"
                language="java"
                question="What will be the output of the following Java code?"
                code={`class area {
    public static void main(String args[]) 
    {    
          double r, pi, a;
          r = 9.8;
          pi = 3.14;
          a = pi * r * r;
          System.out.println(a);
    } 
}`}
                correctAnswer="301.5656"
                v1="301.5656"
                v2="301"
                v3="301.56"
                v4="301.56560000"
                counter={this.counter}
              />
                 <QuizeTest
                quizeNo="5"
                language="java"
                question="What will be the output of the following Java program?"
                code={` class array_output {
    public static void main(String args[]) 
    {    
        char array_variable [] = new char[10];
        for (int i = 0; i < 10; ++i) {
            array_variable[i] = 'i';
            System.out.print(array_variable[i] + "" );
            i++;
    }
  } 
}`}
                correctAnswer="i i i i i"
                v1="i i i i i"
                v2="0 1 2 3 4"
                v3="i j k l m"
                v4="None of the mentioned"
                counter={this.counter}
              />
                 <QuizeTest
                quizeNo="6"
                language="java"
                question="What will be the output of the following Java program?"
                code={`class mainclass {
    public static void main(String args[]) 
    {
        char a = 'A';
        a++;
        System.out.print((int)a);
    } 
}`}
                correctAnswer="66"
                v1="66"
                v2="67"
                v3="65"
                v4="64"
                counter={this.counter}
              />
                 <QuizeTest
                quizeNo="7"
                language="java"
                question="What will be the output of the following Java program?"
                code={`class mainclass {
    public static void main(String args[]) 
    {
        boolean var1 = true;
        boolean var2 = false;
        if (var1)
            System.out.println(var1);
        else
            System.out.println(var2);
    } 
}`}
                correctAnswer="true"
                v1="0"
                v2="1"
                v3="true"
                v4="false"
                counter={this.counter}
              />
                 <QuizeTest
                quizeNo="8"
                language="java"
                question="What will be the output of the following Java code?"
                code={`class booloperators {
    public static void main(String args[]) 
    {
        boolean var1 = true;
        boolean var2 = false;
        System.out.println((var1 & var2));
    } 
}`}
                correctAnswer="false"
                v1="0"
                v2="1"
                v3="true"
                v4="false"
                counter={this.counter}
              />
                 <QuizeTest
                quizeNo="9"
                language="java"
                question="What will be the output of the following Java code?"
                code={`class asciicodes {
    public static void main(String args[]) 
    {
          char var1 = 'A';
          char var2 = 'a';
          System.out.println((int)var1 + " " + (int)var2);
    } 
}`}
                correctAnswer="65 97"
                v1="162"
                v2="65 97"
                v3="67 95"
                v4=" 66 98"
                counter={this.counter}
              />
                 <QuizeTest
                quizeNo="10"
                language="java"
                question="What will be the output of the following Java statement?"
                code={`class output {
    public static void main(String args[]) 
    {
        double a, b,c;
        a = 3.0/0;
        b = 0/4.0;
        c=0/0.0;
           
        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
    } 
}`}
                correctAnswer="all of the mentioned"
                v1="Infinity"
                v2="0.0"
                v3="NaN"
                v4="all of the mentioned"
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

export default JavaQuizeTest2;
