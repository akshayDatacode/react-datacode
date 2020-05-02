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

class DBMSQuizeTest3 extends Component {
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
                  <h2>DBMS Quiz Test Advance</h2>
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
                    language="js"
                    question="The query given below will not give an error. Which one of the following has to be replaced to get the desired output?"
                    code={`SELECT ID, name, dept name, salary * 1.1
WHERE instructor;`}
                    correctAnswer="Where"
                    v1="Salary*1.1"
                    v2="ID"
                    v3="Where"
                    v4="Instructor"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="2"
                    question="This Query can be replaced by which one of the following?"
                    code={`SELECT name, course_id
FROM instructor, teaches
WHERE instructor_ID= teaches_ID;`}
                    correctAnswer="Select name, course_id from instructor natural join teaches;"
                    v1="Select name,course_id from teaches,instructor where instructor_id=course_id;"
                    v2="Select name, course_id from instructor natural join teaches; "
                    v3="Select name, course_id from instructor;"
                    v4="Select course_id from instructor join teaches;Which keyword must be used here to rename the field name?"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="3"
                    question="Which keyword must be used here to rename the field name?"
                    code={`SELECT name ____ instructor name, course id
FROM instructor, teaches
WHERE instructor.ID= teaches.ID;
`}
                    correctAnswer=" As"
                    v1="From"
                    v2="Rename"
                    v3=" As"
                    v4="Join"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="4"
                    question="This query displays"
                    code={`(SELECT course id
  FROM SECTION
  WHERE semester = ’Fall’ AND YEAR= 2009)
  EXCEPT
  (SELECT course id
  FROM SECTION
  WHERE semester = ’Spring’ AND YEAR= 2010);`}
                    correctAnswer="Tuples from first part which do not have second part"
                    v1="Only tuples from second part"
                    v2="Only tuples from the first part which has the tuples from second part"
                    v3="Tuples from both the parts"
                    v4="Tuples from first part which do not have second part"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="5"
                    question="Some of these insert statements will produce an error. Identify the statement."
                    code={`CREATE TABLE employee (id INTEGER,name VARCHAR(20),salary NOT NULL);
INSERT INTO employee VALUES (1005,Rach,0);
INSERT INTO employee VALUES (1007,Ross, );
INSERT INTO employee VALUES (1002,Joey,335);`}
                    correctAnswer="Insert into employee values (1007,Ross, );"
                    v1=" Insert into employee values (1005,Rach,0);"
                    v2="Insert into employee values (1002,Joey,335);"
                    v3="Insert into employee values (1007,Ross, );"
                    v4="None of the mentioned"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="6"
                    question="In the query given below which one of the following is a temporary relation?"
                    code={`WITH max_budget (VALUE) AS
(SELECT MAX(budget)
FROM department)
SELECT budget
FROM department, max_budget
WHERE department.budget = MAX budget.value;Budget`}
                    correctAnswer="Max_budget"
                    v1="Budget"
                    v2="Department"
                    v3="Value"
                    v4="Max_budget"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="7"
                    question="Fill in with correct keyword to update the instructor relation."
                    code={`UPDATE instructor
_____ salary= salary * 1.05;`}
                    correctAnswer="Set"
                    v1="Where"
                    v2="Set"
                    v3="In"
                    v4="Select
                "
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="8"
                    question="Here the tuples are selected from the view.Which one denotes the view."
                    code={`SELECT course_id
FROM physics_fall_2009
WHERE building= ’Watson’;`}
                    correctAnswer="Building"
                    v1="Course_id"
                    v2=" Watson"
                    v3="Building"
                    v4="physics_fall_2009"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="9"
                    question="Find the error in this query."
                    code={`CREATE VIEW faculty AS
SELECT ID, name, dept name
FROM instructor;`}
                    correctAnswer=" None of the mentioned"
                    v1="Instructor"
                    v2="Select"
                    v3="View …as"
                    v4=" None of the mentioned"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="10"
                    question="Consider the following action: What does Rollback do?"
                    code={`TRANSACTION.....
Commit;
ROLLBACK;`}
                    correctAnswer=""
                    v1="Undoes the transactions before commit"
                    v2=" Clears all transactions"
                    v3="Redoes the transactions before commit"
                    v4="No action"
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

export default DBMSQuizeTest3;
