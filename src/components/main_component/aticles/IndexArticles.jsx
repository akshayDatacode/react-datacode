import React, { Component } from "react";
import HeaderBannerSection from "../HeaderBannerSection";
import { Link } from "react-router-dom";
import PostCard from "../PostCard";
import RightSideSection from "../../right_section/RightSideSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import RecommendPost from "../../right_section/RecommendPost";
import ArticleCardCarousel from "./ArticleCardCarousel";

class IndexArticles extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        {/* Card Code */}
        <HeaderBannerSection imgsource="blog.jpeg" />
        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <h2 className="text-center mb-4">Community Blogs</h2>
              <Link to="/home" className="badge badge-primary mr-1">
                <FontAwesomeIcon icon={faHome} size="2x" />
              </Link>
              <Link to="/index_articles" className="badge badge-warning mr-1">
                Blogs >
              </Link>
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
              <h4 className="text-secondary mt-3">For More Community Blogs</h4>
              <ArticleCardCarousel />
            </div>
            <div className="col-md-4">
              <h5 className="mb-3">Recommended for you</h5>
              <RecommendPost
                imgsource="python_mcqs.jpeg"
                RecPostHading="Python MCQs Questions"
                link="/index_python_mcqs"
              />
              <RecommendPost
                imgsource="java_mcqs.jpeg"
                RecPostHading="Java MCQs Questions"
                link="/index_java_mcqs"
              />
              <RecommendPost
                imgsource="datacodelogo.jpeg"
                RecPostHading="Programminig Quize Test"
                link="/index_quize_tests"
              />
              <RightSideSection />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default IndexArticles;
