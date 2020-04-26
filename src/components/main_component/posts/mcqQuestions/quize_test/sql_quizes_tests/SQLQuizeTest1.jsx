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

class SQLQuizeTest1 extends Component {
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
                  <h2>SQL Quiz Test Beginner</h2>
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
                question="Which statement is wrong about PRIMARY KEY constraint in SQL?"
                correctAnswer="Primary key must be made of any single columns"
                v1="The PRIMARY KEY uniquely identifies each record in a SQL database table"
                v2="Primary key can be made based on multiple columns"
                v3="Primary key must be made of any single columns"
                v4="Primary keys must contain UNIQUE values."
                counter={this.counter}
              />

              <QuizeTest
                quizeNo="2"
                question="Which is/are correct statements about primary key of a table?"
                correctAnswer="Both B & C "
                v1="Primary keys can contain NULL values"
                v2="Primary keys cannot contain NULL values. "
                v3="A table can have only one primary key with single or multiple fields"
                v4="Both B & C "
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="3"
                question="In existing table, ALTER TABLE statement is used to"
                correctAnswer="All of the above"
                v1="Add columns"
                v2="Add constraints
                "
                v3="Delete columns
                "
                v4="All of the above"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="4"
                question="SQL Query to delete all rows in a table without deleting the table (structure, attributes, and indexes)"
                correctAnswer="DELETE FROM table_name;"
                v1="DELETE FROM table_name;"
                v2="DELETE TABLE table_name;"
                v3="DROP TABLE table_name;"
                v4="NONE"
                counter={this.counter}
              />
                  <QuizeTest
                quizeNo="5"
                question="Wrong statement about UPDATE keyword is"
            
                correctAnswer="Only one record can be updated at a time using WHERE clause"
                v1="If WHERE clause in missing in statement the all records will be updated."
                v2="Only one record can be updated at a time using WHERE clause"
                v3="Multiple records can be updated at a time using WHERE clause"
                v4="None is wrong statement"
                counter={this.counter}
              />
                  <QuizeTest
                quizeNo="6"
                question="Wrong statement about ORDER BY keyword is"
                correctAnswer="To sort the records in descending order, use the DECENDING keyword."
                v1="Used to sort the result-set in ascending or descending order
                "
                v2="The ORDER BY keyword sorts the records in ascending order by default."
                v3="To sort the records in ascending order, use the ASC keyword."
                v4="To sort the records in descending order, use the DECENDING keyword."
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="7"
                question="Correct syntax query syntax to drop a column from a table is"
                correctAnswer="ALTER TABLE table_name DROP COLUMN column_name;"
                v1="DELETE COLUMN column_name;"
                v2="DROP COLUMN column_name;"
                v3="ALTER TABLE table_name DROP COLUMN column_name;"
                v4="None is correct."
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="8"
                question="If you want to allow age of a person > 18 in the column Age of table Person, then which constraint will be applied to AGE column."
                correctAnswer="Check"
                v1="Default"
                v2="Check"
                v3="NOT NULL"
                v4="None
                "
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="9"
                question="In a table, a column contains duplicate value, if you want to list all different value only, then which SQL clause is used?"
                correctAnswer="SQL DISTINCT"
                v1="SQL DISTINCT"
                v2="SQL UNIQUE"
                v3="SQL BETWEEN"
                v4="SQL Exists
                "
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="10"
                question="To give a temporary name to a table, or a column in a table for more readability, what is used?"
                correctAnswer="SQL aliases"
                v1="SQL Wildcards"
                v2="SQL aliases"
                v3="SQL LIKES"
                v4="SQL Comments
                "
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

export default SQLQuizeTest1;
