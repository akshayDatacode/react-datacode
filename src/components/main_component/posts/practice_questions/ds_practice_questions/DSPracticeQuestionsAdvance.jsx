import React, { Component } from "react";
import HeaderCard from "../../../HeaderCard";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import PracticeQuestionCard from "../PracticeQuestionCard";
import RightSideSection from "../../../../right_section/RightSideSection";
import PracticeQuestionCardCarousel from "../PracticeQuestionCardCarousel";
import Discuss from "../../../Discuss";

class DSPracticeQuestionsAdvance extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-8 mt-4">
            <HeaderCard
              title="Advance DataStructure Programming Practice Problems"
              color="#FFD700"
              textcolor="black"
            />

            <Link to="/home" className="badge badge-primary mr-1">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>

            <PracticeQuestionCard
              question={``}
              no="1"
              tag1="Advance"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={``}
              no="2"
              tag1="Advance"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={``}
              no="3"
              tag1="Advance"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={``}
              no="4"
              tag1="Advance"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={``}
              no="5"
              tag1="Advance"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={``}
              no="6"
              tag1="Advance"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={``}
              no="7"
              tag1="Advance"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={``}
              no="8"
              tag1="Advance"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={``}
              no="9"
              tag1="Advance"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={``}
              no="10"
              tag1="Advance"
              tag2="Basic"
            />

            <Discuss
              url="https://www.datacode.in/?p=/react-datacode/#/ds_practice_questions_advance"
              title="Advance DataSturcture Practice Problems "
              identifier="ds_practice_questions_advance"
            />

            <h5 className="text-secondary mt-5 mb-3">
              For More Programming Practice Questions
            </h5>
            <PracticeQuestionCardCarousel />
          </div>

          <div className="col-md-3">
            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default DSPracticeQuestionsAdvance;
