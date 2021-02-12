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

class SDLCInterviewQuestions extends Component {
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
              Find the Best SDLC Interview Questions
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
                  question={`Q1. What is SDLC and what is it used for?
`}
                  answer={`SDLC (Software Development Life Cycle) is the process of design and development of a product or service to be delivered to the customer that is being followed for the software or systems projects in the Information Technology or Hardware Organizations. SDLC framework is useful in delivering the products or customers which ensures high quality and efficient.`}
                />
                <QuestionCard
                  question={`Q2. What are the different types of SDLC methodologies?
`}
                  answer={`This is the basic SDLC Interview Questions asked in an interview. The different models of SDLC are –

1. Waterfall model
2. Agile model
3. Iterative or incremental model
4. Spiral model
5. RAD – Rapid Application Development model
6. V-Shaped model
7. Evolutionary prototype model
`}
                />
                <QuestionCard
                  question={`Q3. What are the different phases of the Waterfall model?
`}
                  answer={`The different phases or steps involved in the waterfall model are Requirements, Design, Execution, Testing, and Release. This model is of sequential form and moves downward without any deviations. Every phase will start only after the completion of the previous one. This process was being followed for a long time and a traditional approach and has been the best one since agile is adopted recently. This type of model does not involve any kind of frequent requirement changes and needs follows clear documentation from the beginning to the end. The phases and activities are well planned.

`}
                />
                <QuestionCard
                  question={`Q4. What is CMM Maturity Level and what is its importance?
`}
                  answer={`The CMM (Capability Maturity Model) is a standard or benchmark which is used in the process of the development model in an organization to study or know the maturity of the processes being followed in an organization. The CMMI level is used to determine the quality or maturity of a software development process in an organization i.e. either software or hardware. It will be used to assess the organization on a scale of five different levels and the processes being followed in the organization. The five different levels are Initial, Repeatable, Defined, Capable (Managed) and Efficient (Optimizing).`}
                />
                <QuestionCard
                  question={`Q5. What are the drawbacks of Waterfall model?
`}
                  answer={`The drawbacks of the waterfall model are – It will not be ideal for larger and complex projects when the requirements are not clearly documented and not clear. It is not easier and also not possible to go back to any stage or phase during the Software Development Process. No software product or service will be delivered until the last stages or phases of the Software Development Life Cycle which will be a form of risk. The process of testing can also be completed only after the completion of the Development phase and also cannot be carried out in parallel.`}
                />
                <QuestionCard
                  question={`Q6. Who are the different team members involved in the different phases of the Waterfall model?
`}
                  answer={`The different team members or key members involved in Waterfall model development process are Technical Manager, Developers, Senior Developers, Business analyst, Technical Lead or System Architect or Solutions Architect or Technical Architect in the Design Phase and the Developers, Senior Developers in the Coding phase. Testers or Analysts in the Testing Phase. Project Manager, Program Manager, and Maintenance Team will be in the Maintenance phase of the Software Development Life Cycle process. The team members involved in the different project phases also depends on the structure of the organization and the roles and responsibilities being followed or maintained by the particular organization.`}
                />
                <QuestionCard
                  question={`Q7. What are LLDs or HLDs in SDLC?
`}
                  answer={`The LLD (Low-Level Design) and HLD (High-level Design) are used to analyze and understand the project in a high level and low-level overview to different types of team members to the customers depending on the technical or business knowledge of the person. The Low-level Design is a detailed design implementation which will be helpful in the development process for the Developers whereas the High-Level Design will be given by Architects to proceed with the development process initially. This will be easier to know or look at a glance to understand about the project easily.`}
                />
                <QuestionCard
                  question={`Q8. What are the different phases in the Agile model?
`}
                  answer={`The different phases involved in the Agile model are Planning, Requirements, Analysis, Design, Coding, Unit Testing, System Integration Testing, Non-Functional Testing, and Acceptance Testing. The Agile model will be followed using any Agile boards such as Scrum or Kanban. There will be a number of Sprints to be followed and all the deliverables will be done in the form of Story Points.`}
                />
                <QuestionCard
                  question={`Q9. What are the advantages of the agile model?
`}
                  answer={`This is the advanced SDLC Interview Questions asked in an interview. The different advantages of following the Agile model in a Software Development Life Cycle process are as below:

It is easier and simple to understand and to use and implement.
It has simple and easier deliverables which are planned frequently based on Sprints which ensures frequent and high-quality deliverables.
It is very good for smaller and also larger or complex projects and ends up with high-quality project deliverables.`}
                />
                <QuestionCard
                  question={`Q10. What is a V-shaped model in SDLC?
`}
                  answer={`The V-shaped model is a type of extension model and the testing will be planned earlier. The different steps are given below:

Planning
Requirements
Architecture
Design
Implementation
Unit Testing
Integration Testing
System and Acceptance Testing
Maintenance`}
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
              imgsource="sdlc_tech.jpeg"
              title="Read Best SDLC Interview Questions in 2020"
              source="(online interview questions)"
              tag1="SDLC"
              tag2="Interview Questions"
              link="https://www.onlineinterviewquestions.com/sdlc-interview-questions/"
            />
            <RoadMapCard
              imgsource="sdlc_tech.jpeg"
              title="Software Engineering Interview Questions "
              source="(tutorialspoint)"
              tag1="SDLC"
              tag2="Interview Questions"
              link="https://www.tutorialspoint.com/software_engineering/pdf/software_engineering_interview_questions.pdf"
            />
            <RoadMapCard
              imgsource="sdlc_tech.jpeg"
              title="SDLC Interview Questions with Answers "
              source="(complex sql)"
              tag1="SDLC"
              tag2="Interview Questions"
              link="https://www.complexsql.com/sdlc-interview-questions/"
            />
            <RoadMapCard
              imgsource="sdlc_tech.jpeg"
              title="SDLC Interview Questions and Answers "
              source="(gcreddy)"
              tag1="SDLC"
              tag2="Interview Questions"
              link="https://www.gcreddy.com/2014/06/sdlc-interview-questions.html"
            />
            <RoadMapCard
              imgsource="sdlc_tech.jpeg"
              title="SDLC Interview Questions and Answers "
              source="(stechies)"
              tag1="SDLC"
              tag2="Interview Questions"
              link="https://www.stechies.com/sdlc-interview-questions/"
            />
            <RoadMapCard
              imgsource="sdlc_tech.jpeg"
              title="SDLC Interview Questions and Answers"
              source="(withoutbook)"
              tag1="SDLC"
              tag2="Interview Questions"
              link="http://www.withoutbook.com/Technology.php?tech=61&subject=SDLC%20Interview%20Questions%20and%20Answers"
            />

            <RightSideSection />
            <Technologies />
          </div>
        </div>
      </>
    );
  }
}

export default SDLCInterviewQuestions;
