import React, { Component } from "react";
import HeaderBannerSection from "../HeaderBannerSection";
import { Link } from "react-router-dom";
import PostCard from "../PostCard";
import RightSideSection from "../../right_section/RightSideSection";
class IndexArticles extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-8 mt-4">
            <h2 className="text-center mb-4">Community Blogs</h2>
            <div className="card-deck m-2">
              <PostCard
                imgsource="programming_boooks.jpeg"
                title="Programming Languages Blogs"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/prog_lan_blog"
              />
              <PostCard
                imgsource="programming_boooks.jpeg"
                title="Web Design Blogs"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/webdesign_blog"
              />
              <PostCard
                imgsource="programming_boooks.jpeg"
                title="Machine Learning Blogs"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
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
