import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import RightSideSection from "../../../right_section/RightSideSection";
class DBMSInterviewQuestions extends Component {
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
                  <h1 className="card-title text-light display-3 ">
                    DBMS Interview Question
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-1"></div>
            <div className="col-md-8">
              <QuestionCard
                question="What is Interview Questions"
                answer="The answer of each question is came from interview question"
              />
              <QuestionCard
                question="What is Interview Questions"
                answer="The answer of each question is came from interview question"
              />
              <QuestionCard
                question="What is Interview Questions"
                answer="The answer of each question is came from interview question"
              />
              <QuestionCard
                question="What is Interview Questions"
                answer="The answer of each question is came from interview question"
              />
              <QuestionCard
                question="What is Interview Questions"
                answer="The answer of each question is came from interview question"
              />
              <QuestionCard
                question="What is Interview Questions"
                answer="The answer of each question is came from interview question"
              />
              <QuestionCard
                question="What is Interview Questions"
                answer="The answer of each question is came from interview question"
              />
              <QuestionCard
                question="What is Interview Questions"
                answer="The answer of each question is came from interview question"
              />
            </div>
            <div className="col-md-3">
              <RightSideSection />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DBMSInterviewQuestions;
