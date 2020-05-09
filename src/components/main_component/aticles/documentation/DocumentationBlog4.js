import React, { Component } from "react";
import { Link } from "react-router-dom";
import Discuss from "../../Discuss";
import RightSideSection from "../../../right_section/RightSideSection";

class DBMSBlog extends Component {
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
              <div className="row"></div>
              <div className="row justify-content-center mt-3">
                <nav>
                  <ul class="pagination justify-content-center">
                    <li class="page-item active">
                      <Link class="page-link" to="/prog_lan_blog">
                        1
                      </Link>
                    </li>
                    <li class="page-item ">
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
                      <Link class="page-link" to="prog_lan_blog2">
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

export default DBMSBlog;
