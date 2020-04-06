import React, { Component } from "react";
import RightSideSection from "../../right_section/RightSideSection";
import RecommendPost from "../../right_section/RecommendPost";
import { Link } from "react-router-dom";
import CodeChallangeFram from "./CodeChallangeFram";

class CodeChallangeWeek1 extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="container-fluids ">
          <div className="row">
            <div className="col ">
              <div className="card bg-info">
                <div className="card-body p-2">
                  <h1 className="card-title text-light">
                    Code Challange Week 1
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3 d-none d-sm-block  mt-4">
              <ul class="list-group list-group-flush">
                <Link to="code_challange_week_1">
                  <button className="list-group-item bg-primary text-light">
                    Code Challange Week #1
                  </button>
                </Link>
                <Link to="code_challange_week_2">
                  <button className=" btn list-group-item">
                    Code Challange Week #2
                  </button>
                </Link>
              </ul>
            </div>
            <div className="col-md-5 mt-5 ">
              <CodeChallangeFram
                questionNO={`<Code Challange Problem # 1 >`}
                codeproblem="All The Questions are Big Problems"
                code={`dsdjdfsjslvk   cxgdfd   dgfdfsdvsfd  sdfsfs`}
                language="python"
              />
              <CodeChallangeFram
                questionNO={`<Code Challange Problem # 2 >`}
                codeproblem="All The Questions are Big Problems"
                code={`dsdjdfsjslvk   cxgdfd   dgfdfsdvsfd  sdfsfs`}
                language="python"
              />
              <CodeChallangeFram
                questionNO={`<Code Challange Problem # 3 >`}
                codeproblem="All The Questions are Big Problems"
                code={`dsdjdfsjslvk   cxgdfd   dgfdfsdvsfd  sdfsfs`}
                language="python"
              />
              <CodeChallangeFram
                questionNO={`<Code Challange Problem # 4 >`}
                codeproblem="All The Questions are Big Problems"
                code={`dsdjdfsjslvk   cxgdfd   dgfdfsdvsfd  sdfsfs`}
                language="python"
              />
              <CodeChallangeFram
                questionNO={`<Code Challange Problem # 5 >`}
                codeproblem="All The Questions are Big Problems"
                code={`dsdjdfsjslvk   cxgdfd   dgfdfsdvsfd  sdfsfs`}
                language="python"
              />
              <CodeChallangeFram
                questionNO={`<Code Challange Problem # 6 >`}
                codeproblem="All The Questions are Big Problems"
                code={`dsdjdfsjslvk   cxgdfd   dgfdfsdvsfd  sdfsfs`}
                language="python"
              />
              <CodeChallangeFram
                questionNO={`<Code Challange Problem # 7 >`}
                codeproblem="All The Questions are Big Problems"
                code={`dsdjdfsjslvk   cxgdfd   dgfdfsdvsfd  sdfsfs`}
                language="python"
              />
            </div>
            <div className="col-md-4 mt-4 ">
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

export default CodeChallangeWeek1;
