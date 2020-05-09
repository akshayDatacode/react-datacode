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

class PythonInterviewQuestions extends Component {
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
              Find the Best Python Interview Questions
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
                imgsource="python_tech.jpeg"
                title="Python Interview Questions and Answers (2020)"
                source="(interview bit)"
                tag1="interview"
                tag2="python"
                link="https://www.interviewbit.com/python-interview-questions/"
              />
               <RoadMapCard
                imgsource="python_tech.jpeg"
                title="Top 100 Python Interview Questions & Answers For 2020 ..."
                source="(edureka)"
                tag1="Python "
                tag2="Interview Questions"
                link="https://www.edureka.co/blog/interview-questions/python-interview-questions/"
              />
               <RoadMapCard
                imgsource="python_tech.jpeg"
                title="150+ Python Interview Questions and Answers for Freshers"
                source="(data-flair.training)"
                tag1="Interview"
                tag2=" Python"
                link="https://data-flair.training/blogs/top-python-interview-questions-answer/"
              />
               <RoadMapCard
                imgsource="python_tech.jpeg"
                title="Top 50+ Python Interview Questions "
                source="(javatpoint)"
                tag1=" Python"
                tag2="interview questions"
                link="https://www.javatpoint.com/python-interview-questions"
              />
               <RoadMapCard
                imgsource="python_tech.jpeg"
                title="53 Python Interview Questions and Answers"
                source="(towards datascience)"
                tag1="interview"
                tag2="python"
                link="https://towardsdatascience.com/53-python-interview-questions-and-answers-91fa311eec3f"
              />
                 <RoadMapCard
                imgsource="python_tech.jpeg"
                title="50 Top Python Interview Questions & Answers "
                source="(hackr.io)"
                tag1=" latest"
                tag2="Questions"
                link="https://hackr.io/blog/python-interview-questions"
              />
             
             <LearningSideSection language="python" />
            <RightSideSection />
            <Technologies />
          </div>
        </div>
      </>
    );
  }
}

export default PythonInterviewQuestions;
