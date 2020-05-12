import React, { Component } from "react";
import Quize from "../quize";
import ScoreCard from "../scoreCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCode, faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import RightSideSection from "../../../../right_section/RightSideSection";
import RecommendPost from "../../../../right_section/RecommendPost";
import MCQCardCarousel from "../MCQCardCarousel";
import LearningSideSection from "../../../../right_section/learning_sidesection/LearningSideSection";
import Technologies from "../../../../right_section/Technologies";
import FbLikeShare from "../../../FbLikeShare";

class DBMSMCQ1 extends Component {
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

        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="col-fluid mt-2 ml-2">
            <h2
              className="text-center mb-4 display-5"
              style={{ color: "#072C71" }}
            >
              DBMS Multiple choice Questions Set-1
            </h2>
            <Link
              to="/home"
              className="badge mr-1"
              style={{ backgroundColor: "#06CB6C" }}
            >
              <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" /> 
            </Link>
            <Link
              to="/index_mcqs"
              className="badge mr-1"
              style={{ backgroundColor: "#072C71" }}

            >
              <FontAwesomeIcon icon={faChalkboardTeacher} size="2x" color="#06CB6C" />

            </Link>
            <Link
              to="/index_dbms_mcqs"
              className="badge mr-1 text-white"
              style={{ backgroundColor: "#072C71" }}
            >
              <FontAwesomeIcon
                  icon={faCode}
                  size="1x"
                  color="#06CB6C"
                  className="mr-2"
                />
                back to Index
            </Link>
                <ScoreCard count={this.state.count} />
              </div>
              <div className="row">
                <div className="col">
                  <Quize
                    quizeNo="1"
                    question="Database __________ which is the logical design of the database, and the database _______ which is a snapshot of the data in the database at a given instant in time. "
                    correctAnswer="Schema, Instance"
                    v1="Instance, Schema"
                    v2="Relation, Schema"
                    v3="Relation, Domain"
                    v4="Schema, Instance "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="2"
                    question="The tuples of the relations can be of ________ order. "
                    correctAnswer="Any"
                    v1="Any"
                    v2="Same"
                    v3=" Sorted"
                    v4="Constant "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="3"
                    question="Which one of the following is a set of one or more attributes taken collectively to uniquely identify a record? "
                    correctAnswer="Super key"
                    v1="Candidate key"
                    v2="Sub key"
                    v3="Super key"
                    v4="Foreign key "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="4"
                    question="Which one of the following attribute can be taken as a primary key? "
                    correctAnswer="Id"
                    v1="Name"
                    v2="Street"
                    v3="Id"
                    v4="Department "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="5"
                    question="Student(ID, name, dept name, tot_cred)
              In this query which attributes form the primary key? "
                    correctAnswer="ID"
                    v1="Name"
                    v2="Dept"
                    v3="Tot_cred"
                    v4="ID "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="6"
                    question="The _______operation performs a set union of two “similarly structured” tables "
                    correctAnswer="Union"
                    v1="Union"
                    v2="Join"
                    v3="Product"
                    v4="Intersect "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="7"
                    question="SELECT name ____ instructor name, course id
              FROM instructor, teaches
              WHERE instructor.ID= teaches.ID;
              Which keyword must be used here to rename the field name? "
                    correctAnswer="As"
                    v1="From"
                    v2="Rename"
                    v3="As"
                    v4="Join "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="8"
                    question="SELECT * FROM employee WHERE dept_name='Comp Sci';
              In the SQL given above there is an error . Identify the error. "
                    correctAnswer="'Comp Sci'"
                    v1="Dept_name"
                    v2="Employee"
                    v3="'Comp Sci'"
                    v4=" From "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="9"
                    question=" In SQL the spaces at the end of the string are removed by _______ function. "
                    correctAnswer="Trim"
                    v1="Upper"
                    v2="String"
                    v3="Lower"
                    v4="Trim "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="10"
                    question="_____ operator is used for appending two strings. "
                    correctAnswer="||"
                    v1={`&`}
                    v2="%"
                    v3="||"
                    v4=" _"
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
            <div className="col-md-4 mt-md-5 mt-3">
            <LearningSideSection language="dbms" />
            <RightSideSection />
            <Technologies />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DBMSMCQ1;
