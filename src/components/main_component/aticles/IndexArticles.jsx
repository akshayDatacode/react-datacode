import React, { Component } from "react";
import HeaderBannerSection from "../HeaderBannerSection";
import { Link } from "react-router-dom";
import PostCard from "../PostCard";
import RightSideSection from "../../right_section/RightSideSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import RecommendPost from "../../right_section/RecommendPost";
import ArticleCardCarousel from "./ArticleCardCarousel";
import Discuss from "../Discuss";
import Technologies from "../../right_section/Technologies";

class IndexArticles extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        {/* Card Code */}
        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-8 ">
              <div className="row mt-2 mb-4">
                <div className="col">
                  <h1
                    className="text-center mb-2 rounded p-2"
                    style={{ backgroundColor: "#06CB6C", color: "#072C71" }}
                  >
                    <FontAwesomeIcon
                      icon={faNewspaper}
                      color="#072C71"
                      size="1x"
                    />{" "}
                    Communities Learning Blogs
                  </h1>
                  <Link
                    to="/home"
                    className="badge mr-1"
                    style={{ backgroundColor: "#06CB6C" }}
                  >
                    <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" />
                  </Link>
                </div>
              </div>
              <div className="row ">
                <div className="col">
                  <div className="card-deck m-2">
                    <PostCard
                      imgsource="web_blog.jpeg"
                      title="Learning Platforms"
                      link="/index_learning_platforms"
                    />
                    <PostCard
                      imgsource="programming_blog.jpeg"
                      title="Programming Languages Blogs"
                      link="/prog_lan_blog"
                    />
                    <PostCard
                      imgsource="web_blog.jpeg"
                      title="Web Design Blogs"
                      link="/webdesign_blog"
                    />
                  </div>
                  <div className="card-deck m-2">
                    <PostCard
                      imgsource="data_web.jpeg"
                      title="DBMS Blogs"
                      link="/dbms_blog"
                    />
                    <PostCard
                      imgsource="tech_docs.jpeg"
                      title="Documentation Blogs"
                      link="/documentation_blog"
                    />
                    <PostCard
                      imgsource="machine_blog.jpeg"
                      title="Machine Learning Blogs"
                      link="/machine_learning_blog"
                    />
                  </div>
                  <h3 className="mt-4 mb-2" style={{ color: "#072C71" }}>
                    Discuss with the Community
                  </h3>
                  <Discuss
                    url="https://www.datacode.in/?p=/react-datacode/#/index_articles"
                    title="Communities Learning Blogs"
                    identifier="index_articles"
                  />
                  <h4 className="mt-4 mb-4" style={{ color: "#072C71" }}>
                    For More Community Blogs
                  </h4>
                  <ArticleCardCarousel />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col"></div>
            </div>

            <div className="col-md-3 mt-5">
              <h5 className="mb-4 mt-5" style={{ color: "#072C71" }}>
                Recommended for you
              </h5>
              <RecommendPost
                imgsource="python_mcq.jpeg"
                RecPostHading="Python MCQs Questions"
                link="/index_python_mcqs"
              />
              <RecommendPost
                imgsource="java_mcq.jpeg"
                RecPostHading="Java MCQs Questions"
                link="/index_java_mcqs"
              />
              <RecommendPost
                imgsource="c_mcq.jpeg"
                RecPostHading="C MCQs Questions"
                link="/index_c_mcqs"
              />
              <RightSideSection />
              <Technologies />

            </div>
          </div>
        </div>
      </>
    );
  }
}

export default IndexArticles;
