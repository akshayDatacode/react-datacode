import React, { Component } from "react";
import HeaderBannerSection from "../../HeaderBannerSection";
import RightSideSection from "../../../right_section/RightSideSection";
import PostCard from "../../PostCard";
import ArticlePostCard from "../ArticlePostCard";

import { Link } from "react-router-dom";

class ProgrammingBlog3 extends Component {
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
                    imgsource="js.jpeg"
                    tag1="android"
                    tag2="developer"
                    title="Customizable Delivery Options in Android"
                    paragraph="Android App bundles solve some previous problems in android development by providing.."
                    link="https://medium.com/kayvan-kaseb/customizable-delivery-options-in-android-582cc6f3e43a"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="cryptocurrency "
                    tag2="blockchain"
                    title="The Difference Between Cryptocurrency and Blockchain"
                    paragraph="You probably have heard the terms cryptocurrency and blockchain quite a bit, but maybe don't exactly...."
                    link="https://medium.com/illumination/the-difference-between-cryptocurrency-and-blockchain-1d8c27282943"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="VR"
                    tag2="lockdown"
                    title="VR Games to Play in Lockdown"
                    paragraph="Right now we all ar or should be on some sort of lockdown..."
                    link="https://medium.com/super-jump/vr-games-to-play-in-lockdown-3d11079b59c5"
                  />
                </div>
                <div className="card-deck m-2">
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="AR"
                    tag2="Design"
                    title="How the Fantastical, Futuristic Art of AR Face Filters Is Subverting Traditional Notions of Beauty"
                    paragraph="Reality-bending AR lenses imagined by a new generation of designers are redefining our relationships with our digital selves"
                    link="https://medium.com/aiga-eye-on-design/how-the-fantastical-futuristic-art-of-ar-face-filters-is-subverting-traditional-notions-of-beauty-b2ab1041ed68"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="  UIKit"
                    tag2="SwiftUI"
                    title="How to Access the UIKit Components Under SwiftUI Objects"
                    paragraph="How to disable scrolling in a list by accessing the UIScrollView and more
                  "
                    link="https://medium.com/better-programming/how-to-access-the-uikit-components-under-swiftui-objects-4a808568014a"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="Swift"
                    tag2="array"
                    title="Sorting an Array in Swift"
                    paragraph="Arrays in swift are collection of data, but these can be sorted with both sort() and sorted()"
                    link="https://medium.com/swlh/sorting-an-array-in-swift-9f67b4a24c95"
                  />
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <nav>
                  <ul class="pagination justify-content-center">
                    <li class="page-item ">
                      <Link class="page-link" to="prog_lan_blog2">
                        Prev
                      </Link>
                    </li>
                    <li class="page-item ">
                      <Link class="page-link" to="prog_lan_blog">
                        1
                      </Link>
                    </li>
                    <li class="page-item ">
                      <Link class="page-link" to="prog_lan_blog2">
                        2
                      </Link>
                    </li>
                    <li class="page-item active">
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
                      <Link class="page-link" to="prog_lan_blog4">
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

export default ProgrammingBlog3;
