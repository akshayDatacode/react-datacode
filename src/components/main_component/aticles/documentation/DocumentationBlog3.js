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
              <h2 className="text-center mb-4">Documentation Blogs</h2>
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
                    tag1="HTML"
                    title="HTML: Hypertext Markup Language"
                    paragraph="HTML (HyperText Markup Language) is the most basic building block of the Web. "
                    link="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="CSS"
                    title="CSS: Cascading Style Sheets"
                    paragraph="Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML"
                    link="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="DBMS"
                    title="Database Documentation"
                    paragraph="Oracle provides a range of industry-leading on-premises and cloud-based solutions to meet the data management requirements  "
                    link="https://docs.oracle.com/en/database/"
                  />
                </div>

                <div className="card-deck m-2">
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="sql"
                    title="Microsoft SQL documentation"
                    paragraph="Learn how to use Azure SQL Services and SQL Server to manage your database needs, both on-premises and in the cloud."
                    link="https://docs.microsoft.com/en-us/sql/?view=sql-server-ver15"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="Python"
                    title="Python 3.8.2 documentation"
                    paragraph="Welcome! This is the documentation for Python 3.8.2.
                  "
                    link="https://docs.python.org/3/"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="Reactjs"
                    title="getting started with react"
                    paragraph="React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial. "
                    link="https://reactjs.org/docs/getting-started.html"
                  />
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <nav>
                  <ul class="pagination justify-content-center">
                    <li class="page-item">
                      <Link class="page-link" to="/documentation_blog2">
                        Prev
                      </Link>
                    </li>
                    <li class="page-item ">
                      <Link class="page-link" to="/documentation_blog">
                        1
                      </Link>
                    </li>
                    <li class="page-item ">
                      <Link class="page-link" to="/documentation_blog2">
                        2
                      </Link>
                    </li>
                    <li class="page-item active">
                      <Link class="page-link" to="/documentation_blog3">
                        3
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="/documentation_blog">
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
