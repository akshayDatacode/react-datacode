import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import RecommendPost from "../../../right_section/RecommendPost";
import RightSideSection from "../../../right_section/RightSideSection";
class DjangoInterviewQuestions extends Component {
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
                  <h1 className="card-title text-dark display-5 ">
                    Django Interview Question
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-1"></div>

            <div className="col-md-7">
              <QuestionCard
                question={`3) Explain the Android application Architecture.
                `}
                answer={`Following is a list of components of Android application architecture:

                1. Services: Used to perform background functionalities.
                2. Intent: Used to perform the interconnection between activities and the data passing mechanism.
                3. Resource Externalization: strings and graphics.
                4. Notification: light, sound, icon, notification, dialog box and toast.
                5. Content Providers: It will share the data between applications.
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

export default DjangoInterviewQuestions;
