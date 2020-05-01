import React, { Component } from "react";
import PostCard from "../../../PostCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PracticeQuestionCardCarousel from "../PracticeQuestionCardCarousel";
import RightSideSection from "../../../../right_section/RightSideSection";
import Technologies from "../../../../right_section/Technologies";
class IndexCPracticeQuestions extends Component {
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
              C Programming Practice Questions
            </h2>
            <Link to="/home" className="badge badge-primary mr-1">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>

            <div className="card-deck m-2">
              <PostCard
                imgsource="c_practice_questions_beginner.jpeg"
                title="C Programming Practice Questions Begineers"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/c_practice_questions_beginner"
              />
              <PostCard
                imgsource="c_practice_questions_intermediate.jpeg"
                title="C Programming Practice Questions Intermediate"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/c_practice_questions_intermediate"
              />
              <PostCard
                imgsource="c_practice_questions_advance.jpeg"
                title="C Programming Practice Questions Advance"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/c_practice_questions_advance"
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

export default IndexCPracticeQuestions;
