import React, { Component } from "react";
import HeaderBannerSection from "../../HeaderBannerSection";
import RightSideSection from "../../../right_section/RightSideSection";
import PostCard from "../../PostCard";
import ArticlePostCard from "../ArticlePostCard";

import { Link } from "react-router-dom";

class WebDesignBlog3 extends Component {
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
              <h2 className="text-center mb-4">WebDesign Community Blogs</h2>
              <Link to="/home" className="badge badge-primary mr-1">
                Home >
              </Link>
              <Link to="/index_articles" className="badge badge-warning mr-1">
                Blogs >
              </Link>
              <div className="row">
                <div className="card-deck m-2">
                  <ArticlePostCard
                    imgsource="react.jpeg"
                    tag1="React"
                    tag2="folder"
                    title="React Folder Structure in 5 Steps"
                    paragraph="How to structure large React apps into folders and files is a highly opinionated topic. I struggled for a while writing about this subject,"
                    link="https://www.robinwieruch.de/react-folder-structure"
                  />
                  <ArticlePostCard
                    imgsource="node_express.jpeg"
                    tag1="express.js"
                    tag2="node.js"
                    title="How to setup Express.js in Node.js"
                    paragraph="Express.js is the most popular choice when it comes to building web applications with Node.js. "
                    link="robinwieruch.de/node-js-express-tutorial"
                  />
                  <ArticlePostCard
                    imgsource="firebase_react.jpeg"
                    tag1="firebase"
                    tag2="react"
                    title="A Firebase in React Tutorial for Beginners [2019]"
                    paragraph="This comprehensive tutorial walks you through a real-world application using React and Firebase. React is used to display applications"
                    link="https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial"
                  />
                </div>
                <div className="card-deck m-2">
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="fundamentals"
                    tag2="react"
                    title="The Road to React [Book 2020]"
                    paragraph="The Road to React teaches the fundamentals of React. You will build a real-world application in plain React without complicated tooling. "
                    link="https://www.robinwieruch.de/the-road-to-learn-react"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="wordpress"
                    tag2="blogs"
                    title="How to Start a WordPress Blog the RIGHT WAY in 7 Easy Steps (2020)"
                    paragraph="Do you want to start a WordPress blog the right way? We know that starting a blog can be a terrifying thought specially when you are not geeky."
                    link="https://www.wpbeginner.com/start-a-wordpress-blog/"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="wordpress"
                    tag2="issues"
                    title="How to Fix Common Image Issues in WordPress"
                    paragraph="WordPress comes with some pretty neat tools to manage and edit images. You can easily upload images, align them, and even edit them inside WordPress."
                    link="https://www.wpbeginner.com/beginners-guide/how-to-fix-common-image-issues-in-wordpress/"
                  />
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <nav>
                  <ul class="pagination justify-content-center">
                    <li class="page-item ">
                      <Link class="page-link" to="/webdesign_blog2">
                        Prev
                      </Link>
                    </li>
                    <li class="page-item ">
                      <Link class="page-link" to="/webdesign_blog">
                        1
                      </Link>
                    </li>
                    <li class="page-item ">
                      <Link class="page-link" to="/webdesign_blog2">
                        2
                      </Link>
                    </li>
                    <li class="page-item active">
                      <Link class="page-link" to="/webdesign_blog3">
                        3
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="/webdesign_blog4">
                        4
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="/webdesign_blog5">
                        5
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="/webdesign_blog4">
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

export default WebDesignBlog3;
