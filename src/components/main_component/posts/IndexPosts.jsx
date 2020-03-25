import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PostCard from "./PostCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fab,
  faFacebookSquare,
  faLinkedinIn,
  faYoutube,
  faInstagram,
  faMailchimp
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faQuestionCircle,
  faBookOpen,
  faLaptopCode
} from "@fortawesome/free-solid-svg-icons";

class IndexPosts extends Component {
  state = {};
  render() {
    return (
      <>
        <div class="row  pt-2 pb-2 rounded ">
          <div className="col">
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
        <div class="row bg-warning pt-2 pb-2 mt-3 rounded" id="btn_header">
          <div className="col-md-6 col-sm-3 col-4 ">
            <div className="card bg-light shadow rounded">
              <div className="card-body">
                <h5 className="card-title text-info">Who Let the Dogs Out</h5>
                <p clsssName=" card-text text-light ">
                  "I dont Know Bro I am Also A Kind of "
                </p>
              </div>

              <a href="/" class="btn btn-right btn-primary ">
                Read More
              </a>
            </div>
          </div>
          <div className="col-4 col-sm d-none d-sm-block"></div>
          <div className="col-4 col-sm-3 m-5">
            <FontAwesomeIcon icon={faQuestionCircle} size="10x" />
          </div>
        </div>

        <div class="row bg-success pt-2 pb-2 mt-3 rounded " id="btn_header">
          <div className="col-4 col-sm-3 m-5">
            <FontAwesomeIcon icon={faBookOpen} size="10x" />
          </div>
          <div className="col-4 col-sm d-none d-sm-block "></div>
          <div className="col-md-6 col-sm-3 col-4 ml-5">
            <div className="card bg-light shadow rounded ">
              <div className="card-body">
                <h5 className="card-title text-info">Find Your Book Here !!</h5>
                <p clsssName=" card-text text-light ">
                  "I really Love tddddddddddddddddddddddddddddhis one "
                </p>
              </div>

              <a href="/" class="btn btn-right btn-primary ">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div class="row bg-info pt-2 pb-2 mt-3 rounded" id="btn_header">
          <div className="col-md-6 col-sm-3 col-4 ">
            <div className="card bg-light shadow rounded">
              <div className="card-body">
                <h5 className="card-title text-info">Who Let the Dogs Out</h5>
                <p clsssName=" card-text text-light ">
                  "I dont Know Bro I am Also A Kind of "
                </p>
              </div>

              <a href="/" class="btn btn-right btn-primary ">
                Read More
              </a>
            </div>
          </div>
          <div className="col-4 col-sm d-none d-sm-block"></div>
          <div className="col-4 col-sm-3 m-5">
            <FontAwesomeIcon icon={faLaptopCode} size="10x" />
          </div>
        </div>

        <div class="row  pt-2 pb-2 mt-3 rounded">
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
