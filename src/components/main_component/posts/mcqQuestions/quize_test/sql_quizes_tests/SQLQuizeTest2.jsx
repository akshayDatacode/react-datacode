import React, { Component } from "react";
import HeaderBannerSection from "../../../../HeaderBannerSection";
import QuizeTest from "../quizeTest";
import ScoreCard from "../../scoreCard";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterComponentUpper from "../../../../../../app/components/footer_component/FooterComponentUpper";
import MCQTestCardCarousel from "../MCQTestCardCarousel";
import RightSideSection from "../../../../../right_section/RightSideSection";
import RecommendPost from "../../../../../right_section/RecommendPost";

class SQLQuizeTest2 extends Component {
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
                  <h2>SQL Quiz Test Intermediate</h2>
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
                    to="/sql_quize_tests"
                    className="badge badge-success mr-1"
                  >
                    SQL Quiz >>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <QuizeTest
                    quizeNo="1"
                    question="What does below SQL statement describe?"
                    code={`SELECT CustomerName, Address + ‘, ‘ + City + ‘, ‘ + 
Country AS Address

FROM Customers;`}
                    correctAnswer="Alias named Address column will be created and under this Address, City and Country will be printed as combined statement.
                "
                    v1="Alias named Address column will be created and under this Address, City and Country will be printed as combined statement.
                "
                    v2="Alias named Address will be created for Country columns"
                    v3="Alias named Address column will be created and under this all CustomerName, address, city and country will be printed as combined statement"
                    v4="All above options are wrong
                "
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="2"
                    question="Logical operators used in SQL are"
                    correctAnswer="AND, OR , NOT
                "
                    v1="AND, OR , NOT
                "
                    v2="&&, ||, !
                "
                    v3="$,|,!
                "
                    v4="None of the above"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="3"
                    question="To specify the number of records to return, which keyword is used"
                    correctAnswer="TOP"
                    v1="FIRST"
                    v2="TOP"
                    v3="START
                "
                    v4="ROW"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="4"
                    question=" To search for a specified pattern in a column"
                    correctAnswer="SQL LIKE"
                    v1="SQL MATCH"
                    v2="SQL PATTERN"
                    v3="SQL SEARCH"
                    v4="SQL LIKE"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="5"
                    question="Which clause is used to combine rows from two or more tables based on a related column between them."

                    correctAnswer="SQL JOIN"
                    v1="SQL MATCH"
                    v2="SQL PATTERN"
                    v3="SQL JOIN"
                    v4="NONE"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="6"
                    question="To combine the result-set of two or more SELECT statements, SQL clause used is"
                    correctAnswer="SQL UNION"
                    v1="SQL UNION"
                    v2="SQL JOIN"
                    v3="SQL GROUP BY"
                    v4="NONE"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="7"
                    question="The following SQL is which type of join: "
                    code={`SELECT CUSTOMER_T. CUSTOMER_ID, ORDER_T. CUSTOMER_ID, NAME, ORDER_ID FROM CUSTOMER_T,ORDER_T ;`}
                    correctAnswer="Cartesian join"
                    v1="Equi-join"
                    v2="Natural join"
                    v3="Outer join"
                    v4="Cartesian join"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="8"
                    question="The SQL statement prints"
                    code={`SELECT SUBSTR(‘123456789’, INSTR(‘abcabcabc’,’b’), 4) FROM EMP;`}
                    correctAnswer=" 2345"
                    v1="6789"
                    v2=" 2345"
                    v3="1234"
                    v4="456789"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="9"
                    question=" Consider the following schema − Which code snippet will alter the table LOCATIONS and change the datatype of the column CITY to varchar2(30)?"
                    code={`LOCATIONS(subject_code, department_name, location_id, city);
`}
                    correctAnswer=" ALTER TABLE locations MODIFY (city varchar2(30));"
                    v1="ALTER TABLE locations MODIFY COLUMN (city varchar2(30));"
                    v2="MODIFY TABLE locations ADD (city varchar2(30));"
                    v3=" ALTER TABLE locations MODIFY (city varchar2(30));"
                    v4=" None of the above.

                "
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="10"
                    question="Which of the following code will retrieve data from the view all_marks_english, created in the previous question?"
                    correctAnswer=" select * from all_marks_english;"
                    v1="select view all_marks_english;"
                    v2="select from all_marks_english;"
                    v3=" retrieve from all_marks_english;"
                    v4=" select * from all_marks_english;"
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

export default SQLQuizeTest2;
