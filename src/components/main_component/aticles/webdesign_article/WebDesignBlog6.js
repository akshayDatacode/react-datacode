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
                    tag1="webdesign"
                    tag2="technology"
                    title="A peek into the future of technology and accessibility"
                    paragraph="Exploring how disabilities can be the driving force for technological breakthroughs."
                    link="https://uxplanet.org/a-peek-into-the-future-of-technology-and-accessibility-a481484790a5"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="web"
                    tag2="accessibility"
                    title="Web Accessibility: Do’s and Don’ts"
                    paragraph="Internet is the biggest source of information in our time, how would you feel if you weren’t able to access it? Frustrated right?"
                    link="https://medium.com/@david.bergmann/web-accessibility-dos-and-don-ts-b3d3542f341d"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="Webdesign"
                    title="Vulnerability in Design"
                    paragraph="Is there a secret to being a great designer? What do great designers all have in common? Is it purely based on talent and a keen eye, or is it something more?"
                    link="https://uxdesign.cc/vulnerability-in-design-fa5b72f6b3e3"
                  />
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <nav>
                  <ul class="pagination justify-content-center">
                    <li class="page-item">
                      <Link class="page-link" to="/webdesign_blog5">
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
                    <li class="page-item active">
                      <Link class="page-link" to="/webdesign_blog6">
                        6
                      </Link>
                    </li>
                    <li class="page-item ">
                      <Link class="page-link" to="/webdesign_blog7">
                        7
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="/webdesign_blog7">
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
