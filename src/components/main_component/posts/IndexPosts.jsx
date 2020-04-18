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

class IndexPosts extends Component {
  state = {};

  render() {
    return (
      <>
        {/* First 3 Post Cards */}
        <div className="container-fluid mt-5">
          <div class="row ">
            <div className="col">
              <h4 className="text-secondary mt-3">Technologies</h4>
              <TechnologiesCardCarousel />
              <h4 className="text-secondary mt-3">Interview Preparation</h4>
              <InterviewQuestionsCardCarousel />
              <h4 className="text-secondary mt-3">Programming MCQs</h4>
              <MCQCardCarousel />
              <h4 className="text-secondary mt-3">Programming Quiz Test</h4>
              <MCQTestCardCarousel />
              <h4 className="text-secondary mt-3">Weekly Code Challanges</h4>
              <CodeChallangeCardCarousel />
              <h4 className="text-secondary mt-3">
                Programming Example Question
              </h4>
              <ProgrammingQuestionsCardCarousel />
              <h4 className="text-secondary mt-3">Community Blogs</h4>
              <ArticleCardCarousel />
              {/* <h4 className="text-secondary mt-3">Events and Contests</h4>
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
