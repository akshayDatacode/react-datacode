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

class JSInterviewQuestions extends Component {
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
              Find the Best JavaScript Interview Questions
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
                  question={`1. What is JavaScript?

                `}
                  answer={`JavaScript is a client-side as well as server side scripting language that can be inserted into HTML pages and is understood by web browsers. JavaScript is also an Object based Programming language

                  `}
                />
                <QuestionCard
                  question={`2. Enumerate the differences between Java and JavaScript?

                `}
                  answer={`Java is a complete programming language. In contrast, JavaScript is a coded program that can be introduced to HTML pages. These two languages are not at all inter-dependent and are designed for the different intent. Java is an object - oriented programming (OOPS) or structured programming language like C++ or C whereas JavaScript is a client-side scripting language.

                `}
                />
                <QuestionCard
                  question={`3. What are JavaScript Data Types?

                `}
                  answer={`Following are the JavaScript Data types:

                Number
                String
                Boolean
                Object
                Undefined`}
                />
                <QuestionCard
                  question={`4. What is the use of isNaN function?

                `}
                  answer={`isNan function returns true if the argument is not a number otherwise it is false.

                `}
                />
                <QuestionCard
                  question={`5. Between JavaScript and an ASP script, which is faster?

                `}
                  answer={`JavaScript is faster. JavaScript is a client-side language and thus it does not need the assistance of the web server to execute. On the other hand, ASP is a server-side language and hence is always slower than JavaScript. Javascript now is also a server side language (nodejs).

                `}
                />
                <QuestionCard
                  question={`6. What is negative infinity?

                `}
                  answer={`Negative Infinity is a number in JavaScript which can be derived by dividing negative number by zero.

                `}
                />
                <QuestionCard
                  question={`7. Is it possible to break JavaScript Code into several lines?

                `}
                  answer={`Breaking within a string statement can be done by the use of a backslash, '\', at the end of the first line
                And if you change to a new line when not within a string statement, then javaScript ignores break in line.


                
                `}
                />
                <QuestionCard
                  question={`8. Which company developed JavaScript?

                `}
                  answer={`Netscape is the software company who developed JavaScript.

                `}
                />
                <QuestionCard
                  question={`9. What are undeclared and undefined variables?

                `}
                  answer={`Undeclared variables are those that do not exist in a program and are not declared. If the program tries to read the value of an undeclared variable, then a runtime error is encountered.

                Undefined variables are those that are declared in the program but have not been given any value. If the program tries to read the value of an undefined variable, an undefined value is returned.

`}
                />
                <QuestionCard
                  question={`10. What is a prompt box?

                `}
                  answer={`A prompt box is a box which allows the user to enter input by providing a text box. Label and box will be provided to enter the text or number.

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
              imgsource="js_tech.jpeg"
              title="Top 50 JavaScript Interview Questions and Answers for 2020"
              source="(edureka)"
              tag1="js"
              tag2="Interview Questions"
              link="https://www.edureka.co/blog/interview-questions/javascript-interview-questions/"
            />
            <RoadMapCard
              imgsource="js_tech.jpeg"
              title="Top 50 JavaScript Interview Questions & Answers"
              source="(hackr.io)"
              tag1="javaScript"
              tag2="Interview Questions"
              link="https://hackr.io/blog/javascript-interview-questions"
            />
            <RoadMapCard
              imgsource="js_tech.jpeg"
              title="37 Essential JavaScript Interview Questions and Answers"
              source="(toptal)"
              tag1="js"
              tag2="Interview Questions"
              link="https://www.toptal.com/javascript/interview-questions"
            />
            <RoadMapCard
              imgsource="js_tech.jpeg"
              title="JavaScript Interview Questions"
              source="(javatpoint)"
              tag1="javaScript"
              tag2="Interview Questions"
              link="https://www.javatpoint.com/javascript-interview-questions"
            />
            <RoadMapCard
              imgsource="js_tech.jpeg"
              title="70 JavaScript Interview Questions"
              source="(dev.to)"
              tag1="js"
              tag2="Interview Questions"
              link="https://dev.to/macmacky/70-javascript-interview-questions-5gfi"
            />
            <RoadMapCard
              imgsource="js_tech.jpeg"
              title="Javascript Interview Questions "
              source="(tutorialspoint)"
              tag1="javaScript"
              tag2="Interview Questions"
              link="https://www.tutorialspoint.com/javascript/javascript_interview_questions.htm"
            />

            <LearningSideSection language="js" />
            <RightSideSection />
            <Technologies />
          </div>
        </div>
      </>
    );
  }
}

export default JSInterviewQuestions;
