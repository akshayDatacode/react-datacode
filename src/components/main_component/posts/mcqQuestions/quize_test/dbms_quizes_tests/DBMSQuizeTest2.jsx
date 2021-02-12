import React, { Component } from "react";
import HeaderBannerSection from "../../../../HeaderBannerSection";
import QuizeTest from "../quizeTest";
import ScoreCard from "../../scoreCard";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterComponentUpper from "../../../../../../app/components/footer_component/FooterComponentUpper";
import RightSideSection from "../../../../../right_section/RightSideSection";
import RecommendPost from "../../../../../right_section/RecommendPost";
import MCQTestCardCarousel from "../MCQTestCardCarousel";

class DBMSQuizeTest2 extends Component {
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
                  <h2>DBMS Quiz Test Intermediate</h2>
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
                    question="A logical schema"
                    correctAnswer="is the entire database."
                    v1="is the entire database."
                    v2="is a standard way of organising information into accessible parts."
                    v3=" describes how data is actually stored on disk."
                    v4="both (A) and (C)"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="2"
                    question="The method in which records are physically stored in a specified order according to a key field in each record is"
                    correctAnswer=" hash"
                    v1=" direct."
                    v2="sequential. "
                    v3="hash"
                    v4="all of the above."
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="3"
                    question="E-R model uses this symbol to represent a weak entity set?"

                    correctAnswer="Doubly outlined rectangle"
                    v1="Dotted rectangle."
                    v2="Diamond"
                    v3="Doubly outlined rectangle"
                    v4="None of these"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="4"
                    question="Which of the following operation is used if we are interested in only certain columns of a table?"
                    correctAnswer=" PROJECTION"
                    v1=" PROJECTION"
                    v2="SELECTION"
                    v3="UNION"
                    v4="JOIN"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="5"
                    question="Which of the following is a legal expression in SQL?"

                    correctAnswer="SELECT NAME FROM EMPLOYEE;"
                    v1="SELECT NULL FROM EMPLOYEE;"
                    v2="SELECT NAME FROM EMPLOYEE;"
                    v3="SELECT NAME FROM EMPLOYEE WHERE SALARY = NULL;"
                    v4="None of the above"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="6"
                    question="The result of the UNION operation between R1 and R2 is a relation that includes"
                    correctAnswer=""
                    v1="all the tuples of R1"
                    v2=" all the tuples of R2"
                    v3="all the tuples of R1 and R2"
                    v4="all the tuples of R1 and R2 which have common columns"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="7"
                    question="Which of the following is a comparison operator in SQL?"
                    correctAnswer=" All of the above"
                    v1="= "
                    v2="LIKE"
                    v3=" BETWEEN"
                    v4=" All of the above"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="8"
                    question="Using Relational Algebra the query that finds customers, who have a balance of over 1000 is"
                    correctAnswer="PCustomer_name(s balance >1000(Deposit))"
                    v1="PCustomer_name(s balance >1000(Deposit))"
                    v2=" s Customer_name(P balance >1000(Deposit))"
                    v3="PCustomer_name(s balance >1000(Borrow))"
                    v4="s Customer_name(P balance >1000(Borrow))"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="9"
                    question="Cross Product is a:"
                    correctAnswer=""
                    v1="Unary Operator"
                    v2="Ternary Operator
                "
                    v3="Binary Operator"
                    v4="Not an operator"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="10"
                    question="Consider the join of a relation R with relation S. If R has m tuples and S has n tuples, then the maximum size of join is:"
                    correctAnswer="mn "
                    v1="mn "
                    v2="m+n"
                    v3="(m+n)/2"
                    v4="2(m+n)"
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

export default DBMSQuizeTest2;
