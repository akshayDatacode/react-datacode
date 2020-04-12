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
                    imgsource="js.jpeg"
                    tag1="Reactjs"
                    tag2="app"
                    title="Start your next React App with Isomorphic"
                    paragraph="Modern web is all about javascript and its frameworks are growing faster. And if think about its frameworks, React Js has got most of the momentum. "
                    link="https://dev.to/alrubelrana/start-your-next-react-app-with-isomorphic-1i7g"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="articles"
                    tag2="webdevelopment"
                    title="How To Embed Multiple Choice Quiz Questions into Your Article"
                    paragraph="The multiple choice quiz format is perfect for this. I developed a method to embed multiple choice questions in the math articles"
                    link="https://www.freecodecamp.org/news/multiple-choice-quiz-template/"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="website"
                    tag2="react"
                    tag3="blog"
                    title="Get a blog on your website with React and WordPress API"
                    paragraph="There were a few options for incorporating a blog into my site. The main two were a custom content management system (CMS) or"
                    link="https://www.freecodecamp.org/news/get-a-blog-on-your-website-with-react-and-wordpress-api-c63ff81b388e/"
                  />
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <nav>
                  <ul class="pagination justify-content-center">
                    <li class="page-item">
                      <Link class="page-link" to="/webdesign_blog6">
                        Prev
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="/webdesign_blog3">
                        3
                      </Link>
                    </li>
                    <li class="page-item ">
                      <Link class="page-link" to="/webdesign_blog4">
                        4
                      </Link>
                    </li>
                    <li class="page-item ">
                      <Link class="page-link" to="/webdesign_blog5">
                        5
                      </Link>
                    </li>
                    <li class="page-item ">
                      <Link class="page-link" to="/webdesign_blog6">
                        6
                      </Link>
                    </li>
                    <li class="page-item active">
                      <Link class="page-link" to="/webdesign_blog7">
                        7
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="/webdesign_blog">
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
