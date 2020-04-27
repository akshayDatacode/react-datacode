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
              <div
                className="card mb-2 mt-3"
                style={{ backgroundColor: "#AACBCF" }}
              >
                <div className="card-body">
                  <Link to="/index_technologies">
                    <h4 style={{ color: "#133658" }}>
                      <FontAwesomeIcon
                        icon={faChalkboardTeacher}
                        color="#133658"
                      />{" "}
                      Tutorials & Courses
                    </h4>
                  </Link>
                  <p>
                    Learn New Technologies and Find how you can start your
                    learning from the beginner level. Datacode collects for you
                    in a very shorted order The Best Learning Tutorials and
                    Courses as Free or Paid
                  </p>
                  <h4 className="text-center p-0 m-0 "> Find and Learn</h4>
                </div>
              </div>
              <TechnologiesCardCarousel />
              {/* Ending of Technologies  */}
              {/* Starting Interview */}
              <div
                className="card mb-2 mt-3"
                style={{ backgroundColor: "#F8DB65" }}
              >
                <div className="card-body">
                  <Link to="/index_interview_questioins">
                    <h4 style={{ color: "#133658" }}>
                      <FontAwesomeIcon icon={faUserTie} color="#133658" />{" "}
                      Interview Preparation
                    </h4>
                  </Link>
                  <p>
                    Learn New Technologies and Find how you can start your
                    learning from the beginner level. Datacode collects for you
                    in a very shorted order The Best Learning Tutorials and
                    Courses as Free or Paid
                  </p>
                  <h4 className="text-center p-0 m-0 ">Get The Placment</h4>
                </div>
              </div>
              <InterviewQuestionsCardCarousel />
              {/* Ending Interview */}
              {/* Starting MCQs */}
              <div
                className="card mb-2 mt-3"
                style={{ backgroundColor: "#AACBCF" }}
              >
                <div className="card-body">
                  <Link to="/index_mcqs">
                    <h4 style={{ color: "#133658" }}>
                      <FontAwesomeIcon icon={faTasks} color="#133658" />{" "}
                      Programming MCQs
                    </h4>
                  </Link>
                  <p>
                    Learn New Technologies and Find how you can start your
                    learning from the beginner level. Datacode collects for you
                    in a very shorted order The Best Learning Tutorials and
                    Courses as Free or Paid
                  </p>
                  <h4 className="text-center p-0 m-0 ">Challange Your Logic</h4>
                </div>
              </div>
              <MCQCardCarousel />
              {/* Ending MCQs  */}
              {/* Staring QUIZ */}
              <div
                className="card mb-2 mt-3"
                style={{ backgroundColor: "#AACBCF" }}
              >
                <div className="card-body">
                  <Link to="/index_quize_tests">
                    <h4 style={{ color: "#133658" }}>
                      <FontAwesomeIcon icon={faUserClock} color="#133658" />{" "}
                      Programming Quiz Test
                    </h4>
                  </Link>
                  <p>
                    Learn New Technologies and Find how you can start your
                    learning from the beginner level. Datacode collects for you
                    in a very shorted order The Best Learning Tutorials and
                    Courses as Free or Paid
                  </p>
                  <h4 className="text-center p-0 m-0 ">Test Your Practice</h4>
                </div>
              </div>
              <MCQTestCardCarousel />
              {/* End Quiz Test */}
              {/* Starting Code Challange */}
              <div
                className="card mb-2 mt-3"
                style={{ backgroundColor: "#AACBCF" }}
              >
                <div className="card-body">
                  <Link to="/index_code_challange">
                    <h4 style={{ color: "#133658" }}>
                      <FontAwesomeIcon icon={faLaptopCode} color="#133658" />{" "}
                      Weekly Code Challanges
                    </h4>
                  </Link>
                  <p>
                    Learn New Technologies and Find how you can start your
                    learning from the beginner level. Datacode collects for you
                    in a very shorted order The Best Learning Tutorials and
                    Courses as Free or Paid
                  </p>
                  <h4 className="text-center p-0 m-0 ">It's Time to Code</h4>
                </div>
              </div>
              <CodeChallangeCardCarousel />
              {/* Ending Code challange*/}
              {/* Starting Programming Questions */}
              <div
                className="card mb-2 mt-3"
                style={{ backgroundColor: "#AACBCF" }}
              >
                <div className="card-body">
                  <Link to="/index_programming_questions">
                    <h4 style={{ color: "#133658" }}>
                      <FontAwesomeIcon icon={faFileCode} color="#133658" />{" "}
                      Programming Example Question
                    </h4>
                  </Link>
                  <p>
                    Learn New Technologies and Find how you can start your
                    learning from the beginner level. Datacode collects for you
                    in a very shorted order The Best Learning Tutorials and
                    Courses as Free or Paid
                  </p>
                  <h4 className="text-center p-0 m-0 ">Practice Programming</h4>
                </div>
              </div>
              <ProgrammingQuestionsCardCarousel />
              {/* Ending Programming Questions */}
              {/* Starting Articles */}
              <div
                className="card mb-2 mt-3"
                style={{ backgroundColor: "#AACBCF" }}
              >
                <div className="card-body">
                  <Link to="/index_articles">
                    <h4 style={{ color: "#133658" }}>
                      <FontAwesomeIcon icon={faNewspaper} color="#133658" />{" "}
                      Community Blogs
                    </h4>
                  </Link>
                  <p>
                    Learn New Technologies and Find how you can start your
                    learning from the beginner level. Datacode collects for you
                    in a very shorted order The Best Learning Tutorials and
                    Courses as Free or Paid
                  </p>
                  <h4 className="text-center p-0 m-0 ">
                    Learn From Communities
                  </h4>
                </div>
              </div>
              <ArticleCardCarousel /> {/* Ending Articels */}
              {/* Starting Events */}
              {/* 
              <Link to="/index_events">
              <h4style={{ color: "#133658" }}>Events and Contests</h4>
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
