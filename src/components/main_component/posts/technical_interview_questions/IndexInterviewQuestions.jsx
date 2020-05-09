import React, { Component } from "react";
import { Link } from "react-router-dom";
import PostCard from "../../PostCard";
import RightSideSection from "../../../right_section/RightSideSection";
import InterviewQuestionCardCarousel from "./InterviewQuestionCardCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
 
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";

import Technologies from "../../../right_section/Technologies";
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
            <h1
              className="text-center mb-4 rounded p-2"
              style={{ backgroundColor: "#06CB6C", color: "#072C71" }}
            >
              <FontAwesomeIcon icon={faChalkboardTeacher} /> Interview  Questions
            </h1>
            <Link
              to="/home"
              className="badge mr-1"
              style={{ backgroundColor: "#06CB6C" }}
            >
              <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" />
            </Link>

            <div className="card-deck m-2">
              <PostCard
                imgsource="dbms_interview_questions.jpeg"
                title="DBMS Interview Questions"
                paragraph="We Love to Code and this is the best way to "
                link="/dbms_interview_question"
              />
              <PostCard
                imgsource="oops_interview_questions.jpeg"
                title="OOPs Interview Questions"
                paragraph="We Love to Code and this "
                link="/oops_interview_question"
              />
              <PostCard
                imgsource="python_interview_questions.jpeg"
                title="Python Interview Questions"
                paragraph="We Love to Code and this is the best"
                link="/python_interview_question"
              />
            </div>
            <div className="card-deck m-2">
              <PostCard
                imgsource="java_interview_questions.jpeg"
                title="Java Interview Questions"
                paragraph="We Love to Code and this is the best way to "
                link="/java_interview_question"
              />
              <PostCard
                imgsource="c_interview_questions.jpeg"
                title="C Programming Interview Questions"
                paragraph="We Love to Code and this "
                link="/c_interview_question"
              />
              <PostCard
                imgsource="cpp_interview_questions.jpeg"
                title="C++ Interview Questions"
                paragraph="We Love to Code and this is the best"
                link="/cpp_interview_question"
              />
            </div>
            <div className="card-deck m-2">
              <PostCard
                imgsource="cloud_computing_interview_questions.jpeg"
                title="Cloud Computing Interview Questions"
                paragraph="We Love to Code and this is the best way to "
                link="/cloud_computing_interview_question"
              />
              <PostCard
                imgsource="cn_interview_questions.jpeg"
                title="Computer Networking Interview Questions"
                paragraph="We Love to Code and this "
                link="/cn_interview_question"
              />
              <PostCard
                imgsource="ds_interview_questions.jpeg"
                title="DataStructure Interview Questions"
                paragraph="We Love to Code and this is the best"
                link="/datastructre_interview_question"
              />
            </div>
            <div className="card-deck m-2">
              <PostCard
                imgsource="os_interview_questions.jpeg"
                title="Operating System Interview Questions"
                paragraph="We Love to Code and this is the best way to "
                link="/os_interview_question"
              />
              <PostCard
                imgsource="rdbms_interview_questions.jpeg"
                title="RDBMS Interview Questions"
                paragraph="We Love to Code and this "
                link="/rdbms_interview_question"
              />
              <PostCard
                imgsource="sdlc_interview_questions.jpeg"
                title="Software Development Life Cycle Interview Questions"
                paragraph="We Love to Code and this is the best"
                link="/sdlc_interview_question"
              />
            </div>
           
            <div className="card-deck m-2">
              <PostCard
                imgsource="html_interview_questions.jpeg"
                title="HTML Interview Questions"
                paragraph="We Love to Code and this is the best way to "
                link="/html_interview_question"
              />
              <PostCard
                imgsource="js_interview_questions.jpeg"
                title="JavaScript Interview Questions"
                paragraph="We Love to Code and this "
                link="/js_interview_question"
              />
              <PostCard
                imgsource="react_interview_questions.jpeg"
                title="REACT Interview Questions"
                paragraph="We Love to Code and this is the best"
                link="/react_interview_question"
              />
            </div>
            <div className="card-deck m-2">
              <PostCard
                imgsource="angular_interview_questions.jpeg"
                title="Angular Interview Questions"
                paragraph="We Love to Code and this is the best way to "
                link="/angular_interview_question"
              />
              <PostCard
                imgsource="android_interview_questions.jpeg"
                title="Android Interview Questions"
                paragraph="We Love to Code and this "
                link="/android_interview_question"
              />
              <PostCard
                imgsource="bootstrap_interview_questions.jpeg"
                title="Bootstrap Coming Soon"
                paragraph="We Love to Code and this is the best"
                link="/bootstrap_interview_question"
              />
            </div>
            <div className="card-deck m-2">
              <PostCard
                imgsource="sql_interview_questions.jpeg"
                title="SQL Interview Questions"
                paragraph="We Love to Code and this is the best way to "
                link="/sql_interview_question"
              />
              <PostCard
                imgsource="testing_interview_questions.jpeg"
                title="Testing Interview Questions"
                paragraph="We Love to Code and this "
                link="/testing_interview_question"
              />
            
            </div>

            <h4 className="text-secondary mt-3">
              For More Placment Preparation
            </h4>
            <InterviewQuestionCardCarousel />
          </div>
          <div className="col-md-3">
            <RightSideSection />
            <Technologies />
          </div>
        </div>
      </>
    );
  }
}

export default IndexInterviewQuestions;
