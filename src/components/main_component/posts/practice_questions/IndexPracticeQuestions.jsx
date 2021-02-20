import React, { Component } from "react";
import RightSideSection from "../../../right_section/RightSideSection";
import PracticeQuestionCardCarousel from "./PracticeQuestionCardCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostCard from "../../PostCard";
import { Link } from "react-router-dom";
import { faHome, faCode } from "@fortawesome/free-solid-svg-icons";
import Technologies from "../../../right_section/Technologies";
class IndexPracticeQuestions extends Component {
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
              className="text-center mb-4 rounded p-2 "
              style={{ backgroundColor: "#30006b", color: "#ffffff" }}
            >
              <FontAwesomeIcon icon={faCode} color="#072C71" /> Programming
              Practice Questions
            </h1>

            <div className="mb-3">
              <Link
                to="/home"
                className="badge mr-1"
                style={{ backgroundColor: "#06CB6C" }}
              >
                <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" />
              </Link>
            </div>

            <div className="card-deck m-2">
              <PostCard
                imgsource="c_practice_question.jpeg"
                title="C Programming Practice Questions"
                paragraph="We Love to Code and this is the best"
                link="/index_c_practice_questions"
              />
              <PostCard
                imgsource="python_practice_question.jpeg"
                title="Python Programming Practice Questions"
                paragraph="We Love to Code and this is the best "
                link="/index_python_practice_questions"
              />
            </div>
            <div className="card-deck m-2">
              <PostCard
                imgsource="java_practice_question.jpeg"
                title="Java Programming Practice Questions"
                paragraph="We Love to Code and this is the best "
                link="/index_java_practice_questions"
              />
              <PostCard
                imgsource="ds_practice_question.jpeg"
                title="Datastructre Programming Practice Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_ds_practice_questions"
              />
            </div>

            <h5 className="text-secondary mt-2 mb-3">
              For More Programming Practice Questions
            </h5>
            <PracticeQuestionCardCarousel />
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

export default IndexPracticeQuestions;
