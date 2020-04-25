import React, { Component } from "react";
import HeaderCard from "../../../HeaderCard";
import { Link } from "react-router-dom";
import ScoreCard from "../scoreCard";
import Quize from "../quize";
import RightSideSection from "../../../../right_section/RightSideSection";
import RecommendPost from "../../../../right_section/RecommendPost";
import MCQCardCarousel from "../MCQCardCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt, faHome } from "@fortawesome/free-solid-svg-icons";

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
        <HeaderCard
          title="GIT MCQs Set 1"
          color="#FFD700"
          textcolor="black"
        />

        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="col-fluid ">
              <Link to="/home" className="badge badge-primary mr-1">
              <FontAwesomeIcon icon={faHome} size="1x" />
            </Link>
                <Link to="/index_mcqs" className="badge badge-warning mr-1">
                  MCQs >>
                </Link>
                <Link to="/index_git_mcqs" className="badge badge-success mr-1">
                  Git MCQs >>
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
            <div className="col-md-4">
              <RightSideSection />
              <h5 className="mb-3">Recommended for you</h5>
              <RecommendPost
                imgsource="python_mcq.jpeg"
                RecPostHading="Python MCQs Questions"
                link="/index_python_mcqs"
              />
              <RecommendPost
                imgsource="java_mcq.jpeg"
                RecPostHading="Java MCQs Questions"
                link="/index_java_mcqs"
              />
               <RecommendPost
                imgsource="html_mcq.jpeg"
                RecPostHading="HTML MCQs Questions"
                link="/index_html_mcqs"
              />
             
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default GitMCQ1;
