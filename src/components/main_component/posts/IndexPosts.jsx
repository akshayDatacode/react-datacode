import React, { Component } from "react";
import PostCard from "../PostCard";
import TechnologiesCardCarousel from "../technologies/TechnologiesCardCarousel";
import InterviewQuestionsCardCarousel from "../posts/technical_interview_questions/InterviewQuestionCardCarousel";
import MCQCardCarousel from "../posts/mcqQuestions/MCQCardCarousel";
import MCQTestCardCarousel from "../posts/mcqQuestions/quize_test/MCQTestCardCarousel";
import ProgrammingQuestionsCardCarousel from "../posts/programming_questions/ProgrammingQuestionCardCarousel";
import CodeChallangeCardCarousel from "../code_challange/CodeChallangeCardCarousel";
import ArticleCardCarousel from "../aticles/ArticleCardCarousel";
import EventCardCarousel from "../events/EventCardCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faUserTie,
  faUserTimes,
  faFileCode,
  faListAlt,
  faUserClock,
  faLaptopCode,
  faList,
  faTasks,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class IndexPosts extends Component {
  state = {};

  render() {
    return (
      <>
        {/* First 3 Post Cards */}
        <div className="container-fluid mt-md-5 mt-3">
          <div class="row ">
            <div className="col">
              <Link to="/index_technologies">
                <h4 className="mt-3" style={{ color: "#133658" }}>
                  <FontAwesomeIcon icon={faChalkboardTeacher} color="#133658" />{" "}
                  Tutorials & Courses
                </h4>
              </Link>
              <TechnologiesCardCarousel />
              <Link to="/index_interview_questioins">
                <h4 className="mt-3" style={{ color: "#133658" }}>
                  <FontAwesomeIcon icon={faUserTie} color="#133658" /> Interview
                  Preparation
                </h4>
              </Link>
              <InterviewQuestionsCardCarousel />
              <Link to="/index_mcqs">
                <h4 className="mt-3" style={{ color: "#133658" }}>
                  <FontAwesomeIcon icon={faTasks} color="#133658" /> Programming
                  MCQs
                </h4>
              </Link>
              <MCQCardCarousel />
              <Link to="/index_quize_tests">
                <h4 className="mt-3" style={{ color: "#133658" }}>
                  <FontAwesomeIcon icon={faUserClock} color="#133658" />{" "}
                  Programming Quiz Test
                </h4>
              </Link>
              <MCQTestCardCarousel />
              <Link to="/index_code_challange">
                <h4 className="mt-3" style={{ color: "#133658" }}>
                  <FontAwesomeIcon icon={faLaptopCode} color="#133658" /> Weekly
                  Code Challanges
                </h4>
              </Link>
              <CodeChallangeCardCarousel />
              <Link to="/index_programming_questions">
                <h4 className="mt-3" style={{ color: "#133658" }}>
                  <FontAwesomeIcon icon={faFileCode} color="#133658" />{" "}
                  Programming Example Question
                </h4>
              </Link>
              <ProgrammingQuestionsCardCarousel />
              <Link to="/index_articles">
                <h4 className="mt-3" style={{ color: "#133658" }}>
                  <FontAwesomeIcon icon={faNewspaper} color="#133658" />{" "}
                  Community Blogs
                </h4>
              </Link>
              <ArticleCardCarousel />{" "}
              {/* 
              <Link to="/index_events">
              <h4 className="mt-3"style={{ color: "#133658" }}>Events and Contests</h4>
              <EventCardCarousel /> 
              </Link>
              */}
            </div>
          </div>
        </div>
        {/* First Row 3 Post Cards Ending >>>>>>>>>>>>>>>>>>>>> */}
      </>
    );
  }
}

export default IndexPosts;
