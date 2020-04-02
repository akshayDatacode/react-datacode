import React, { Component } from "react";
import HeaderBannerSection from "../HeaderBannerSection";
import RightSideSection from "../../right_section/RightSideSection";
class ProgrammingLanguagesBlog extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-1 p-0 m-0"></div>
            <div className="col-md-8 p-0 ">
              <div className="card border border-secondary">
                <HeaderBannerSection imgsource="pythontech.jpeg" />

                <div className="row">
                  <div className="col">
                    <h1 className="text-secondary col-sm-h1 m-3">
                      Programming Languages Blog
                    </h1>
                    <div className="card-body">
                      <p className="text-left">
                        Computer programming is the process of designing and
                        building an executable computer program to accomplish a
                        specific computing result. Programming involves tasks
                        such as: analysis, generating algorithms, profiling
                        algorithms' accuracy and resource consumption, and the
                        implementation of algorithms in a chosen programming
                        language (commonly referred to as coding).[1][2] The
                        source code of a program is written in one or more
                        languages that are intelligible to programmers, rather
                        than machine code, which is directly executed by the
                        central processing unit. The purpose of programming is
                        to find a sequence of instructions that will automate
                        the performance of a task (which can be as complex as an
                        operating system) on a computer, often for solving a
                        given problem. The process of programming thus often
                        requires expertise in several different subjects,
                        including knowledge of the application domain,
                        specialized algorithms, and formal logic.
                      </p>
                      <br />
                      <p className="text-left">
                        Computer programming is the process of designing and
                        building an executable computer program to accomplish a
                        specific computing result. Programming involves tasks
                        such as: analysis, generating algorithms, profiling
                        algorithms' accuracy and resource consumption, and the
                        implementation of requires expertise in several
                        different subjects, including knowledge of the
                        application domain, specialized algorithms, and formal
                        logic.
                      </p>
                      <br />
                      <p className="text-left">
                        Computer programming is the process of designing and
                        building an executable computer program to accomplish a
                        specific computing result. Programming involves tasks
                        such as: analysis, generating algorithms, profiling
                        algorithms' accuracy and resource consumption, and the
                        implementation of requires expertise in several
                        different subjects, including knowledge of the
                        application domain, specialized algorithms, and formal
                        logic.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              <RightSideSection />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProgrammingLanguagesBlog;
