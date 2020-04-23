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
class DBMSQuizeTest1 extends Component {
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
          <h2>DBMS Quiz Test Beginner</h2>
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
            to="/dbms_quize_tests"
            className="badge badge-success mr-1"
          >
            DBMS Quiz >>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col">
              <QuizeTest
                quizeNo="1"
                question="The view of total database content is"
                correctAnswer="Conceptual view"
                v1="Conceptual view"
                v2="Internal view."
                v3="External view. "
                v4="Physical View."
                counter={this.counter}
              />

              <QuizeTest
                quizeNo="2"
                question="Cartesian product in relational algebra is"
                correctAnswer="a Binary operator."
                v1="a Unary operator."
                v2="a Binary operator. "
                v3="a Ternary operator"
                v4="not defined."
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="3"
                question="DML is provided for
                "
            
                correctAnswer="Manipulation & processing of the database."
                v1="Description of the logical structure of a database."
                v2="The addition of new structures in the database system."
                v3="Manipulation & processing of the database."
                v4="Definition of a physical structure of the database system."
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="4"
                question="‘AS’ clause is used in SQL for"
                correctAnswer="Rename operation."
                v1=" Selection operation."
                v2="Rename operation."
                v3="Join operation."
                v4="Projection operation."
                counter={this.counter}
              />
                  <QuizeTest
                quizeNo="5"
                question="ODBC stands for"
            
                correctAnswer="Open Database Connectivity."
                v1="Object Database Connectivity."
                v2="Oral Database Connectivity."
                v3="Oracle Database Connectivity."
                v4="Open Database Connectivity."
                counter={this.counter}
              />
                  <QuizeTest
                quizeNo="6"
                question="Architecture of the database can be viewed as"
                correctAnswer="three levels"
                v1="two levels"
                v2="four levels"
                v3="three levels"
                v4="one level."
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="7"
                question="An entity set that does not have sufficient attributes to form a primary key is a"
                correctAnswer="weak entity set."
                v1="strong entity set."
                v2="weak entity set."
                v3="simple entity set"
                v4="primary entity set."
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="8"
                question=" In an E-R diagram attributes are represented by"
                correctAnswer="ellipse. "
                v1=" rectangle."
                v2="square."
                v3="ellipse. "
                v4=" triangle."
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="9"
                question="In case of entity integrity, the primary key maybe"
                correctAnswer="not Null"
                v1="not Null"
                v2="Null"
                v3="both Null & not Null."
                v4="any value."
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="10"
                question=" In tuple relational calculus P1 ®P2 is equivalent to"
                correctAnswer="¬P1 Ú P2"
                v1="¬P1 Ú P2"
                v2="P1 Ú P2"
                v3="P1 Ù P2 "
                v4="P1 Ù¬P2"
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

export default DBMSQuizeTest1;
