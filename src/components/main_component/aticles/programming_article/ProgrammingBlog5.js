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
                    tag1="facebook"
                    tag2="data"
                    title="Data Transfer Project: Enabling portability of photos and videos between services"
                    paragraph="Over the past year, an open source framework has been developed. Today, we are announcing a new tool on Facebook that allows "
                    link="https://engineering.fb.com/security/data-transfer-project/"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="programming languag"
                    tag2="c++"
                    title="Stork: How to Make a Programming Language in C++"
                    paragraph="In this series, we will develop a new scripting language and describe that process step by step."
                    link="https://www.toptal.com/c-plus-plus/creating-programming-language-in-c-"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="Ruby on Rails"
                    tag2="apps"
                    title="Timestamp Truncation: A Ruby on Rails ActiveRecord Tale"
                    paragraph="Tests are supposed to help keep apps from being flaky. But once in a while, tests themselves can become flaky—even the most straightforward ones. "
                    link="https://www.toptal.com/ruby-on-rails/timestamp-truncation-rails-activerecord-tale"
                  />
                </div>

                <div className="card-deck m-2">
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="Programming"
                    tag2="scripting"
                    title="Difference between Programming Language and Scripting Language"
                    paragraph="A programming language is a language used to write set of instructions to perform a task or to get an output from it,"
                    link="https://www.thecrazyprogrammer.com/2020/03/difference-between-programming-language-and-scripting-language.html"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="Computer science"
                    tag2="women"
                    title="Why Are There So Few Women in Computer Science?"
                    paragraph="It is widely accepted that women play a key role in our lives. Women are mothers and the modern female entrepreneur is ubiquitous,"
                    link="https://www.thecrazyprogrammer.com/2020/02/why-are-there-so-few-women-in-computer-science.html"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="Flutter"
                    tag2="API"
                    title="Flutter Networking Tutorial: Getting Started"
                    paragraph="In this tutorial, you’ll learn how to make asynchronous network requests and handle the responses in a Flutter app"
                    link="https://www.raywenderlich.com/5896601-flutter-networking-tutorial-getting-started"
                  />
                </div>

                <div className="card-deck m-2">
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="Bubbles"
                    tag2="Android"
                    title="Bubbles Tutorial for Android 10: Getting Started"
                    paragraph="In this Bubbles for Android 10 tutorial, you’ll learn how to use the Bubble API"
                    link="raywenderlich.com/8220197-bubbles-tutorial-for-android-10-getting-started"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="Android"
                    tag2="kotlin"
                    title="Android Networking With Kotlin Tutorial: Getting Started"
                    paragraph="In this tutorial, you’ll get started with Android networking by creating a simple app"
                    link="https://www.raywenderlich.com/6994782-android-networking-with-kotlin-tutorial-getting-started"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="Java"
                    tag2="Basics"
                    title="Does Java 'pass-by-reference' or 'pass-by-value'?"
                    paragraph="This may sound unintuitive for some, as it's common for lectures to showcase the difference between"
                    link="https://stackabuse.com/does-java-pass-by-reference-or-pass-by-value/"
                  />
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <nav>
                  <ul class="pagination justify-content-center">
                    <li class="page-item ">
                      <Link class="page-link" to="/prog_lan_blog4">
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
                    <li class="page-item">
                      <Link class="page-link" to="/prog_lan_blog4">
                        4
                      </Link>
                    </li>
                    <li class="page-item active">
                      <Link class="page-link" to="/prog_lan_blog5">
                        5
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="/prog_lan_blog6">
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
