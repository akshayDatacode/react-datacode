import React, { Component } from "react";
import HeaderBannerSection from "../HeaderBannerSection";
import { Link } from "react-router-dom";
import PostCard from "../PostCard";
import RightSideSection from "../../right_section/RightSideSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

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
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-8 mt-4">
            <h2 className="text-center mb-4">Community Blogs</h2>
            <Link to="/home" className="badge badge-primary mr-1">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>
            <Link to="/index_articles" className="badge badge-warning mr-1">
              Blogs >
            </Link>
            <div className="card-deck m-2">
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
              <PostCard
                imgsource="machine_blog.jpeg"
                title="Machine Learning Blogs"
                link="/machine_learning_blog"
              />
            </div>
          </div>
          <div className="col-md-3">
            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default IndexArticles;
