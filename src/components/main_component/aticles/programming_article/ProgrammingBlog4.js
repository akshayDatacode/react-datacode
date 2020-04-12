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
                    tag1="raspberry pi"
                    tag2="python"
                    title="How to build a Raspberry Pi photo booth"
                    paragraph="that code creates a souvenir photo by superimposing the Coderland logo, a date stamp, and a message on top"
                    link="https://developers.redhat.com/blog/2019/06/03/how-to-build-a-raspberry-pi-photo-booth/"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="python"
                    tag2="functions"
                    title="Python Functions Defaults Explained"
                    paragraph="And I have noticed that the interviewers like using the task as the following one.
                  "
                    link="https://medium.com/python4you/python-functions-defaults-explained-ee962c7c6f7a"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="talking cars"
                    tag2="python"
                    title="Talking to cars with Python"
                    paragraph="Modern cars have become mobile computer systems with many small computers running "
                    link="https://talkpython.fm/episodes/show/255/talking-to-cars-with-python"
                  />
                </div>
                <div className="card-deck m-2">
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="hibernate"
                    tag2="java"
                    title="LazyInitializationException – What it is and the best way to fix it"
                    paragraph="The LazyInitializationException is one of the most common exceptions when working with Hibernate."
                    link="https://thoughts-on-java.org/blog/"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="java"
                    tag2="expectation"
                    title="What Causes java.lang.reflect.InvocationTargetException?"
                    paragraph="When working with Java Reflection API, it is common to encounter java.lang.reflect.InvocationTargetException."
                    link="https://www.baeldung.com/java-lang-reflect-invocationtargetexception"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="SQL"
                    tag2="inner join"
                    title="SQL INNER JOIN – A Beginner’s Guide"
                    paragraph="In this article, we are going to see how the INNER JOIN works in SQL, and how you.."
                    link="https://vladmihalcea.com/sql-inner-join/"
                  />
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <nav>
                  <ul class="pagination justify-content-center">
                    <li class="page-item ">
                      <Link class="page-link" to="/prog_lan_blog3">
                        Prev
                      </Link>
                    </li>
                    <li class="page-item ">
                      <Link class="page-link" to="/prog_lan_blog2">
                        2
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="/prog_lan_blog3">
                        3
                      </Link>
                    </li>
                    <li class="page-item active">
                      <Link class="page-link" to="/prog_lan_blog4">
                        4
                      </Link>
                    </li>
                    <li class="page-item ">
                      <Link class="page-link" to="/prog_lan_blog5">
                        5
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="/prog_lan_blog5">
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
