import React, { Component } from "react";
import HeaderCard from "../../../HeaderCard";
import { Link } from "react-router-dom";
import ScoreCard from "../scoreCard";
import Quize from "../quize";
import RightSideSection from "../../../../right_section/RightSideSection";
import RecommendPost from "../../../../right_section/RecommendPost";
import MCQCardCarousel from "../MCQCardCarousel";

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
        <HeaderCard title="DBMS MCQs Set 1" />

        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="col-fluid ">
                <Link to="/home" className="badge badge-primary mr-1">
                  Home >{" "}
                </Link>
                <Link to="/index_mcqs" className="badge badge-warning mr-1">
                  Programming MCQs >{" "}
                </Link>
                <Link
                  to="/index_dbms_mcqs"
                  className="badge badge-success mr-1"
                >
                  DBMS MCQs >
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
            <div className="col-md-4">
              <RightSideSection />
              <h5 className="mb-3">Recommended for you</h5>
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
                imgsource="datacodelogo.jpeg"
                RecPostHading="Programminig Quize Test"
                link="/index_quize_tests"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DBMSMCQ1;
