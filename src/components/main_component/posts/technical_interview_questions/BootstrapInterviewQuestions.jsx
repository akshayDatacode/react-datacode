import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import RightSideSection from "../../../right_section/RightSideSection";
import RecommendPost from "../../../right_section/RecommendPost";
import { Link } from "react-router-dom";
import RoadMapCard from "../../technologies/RoadMapCard";
import InterviewQuestionCardCarousel from "./InterviewQuestionCardCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FbLikeShare from "../../../FbLikeShare";
import { faHome, faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import LearningSideSection from "../../../right_section/learning_sidesection/LearningSideSection";
import Technologies from "../../../right_section/Technologies";

class BootstrapInterviewQuestions extends Component {
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
              Find the Best Bootstrap Interview Questions
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
                question={`Q #1) Define Bootstrap.

                `}
                answer={`Answer: Bootstrap is a front-end framework that is used for creating HTML, CSS, and JS web applications. Its layout is very responsive, fast and easy to use. It mostly focuses on building a mobile application with having design templates for creating UI like Dropdown, Forms, Buttons, Alerts Tab, etc.

                `}
              />
                   <QuestionCard
                question={`Q #2) Why Bootstrap is used for Mobile Web development?

                `}
                answer={`Answer: It is used for Mobile Web development because it has responsive designs and templates which are easy to use.

                `}
              />
                   <QuestionCard
                question={`Q #3) Explain the features of Bootstrap.

                `}
                answer={`Answer: Its features include:

                Open source for use
                Compatibility with all browsers.
                Responsive designs
                Easy to use and fast.
                `}
              />
                   <QuestionCard
                question={`Q #4) Define the key components of Bootstrap.

                `}
                answer={`Answer: Its components include:

                1. Scaffolding: It has the grid system, background, styles.
                2. JS Plugins: Contains JS and jQuery plugins.
                3. Customize: Can customize frameworks.
                4. CSS: Contains CSS files.`}
              />
                   <QuestionCard
                question={`Q #5) What do you understand by Bootstrap container?

                `}
                answer={`Answer: Bootstrap container behaves like a container where you can put HTML code and it is a part within the page where the content of the site can be placed to make it responsive and fast.

                `}
              />
                   <QuestionCard
                question={`Q #6) What do you mean by Bootstrap Classloader?

                `}
                answer={`Answer: Bootstrap class loader is a part of java and a main parental class of class loader.

                `}
              />
                   <QuestionCard
                question={`Q #7) How many types of layouts are there in Bootstrap?

                `}
                answer={`Answer: There are two types of layouts in Bootstrap.
                They are:

1. Fluid Layout
2. Fixed Layout

                `}
              />
                   <QuestionCard
                question={`Q #8) Define Fluid Layout.

                `}
                answer={`Answer: Fluid Layout is useful when you need to make an app that involves the full width of the screen i.e. Fluid Layout adjusts itself according to the browser size.

                `}
              />
                   <QuestionCard
                question={`Q #9) Define Fixed Layout.

                `}
                answer={`Answer: A fixed layout is responsive and easy to use but just like the fluid layout, it cannot adjust itself according to the browser size. The fixed layout should be 940 px in most cases.

                `}
              />
                   
              <QuestionCard
                question={`10) What is intent?
                `}
                answer={`It is a kind of message or information that is passed to the components. It is used to launch an activity, display a web page, send SMS, send email, etc. There are two types of intents in android:

                1. Implicit Intent
                2. Explicit Intent
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
                imgsource="bootstrap_tech.jpeg"
                title="50 Top Bootstrap Interview Questions [Updated] "
                source="(hackr.io)"
                tag1="bootstrap"
                tag2="Interview Questions"
                link="https://hackr.io/blog/bootstrap-interview-questions"
              />
              <RoadMapCard
                imgsource="bootstrap_tech.jpeg"
                title="Bootstrap - Interview Questions"
                source="(tutorialspoint)"
                tag1="bootstrap"
                tag2="Interview Questions"
                link="https://www.tutorialspoint.com/bootstrap/bootstrap_interview_questions.htm"
              />
              <RoadMapCard
                imgsource="bootstrap_tech.jpeg"
                title="Top 25 Bootstrap Interview Questions & Answers"
                source="(guru99)"
                tag1="bootstrap"
                tag2="Interview Questions"
                link="https://career.guru99.com/top-25-bootstrap-interview-questions/"
              />
              <RoadMapCard
                imgsource="bootstrap_tech.jpeg"
                title="Top 45 Bootstrap Interview Questions | Web Development "
                source="(edureka)"
                tag1="bootstrap"
                tag2="Interview Questions"
                link="https://www.edureka.co/blog/interview-questions/bootstrap-interview-questions/"
              />
              <RoadMapCard
                imgsource="bootstrap_tech.jpeg"
                title="Top 10+ Bootstrap 4 Interview Questions and Answers in 2020"
                source="(best interview question)"
                tag1="bootstrap"
                tag2="Interview Questions"
                link="https://www.bestinterviewquestion.com/bootstrap-4-interview-questions"
              />
              <RoadMapCard
                imgsource="bootstrap_tech.jpeg"
                title="20+ Bootstrap Interview Questions in 2020 "
                source="(online interview questions )"
                tag1="bootstrap"
                tag2="Interview Questions"
                link="https://www.onlineinterviewquestions.com/bootstrap-interview-questions-answers/"
              />


<LearningSideSection language="html" />
            <RightSideSection />
            <Technologies />
          </div>
        </div>
      </>
    );
  }
}

export default BootstrapInterviewQuestions;
