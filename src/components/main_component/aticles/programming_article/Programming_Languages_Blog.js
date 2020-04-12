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
                    imgsource="python_learning_blog.jpeg"
                    tag1="python"
                    tag2="python 101"
                    title="Python 101 – Working with Strings"
                    paragraph="You will be using strings very often when you program. A string is a series of letters surrounded by single, double or triple quotes."
                    link="https://www.blog.pythonlibrary.org/2020/04/07/python-101-working-with-strings/"
                  />
                </div>

                <div className="card-deck m-2">
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="java"
                    tag2="datastructure"
                    title="Data structures and algorithms in Java: A beginner's guide"
                    paragraph="Learn all about array and list data structures in Java, and the algorithms you can use to search and sort the data they contain"
                    link="https://www.javaworld.com/article/3527188/data-structures-and-algorithms-in-java-a-beginners-guide.html"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="kubernets"
                    tag2="java"
                    title="Your own Kubernetes controller - Developing in Java"
                    paragraph="As a use-case, we will implement the sidecar pattern: every time a pod gets scheduled, a sidecar pod will be scheduled along it as well. If the former is removed, the latter needs to be as well."
                    link="https://blog.frankel.ch/your-own-kubernetes-controller/2/"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="Asynchronous Programming"
                    tag2="Java"
                    title="Asynchronous Programming in Java"
                    paragraph="With the growing demand for writing non-blocking code, we need ways to execute the code asynchronously."
                    link="https://www.baeldung.com/java-asynchronous-programming"
                  />
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <nav>
                  <ul class="pagination justify-content-center">
                    <li class="page-item active">
                      <Link class="page-link" to="/prog_lan_blog">
                        1
                      </Link>
                    </li>
                    <li class="page-item ">
                      <Link class="page-link" to="prog_lan_blog2">
                        2
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="prog_lan_blog3">
                        3
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="prog_lan_blog4">
                        4
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="prog_lan_blog2">
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
