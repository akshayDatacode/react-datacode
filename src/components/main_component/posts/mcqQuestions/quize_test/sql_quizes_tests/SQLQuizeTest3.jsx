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
class SQLQuizeTest3 extends Component {
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
                  <h2>SQL Quiz Test Advance </h2>
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
                language="SQL"

                question="Which of the following is the correct outcome of the SQL query below?"
code={`Query: SELECT cid FROM ENROLLED WHERE grade = 'C'`}
                correctAnswer=" Extract the course ids(cid) where student receive the grade C in the course"
                v1="Extract the course ids(cid) where student receive the grade C in the course"
                v2="Extract the unique course ids(cid) where student receive the grade C in the course"
                v3="Error"
                v4=" None of these"
                counter={this.counter}
              />

              <QuizeTest
                quizeNo="2"
                language="SQL"

                question="Which of the following is the correct outcome of the SQL query below?"
code={` SELECT student.name, enrolled.grade FROM student, enrolled WHERE student.sid = enrolled.sid AND enrolled.cid = '15-415' AND enrolled.grade IN ('A', 'B')`}
                correctAnswer="Returns the name, grade of the students who took course ’15-415′ and got a grade’ A’ or ‘B’ in that course"
                v1=" Returns the name, grade of the students who took the course ’15-415′ but didn’t get grade ‘A’ or ‘B’ in that course"
                v2="Returns the name, grade of the students who took course ’15-415′ and got a grade’ A’ or ‘B’ in that course "
                v3=" Error"
                v4="None of these"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="3"
                question="Which of the following statement will add a column ‘F_name’ to the STUDENT table?"
                correctAnswer="ALTER TABLE Student add F_name varchar(20);"
                v1="ALTER TABLE Student add F_name varchar(20);"
                v2="ALTER TABLE Student add column ( F_name varchar(20));"
                v3="ALTER TABLE Student add (F_name varchar(20));"
                v4="ALTER TABLE Student add column (F_name);"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="4"
                language="SQL"

                question="Which of the following query(s) will result in a successful insertion of a record in the STUDENT table?"
code={`Query1: INSERT INTO student (sid, name, login, age, gpa) VALUES (53888, ‘Drake’, ‘drake@cs’, 29, 3.5)

Query2: INSERT INTO student VALUES (53888, ‘Drake’, ‘drake@cs’, 29, 3.5)

`}                
                correctAnswer="Both queries will insert the record successfully"
                v1="Query 1 will insert the record successfully and Query 2 will not"
                v2="Query 2 will insert the record successfully and Query 1 will not"
                v3="Both queries will not be able to insert the record successfully"
                v4="Both queries will insert the record successfully"
                counter={this.counter}
              />
                  <QuizeTest
                quizeNo="5"
                language="SQL"

                question="‘Sid’ in “ENROLLED” table is ‘Foreign Key’ referenced by ‘Sid’ in “STUDENT” table. Now you want to insert a record into the ENROLLED table."
code={`Which of the following option(s) will insert a row in ENROLLED table successfully?

1. INSERT INTO ENROLLED values(53667, '15-420', 'C');
2. INSERT INTO ENROLLED values(53666, '15-421', 'C');
3. INSERT INTO ENROLLED values(53667, '15-415', 'C');
4. INSERT INTO ENROLLED values(53666, '15-415', 'C');`}            
                correctAnswer="2 and 4"
                v1="1 and 3"
                v2="Only 3"
                v3="2 and 4"
                v4="Only 4"
                counter={this.counter}
              />
                  <QuizeTest
                quizeNo="6"
                language="SQL"

                question="Consider the following queries:"
code={`Query1: select name from enrolled LEFT OUTER JOIN student on student.sid = enrolled.sid;
Query2: select name from student LEFT OUTER JOIN enrolled on student.sid = enrolled.sid;

Which of the following option is correct?

`}                
                correctAnswer="Queries 1 and 2 will give the same results"
                v1="Queries 1 and 2 will give the same results"
                v2="Queries 1 and 2 will give different results"
                v3="Query 1 will produce an error and Query 2 will run successfully"
                v4="Query 2 will produce an error and Query 1 will run successfully"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="7"
                question="Which of the following statements will modify the data type of “Sid” column in ENROLLED table?

                Note: There is no foreign key relationship between tables STUDENT and ENROLLED."
                correctAnswer="ALTER TABLE ENROLLED MODIFY (sid varchar(100));"
                v1="ALTER TABLE ENROLLED MODIFY sid varchar(100);"
                v2="ALTER TABLE ENROLLED MODIFY column (sid varchar(100));"
                v3="ALTER TABLE ENROLLED MODIFY attribute (sid varchar(100));"
                v4="ALTER TABLE ENROLLED MODIFY (sid varchar(100));"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="8"
                language="SQL"

                question="Which of the following are the synonyms for ‘column’ and ‘row’ of a table?"
code={`1. Row = [Tuple, Record]
2. Column = [Field, Attribute]
3. Row = [Tuple, Attribute]
4. Columns = [Field, Record]

Select the correct option:`}
                correctAnswer="1 and 2"
                v1="3 and 4"
                v2="Only 1"
                v3="1 and 2"
                v4="Only 2"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="9"
                language="SQL"
                question="Tables A, B have three columns (namely: ‘id’, ‘age’, ‘name’) each. These tables have no ‘null’ values and there are 100 records in each of the table.

                Here are two queries based on these two tables ‘A’ and ‘B’:"
code={`Query1: SELECT A.id FROM A WHERE A.age > ALL (SELECT B.age FROM B WHERE B.name = 'Ankit')

Query2: SELECT A.id FROM A WHERE A.age > ANY (SELECT B.age FROM B WHERE B.name = 'Ankit')

Now, which of the following statement is correct for the output of each query?`}
                correctAnswer="The number of tuples in the output Query 1 will be less than or equal to the output of Query 2"
                v1=" The number of tuples in the output of Query 1 will be more than or equal to the output of Query 2"
                v2="The number of tuples in the output of Query 1 will be equal to the output of Query 2"
                v3="The number of tuples in the output Query 1 will be less than or equal to the output of Query 2"
                v4="Can’t say"
                counter={this.counter}
              />
              
              <QuizeTest
                quizeNo="10"
                language="SQL"

                question="What will be the output for the below query?"
code={`Query: SELECT Name from AV1 where Name LIKE '%______%';

Note: The above operation contains 6 underscores (‘_’) used with LIKE operator.`}
                correctAnswer=" It will return names where number of characters in names are greater than or equals to 6"
                v1=" It will return names where number of characters in names are greater than or equals to 6"
                v2=" It will return names where number of characters in names are greater than 6"
                v3="It will return names where number of characters in names are less than or equals to 6"
                v4="It will give an error"
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

export default SQLQuizeTest3;
