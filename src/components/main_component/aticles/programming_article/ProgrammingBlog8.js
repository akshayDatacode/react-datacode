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
                    tag2="instagram"
                    tag3="chatbot"
                    title="How to Make an Instagram Bot With Python and InstaPy"
                    paragraph="How can an automation script gain you more followers and likes? Before answering this question..."
                    link="https://realpython.com/instagram-bot-python-instapy/"
                  />
                  <ArticlePostCard
                    imgsource="python_learning_blog.jpeg"
                    tag1="python"
                    tag2="maps"
                    title="Creating Beautiful Maps with Python Beyond the defaults"
                    paragraph="Making maps with geo pandas is very easy but I have to admit..."
                    link="https://towardsdatascience.com/creating-beautiful-maps-with-python-beyond-the-defaults-c92593ccf2cc"
                  />
                  <ArticlePostCard
                    imgsource="python_learning_blog.jpeg"
                    tag1="python"
                    tag2="clean code"
                    title="Nine simple steps for better-looking python code"
                    paragraph="Regularly I look at Code Suppliments academic papers, relased datasets or analyze the solution"
                    link="https://towardsdatascience.com/nine-simple-steps-for-better-looking-python-code-87e5d9d3b1cf"
                  />
                </div>

                <div className="card-deck m-2">
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="Datastructure"
                    tag2="sets"
                    title="Partially Ordered Sets"
                    paragraph="This post is motivated by a problem I recently saw, Problem G of NCPC 2007. This is a standard problem that I'm sure many of you have seen before, but the general topic of partially ordered sets is not too well known."
                    link="https://codeforces.com/blog/entry/3781"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="datastructure"
                    tag2="Algorithms"
                    title="How you can change the world by learning Data Structures and Algorithms"
                    paragraph="As a developer, you have the power to change the world! You can write programs that enable new technologies. For instance, develop software to find an earlier diagnosis of diseases."
                    link="https://adrianmejia.com/how-you-can-change-the-world-learning-data-structures-algorithms-free-online-course-tutorial/"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="Flutter"
                    tag2="App"
                    title="Measuring Your Heart Rate Using Your Phone’s Camera and Flutter"
                    paragraph="IN this article, I'll explain how you can develop a simple app with flutter that measures heart rate... "
                    link="https://medium.com/better-programming/measuring-your-heart-rate-using-your-phones-camera-and-flutter-f444d3c4272a"
                  />
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <nav>
                  <ul class="pagination justify-content-center">
                    <li class="page-item">
                      <Link class="page-link" to="/prog_lan_blog7">
                        Prev
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="/prog_lan_blog6">
                        6
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="/prog_lan_blog7">
                        7
                      </Link>
                    </li>
                    <li class="page-item active">
                      <Link class="page-link" to="/prog_lan_blog8">
                        8
                      </Link>
                    </li>
                    <li class="page-item ">
                      <Link class="page-link" to="/prog_lan_blog9">
                        9
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="/prog_lan_blog9">
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
