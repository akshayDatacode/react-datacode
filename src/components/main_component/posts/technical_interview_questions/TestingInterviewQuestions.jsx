import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import RightSideSection from "../../../right_section/RightSideSection";
import RecommendPost from "../../../right_section/RecommendPost";
import { Link } from "react-router-dom";

class TestingInterviewQuestions extends Component {
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
              <div className="card bg-warning">
                <div className="card-body">
                  <h1 className="card-title text-light display-5 ">
                    Testing Interview Question
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
                question={`1. What is Software Testing?
`}
                answer={`According to ANSI/IEEE 1059 standard – A process of analyzing a software item to detect the differences between existing and required conditions (i.e., defects) and to evaluate the features of the software item.`}
              />
              <QuestionCard
                question={`2. What are Quality Assurance and Quality Control?   
`}
                answer={`Quality Assurance: Quality Assurance involves in process-oriented activities. It ensures the prevention of defects in the process used to make Software Application. So the defects don’t arise when the Software Application is being developed.
        Quality Control: Quality Control involves in product-oriented activities. It executes the program or code to identify the defects in the Software Application.`}
              />
              <QuestionCard
                question={`3. What is Verification in software testing?
`}
                answer={`Verification is the process, to ensure that whether we are building the product right i.e., to verify the requirements which we have and to verify whether we are developing the product accordingly or not. Activities involved here are Inspections, Reviews, Walk-throughs.`}
              />
              <QuestionCard
                question={`4. What is Validation in software testing?
`}
                answer={`Validation is the process, whether we are building the right product i.e., to validate the product which we have developed is right or not. Activities involved in this is Testing the software application`}
              />
              <QuestionCard
                question={`5. What is Static Testing?
`}
                answer={`Static Testing involves in reviewing the documents to identify the defects in the early stages of SDLC.

        `}
              />
              <QuestionCard
                question={`6. What is Dynamic Testing?
`}
                answer={`Dynamic testing involves in the execution of code. It validates the output with the expected outcome.

        `}
              />
              <QuestionCard
                question={`7. What is White Box Testing?
`}
                answer={`White Box Testing is also called as Glass Box, Clear Box, and Structural Testing. It is based on applications internal code structure. In white-box testing, an internal perspective of the system, as well as programming skills, are used to design test cases. This testing usually was done at the unit level.`}
              />
              <QuestionCard
                question={`8. What is Black Box Testing?
`}
                answer={`Black Box Testing is a software testing method in which testers evaluate the functionality of the software under test without looking at the internal code structure. This can be applied to every level of software testing such as Unit, Integration, System and Acceptance Testing.`}
              />
              <QuestionCard
                question={`9. What is Grey Box Testing?
`}
                answer={`Grey box is the combination of both White Box and Black Box Testing. The tester who works on this type of testing needs to have access to design documents. This helps to create better test cases in this process.
        `}
              />
              <QuestionCard
                question={`10. What is Positive and Negative Testing?
`}
                answer={`Positive Testing: It is to determine what system supposed to do. It helps to check whether the application is justifying the requirements or not.

        Negative Testing: It is to determine what system not supposed to do. It helps to find the defects from the software.

        `}
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

export default TestingInterviewQuestions;
