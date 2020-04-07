import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import RightSideSection from "../../../right_section/RightSideSection";
import RecommendPost from "../../../right_section/RecommendPost";
import { Link } from "react-router-dom";

class RDBMSInterviewQuestions extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="container-fluids">
          <div className="row">
            <div className="col">
              <div className="card bg-primary">
                <div className="card-body">
                  <h1 className="card-title text-light display-5 ">
                    RDBMS Interview Question
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-md-1"></div>
            <div className="col-md-7 ">
              <Link to="/home" className="badge badge-primary mr-1">
                Home >
              </Link>
              <Link
                to="/index_interview_questioins"
                className="badge badge-warning mr-1"
              >
                Interview Questions >
              </Link>
              <QuestionCard
                question={`1. What are the different features of an RDBMS?
`}
                answer={`Name. Every relation in a relational database should have a name which is unique among all other relations.
        Attributes. Each column in a relation is called an attribute.
        Tuples. Each and every row in a relation is called a tuple. A tuple defines a collection of attribute values.`}
              />
              <QuestionCard
                question={`2. Explain the E-R Model?
`}
                answer={`E-R model is an Entity-Relationship model. E-R model is based on a real-world which is made up of entities and related objects. Entities are illustrated in a database by a set of attributes.`}
              />
              <QuestionCard
                question={`3. Define the object-oriented model?
`}
                answer={`The object-oriented model is based on collections of objects. An object accommodates values which are stored in instance variables inside the object. Objects having an identical type of values and the exact same methods are grouped together into classes.

        `}
              />
              <QuestionCard
                question={`4. Explain three levels of data abstraction?
`}
                answer={`1.Physical level: This is the lowest level of abstraction and it describes how data is stored.

        2.Logical level: The next level of abstraction is logical, it describes what type of data is stored in a database and what is the relationship between these data.
        
        3.View level: The highest level of abstraction and it describes the only entire database.

`}
              />
              <QuestionCard
                question={`5. What are different Codd’s 12 rules for Relational Database?`}
                answer={`Codd’s 12 rules are a set of thirteen rules (numbered zero to twelve) proposed by Edgar F. Codd.
        Codd’s rules: –
        Rule 0: The system has to qualify as Relational, as a Database, and also as a Management System.
        Rule 1: The information rule: Each and every information in the database is to be represented uniquely, mainly name values in column positions within a different row of a table.
        Rule 2: The guaranteed access rule: All data must be ingressive. It says that every scalar value in the database must be correctly/logically addressable.
        Rule 3: Systematic treatment of null values: The DBMS must allow each tuple to remain null.
        Rule 4: Active online catalog (database’s structure) based on the relational model: The system must support an online, relational etc. structure which is ingressive to allowed users by means of their regular query.
        Rule 5: The comprehensive data sublanguage: The system has to assist a minimum of one relational language that:
        1.Has a linear syntax
        2.Which can be used as both interactively and within application programs,
        3.It supports data definition operations(DDL), data manipulation operations(DML), security and integrity constraints, and transaction management operations (begin, commit, and rollback).
        Rule 6: The view updating rule: All views that theoretically improve must be upgradable by the system.
        Rule 7: High-level insert, update, and delete: The system must support insert, update, and delete operators.
        Rule 8: Physical data independence: Modify the physical level (how the data is stored, using arrays or linked lists etc.) must not require a modification to an application.
        Rule 9: Logical data independence: Modify the logical level (tables, columns, rows etc.) must not require a modification to an application.
        Rule 10: Integrity independence: Integrity constraints must be identified individually from application programs and stored in the catalog.
        Rule 11: Distribution independence: The distribution of portions of a database to different locations should not be visible to users of the database.
        Rule 12: The nonsubversion rule: If the system provides a low-level (i.e. records) interface, then that interface can’t be used to subvert the system.`}
              />
              <QuestionCard
                question={`6.What is normalization? and what explains different normalization forms?`}
                answer={`Database normalization is a process of organizing data to minimize data redundancy. Which in turn ensures data consistency. There are many problems associated with data redundancy such as disk space wastage, data inconsistency, DML (Data Manipulation Language) queries become slow. There are different normalisation forms: – 1NF, 2NF, 3NF, BCNF, 4NF,5NF, ONF, DKNF.
        1.1NF: – The data in each column should be atomic number multiple values separated by a comma. The table does not contain any repeating column groups. Identity each record uniquely using the primary key.
        2.2NF: – The table should match all the conditions of 1NF and move redundant data to a separate table. Moreover, it creates a relationship between these tables using foreign keys.
        3.3NF: – for a 3NF table should fulfill all the conditions of 1NF and 2NF. 3NF doesn’t contain attributes which are partially dependent upon primary key.`}
              />
              <QuestionCard
                question={`7. Define primary key, foreign key, candidate key, super key?`}
                answer={`Primary key: The primary key is the key that doesn’t allow duplicate values and null values. A primary key can be defined at column level or table level. Only one primary key per table is allowed.
        Foreign key: foreign key allows the values present in the referenced column only. It allows duplicate or null values. It can be defined as a column level or table level. It can reference a column of a unique/primary key.
        Candidate Key: A Candidate key is minimum super key, there is no proper subgroup of Candidate key attributes can be a super key.
        Super Key: A superkey is a set of attributes of a relation schema on which all attributes of the schema are partially dependent. No two rows can have the same value of super key attributes.`}
              />
              <QuestionCard
                question={`8. What is a different type of indexes?`}
                answer={`Indexes are: –
        Clustered index: – It is the index at which data is physically stored in the disk. Therefore, only one clustered index can be created to a database table.
        Non-clustered index: – It does not define physical data but it defines a logical ordering. Typically, B-Tree or B+ trees are created for this purpose.`}
              />
              <QuestionCard
                question={`9. What are the advantages of RDBMS?`}
                answer={`
        •Controlling Redundancy.
        •Integrity can be enforced.
        •Inconsistency can be avoided.
        •Data can be shared.
        •Standard can be enforced.`}
              />
              <QuestionCard
                question={`10. Name some subsystems of RDBMS?`}
                answer={`Input-output, Security, Language Processing, Storage Management, Logging and Recovery, Distribution Control, Transaction Control, Memory Management.`}
              />
            </div>
            <div className="col-md-4 mt-5">
              <h5 className="mb-4">Other Learning Resources</h5>
              <RecommendPost
                imgsource="indexcover1.jpeg"
                RecPostHading="Interview Heading"
              />
              <RecommendPost
                imgsource="indexcover1.jpeg"
                RecPostHading="Interview Heading"
              />
              <RecommendPost
                imgsource="indexcover1.jpeg"
                RecPostHading="Interview Heading"
              />
              <RecommendPost
                imgsource="indexcover1.jpeg"
                RecPostHading="Interview Heading"
              />
              <RecommendPost
                imgsource="indexcover1.jpeg"
                RecPostHading="Interview Heading"
              />
              <RecommendPost
                imgsource="indexcover1.jpeg"
                RecPostHading="Interview Heading"
              />

              <RightSideSection />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RDBMSInterviewQuestions;
