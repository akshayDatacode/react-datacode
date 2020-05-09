import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import RightSideSection from "../../../right_section/RightSideSection";
import RecommendPost from "../../../right_section/RecommendPost";
import { Link } from "react-router-dom";
import RoadMapCard from "../../technologies/RoadMapCard";
import InterviewQuestionCardCarousel from "./InterviewQuestionCardCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FbLikeShare from "../../../FbLikeShare";
import {
  faHome,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";

class DBMSInterviewQuestions extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-7 mt-4">
            <h2
              className="text-center mb-4 display-5"
              style={{ color: "#072C71" }}
            >
              Find the Best DBMS Interview Questions 
            </h2>
            <Link
              to="/home"
              className="badge mr-1"
              style={{ backgroundColor: "#06CB6C" }}
            >
              <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" />
            </Link>
            <Link
              to="/index_interview_questioins"
              className="badge mr-1"
              style={{ backgroundColor: "#072C71" }}
            >
              <FontAwesomeIcon
                icon={faChalkboardTeacher}
                size="2x"
                color="#06CB6C"
              />
            </Link>
              <div className="row mb-5">
                <div className="col">
                  <QuestionCard
                    question={`Q1) What is DBMS used for?`}
                    answer={`DBMS, commonly known as Database Management System, 
             is an application system whose main purpose revolves around the data. 
             This is a system that allows its user to store the data, define it, 
             retrieve it and update the information about the data inside the database.`}
                  />
                  <QuestionCard
                    question={`Q2) What is meant by a Database?`}
                    answer={`In simple terms, Database is a collection of data 
             in some organized way to facilitate its user’s to easily access, 
             manage and upload the data.
             `}
                  />
                  <QuestionCard
                    question={`Q3) What is the purpose of normalization in DBMS?`}
                    answer={`Normalization is the process of analyzing the relational 
             schemas which are based on their respective functional dependencies 
             and the primary keys in order to fulfill certain properties.
             The properties include:
                  1. To minimize the redundancy of the data.
                  2. To minimize the Insert, Delete and Update Anomalies.
`}
                  />
                  <QuestionCard
                    question={`Q4) What is the purpose of SQL?`}
                    answer={`SQL stands for Structured Query Language whose main purpose
              is to interact with the relational databases in the form of 
              inserting and updating/modifying the data in the database.`}
                  />
                  <QuestionCard
                    question={`Q5) Explain the concepts of a Primary key and Foreign Key.`}
                    answer={` Primary Key is used to uniquely identify the records in 
             a database table while Foreign Key is mainly used to link two or more
              tables together, as this is a particular field(s) in one of the database
               tables which are the primary key of some other table.
             Example: There are 2 tables – Employee and Department. 
             Both have one common field/column as ‘ID’ where ID is the primary 
             key of the Employee table while this is the foreign key for the Department table.`}
                  />
                  <QuestionCard
                    question={`Q6) What are the main differences between Primary key and Unique Key?`}
                    answer={`Given below are few differences:
                        1. The main difference between the Primary key 
                        and Unique key is that the Primary key can never
                         have a null value while the Unique key may consist of null value.
                        2. In each table, there can be only one primary key while 
                        there can be more than one unique key in a table.
             `}
                  />
                  <QuestionCard
                    question={`Q7) What is the concept of sub-query in terms of SQL?`}
                    answer={`Sub-query is basically the query which is included inside some 
             other query and can also be called as an inner query which is found inside 
             the outer query.`}
                  />
                  <QuestionCard
                    question={`Q8) What is the use of DROP command and what are the 
             differences between DROP, TRUNCATE and DELETE commands?`}
                    answer={`DROP command is a DDL command which is used to drop/delete the existing table, database, index or view from the database.
             The major difference between DROP, TRUNCATE and DELETE commands are:
             DROP and TRUNCATE commands are the DDL commands which are used to delete tables from the database and once the table gets deleted, all the privileges and indexes that are related to the table also get deleted. These 2 operations cannot be rolled back and so should be used only when necessary.
             DELETE command, on the other hand, is a DML Command which is also used to delete rows from the table and this can be rolled back.
             Note: It is recommended to use the ‘WHERE’ clause along with the DELETE command else the complete table will get deleted from the database.
             `}
                  />
                  <QuestionCard
                    question={`Q9) What is the main difference between UNION and UNION ALL?
             `}
                    answer={`UNION and UNION ALL are used to join the data from 2 or more 
             tables but UNION removes duplicate rows and picks the rows which are distinct 
             after combining the data from the tables whereas UNION ALL does not remove the
              duplicate rows, it just picks all the data from the tables.`}
                  />
                  <QuestionCard
                    question={`Q10) What is Correlated Subquery in DBMS?`}
                    answer={`A Subquery is also known as a nested query i.e. a query written inside some query. When a Subquery is executed for each of the rows of the outer query then it is termed as a Correlated Subquery.
             Example of Non-Correlated Subquery is:
             SELECT * from EMP WHERE ‘RIYA’ IN (SELECT Name from DEPT WHERE EMP.EMPID=DEPT.EMPID);
             Here, the inner query is not executed for each of the rows of the outer query.
             `}
                  />

                  <QuestionCard
                    question={`Q11) Explain Entity, Entity Type, and Entity Set in DBMS?`}
                    answer={`Entity is an object, place or thing which has its independent existence in the real world and about which data can be stored in a database. For Example, any person, book, etc.
             Entity Type is a collection of entities that have the same attributes. For Example, the STUDENT table contains rows in which each row is an entity holding the attributes like name, age, and id of the students, hence STUDENT is an Entity Type which holds the entities having the same attributes.
             Entity Set is a collection of entities of the same type. For Example, A collection of the employees of a firm.`}
                  />
                  <QuestionCard
                    question={`Q12) What are the different levels of abstraction in the DBMS?`}
                    answer={`There are 3 levels of data abstraction in the DBMS.
             They include:
             Physical Level: This is the lowest level of the data abstraction which states how the data is stored in the database.
             Logical Level: This is the next level of the data abstraction which states the type of the data and the relationship among the data that is stored in the database.
             View Level: This is the highest level in the data abstraction which shows/states only a part of the database.`}
                  />
                  <QuestionCard
                    question={`Q13) What integrity rules exist in the DBMS?
             `}
                    answer={`There are 2 major integrity rules that exist in the DBMS.
             They are:
             Entity Integrity: This states a very important rule that value of a Primary key can never have a NULL value.
             Referential Integrity: This rule is related to the Foreign key which states that either the value of a Foreign key is a NULL value or it should be the primary key of any other relation.
             `}
                  />
                  <QuestionCard
                    question={`Q14) What is E-R model in the DBMS?`}
                    answer={`E-R model is known as an Entity-Relationship model in the DBMS which is based on the concept of the Entities and the relationship that exists among these entities.`}
                  />
                  <QuestionCard
                    question={`Q15) What is a functional dependency in the DBMS?`}
                    answer={`This is basically a constraint which is useful in describing the relationship among the different attributes in a relation.
             Example: If there is some relation ‘R1’ which has 2 attributes as Y and Z then the functional dependency among these 2 attributes can be shown as Y->Z which states that Z is functionally dependent on Y.
             `}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h4 className="text-primary">For More Technologies</h4>
                  <InterviewQuestionCardCarousel />
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-5">
            <div className="row">
              <FbLikeShare />{" "}
            </div>
              <h5 className="mb-4">Other Learning Resources</h5>

              <RoadMapCard
                imgsource="dbms_tech.jpeg"
                title="Top 30 DBMS Interview Questions and Answer"
                source="(softwaretestinghelp.com)"
                tag1="DBMS"
                tag2="Interview Questions"
                link="https://www.softwaretestinghelp.com/top-dbms-interview-questions/"
              />
              <RoadMapCard
                imgsource="dbms_tech.jpeg"
                title="Learn DBMS INterview Questions"
                source="(javatpoint.com)"
                tag1="DBMS"
                tag2="Interview"
                link="https://www.javatpoint.com/dbms-interview-questions"
              />
              <RoadMapCard
                imgsource="dbms_tech.jpeg"
                title="Top 50 DBMS Interview Questions and Answers | Edureka"
                source="(edureka.com)"
                tag1="DBMS"
                link="https://www.edureka.co/blog/interview-questions/dbms-interview-questions"
              />
              <RoadMapCard
                imgsource="dbms_tech.jpeg"
                title="Top 50 Database(DBMS) Interview Questions & Answers"
                source="(guru99.com)"
                tag2="DBMS"
                link="https://www.guru99.com/database-interview-questions.html"
              />
              <RoadMapCard
                imgsource="dbms_tech.jpeg"
                title="Commonly asked DBMS interview questions|Set 1"
                source="(geeksforgeeks.com)"
                tag2="DBMS"
                link="https://www.geeksforgeeks.org/commonly-asked-dbms-interview-questions/"
              />
              <RoadMapCard
                imgsource="dbms_tech.jpeg"
                title="DBMS Interview Questions-SQL Advanced - Placement Papers"
                source="(freshersworld.com)"
                tag2="DBMS"
                link="http://placement.freshersworld.com/technical-interview-questions-questions-and-answers/dbms/33111829"
              />
              <RoadMapCard
                imgsource="dbms_tech.jpeg"
                title="TOP 250+ DBMS+RDBMS Interview Questions and Answers"
                source="(wisdomjobs.com)"
                tag2="DBMS"
                link="https://www.wisdomjobs.com/e-university/dbms-rdbms-interview-questions.html"
              />
              
              <RightSideSection />
            </div>
          </div>
        

      </>
    );
  }
}

export default DBMSInterviewQuestions;
