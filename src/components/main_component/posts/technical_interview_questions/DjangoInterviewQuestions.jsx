import React, { Component } from "react";
import RecommendPost from "../../../right_section/RecommendPost";
import RightSideSection from "../../../right_section/RightSideSection";
import QuestionCard from "./QuestionCard";
import FbShare from "../../FbShare";
import FbLike from "../../../FbLikeShare";
class DjangoInterviewQuestions extends Component {
  state = {
    set: [
      {
        question: "Whats is Asjay",
        answer: "Magic Boy",
      },
      {
        question: "Whats is Asjay",
        answer: "Magic Boy",
      },
      {
        question: "Whats is Asjay",
        answer: "Magic Boy",
      },
      {
        question: "Whats is Asjay",
        answer: "Magic Boy",
      },
      {
        question: "Whats is Asjay",
        answer: "Magic Boy",
      },
    ],
  };
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
              {this.state.set.map((element) => (
                <QuestionCard
                  question={element.question}
                  answer={element.answer}
                />
              ))}
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
