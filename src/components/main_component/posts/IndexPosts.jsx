import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PostCard from "./PostCard";

class IndexPosts extends Component {
  state = {};
  render() {
    return (
      <>
        <div class="row bg-primary pt-2 pb-2  rounded">
          <div className="col-12">
            <div className="row">
              <div className=" col-md-4 col-sm mb-2 mt-2">
                <Link to="/dbms_interview_question">
                  <PostCard
                    require="dbms_interview_question.jpeg.jpeg"
                    titelHead="DBMS Interview Questions"
                    paragraph="also the rst starting education why dont know how but because of this we are fonf fgdfslsk sg;gk fs;lskg gf;gkg dggk;lfkglk dfgdlfgk  "
                  />
                </Link>
              </div>

              <div className="col-md-4 col-sm mb-2 mt-2">
                <Link to="/dbms_interview_question">
                  <PostCard
                    require="sql1.jpeg"
                    titelHead="SQL Interview Questions"
                    paragraph="finest and first starting education why dont know how but because of this we are fonf fgdfslsk sg;gk fs;lskg gf;gkg dggk;lfkglk dfgdlfgk  "
                  />
                </Link>
              </div>

              <div className="col-md-4 col-sm mb-2 mt-2 ">
                <Link to="/dbms_interview_question">
                  <PostCard
                    require="pythontech.jpeg"
                    titelHead="Pthon Interview Questions"
                    paragraph="irst starting educatidfdfdfdfdfon why dont know how but because of this we are fonf fgdfslsk sg;gk fs;lskg gf;gkg dggk;lfkglk dfgdlfgk  "
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div class="row bg-warning pt-2 pb-2 mt-3 rounded">
          <div className="col-12">
            <div className="row">
              <div className=" col-md-4 col-sm mb-2 mt-2">
                <Link to="/dbms_interview_question">
                  <PostCard
                    require="dbms_interview_question.jpeg.jpeg"
                    titelHead="DBMS Interview Questions"
                    paragraph="also the rst starting education why dont know how but because of this we are fonf fgdfslsk sg;gk fs;lskg gf;gkg dggk;lfkglk dfgdlfgk  "
                  />
                </Link>
              </div>

              <div className="col-md-4 col-sm mb-2 mt-2">
                <Link to="/dbms_interview_question">
                  <PostCard
                    require="sql1.jpeg"
                    titelHead="SQL Interview Questions"
                    paragraph="finest and first starting education why dont know how but because of this we are fonf fgdfslsk sg;gk fs;lskg gf;gkg dggk;lfkglk dfgdlfgk  "
                  />
                </Link>
              </div>

              <div className="col-md-4 col-sm mb-2 mt-2 ">
                <Link to="/dbms_interview_question">
                  <PostCard
                    require="pythontech.jpeg"
                    titelHead="Pthon Interview Questions"
                    paragraph="irst starting educatidfdfdfdfdfon why dont know how but because of this we are fonf fgdfslsk sg;gk fs;lskg gf;gkg dggk;lfkglk dfgdlfgk  "
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div class="row bg-secondary pt-2 pb-2 mt-3 rounded">
          <div className="col-12">
            <div className="row">
              <div className=" col-md-4 col-sm mb-2 mt-2">
                <Link to="/dbms_interview_question">
                  <PostCard
                    require="dbms_interview_question.jpeg.jpeg"
                    titelHead="DBMS Interview Questions"
                    paragraph="also the rst starting education why dont know how but because of this we are fonf fgdfslsk sg;gk fs;lskg gf;gkg dggk;lfkglk dfgdlfgk  "
                  />
                </Link>
              </div>

              <div className="col-md-4 col-sm mb-2 mt-2">
                <Link to="/dbms_interview_question">
                  <PostCard
                    require="sql1.jpeg"
                    titelHead="SQL Interview Questions"
                    paragraph="finest and first starting education why dont know how but because of this we are fonf fgdfslsk sg;gk fs;lskg gf;gkg dggk;lfkglk dfgdlfgk  "
                  />
                </Link>
              </div>

              <div className="col-md-4 col-sm mb-2 mt-2 ">
                <Link to="/dbms_interview_question">
                  <PostCard
                    require="pythontech.jpeg"
                    titelHead="Pthon Interview Questions"
                    paragraph="irst starting educatidfdfdfdfdfon why dont know how but because of this we are fonf fgdfslsk sg;gk fs;lskg gf;gkg dggk;lfkglk dfgdlfgk  "
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default IndexPosts;
