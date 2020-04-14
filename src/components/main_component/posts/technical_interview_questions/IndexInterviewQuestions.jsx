import React, { Component } from "react";
import { Link } from "react-router-dom";
import PostCard from "../../PostCard";
import RightSideSection from "../../../right_section/RightSideSection";
import InterviewQuestionCardCarousel from "./InterviewQuestionCardCarousel";
class IndexInterviewQuestions extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-8 mt-4">
            <h2 className="text-center mb-4 text-secondary">
              Technical Interview Questions
            </h2>
            <Link to="/home" className="badge badge-primary mr-1">
              Home >
            </Link>
            <div className="card-deck m-2">
              <PostCard
                imgsource="technical_interview_questions.jpeg"
                title="DBMS Interview Questions"
                paragraph="We Love to Code and this is the best way to "
                link="/dbms_interview_question"
              />
              <PostCard
                imgsource="technical_interview_questions.jpeg"
                title="OOPs Interview Questions"
                paragraph="We Love to Code and this "
                link="/oops_interview_question"
              />
              <PostCard
                imgsource="technical_interview_questions.jpeg"
                title="Python Interview Questions"
                paragraph="We Love to Code and this is the best"
                link="/python_interview_question"
              />
            </div>
            <div className="card-deck m-2">
              <PostCard
                imgsource="technical_interview_questions.jpeg"
                title="Java Interview Questions"
                paragraph="We Love to Code and this is the best way to "
                link="/java_interview_question"
              />
              <PostCard
                imgsource="technical_interview_questions.jpeg"
                title="C Programming Interview Questions"
                paragraph="We Love to Code and this "
                link="/c_interview_question"
              />
              <PostCard
                imgsource="technical_interview_questions.jpeg"
                title="C++ Interview Questions"
                paragraph="We Love to Code and this is the best"
                link="/cpp_interview_question"
              />
            </div>
            <div className="card-deck m-2">
              <PostCard
                imgsource="technical_interview_questions.jpeg"
                title="Cloud Computing Interview Questions"
                paragraph="We Love to Code and this is the best way to "
                link="/cloud_computing_interview_question"
              />
              <PostCard
                imgsource="technical_interview_questions.jpeg"
                title="Computer Networking Interview Questions"
                paragraph="We Love to Code and this "
                link="/cn_interview_question"
              />
              <PostCard
                imgsource="technical_interview_questions.jpeg"
                title="DataStructure Interview Questions"
                paragraph="We Love to Code and this is the best"
                link="/datastructre_interview_question"
              />
            </div>
            <div className="card-deck m-2">
              <PostCard
                imgsource="technical_interview_questions.jpeg"
                title="Operating System Interview Questions"
                paragraph="We Love to Code and this is the best way to "
                link="/os_interview_question"
              />
              <PostCard
                imgsource="technical_interview_questions.jpeg"
                title="RDBMS Interview Questions"
                paragraph="We Love to Code and this "
                link="/rdbms_interview_question"
              />
              <PostCard
                imgsource="technical_interview_questions.jpeg"
                title="Software Development Life Cycle Interview Questions"
                paragraph="We Love to Code and this is the best"
                link="/sdlc_interview_question"
              />
            </div>
            <div className="card-deck m-2">
              <PostCard
                imgsource="technical_interview_questions.jpeg"
                title="SQL Interview Questions"
                paragraph="We Love to Code and this is the best way to "
                link="/sql_interview_question"
              />
              <PostCard
                imgsource="technical_interview_questions.jpeg"
                title="Testing Interview Questions"
                paragraph="We Love to Code and this "
                link="/testing_interview_question"
              />
              <PostCard
                imgsource="technical_interview_questions.jpeg"
                title="Software Development Life Cycle Interview Questions"
                paragraph="We Love to Code and this is the best"
                link="/sdlc_interview_question"
              />
            </div>
            <div className="card-deck m-2">
              <PostCard
                imgsource="technical_interview_questions.jpeg"
                title="HTML Interview Questions"
                paragraph="We Love to Code and this is the best way to "
                link="/html_interview_question"
              />
              <PostCard
                imgsource="technical_interview_questions.jpeg"
                title="JavaScript Interview Questions"
                paragraph="We Love to Code and this "
                link="/js_interview_question"
              />
              <PostCard
                imgsource="technical_interview_questions.jpeg"
                title="REACT Interview Questions"
                paragraph="We Love to Code and this is the best"
                link="/react_interview_question"
              />
            </div>
            <div className="card-deck m-2">
              <PostCard
                imgsource="technical_interview_questions.jpeg"
                title="Angular Interview Questions"
                paragraph="We Love to Code and this is the best way to "
                link="/angular_interview_question"
              />
              <PostCard
                imgsource="technical_interview_questions.jpeg"
                title="Android Interview Questions"
                paragraph="We Love to Code and this "
                link="/android_interview_question"
              />
              <PostCard
                imgsource="technical_interview_questions.jpeg"
                title="Upcoming"
                paragraph="We Love to Code and this is the best"
                link="/react_interview_question"
              />
            </div>

            <h4 className="text-secondary mt-3">
              For More Placment Preparation
            </h4>
            <InterviewQuestionCardCarousel />
          </div>
          <div className="col-md-3">
            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default IndexInterviewQuestions;
