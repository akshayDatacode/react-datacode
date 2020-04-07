import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import RightSideSection from "../../../right_section/RightSideSection";
import RecommendPost from "../../../right_section/RecommendPost";
import { Link } from "react-router-dom";
class CInterviewQuestions extends Component {
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
                    C Programming Interview Question
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-1"></div>
            <div className="col-md-7">
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
                question={`Q #1) What are the key features in the C programming language?

             `}
                answer={`Features are as follows:

             Portability: It is a platform-independent language.
             Modularity: Possibility to break down large programs into small modules.
             Flexibility: The possibility of a programmer to control the language.
             Speed: C comes with support for system programming and hence it compiles and executes with high speed when compared with other high-level languages.
             Extensibility: Possibility to add new features by the programmer.`}
              />
              <QuestionCard
                question={`Q #2) What are the basic data types associated with C?

             `}
                answer={`Int – Represent the number (integer)
             Float – Number with a fraction part.
             Double – Double-precision floating-point value
             Char – Single character
             Void – Special purpose type without any value.`}
              />
              <QuestionCard
                question={`Q #3) What is the description for syntax errors?

             `}
                answer={`Answer: The mistakes/errors that occur while creating a program are called syntax errors. Misspelled commands or incorrect case commands, an incorrect number of parameters in calling method /function, data type mismatches can be identified as common examples for syntax errors.

             `}
              />
              <QuestionCard
                question={`Q #4) What is the process to create increment and decrement statement in C?

             `}
                answer={`There are two possible methods to perform this task.

             Use increment (++) and decrement (-) operator.
             Example When x=4, x++ returns 5 and x- returns 3.
             
             Use conventional + or – sign.
             Example When x=4, use x+1 to get 5 and x-1 to get 3.`}
              />
              <QuestionCard
                question={`Q #5) What are reserved words with a programming language?

             `}
                answer={`The words that are a part of the standard C language library are called reserved words. Those reserved words have special meaning and it is not possible to use them for any activity other than its intended functionality.

             Example: void, return int.
             
             `}
              />
              <QuestionCard
                question={`Q #6) What is the explanation for the dangling pointer in C?

             `}
                answer={`When there is a pointer pointing to a memory address of any variable, but after some time the variable was deleted from the memory location while keeping the pointer pointing to that location is known as a dangling pointer in C.

             `}
              />
              <QuestionCard
                question={`Q #7) Describe static function with its usage?

             `}
                answer={`Answer: A function, which has a function definition prefixed with a static keyword is defined as a static function. The static function should be called within the same source code.

             `}
              />
              <QuestionCard
                question={`Q #8) What is the difference between abs() and fabs() functions?

             `}
                answer={`Answer: Both functions are to retrieve absolute value. abs() is for integer values and fabs() is for floating type numbers. Prototype for abs() is under the library file < stdlib.h > and fabs() is under < math.h >.

             `}
              />
              <QuestionCard
                question={`Q #9) Describe Wild Pointers in C?

             `}
                answer={`Answer: Uninitialized pointers in the C code are known as Wild Pointers. They point to some arbitrary memory location and can cause bad program behavior or program crash.

             `}
              />
              <QuestionCard
                question={`Q #10) What is the difference between ++a and a++?

             `}
                answer={`Answer: ‘++a”  is called prefixed increment and the increment will happen first on a variable. ‘a++' is called postfix increment and the increment happens after the value of a variable used for the operations.

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

export default CInterviewQuestions;
