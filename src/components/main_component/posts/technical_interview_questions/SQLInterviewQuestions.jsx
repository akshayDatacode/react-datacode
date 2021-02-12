import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import RightSideSection from "../../../right_section/RightSideSection";
import RecommendPost from "../../../right_section/RecommendPost";
import { Link } from "react-router-dom";
import RoadMapCard from "../../tutorials/RoadMapCard";
import InterviewQuestionCardCarousel from "./InterviewQuestionCardCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FbLikeShare from "../../../FbLikeShare";
import { faHome, faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import LearningSideSection from "../../../right_section/learning_sidesection/LearningSideSection";
import Technologies from "../../../right_section/Technologies";

class SQLInterviewQuestions extends Component {
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
              Find the Best SQL Interview Questions
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
                  question={`1. What is SQL?`}
                  answer={`SQL stands for Structured Query Language , and it is used to communicate with the Database. This is a standard language used to perform tasks such as retrieval, updation, insertion and deletion of data from a database.

        Standard SQL Commands are Select.`}
                />
                <QuestionCard
                  question={`2. What is a Database?`}
                  answer={`Database is nothing but an organized form of data for easy access, storing, retrieval and managing of data. This is also known as structured form of data which can be accessed in many ways.

        Example: School Management Database, Bank Management Database.`}
                />
                <QuestionCard
                  question={`3. What are tables and Fields?`}
                  answer={`A table is a set of data that are organized in a model with Columns and Rows. Columns can be categorized as vertical, and Rows are horizontal. A table has specified number of column called fields but can have any number of rows which is called record.

        Example:.
        
        Table: Employee.
        Field: Emp ID, Emp Name, Date of Birth.
        
        Data: 201456, David, 11/15/1960.`}
                />

                <QuestionCard
                  question={`4. What is a primary key?`}
                  answer={`A primary key is a combination of fields which uniquely specify a row. This is a special kind of unique key, and it has implicit NOT NULL constraint. It means, Primary key values cannot be NULL.`}
                />
                <QuestionCard
                  question={`5. What is a unique key?`}
                  answer={`A Unique key constraint uniquely identified each record in the database. This provides uniqueness for the column or set of columns.

        A Primary key constraint has automatic unique constraint defined on it. But not, in the case of Unique Key.
        
        There can be many unique constraint defined per table, but only one Primary key constraint defined per table.`}
                />
                <QuestionCard
                  question={`6. What is a foreign key?`}
                  answer={`A foreign key is one table which can be related to the primary key of another table. Relationship needs to be created between two tables by referencing foreign key with the primary key of another table.`}
                />
                <QuestionCard
                  question={`7. What is a join?`}
                  answer={`This is a keyword used to query data from more tables based on the relationship between the fields of the tables. Keys play a major role when JOINs are used.`}
                />
                <QuestionCard
                  question={`8. What is normalization?`}
                  answer={`Normalization is the process of minimizing redundancy and dependency by organizing fields and table of a database. The main aim of Normalization is to add, delete or modify field that can be made in a single table.`}
                />

                <QuestionCard
                  question={`9. What is Denormalization.`}
                  answer={`DeNormalization is a technique used to access the data from higher to lower normal forms of database. It is also process of introducing redundancy into a table by incorporating data from the related tables.`}
                />
                <QuestionCard
                  question={`10. What is a View?`}
                  answer={`A view is a virtual table which consists of a subset of data contained in a table. Views are not virtually present, and it takes less space to store. View can have data of one or more tables combined, and it is depending on the relationship.`}
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
            <FbLikeShare />{" "}
            <h4 className="mb-3 mt-4" style={{ color: "#072C71" }}>
              Other Learning Resources
            </h4>
            <RoadMapCard
              imgsource="sql_tech.jpeg"
              title="SQL Interview Questions "
              source="(javatpoint)"
              tag1="sql"
              tag2="Interview Questions"
              link="https://www.javatpoint.com/sql-interview-questions"
            />
            <RoadMapCard
              imgsource="sql_tech.jpeg"
              title="50+ Top SQL Interview Questions & Answers in 2020"
              source="(hackr.io)"
              tag1="sql"
              tag2="Interview Questions"
              link="https://hackr.io/blog/top-sql-interview-questions"
            />
            <RoadMapCard
              imgsource="sql_tech.jpeg"
              title="SQL Interview Questions"
              source="(geeksforgeeks)"
              tag1="sql"
              tag2="Interview Questions"
              link="https://www.geeksforgeeks.org/sql-interview-questions/"
            />
            <RoadMapCard
              imgsource="sql_tech.jpeg"
              title="Top 90 SQL Interview Questions and Answers (LATEST)"
              source="(softwaretestinghelp)"
              tag1="sql"
              tag2="Interview Questions"
              link="https://www.softwaretestinghelp.com/50-popular-sql-interview-questions-for-testers/"
            />
            <RoadMapCard
              imgsource="sql_tech.jpeg"
              title="Top 90 SQL Interview Questions And Answers "
              source="(mindmajix)"
              tag1="sql"
              tag2="Interview Questions"
              link="https://mindmajix.com/sql-interview-questions"
            />


            <LearningSideSection language="sql" />
            <RightSideSection />
            <Technologies />
          </div>
        </div>
      </>
    );
  }
}

export default SQLInterviewQuestions;
