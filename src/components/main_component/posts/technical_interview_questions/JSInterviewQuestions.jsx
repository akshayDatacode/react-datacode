import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import RecommendPost from "../../../right_section/RecommendPost";
import RightSideSection from "../../../right_section/RightSideSection";
class JSInterviewQuestions extends Component {
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
                  <h1 className="card-title text-dark display-5 ">
                    JavaScript Interview Question
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-1"></div>

            <div className="col-md-7">
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

export default JSInterviewQuestions;
