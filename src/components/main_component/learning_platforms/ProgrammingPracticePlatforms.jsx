import React, { Component } from "react";
import HeaderCard from "../HeaderCard";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSchool } from "@fortawesome/free-solid-svg-icons";
import Quize from "../posts/mcqQuestions/quize";
import RecommendPost from "../../right_section/RecommendPost";
import RightSideSection from "../../right_section/RightSideSection";
import MCQCardCarousel from "../posts/mcqQuestions/MCQCardCarousel";
import LearningPlatformCard from "./LearningPlatformCard";
class ProgrammingPracticePlatforms extends Component {
  state = {};
  render() {
    return (
      <>
        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-8 ">
              <HeaderCard
                title="Top Practice Platforms for Compitative programminig"
                color="#FF9B00"
                textcolor="black"
              />
              <div className="col-fluid mt-2 ml-2">
                <Link to="/home" className="badge badge-primary mr-1">
                  <FontAwesomeIcon icon={faHome} size="1x" />
                </Link>
                <Link
                  to="/index_learning_platforms"
                  className="badge badge-success mr-1"
                >
                  <FontAwesomeIcon icon={faSchool} size="1x" className="mr-1" />
                  Learning Platforms
                </Link>
              </div>
              <div className="row">
                <div className="col">
                  <div className="card-deck mt-5">
                    <LearningPlatformCard
                      imgsource="codeeval.jpeg"
                      tag1="coding Challange"
                      title="CodeEval"
                      paragraph="CodeEval is a technical screening platform that hosts coding challenges to source and screen developers. San Francisco, California, United States."
                      link="https://www.crunchbase.com/organization/codeeval"
                    />
                    <LearningPlatformCard
                      imgsource="codecombat.jpeg"
                      tag1="code"
                      tag2="Learning"
                      title="CodeCombat"
                      paragraph="Learn typed code through a programming game. Learn Python, JavaScript, and HTML as you solve puzzles and learn to make your own coding games."
                      link="https://codecombat.com/"
                    />
                    <LearningPlatformCard
                      imgsource="ageoflearning.jpeg"
                      tag1="Compitative"
                      tag2="Coding"
                      title="Age of Learning"
                      paragraph="Age of Learning blends education best practices, innovative technology, and insightful creativity to bring learning to life for children across the U.S"
                      link="https://www.ageoflearning.com/"
                    />
                  </div>
                  <div className="card-deck">
                    <LearningPlatformCard
                      imgsource="topcoder.jpeg"
                      tag1="certification"
                      tag2="coding"
                      title="Topcoder"
                      paragraph="Topcoder is a crowdsourcing company with an open global community of designers, developers, data scientists, and competitive programmers. "
                      link="https://www.topcoder.com/"
                    />
                    <LearningPlatformCard
                      imgsource="codinggame.jpeg"
                      tag1="certification"
                      tag2="Learning"
                      title="CodinGame"
                      paragraph="CodinGame is a technology company editing an online platform for developers, allowing them to play with programming with increasingly difficult puzzles, to learn to code better with an online programming"
                      link="https://www.codingame.com/"
                    />
                    <LearningPlatformCard
                      imgsource="codewars.jpeg"
                      tag1="certification"
                      title="Codewars"
                      paragraph="Codewars is an educational community for computer programming. On the platform, software developers train on programming challenges known as kata. These discrete programming exercises train a range of skills in a variety of programming languages."
                      link="https://www.codewars.com/"
                    />
                  </div>
                  <div className="card-deck">
                    <LearningPlatformCard
                      imgsource="codechef.jpeg"
                      tag1="certification"
                      tag2="Coding"
                      title="CodeChef"
                      paragraph="CodeChef is a competitive programming website. It is a non-profit educational initiative"
                      link="https://www.codechef.com/"
                    />
                    <LearningPlatformCard
                      imgsource="hackerrank.jpeg"
                      tag1="certification"
                      title="HackerRank"
                      paragraph="HackerRank is a tech company that focuses on competitive programming challenges for both consumers and businesses, where developers compete by trying to program according to provided specifications."
                      link="https://www.hackerrank.com/"
                    />
                    <LearningPlatformCard
                      imgsource="codeforces.jpeg"
                      tag1="certification"
                      tag2="Coding"
                      title="Codeforces"
                      paragraph="Codeforces is a website that hosts competitive programming contests. It is maintained by a group of competitive programmers"
                      link="https://codeforces.com/"
                    />
                  </div>
                  <div className="card-deck"></div>
                  <div className="card-deck"></div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h4>For More Learning Platforms</h4>
                  <MCQCardCarousel />
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              <RightSideSection />
              <h4>Recommended for you</h4>
              <RecommendPost
                imgsource="python_mcq.jpeg"
                RecPostHading="Python MCQs Set 2"
                link="/python_mcq_2"
              />
              <RecommendPost
                imgsource="python_mcq.jpeg"
                RecPostHading="Python MCQs Set 3"
                link="/python_mcq_3"
              />
              <RecommendPost
                imgsource="python_mcq.jpeg"
                RecPostHading="Python MCQs Set 4"
                link="/python_mcq_4"
              />
              <RecommendPost
                imgsource="python_mcq.jpeg"
                RecPostHading="Python MCQs Set 5"
                link="/python_mcq_5"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProgrammingPracticePlatforms;
