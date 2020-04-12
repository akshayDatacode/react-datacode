import React, { Component } from "react";
import HeaderBannerSection from "../../HeaderBannerSection";
import RightSideSection from "../../../right_section/RightSideSection";
import PostCard from "../../PostCard";
import ArticlePostCard from "../ArticlePostCard";

import { Link } from "react-router-dom";

class ProgrammingLanguagesBlog extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-1 p-0 m-0"></div>
            <div className="col-md-8 p-0 mt-4">
              <h2 className="text-center mb-4">Programming Community Blogs</h2>
              <Link to="/home" className="badge badge-primary mr-1">
                Home >
              </Link>
              <Link to="/index_articles" className="badge badge-warning mr-1">
                Blogs >
              </Link>
              <div className="row">
                <div className="card-deck m-2">
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="Linux"
                    tag2="swift"
                    title="A Complete Guide to Swift Development on Linux"
                    paragraph="In this tutorial you’ll discover everything you need to start developing Swift on Linux. "
                    link="https://www.raywenderlich.com/8325890-a-complete-guide-to-swift-development-on-linux"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="java"
                    tag2="proxy"
                    title="The Proxy Design Pattern in Java"
                    paragraph="The Proxy Design Pattern is a design pattern belonging to the set of structural patterns."
                    link="https://stackabuse.com/the-proxy-design-pattern-in-java/"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="Git "
                    tag2="Rbase and merge"
                    title="Git Rebase VS Git Merge"
                    paragraph="Git rebase and git merge have similar purpose, that is to integrate a commit made in a branch to another branch."
                    link="https://medium.com/a-technologists-pov/git-rebase-vs-git-merge-b2a299ab43c0"
                  />
                </div>
                <div className="card-deck m-2">
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="Google Pay"
                    tag2="App"
                    title="How to Integrate Google Pay Into Your Existing Android App"
                    paragraph="How to Integrate Google Pay Into Your Existing Android App
                  Start accepting payments through GPay"
                    link="https://medium.com/better-programming/how-to-integrate-google-pay-into-your-existing-android-app-d75b269cd623"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="APP"
                    tag2="nlp"
                    title="How To Build a Sentiment Analysis App
                  "
                    paragraph="It is often necessary to analyze texts and detect whether they have a positive, negative, or neutral tone. "
                    link="https://rapidapi.com/blog/build-sentiment-analysis-app/"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="datascience"
                    tag2="python"
                    title="Top 25 Python Libraries for Data Science Projects"
                    paragraph="This post is attempting to enlighten you about the most useful and popular Python libraries used by data scientists"
                    link="https://www.techbeamers.com/top-python-libraries-data-science/"
                  />
                </div>
                <div className="card-deck m-2">
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1=""
                    tag2=""
                    title="Detect git Directory with Bash"
                    paragraph="One interesting aspect of working at Mozilla is that Firefox lives in a mercurial repository"
                    link="https://davidwalsh.name/detect-git-directory"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1=""
                    tag2=""
                    title="5 Essential git Commands and Utilities"
                    paragraph="For many of us, git and GitHub play a huge role in our development workflows. Whenever we have a tool that we need to use often, "
                    link="https://davidwalsh.name/5-essential-git-commands-and-utilities"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="MangoDB"
                    tag2="Altas"
                    title="What is Mongo DB Atlas?"
                    paragraph="Today Data plays a major role in every corner of the IT industry.  Hence we need a place to store the data in a secure place for further utilization. "
                    link="https://onlineitguru.com/blogger/what-is-mongo-db-atlas"
                  />
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <nav>
                  <ul class="pagination justify-content-center">
                    <li class="page-item">
                      <Link class="page-link" to="/prog_lan_blog5">
                        Prev
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="/prog_lan_blog3">
                        3
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="/prog_lan_blog4">
                        4
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="/prog_lan_blog5">
                        5
                      </Link>
                    </li>
                    <li class="page-item active">
                      <Link class="page-link" to="/prog_lan_blog6">
                        6
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="/prog_lan_blog7">
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="col-md-3 ">
              <RightSideSection />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProgrammingLanguagesBlog;
