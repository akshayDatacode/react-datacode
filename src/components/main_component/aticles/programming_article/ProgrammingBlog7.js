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
                    tag1="MySQL"
                    title="MySQL Create User with Password"
                    paragraph="This tutorial explains how to create a user with password in MySQL. We’ll use the MySQL Create User command and describe it "
                    link="https://www.techbeamers.com/mysql-create-user/"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="clientHeight"
                    tag2="offsetHeight"
                    title="Difference between clientHeight and offsetHeight Property"
                    paragraph="You can use the clientHeight property to measure the inner height of an element, including padding."
                    link="https://www.encodedna.com/javascript/difference-between-clientheight-and-offsetheight.htm"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="UML"
                    title="Architecture of UML"
                    paragraph="A model is a way to represent a system. To envision a system, we will build several models.   "
                    link="Architecture of UML"
                  />
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <nav>
                  <ul class="pagination justify-content-center">
                    <li class="page-item">
                      <Link class="page-link" to="/prog_lan_blog6">
                        Prev
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
                    <li class="page-item">
                      <Link class="page-link" to="/prog_lan_blog6">
                        6
                      </Link>
                    </li>
                    <li class="page-item active">
                      <Link class="page-link" to="/prog_lan_blog7">
                        7
                      </Link>
                    </li>
                    <li class="page-item ">
                      <Link class="page-link" to="/prog_lan_blog8">
                        8
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="/prog_lan_blog8">
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
