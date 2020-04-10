import React, { Component } from "react";
import HeaderBannerSection from "../../HeaderBannerSection";
import RightSideSection from "../../../right_section/RightSideSection";
import PostCard from "../../PostCard";
import ArticlePostCard from "../ArticlePostCard";

import { Link } from "react-router-dom";

class MachineLearningBlog extends Component {
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

              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="JavaScript"
                  tag2="programming"
                  title="Learn JavaScript concepts by building a random quote generator"
                  paragraph="Learning JavaScript is fun. But What's the point if you are not building stuff with it. So in this article,"
                  link="https://thenextbigwriter.tech/learn-javascript-concepts-by-building-a-random-quote-generator-ck8fmvz6j014qyys1i204knru"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="JavaScript"
                  tag2="methods"
                  title="What is `this` inside foo.bar()?"
                  paragraph="Calling a method directly works as expected.
                  But when we pass a method as callback, it loses"
                  link="https://blog.bendtherul.es/what-is-this-inside-foobar-ck8dzlitm01atxjs1322jz9a2"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="python"
                  tag2="python 101"
                  title="Python 101 – Working with Strings"
                  paragraph="You will be using strings very often when you program. A string is a series of letters surrounded by single, double or triple quotes."
                  link="https://www.blog.pythonlibrary.org/2020/04/07/python-101-working-with-strings/"
                />
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

export default MachineLearningBlog;
