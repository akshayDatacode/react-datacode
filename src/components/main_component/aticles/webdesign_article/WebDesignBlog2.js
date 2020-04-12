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
                    tag1="React"
                    tag2="Reactjs"
                    title="A Quick Tour Through a React Component Lifecycle"
                    paragraph="When a component is created in React, a very intricate lifecycle is created as well. But not to worry! "
                    link="https://levelup.gitconnected.com/a-quick-tour-through-a-react-component-lifecycle-ff3610bb97b9"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="Javascript"
                    tag2="functions"
                    title="JavaScript Best Practices — Declarations and Functions"
                    paragraph="Javascript is a very forgiving language. its's easy to write code that runs but has mistakes in it. "
                    link="https://medium.com/@hohanga/javascript-best-practices-declarations-and-functions-a690689c106e"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="graphics"
                    tag2="design"
                    title="Goodbye, Clean Code"
                    paragraph="But it was repetitive. Each shape (such as a rectangle or an oval) had a different set of handles, and dragging each handle in different directions affected the shape’"
                    link="https://overreacted.io/goodbye-clean-code/"
                  />
                </div>
                <div className="card-deck m-2">
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="javascript"
                    tag2="interview"
                    title="What Is JavaScript Made Of?"
                    paragraph="Even though I could build websites with frameworks, something was missing. I dreaded JavaScript job interviews"
                    link="https://overreacted.io/what-is-javascript-made-of/"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="react"
                    tag2="hooks"
                    title="State Management in Pure React with Hooks: useEffect"
                    paragraph="Hooks are the new features added to the React API. They let you use state and other React features in the functional component."
                    link="https://dev.to/bipinrajbhar/state-management-in-pure-react-with-hooks-useeffect-5bn6"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="devtool"
                    tag2="webdesign"
                    title="9 ways to level up your browser devtool skills"
                    paragraph="This is a list of amazing things that browsers can help you with while developing web applications."
                    link="https://dev.to/sendilkumarn/level-up-your-browser-skills-8gh"
                  />
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <nav>
                  <ul class="pagination justify-content-center">
                    <li class="page-item ">
                      <Link class="page-link" to="/webdesign_blog">
                        Prev
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="/webdesign_blog">
                        1
                      </Link>
                    </li>
                    <li class="page-item active">
                      <Link class="page-link" to="/webdesign_blog2">
                        2
                      </Link>
                    </li>
                    <li class="page-item ">
                      <Link class="page-link" to="/webdesign_blog3">
                        3
                      </Link>
                    </li>
                    <li class="page-item">
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
                      <Link class="page-link" to="/webdesign_blog3">
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
