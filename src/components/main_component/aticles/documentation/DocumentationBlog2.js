import React, { Component } from "react";
import HeaderBannerSection from "../../HeaderBannerSection";
import RightSideSection from "../../../right_section/RightSideSection";
import PostCard from "../../PostCard";
import ArticlePostCard from "../ArticlePostCard";
import { Link } from "react-router-dom";
class DBMSBlog extends Component {
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
              <h2 className="text-center mb-4">Documentation</h2>
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
                    tag1="Bootstrap"
                    title="Bootstrap Documentation"
                    paragraph="Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with"
                    link="https://getbootstrap.com/docs/4.1/getting-started/introduction/"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="Django"
                    title="Django documentation"
                    paragraph="Everything you need to know about Django. "
                    link="https://docs.djangoproject.com/en/3.0/"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="Java"
                    title="Java Documentation"
                    paragraph="Whether you are working on a new cutting edge app or simply ramping up on new technology, Java documentation has all the information "
                    link="https://docs.oracle.com/en/java/"
                  />
                </div>

                <div className="card-deck m-2">
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="C"
                    title="C Programming Language"
                    paragraph="The interface of C standard library is defined by the following collection of headers."
                    link="https://devdocs.io/c/"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="C++"
                    title="C++ Programming Language"
                    paragraph="The interface of C++ standard library is defined by the following collection of headers."
                    link="https://devdocs.io/cpp/"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="Javascript"
                    title="JavaScript"
                    paragraph=" This part of the JavaScript section on MDN serves as a repository of facts about the JavaScript language"
                    link="https://devdocs.io/javascript/"
                  />
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <nav>
                  <ul class="pagination justify-content-center">
                    <li class="page-item ">
                      <Link class="page-link" to="/documentation_blog">
                        prev
                      </Link>
                    </li>
                    <li class="page-item ">
                      <Link class="page-link" to="/documentation_blog">
                        1
                      </Link>
                    </li>
                    <li class="page-item active">
                      <Link class="page-link" to="/documentation_blog2">
                        2
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="/documentation_blog3">
                        3
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="/documentation_blog3">
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

export default DBMSBlog;
