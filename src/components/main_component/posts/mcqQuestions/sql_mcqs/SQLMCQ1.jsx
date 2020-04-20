import React, { Component } from "react";
import HeaderCard from "../../../HeaderCard";
import { Link } from "react-router-dom";
import ScoreCard from "../scoreCard";
import Quize from "../quize";
import RightSideSection from "../../../../right_section/RightSideSection";
import RecommendPost from "../../../../right_section/RecommendPost";
import MCQCardCarousel from "../MCQCardCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt, faHome } from "@fortawesome/free-solid-svg-icons";

class SQLMCQ1 extends Component {
  state = {
    isCorrect: false,
    isClicked: false,
    count: 0,
    status: "",
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  counter = (count) => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <HeaderCard title="SQL MCQs Set 1" />

        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="col-fluid ">
              <Link to="/home" className="badge badge-primary mr-1">
              <FontAwesomeIcon icon={faHome} size="1x" />
            </Link>
                <Link to="/index_mcqs" className="badge badge-warning mr-1">
                  MCQs >>
                </Link>
                <Link to="/index_sql_mcqs" className="badge badge-success mr-1">
                  SQL MCQs >>
                </Link>
                <ScoreCard count={this.state.count} />
              </div>
              <div className="row">
                <div className="col">
                  <Quize
                    quizeNo="1"
                    question="Which SQL function is used to count the number of rows in a SQL query?"
                    correctAnswer="COUNT(*)"
                    v1="COUNT()"
                    v2="NUMBER()"
                    v3="SUM()"
                    v4="COUNT(*)"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="1"
                    question=" Which of the following SQL clauses is used to DELETE tuples from a database table?"
                    correctAnswer="DELETE"
                    v1="DELETE"
                    v2="REMOVE"
                    v3="DROP"
                    v4=" CLEAR"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="1"
                    question="With SQL, how do you select all the records from a table named “Persons” where the value of the column “FirstName” ends with an “a”?"
                    correctAnswer="SELECT * FROM Persons WHERE FirstName LIKE ‘%a’"
                    v1="SELECT * FROM Persons WHERE FirstName=’a’"
                    v2="SELECT * FROM Persons WHERE FirstName LIKE ‘a%’"
                    v3="SELECT * FROM Persons WHERE FirstName LIKE ‘%a’"
                    v4="SELECT * FROM Persons WHERE FirstName=’%a%’"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="1"
                    question="With SQL, how can you return all the records from a table named “Persons” sorted descending by “FirstName”?"
                    correctAnswer="SELECT * FROM Persons ORDER BY FirstName DESC"
                    v1="SELECT * FROM Persons SORT BY ‘FirstName’ DESC"
                    v2="SELECT * FROM Persons ORDER FirstName DESC"
                    v3="SELECT * FROM Persons SORT ‘FirstName’ DESC"
                    v4="SELECT * FROM Persons ORDER BY FirstName DESC"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="1"
                    question="Which of the following command makes the updates performed by the transaction permanent in the database?"
                    correctAnswer="COMMIT"
                    v1="ROLLBACK"
                    v2="COMMIT"
                    v3="TRUNCATE"
                    v4=" DELETE"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="1"
                    question="SQL query to find the temperature in increasing order of all cities."
                    correctAnswer=" SELECT city, temperature FROM weather ORDER BY city"
                    v1="SELECT city FROM weather ORDER BY temperature"
                    v2="SELECT city, temperature FROM weather"
                    v3="SELECT city, temperature FROM weather ORDER BY temperature"
                    v4=" SELECT city, temperature FROM weather ORDER BY city"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="1"
                    question="What type of join is needed when you wish to include rows that do not have matching values?"
                    correctAnswer=" Outer join"
                    v1="Equi-join"
                    v2="Natural join"
                    v3=" Outer join"
                    v4="All of the Mentioned"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="1"
                    question="Which of the following is one of the basic approaches for joining tables?"
                    correctAnswer=""
                    v1="Subqueries"
                    v2="Union Join"
                    v3="Natural join"
                    v4="All of the Mentioned"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="1"
                    question="What is a view?
                    "
                    correctAnswer="A view is a virtual table which results of executing a pre-compiled query"
                    v1="A view is a special stored procedure executed when certain event occurs"
                    v2="A view is a database diagram"
                    v3="A view is a virtual table which results of executing a pre-compiled query"
                    v4="None of the Mentioned"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="1"
                    question="Which of the following is not a limitation of view?"
                    correctAnswer="Index Created on View Used Often"
                    v1="ORDER BY Does Not Work"
                    v2="Index Created on View Used Often"
                    v3="Cross Database Queries Not Allowed in Indexed View"
                    v4="Adding Column is Expensive by Joining Table Outside View"
                    counter={this.counter}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h4>For More MCQs Questions</h4>
                  <MCQCardCarousel />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <RightSideSection />
              <h5 className="mb-3">Recommended for you</h5>
              <RecommendPost
                imgsource="dbms_mcq.jpeg"
                RecPostHading="DBMS MCQs Questions"
                link="/index_python_mcqs"
              />
              <RecommendPost
                imgsource="django_mcq.jpeg"
                RecPostHading="DJango MCQs Questions"
                link="/index_java_mcqs"
              />
              <RecommendPost
                imgsource="c_mcq.jpeg"
                RecPostHading="C MCQs Questions"
                link="/index_C_mcqs"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SQLMCQ1;
