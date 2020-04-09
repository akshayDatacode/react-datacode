import React, { Component } from "react";
import HeaderBannerSection from "../../HeaderBannerSection";
import RightSideSection from "../../../right_section/RightSideSection";
import PostCard from "../../PostCard";
import { Link } from "react-router-dom";

class MachineLearningBlog extends Component {
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
              <h2 className="text-center mb-4">
                Machine Learning Community Blogs
              </h2>
              <Link to="/home" className="badge badge-primary mr-1">
                Home >
              </Link>
              <Link to="/index_articles" className="badge badge-warning mr-1">
                Blogs >
              </Link>
              <div className="card-deck m-2">
                <PostCard
                  imgsource="programming_boooks.jpeg"
                  title="Programming Languages Blog"
                  paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                  link="/prog_lan_blog"
                />
                <PostCard
                  imgsource="programming_boooks.jpeg"
                  title="Web Design Blog"
                  paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                  link="/webdesign_blog"
                />
                <PostCard
                  imgsource="programming_boooks.jpeg"
                  title="Web Design Blog"
                  paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                  link="/webdesign_blog"
                />
              </div>
              <div className="card-deck m-2">
                <PostCard
                  imgsource="programming_boooks.jpeg"
                  title="Programming Languages Blog"
                  paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                  link="/prog_lan_blog"
                />
                <PostCard
                  imgsource="programming_boooks.jpeg"
                  title="Web Design Blog"
                  paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                  link="/webdesign_blog"
                />
                <PostCard
                  imgsource="programming_boooks.jpeg"
                  title="Web Design Blog"
                  paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                  link="/webdesign_blog"
                />
              </div>
              <div className="card-deck m-2">
                <PostCard
                  imgsource="programming_boooks.jpeg"
                  title="Programming Languages Blog"
                  paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                  link="/prog_lan_blog"
                />
                <PostCard
                  imgsource="programming_boooks.jpeg"
                  title="Web Design Blog"
                  paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                  link="/webdesign_blog"
                />
                <PostCard
                  imgsource="programming_boooks.jpeg"
                  title="Web Design Blog"
                  paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                  link="/webdesign_blog"
                />
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

export default MachineLearningBlog;
