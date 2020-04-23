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
import { faHackerNewsSquare } from "@fortawesome/free-brands-svg-icons";

class IndexPosts extends Component {
  state = {};

  render() {
    return (
      <>
        {/* First 3 Post Cards */}
        <div className="container-fluid mt-md-5 mt-3">
          <div class="row ">
            <div className="col">
              <h4 className="mt-3" style={{ color: "#133658" }}>
                <FontAwesomeIcon icon={faChalkboardTeacher} color="#133658" />{" "}
                Tutorials & Courses
              </h4>
              <TechnologiesCardCarousel />
              <h4 className="mt-3" style={{ color: "#133658" }}>
                <FontAwesomeIcon icon={faUserTie} color="#133658" /> Interview
                Preparation
              </h4>
              <InterviewQuestionsCardCarousel />
              <h4 className="mt-3" style={{ color: "#133658" }}>
                <FontAwesomeIcon icon={faTasks} color="#133658" /> Programming
                MCQs
              </h4>
              <MCQCardCarousel />
              <h4 className="mt-3" style={{ color: "#133658" }}>
                <FontAwesomeIcon icon={faUserClock} color="#133658" />{" "}
                Programming Quiz Test
              </h4>
              <MCQTestCardCarousel />
              <h4 className="mt-3" style={{ color: "#133658" }}>
                <FontAwesomeIcon icon={faLaptopCode} color="#133658" /> Weekly
                Code Challanges
              </h4>
              <CodeChallangeCardCarousel />
              <h4 className="mt-3" style={{ color: "#133658" }}>
                <FontAwesomeIcon icon={faFileCode} color="#133658" />{" "}
                Programming Example Question
              </h4>
              <ProgrammingQuestionsCardCarousel />
              <h4 className="mt-3" style={{ color: "#133658" }}>
                <FontAwesomeIcon icon={faNewspaper} color="#133658" /> Community
                Blogs
              </h4>
              <ArticleCardCarousel />{" "}
              {/* <h4 className="mt-3"style={{ color: "#133658" }}>Events and Contests</h4>
              <EventCardCarousel /> */}
            </div>
          </div>
        </div>
        {/* First Row 3 Post Cards Ending >>>>>>>>>>>>>>>>>>>>> */}
      </>
    );
  }
}

export default IndexPosts;
