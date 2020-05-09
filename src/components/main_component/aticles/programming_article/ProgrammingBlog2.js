import React, { Component } from "react";
import HeaderBannerSection from "../../HeaderBannerSection";
import RightSideSection from "../../../right_section/RightSideSection";
import PostCard from "../../PostCard";
import ArticlePostCard from "../ArticlePostCard";

import { Link } from "react-router-dom";
import Discuss from "../../Discuss";

class ProgrammingBlog2 extends Component {
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
                    imgsource="python_learning_blog.jpeg"
                    tag1="python"
                    tag2="developer"
                    title="8 must have Skills to be Successful Python Developer"
                    paragraph="With the rising popularity of Python programming language and expanding demand of a Python developer in the market,"
                    link="https://thepythonguru.com/8-must-have-skills-to-be-successful-python-developer/"
                  />
                  <ArticlePostCard
                    imgsource="python_learning_blog.jpeg"
                    tag1="python"
                    tag2="emails"
                    title="Sending Emails in Python - Tutorial with Code Examples"
                    paragraph="What do you need to send an email with Python? Some basic programming and web knowledge along with the elementary Python skills."
                    link="https://thepythonguru.com/sending-emails-in-python-tutorial-with-code-examples/What do you need to send an email with Python? Some basic programming and web knowledge along with the elementary Python skills."
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="Programming Language "
                    tag2="Python"
                    title="Reasons to Use Python Over Other Programming Languages"
                    paragraph="The modern IT market provides various programming languages like C#, Java, Python, and more. "
                    link="https://thepythonguru.com/reasons-to-use-python-over-other-programming-languages/"
                  />
                </div>

                <div className="card-deck m-2">
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="browser"
                    tag2="python"
                    title="Running Python in the Browser"
                    paragraph="Running Python in the web browser has been getting a lot of attention lately. "
                    link="https://pythontips.com/2019/05/22/running-python-in-the-browser/"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="Django "
                    tag2="Database"
                    title="How to Create an Index in Django Without Downtime"
                    paragraph="Managing database migrations is a great challenge in any software project. Luckily, as of version 1.7, Django comes with a built-in migration framework."
                    link="http://www.pybloggers.com/2019/04/how-to-create-an-index-in-django-without-downtime/"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="Datastructure"
                    tag2="connectivity"
                    title="Dynamic Connectivity Problem"
                    paragraph="Pixels in a digital photo, Computers in a network, People on a social network are all connected objects."
                    link="https://medium.com/omarelgabrys-blog/dynamic-connectivity-problem-9460f3dff2c6"
                  />
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <nav>
                  <ul class="pagination justify-content-center">
                    <li class="page-item ">
                      <Link class="page-link" to="prog_lan_blog">
                        Prev
                      </Link>
                    </li>
                    <li class="page-item ">
                      <Link class="page-link" to="prog_lan_blog">
                        1
                      </Link>
                    </li>
                    <li class="page-item active">
                      <Link class="page-link" to="prog_lan_blog2">
                        2
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="prog_lan_blog3">
                        3
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="prog_lan_blog4">
                        4
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="prog_lan_blog3">
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <h3 className="mt-4 mb-2" style={{ color: "#072C71" }}>
                Discuss with the Community
              </h3>
              <Discuss
                url="https://www.datacode.in/?p=/react-datacode/#/index_articles"
                title="Communities Learning Blogs"
                identifier="index_articles"
              />
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

export default ProgrammingBlog2;
