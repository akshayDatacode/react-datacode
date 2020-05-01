import React, { Component } from "react";
import PostCard from "../../../PostCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCode } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PracticeQuestionCardCarousel from "../PracticeQuestionCardCarousel";
import RightSideSection from "../../../../right_section/RightSideSection";
import Technologies from "../../../../right_section/Technologies";

class IndexDSPracticeQuestions extends Component {
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
            <h2 className="text-center mb-4">
              DataStructure Programming Practice Questions
            </h2>
            <div className="mb-3">
              <Link
                to="/home"
                className="badge mr-1"
                style={{ backgroundColor: "#06CB6C" }}
              >
                <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" />
              </Link>
              <Link
                to="index_practice_questions"
                className="badge mr-1 text-white"
                style={{ backgroundColor: "#072C71" }}
              >
                <FontAwesomeIcon
                  icon={faCode}
                  size="1x"
                  color="#06CB6C"
                  className="mr-2"
                />
                back to code
              </Link>
            </div>

            <div className="card-deck m-2">
              <PostCard
                imgsource="ds_practice_questions_beginner.jpeg"
                title="Begineers DataStructure Programming Practice Questions "
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/ds_practice_questions_beginner"
              />
              <PostCard
                imgsource="ds_practice_questions_intermediate.jpeg"
                title="Intermediate DataStructure Programming Practice Questions "
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/ds_practice_questions_intermediate"
              />
              <PostCard
                imgsource="ds_practice_questions_advance.jpeg"
                title="Advance DataStructure Programming Practice Questions "
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/ds_practice_questions_advance"
              />
            </div>

            <h5 className="text-secondary mt-5 mb-3">
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

export default IndexDSPracticeQuestions;
