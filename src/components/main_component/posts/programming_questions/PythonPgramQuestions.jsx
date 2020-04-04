import React, { Component } from "react";
import RightSideSection from "../../../right_section/RightSideSection";
import ProgramCard from "./ProgramCard";
import RecommendPost from "../../../right_section/RecommendPost";
class PythonPgramQuestions extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container-fluids">
          <div className="row">
            <div className="col">
              <div className="card bg-success">
                <div className="card-body p-2">
                  <h1 className="card-title text-light display-5 ">
                    Python Programming Examples Question
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3 d-none d-sm-block">
              <ul class="list-group list-group-flush">
                <li className="list-group-item">Introduction</li>
                <li className="list-group-item">Data Type</li>
                <li className="list-group-item">Python</li>
                <li className="list-group-item">Python</li>
                <li className="list-group-item">Python</li>
                <li className="list-group-item">Python</li>
                <li className="list-group-item">Python</li>
                <li className="list-group-item">Python</li>
                <li className="list-group-item">Python</li>
                <li className="list-group-item">Python</li>
                <li className="list-group-item">Python</li>
                <li className="list-group-item">Python</li>
                <li className="list-group-item">Python</li>
              </ul>
            </div>
            <div className="col-md-6 mt-5">
              <ProgramCard
                link="https://www.geeksforgeeks.org/python-program-to-add-two-numbers/"
                heading="Python program to add two numbers"
              />
              <ProgramCard
                link="https://www.geeksforgeeks.org/python-program-for-factorial-of-a-number/"
                heading="Python Program for factorial of a number"
              />
              <ProgramCard
                link="https://www.geeksforgeeks.org/python-program-for-simple-interest/"
                heading="Python Program for simple interest"
              />
              <ProgramCard
                link="https://www.geeksforgeeks.org/python-program-for-compound-interest/"
                heading="Python Program for compound interest"
              />
            </div>
            <div className="col-md-3 mt-4">
              <RecommendPost
                imgsource="python_mcqs.jpeg"
                RecPostHading="Python MCQs Questions"
                link="/index_python_mcqs"
              />
              <RecommendPost
                imgsource="java_mcqs.jpeg"
                RecPostHading="Java MCQs Questions"
                link="/index_java_mcqs"
              />
              <RecommendPost
                imgsource="datacodelogo.jpeg"
                RecPostHading="Programminig Quize Test"
                link="/index_quize_tests"
              />
              <RightSideSection />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PythonPgramQuestions;
