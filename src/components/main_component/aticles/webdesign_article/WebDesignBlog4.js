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
                    tag1="rest api"
                    tag2="nodejs"
                    title="Creating a Secure REST API in Node.js"
                    paragraph="Consider all the software that you use in your life. It doesn’t matter if you’re a developer or a regular user that just casually browses  "
                    link="https://www.toptal.com/nodejs/secure-rest-api-in-nodejs"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="nodejs"
                    tag2="webdevelopment"
                    title="Converting Callbacks to Promises in Node.js"
                    paragraph="A few years back, callbacks were the only way we could achieve asynchronous code execution in JavaScript."
                    link="https://stackabuse.com/converting-callbacks-to-promises-in-node-js/"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="website"
                    tag2="build"
                    title="How to Build a Time-Saving Appointment and Event Booking Website"
                    paragraph="Want to build an appointment and event booking website that gives your clients more time to do business than handle the logistics of it? "
                    link="https://tympanus.net/codrops/2020/03/19/how-to-build-a-time-saving-appointment-and-event-booking-website/"
                  />
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <nav>
                  <ul class="pagination justify-content-center">
                    <li class="page-item">
                      <Link class="page-link" to="/webdesign_blog3">
                        Prev
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="/webdesign_blog">
                        1
                      </Link>
                    </li>
                    <li class="page-item ">
                      <Link class="page-link" to="/webdesign_blog2">
                        2
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="/webdesign_blog3">
                        3
                      </Link>
                    </li>
                    <li class="page-item active">
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
                      <Link class="page-link" to="/webdesign_blog5">
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
