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
                    tag1="Node js"
                    tag2="api"
                    title="How to Use SSL/TLS with Node.js"
                    paragraph="In 2020, there’s no reason for your website not to use HTTPS. Visitors expect it, Google uses it as a ranking factor and browser makers will happily name and shame those sites not using it."
                    link="https://www.sitepoint.com/how-to-use-ssltls-with-node-js/"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="javasript"
                    tag2="nodejs"
                    title="Five Ways to Lazy Load Images for Better Website Performance"
                    paragraph="With images being among the most popular type of content on the web, page load time on websites can easily become an issue."
                    link="https://www.sitepoint.com/five-techniques-lazy-load-images-website-performance/?utm_source=rss"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="website"
                    tag2="html"
                    title="How Fast Should My Website Be? [+7 Tips for Speeding Up Your Site]"
                    paragraph="Did you know that for every second faster your website loads, you increase conversions by 7%?"
                    link="https://www.webfx.com/blog/web-design/how-fast-should-my-website-be/"
                  />
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <nav>
                  <ul class="pagination justify-content-center">
                    <li class="page-item">
                      <Link class="page-link" to="/webdesign_blog4">
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
                    <li class="page-item active">
                      <Link class="page-link" to="/webdesign_blog5">
                        5
                      </Link>
                    </li>
                    <li class="page-item ">
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
                      <Link class="page-link" to="/webdesign_blog6">
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
