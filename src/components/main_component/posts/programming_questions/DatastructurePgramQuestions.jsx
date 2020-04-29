import React, { Component } from "react";
import RightSideSection from "../../../right_section/RightSideSection";
import ProgramCard from "./ProgramCard";
import RecommendPost from "../../../right_section/RecommendPost";
class DatastructurePgramQuestions extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="container-fluids bg-light">
          <div className="row">
            <div className="col bg-light">
              <div className="card">
                <div className="card-body p-2">
                  <h1 className="card-title display-5">
                    Datastructure Programming Examples Question
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3 d-none d-sm-block bg-light mt-4">
              <ul class="list-group list-group-flush">
                <li className="list-group-item">Java Introduction</li>
                <li className="list-group-item">Variable</li>
                <li className="list-group-item">Keywords and Identifiers</li>
                <li className="list-group-item">Data Type</li>
                <li className="list-group-item">Python Flow Control</li>
                <li className="list-group-item">If statement</li>
                <li className="list-group-item">If-Else</li>
                <li className="list-group-item">Nested if</li>
                <li className="list-group-item">For Loop</li>
                <li className="list-group-item">While Loop</li>
                <li className="list-group-item">Break</li>
                <li className="list-group-item">Continue</li>
                <li className="list-group-item">Pass</li>
                <li className="list-group-item">Python Function</li>
                <li className="list-group-item">Python Recursion</li>
                <li className="list-group-item">Python OOPs</li>
                <li className="list-group-item">Class & Object</li>
                <li className="list-group-item">Python Constructors</li>
              </ul>
            </div>
            <div className="col-md-5 mt-5 bg-light">
              <div>
                <h5>Python Programming examples on Characters</h5>
                <ProgramCard
                  link="http://www.techiedelight.com/sort-binary-array-linear-time/"
                  heading="Sort binary array in linear time"
                />
                <ProgramCard
                  link="http://www.techiedelight.com/find-duplicate-element-limited-range-array/"
                  heading="Find a duplicate element in a limited range array"
                />
                <ProgramCard
                  link="http://www.techiedelight.com/find-largest-sub-array-formed-by-consecutive-integers/"
                  heading="Find largest sub-array formed by consecutive integers"
                />
                <ProgramCard
                  link="http://www.techiedelight.com/find-maximum-length-sub-array-having-given-sum/"
                  heading="Find maximum length sub-array having given sum"
                />
                <ProgramCard
                  link="http://www.techiedelight.com/find-maximum-product-two-integers-array/"
                  heading="Find maximum product of two integers in an array"
                />
                <ProgramCard link="" heading="" />
                <ProgramCard link="" heading="" />
              </div>

              <div>
                <h5>Python examples on simple mathematical problems</h5>
                <ProgramCard link="" heading="" />
                <ProgramCard link="" heading="" />
                <ProgramCard link="" heading="" />
                <ProgramCard link="" heading="" />
                <ProgramCard link="" heading="" />
                <ProgramCard link="" heading="" />
              </div>

              <div>
                <h5>Advanced Python Mathematical Programs</h5>
                <ProgramCard link="" heading="" />
                <ProgramCard link="" heading="" />
                <ProgramCard link="" heading="" />
                <ProgramCard link="" heading="" />
              </div>

              <div>
                <h5>Python Programming Examples on Lists</h5>
                <ProgramCard link="" heading="" />
                <ProgramCard link="" heading="" />
                <ProgramCard link="" heading="" />
                <ProgramCard link="" heading="" />
                <ProgramCard link="" heading="" />
                <ProgramCard link="" heading="" />
                <ProgramCard link="" heading="" />
                <ProgramCard link="" heading="" />
                <ProgramCard link="" heading="" />
                <ProgramCard link="" heading="" />
                <ProgramCard link="" heading="" />
              </div>
            </div>
            <div className="col-md-4 mt-4 bg-light">
              <RightSideSection />
              <h5 className="mb-4">More Programming Questions</h5>
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
              <RecommendPost
                imgsource="datacodelogo.jpeg"
                RecPostHading="Programminig Quize Test"
                link="/index_quize_tests"
              />
              <RecommendPost
                imgsource="datacodelogo.jpeg"
                RecPostHading="Programminig Quize Test"
                link="/index_quize_tests"
              />
              <RecommendPost
                imgsource="datacodelogo.jpeg"
                RecPostHading="Programminig Quize Test"
                link="/index_quize_tests"
              />
              <RecommendPost
                imgsource="datacodelogo.jpeg"
                RecPostHading="Programminig Quize Test"
                link="/index_quize_tests"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DatastructurePgramQuestions;
