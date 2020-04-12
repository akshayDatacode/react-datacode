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
                    tag1="frontend"
                    tag2="backend"
                    title="What’s the Difference Between Front End, Back End, and Full Stack Developer?"
                    paragraph="You have heard of web developers – these are individuals who specialize in developing World Wide Web applications"
                    link="https://thepythonguru.com/whats-the-difference-between-front-end-back-end-and-full-stack-developer/"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="email"
                    tag2="privacy"
                    title="Email Security and Privacy"
                    paragraph="I used and do some research of your own."
                    link="https://pythontips.com/2018/12/01/email-security-privacy/"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="linux"
                    tag2="flask"
                    tag3="python"
                    title="Develop with Flask and Python 3 in a container on Red Hat Enterprise Linux"
                    paragraph="using Red Hat Enterprise Linux 8 application streams in containers is preferable to using software collections on RHEL 7. "
                    link="https://developers.redhat.com/blog/2019/09/12/develop-with-flask-and-python-3-in-a-container-on-red-hat-enterprise-linux/"
                  />
                </div>
                <div className="card-deck m-2">
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="JPA"
                    tag2="xml"
                    title="A beginner’s guide to JPA persistence.xml file"
                    paragraph="In this article, I’m going to explain what is the purpose of the JPA persistence.xml "
                    link="https://vladmihalcea.com/jpa-persistence-xml/"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="java"
                    tag2="json"
                    title="Multiline String literals with Java Text Blocks"
                    paragraph="In this article, show you how the new Java Text Blocks can help you increase the readability of JPQL, SQL queries, or JSON string values."
                    link="https://vladmihalcea.com/multiline-string-java-text-blocks/"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="GIT"
                    tag2="GUI"
                    title="Top 10 Best GUI Git Client for Developers"
                    paragraph="Git is a version control system for tracking file changes. Usually used in a team environment, especially among programmers,"
                    link="https://dev.to/shijiezhou/top-10-best-gui-git-client-for-developer-1gel"
                  />
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <nav>
                  <ul class="pagination justify-content-center">
                    <li class="page-item">
                      <Link class="page-link" to="/prog_lan_blog8">
                        Prev
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="/prog_lan_blog6">
                        6
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="/prog_lan_blog7">
                        7
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="/prog_lan_blog8">
                        8
                      </Link>
                    </li>
                    <li class="page-item active">
                      <Link class="page-link" to="/prog_lan_blog9">
                        9
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="/prog_lan_blog">
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
