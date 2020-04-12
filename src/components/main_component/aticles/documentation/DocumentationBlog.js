import React, { Component } from "react";
import HeaderBannerSection from "../../HeaderBannerSection";
import RightSideSection from "../../../right_section/RightSideSection";
import PostCard from "../../PostCard";
import ArticlePostCard from "../ArticlePostCard";
import { Link } from "react-router-dom";
class DocumentationBlog extends Component {
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
                <h1>Documentation</h1>
                <div className="card-deck m-2">
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="React native"
                    title="React native documentation"
                    paragraph="Welcome to the very start of your React Native journey! If you're looking for environment setup instructions, "
                    link="https://reactnative.dev/docs/getting-started"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="Node js "
                    title="Node js Documentation"
                    paragraph="There are several types of documentation available on this website"
                    link="https://nodejs.org/en/docs/"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="Swift"
                    title="Swift Documentation"
                    paragraph="You can use the resources on this page as documentation for the Swift language.  "
                    link="https://swift.org/documentation/"
                  />
                </div>

                <div className="card-deck m-2">
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="Flutter"
                    title="Flutter Documentation"
                    paragraph="To install and run Flutter, your development environment must meet these minimum requirements:"
                    link="https://flutter.dev/docs"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="Android"
                    title="Documentation for android developers"
                    paragraph="Whether you're building for Android handsets, Wear OS by Google, Android TV, Android Auto, or Android Things,"
                    link="https://developer.android.com/docs"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="datascience"
                    title="Welcome to datascience’s documentation!"
                    paragraph="The datascience package was written for use in Berkeley’s DS 8 course and contains useful functionality "
                    link="http://data8.org/datascience/"
                  />
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <nav>
                  <ul class="pagination justify-content-center">
                    <li class="page-item active">
                      <Link class="page-link" to="/documentation_blog">
                        1
                      </Link>
                    </li>
                    <li class="page-item ">
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
                      <Link class="page-link" to="/documentation_blog2">
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

export default DocumentationBlog;
