import React, { Component } from "react";
import PostCard from "../PostCard";
import TechnologiesCardCarousel from "../technologies/TechnologiesCardCarousel";
import InterviewQuestionsCardCarousel from "../posts/technical_interview_questions/InterviewQuestionCardCarousel";
import MCQCardCarousel from "../posts/mcqQuestions/MCQCardCarousel";
import MCQTestCardCarousel from "../posts/mcqQuestions/quize_test/MCQTestCardCarousel";
import ProgrammingQuestionsCardCarousel from "../posts/programming_questions/ProgrammingQuestionCardCarousel";
import CodeChallangeCardCarousel from "../code_challange/CodeChallangeCardCarousel";
import ArticleCardCarousel from "../aticles/ArticleCardCarousel";
import PracticeQuestionCardCarousel from "../posts/practice_questions/PracticeQuestionCardCarousel";
import TrainingCertificationCardCarousel from "../training_and_certification/TrainingCertificationCardCarousel";

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
  faFlask,
  faCode,
  faAward,
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
                  A one step solution for your technical learning.<br/> Learn online from the best programming tutorials and courses submitted and voted by the programming community.

                  </p>
                  <h4 className="text-center p-0 m-0 "> Find and Learn</h4>
                </div>
              </div>
              <TechnologiesCardCarousel />
              {/* Ending of Technologies  */}
              {/* Starting Training And Certificate */}
              <div
                className="card mb-2 mt-3"
                style={{ backgroundColor: "#D8DB95" }}
              >
                <div className="card-body">
                  <Link to="/index_training_certification">
                    <h4 style={{ color: "#133658" }}>
                      <FontAwesomeIcon icon={faAward} color="#133658" />{" "}
                      Training & Certification
                    </h4>
                  </Link>
                  <p>
                  A one step solution for your Certificates.<br/>Our hands-on training and practical certification collected from  all over the internet helps you to learn the essentials and build your career

                  </p>
                  <h4 className="text-center p-0 m-0 ">Get The Learning</h4>
                </div>
              </div>
              <TrainingCertificationCardCarousel />
              {/* Ending Training And Certificate */}
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
                  A one step solution for your Interview Preparation.<br/>
                  Our specially designed Interview Questions helps you to learn the essentials and secure a Placement
                  </p>
                  <h4 className="text-center p-0 m-0 ">Get The Placement</h4>
                </div>
              </div>
              <InterviewQuestionsCardCarousel />
              {/* Ending Interview */}
              {/* Starting MCQs */}
              <div
                className="card mb-2 mt-3"
                style={{ backgroundColor: "#90EE90" }}
              >
                <div className="card-body">
                  <Link to="/index_mcqs">
                    <h4 style={{ color: "#133658" }}>
                      <FontAwesomeIcon icon={faTasks} color="#133658" />{" "}
                      Programming MCQs
                    </h4>
                  </Link>
                  <p>
                  A one step solution for your technical learning.<br/> Here we bring up lots of MCQs to solve and get yourself thorough with the technology. 
                  </p>
                  <h4 className="text-center p-0 m-0 ">Challange Your Logic</h4>
                </div>
              </div>
              <MCQCardCarousel />
              {/* Ending MCQs  */}
              {/* Staring QUIZ */}
              <div
                className="card mb-2 mt-3"
                style={{ backgroundColor: "#FFE4E1" }}
              >
                <div className="card-body">
                  <Link to="/index_quize_tests">
                    <h4 style={{ color: "#133658" }}>
                      <FontAwesomeIcon icon={faFlask} color="#133658" />{" "}
                      Programming Quiz Test
                    </h4>
                  </Link>
                  <p>
                  A one step solution for your technical learning.<br/> You can test your knowledge through fun quizzes and evaluate your daily learning. 
                  </p>
                  <h4 className="text-center p-0 m-0 ">Test Your Practice</h4>
                </div>
              </div>
              <MCQTestCardCarousel />
              {/* End Quiz Test */}
              {/* Staring programming pratice */}
              <div
                className="card mb-2 mt-3"
                style={{ backgroundColor: "#AACBCF" }}
              >
                <div className="card-body">
                  <Link to="/index_quize_tests">
                    <h4 style={{ color: "#133658" }}>
                      <FontAwesomeIcon icon={faCode} color="#133658" />{" "}
                      Programming Practice question
                    </h4>
                  </Link>
                  <p>
                  A one step solution for your technical learning.<br/> Practice what you learned and get better with your knowledge by our practice questions
                  </p>
                  <h4 className="text-center p-0 m-0 ">Practice your logic </h4>
                </div>
              </div>
              <PracticeQuestionCardCarousel />
              {/* END programming pratice */}
              {/* Starting Programming Questions */}
              <div
                className="card mb-2 mt-3"
                style={{ backgroundColor: "#F8DB65" }}
              >
                <div className="card-body">
                  <Link to="/index_programming_questions">
                    <h4 style={{ color: "#133658" }}>
                      <FontAwesomeIcon icon={faFileCode} color="#133658" />{" "}
                      Programming Example Question
                    </h4>
                  </Link>
                  <p>
                  A one step solution for your technical learning.<br/> Test your practice and knowledge by solving programming example questions specially designed for you.
                  </p>
                  <h4 className="text-center p-0 m-0 ">Practice Programming</h4>
                </div>
              </div>
              <ProgrammingQuestionsCardCarousel />
              {/* Ending Programming Questions */}
              {/* Starting Articles */}
              <div
                className="card mb-2 mt-3"
                style={{ backgroundColor: "#90EE90" }}
              >
                <div className="card-body">
                  <Link to="/index_articles">
                    <h4 style={{ color: "#133658" }}>
                      <FontAwesomeIcon icon={faNewspaper} color="#133658" />{" "}
                      Community Blogs
                    </h4>
                  </Link>
                  <p>
                  A one step solution for your technical learning.<br/> A place where you can read blogs with fascinating knowledge, interests and ideas with people ranging from students, programmers and top technical experts. 
                  </p>
                  <h4 className="text-center p-0 m-0 ">
                    Learn From Communities
                  </h4>
                </div>
              </div>
              <ArticleCardCarousel /> {/* Ending Articels */}
              {/* Starting Code Challange */}
              <div
                className="card mb-2 mt-3"
                style={{ backgroundColor: "#FFE4E1" }}
              >
                <div className="card-body">
                  <Link to="/index_code_challange">
                    <h4 style={{ color: "#133658" }}>
                      <FontAwesomeIcon icon={faLaptopCode} color="#133658" />{" "}
                      Weekly Code Challanges
                    </h4>
                  </Link>
                  <p>
                  A one step solution for Challanging yourself.<br/> We present weekly coding challenges where you can show off your knowledge and win the challenges. 


                  </p>
                  <h4 className="text-center p-0 m-0 ">It's Time to Code</h4>
                </div>
              </div>
              <CodeChallangeCardCarousel />
              {/* Ending Code challange*/}
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
