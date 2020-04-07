import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import RightSideSection from "../../../right_section/RightSideSection";
import RecommendPost from "../../../right_section/RecommendPost";
import { Link } from "react-router-dom";

class DataStructureInterviewQuestions extends Component {
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
              <div className="card bg-dark">
                <div className="card-body">
                  <h1 className="card-title text-light display-5 ">
                    DataStructure Interview Question
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
                question={`1) What is Data Structure? Explain.`}
                answer={`The data structure is a way that specifies how to organize and manipulate the data. It also defines the relationship between them. Some examples of Data Structures are arrays, Linked List, Stack, Queue, etc. Data Structures are the central part of many computer science algorithms as they enable the programmers to handle the data in an efficient way

`}
              />
              <QuestionCard
                question={`2) Describe the types of Data Structures?`}
                answer={`Data Structures are mainly classified into two types:

Linear Data Structure: A data structure is called linear if all of its elements are arranged in the sequential order. In linear data structures, the elements are stored in a non-hierarchical way where each item has the successors and predecessors except the first and last element.

Non-Linear Data Structure: The Non-linear data structure does not form a sequence i.e. each item or element is connected with two or more other items in a non-linear arrangement. The data elements are not arranged in the sequential structure.

`}
              />
              <QuestionCard
                question={`3) List the area of applications of Data Structure.`}
                answer={`Data structures are applied extensively in the following areas of computer science:

Compiler Design,
Operating System,
Database Management System,
Statistical analysis package,
Numerical Analysis,
Graphics,
Artificial Intelligence,
Simulation
`}
              />
              <QuestionCard
                question={`4) What is the difference between file structure and storage structure?`}
                answer={`Difference between file structure and storage structure:

The main difference between file structure and storage structure is based on memory area that is being accessed.

Storage structure: It is the representation of the data structure in the computer memory.

File structure: It is the representation of the storage structure in the auxiliary memory`}
              />
              <QuestionCard
                question={`5) List the data structures which are used in RDBMS, Network Data Modal, and Hierarchical Data Model.`}
                answer={`RDBMS uses Array data structure
Network data model uses Graph
Hierarchal data model uses Trees`}
              />
              <QuestionCard
                question={`6) What are the operations that can be performed on a stack?`}
                answer={`Push Operations
Pop Operations
Peek Operations`}
              />
              <QuestionCard
                question={`7) Write the stack overflow condition.`}
                answer={`Overflow occurs when top = Maxsize -1`}
              />
              <QuestionCard
                question={`8) What is the difference between PUSH and POP?`}
                answer={`PUSH and POP operations specify how data is stored and retrieved in a stack.

PUSH: PUSH specifies that data is being "inserted" into the stack.

POP: POP specifies data retrieval. It means that data is being deleted from the stack.`}
              />
              <QuestionCard
                question={`9) Write the steps involved in the insertion and deletion of an element in the stack.`}
                answer={`Push:

Increment the variable top so that it can refer to the next memory allocation
Copy the item to the at the array index value equal to the top
Repeat step 1 and 2 until stack overflows

Pop:

Store the topmost element into the an another variable
Decrement the value of the top
Return the topmost element`}
              />
              <QuestionCard
                question={`10) What is a postfix expression?`}
                answer={`An expression in which operators follow the operands is known as postfix expression. The main benefit of this form is that there is no need to group sub-expressions in parentheses or to consider operator precedence.
The expression "a + b" will be represented as "ab+" in postfix notation.`}
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

export default DataStructureInterviewQuestions;
