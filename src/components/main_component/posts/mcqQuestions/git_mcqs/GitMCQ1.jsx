import React, { Component } from "react";
import Quize from "../quize";
import ScoreCard from "../scoreCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCode, faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import RightSideSection from "../../../../right_section/RightSideSection";
import RecommendPost from "../../../../right_section/RecommendPost";
import MCQCardCarousel from "../MCQCardCarousel";
import HeaderCard from "../../../HeaderCard";
import LearningSideSection from "../../../../right_section/learning_sidesection/LearningSideSection";
import Technologies from "../../../../right_section/Technologies";
import FbLikeShare from "../../../FbLikeShare";


class GitMCQ1 extends Component {
  state = {
    isCorrect: false,
    isClicked: false,
    count: 0,
    status: "",
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  counter = (count) => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
     <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="col-fluid mt-2 ml-2">
            <h2
              className="text-center mb-4 display-5"
              style={{ color: "#072C71" }}
            >
              GIT Multiple choice Questions Set-1
            </h2>
            <Link
              to="/home"
              className="badge mr-1"
              style={{ backgroundColor: "#06CB6C" }}
            >
              <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" /> 
            </Link>
            <Link
              to="/index_mcqs"
              className="badge mr-1"
              style={{ backgroundColor: "#072C71" }}

            >
              <FontAwesomeIcon icon={faChalkboardTeacher} size="2x" color="#06CB6C" />

            </Link>
            <Link
              to="/index_git_mcqs"
              className="badge mr-1 text-white"
              style={{ backgroundColor: "#072C71" }}
            >
              <FontAwesomeIcon
                  icon={faCode}
                  size="1x"
                  color="#06CB6C"
                  className="mr-2"
                />
                back to Index
            </Link>
                <ScoreCard count={this.state.count} />
              </div>
              <div className="row">
                <div className="col">
                  <Quize
                    quizeNo="1"
                    question="What's the git command that downloads your repository from GitHub to your computer?"
                    correctAnswer="git clone"
                    v1="git push "
                    v2="git fork"
                    v3="git clone"
                    v4="git commit"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="2"
                    question="How do you create a copy of a lab under your own GitHub account so that you can solve the lab?"
                    correctAnswer="Forking it via the GitHub interface."
                    v1="Forking it via the GitHub interface."
                    v2="git fork"
                    v3="git clone"
                    v4=" git pull-request"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="3"
                    question=" What's the opposite of git clone, instead of downloading your code from GitHub, uploads your changes and code back to GitHub?

               "
                    correctAnswer="git push
              "
                    v1="git push
              "
                    v2="git add
              "
                    v3="git upload
              "
                    v4="git status
              "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="4"
                    question="How do you check the state of your local git repository since your last commit?"
                    correctAnswer="git status
              "
                    v1="git check
              "
                    v2="git status
              "
                    v3="git commit
              "
                    v4=" git diff
              "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="5"
                    question="How do you stage files for a commit?

               "
                    correctAnswer="git add"
                    v1="git stage"
                    v2="git commit"
                    v3="git add"
                    v4="git reset"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="6"
                    question=" How do you save the current state of your code into the git version control?"
                    correctAnswer="By committing the staged changes with git commit"
                    v1="By committing the staged changes with git commit"
                    v2="By adding all changes and staging them with git stage"
                    v3="By adding all changes and staging them with git add"
                    v4="By creating a new commit with git init"
                    counter={this.counter}
                  />

                  <Quize
                    quizeNo="8"
                    question="What's a shortcut to staging all the changes you have?"
                    correctAnswer="git add ."
                    v1="git commit add ."
                    v2="git commit ."
                    v3="git push -am 'Message'"
                    v4="git add ."
                  />
                  <Quize
                    quizeNo="9"
                    question="How do you supply a commit message to a commit?"
                    correctAnswer="git commit -m 'I'm coding"
                    v1="git message 'I'm coding'"
                    v2="git add 'I'm coding'"
                    v3="git commit 'I'm coding'"
                    v4="git commit -m 'I'm coding"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="10"
                    question="How do you submit a solution to Learn? "
                    correctAnswer="learn submit"
                    v1="git pull-request"
                    v2="git submit"
                    v3="learn submit"
                    v4="git commit -am 'Done with Lab"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h4>For More MCQs Questions</h4>
                  <MCQCardCarousel />
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-md-5 mt-3">
            <LearningSideSection language="git" />
            <RightSideSection />
            <Technologies />
             
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default GitMCQ1;
