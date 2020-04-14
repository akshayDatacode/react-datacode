import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import RecommendPost from "../../../right_section/RecommendPost";
import RightSideSection from "../../../right_section/RightSideSection";
class PythonInterviewQuestions extends Component {
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
                    Python Interview Question
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-1"></div>

            <div className="col-md-7">
              <QuestionCard
                question={`1) What is Python? What are the benefits of using Python?`}
                answer={`Python is a programming language with objects, modules, threads, exceptions and automatic memory management. The benefits of pythons are that it is simple and easy, portable, extensible, built-in data structure and it is open source.`}
              />
              <QuestionCard
                question={`2) What is PEP 8?`}
                answer={`PEP 8 is a coding convention, a set of recommendation, about how to write your Python code more readable.`}
              />
              <QuestionCard
                question={`3) What is pickling and unpickling?
             `}
                answer={`Pickle module accepts any Python object and converts it into a string representation and dumps it into a file by using dump function, this process is called pickling. While the process of retrieving original Python objects from the stored string representation is called unpickling.`}
              />
              <QuestionCard
                question={`4) How memory is managed in Python?`}
                answer={`Python memory is managed by Python private heap space. All Python objects and data structures are located in a private heap. The programmer does not have an access to this private heap and interpreter takes care of this Python private heap.
             The allocation of Python heap space for Python objects is done by Python memory manager. The core API gives access to some tools for the programmer to code.
             Python also have an inbuilt garbage collector, which recycle all the unused memory and frees the memory and makes it available to the heap space.
             `}
              />
              <QuestionCard
                question={`5) What are the tools that help to find bugs or perform static analysis?
             `}
                answer={`PyChecker is a static analysis tool that detects the bugs in Python source code and warns about the style and complexity of the bug. Pylint is another tool that verifies whether the module meets the coding standard.
             `}
              />
              <QuestionCard
                question={`6) What are Python decorators?`}
                answer={`A Python decorator is a specific change that we make in Python syntax to alter functions easily.
             `}
              />
              <QuestionCard
                question={`7) What is the difference between list and tuple?
             `}
                answer={`The difference between list and tuple is that list is mutable while tuple is not. Tuple can be hashed for e.g as a key for dictionaries.
             `}
              />
              <QuestionCard
                question={`8) How are arguments passed by value or by reference?
             `}
                answer={`Everything in Python is an object and all variables hold references to the objects. The references values are according to the functions; as a result you cannot change the value of the references. However, you can change the objects if it is mutable.
             `}
              />
              <QuestionCard
                question={`9) What is Dict and List comprehensions are?
             `}
                answer={`They are syntax constructions to ease the creation of a Dictionary or List based on existing iterable.
             `}
              />
              <QuestionCard
                question={`10) What are the built-in type does python provides?
             `}
                answer={`There are mutable and Immutable types of Pythons built in types Mutable built-in types
             List
             Sets
             Dictionaries

             Immutable built-in types

             Strings
             Tuples
             Numbers
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

export default PythonInterviewQuestions;
