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

class TestingInterviewQuestions extends Component {
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
              Find the Best Testing Interview Questions
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
              imgsource="ds_tech.jpeg"
              title="Top 50 Manual Testing Interview Questions and Answers"
              source="(edureka)"
              tag1="Testing"
              tag2=" Interview Questions"
              link="https://www.edureka.co/blog/interview-questions/manual-testing-interview-questions/"
            />
            <RoadMapCard
              imgsource="ds_tech.jpeg"
              title="Top 25 Functional Testing Interview Question and Answers"
              source="(softwaretestinghelp)"
              tag1="Testing"
              tag2=" Interview Questions"
              link="https://www.softwaretestinghelp.com/functional-testing-interview-questions/"
            />
            <RoadMapCard
              imgsource="ds_tech.jpeg"
              title="Top 200 Software Testing Interview Questions"
              source="(softwaretestinghelp)"
              tag1="Testing"
              tag2=" Interview Questions"
              link="https://www.softwaretestinghelp.com/software-testing-interview-questions/"
            />
            <RoadMapCard
              imgsource="ds_tech.jpeg"
              title="40 Top Manual Testing Interview Questions & Answers "
              source="(hackr.io)"
              tag1="Testing"
              tag2=" Interview Questions"
              link="https://hackr.io/blog/manual-testing-interview-questions"
            />
            <RoadMapCard
              imgsource="ds_tech.jpeg"
              title="Manual Testing Interview Question"
              source="(techbeamers)"
              tag1="Testing"
              tag2=" Interview Questions"
              link="https://www.techbeamers.com/manual-testing-interview-questions-experienced-qa/"
            />
            <RoadMapCard
              imgsource="ds_tech.jpeg"
              title="100+ Manual Testing Interview Questions"
              source="(artoftesting)"
              tag1="Testing"
              tag2=" Interview Questions"
              link="https://artoftesting.com/manual-testing-interview-questions"
            />

            <RightSideSection />
            <Technologies />
          </div>
        </div>
      </>
    );
  }
}

export default TestingInterviewQuestions;
