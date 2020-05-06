import React, { Component } from "react";
import { Link } from "react-router-dom";
import RightSideSection from "../../right_section/RightSideSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faChalkboardTeacher,
  faPuzzlePiece,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import RecommendPost from "../../right_section/RecommendPost";
import RoadMapCard from "./RoadMapCard";
import FbShare from "../FbShare";
import FbLikeShare from "../../FbLikeShare";
import Technologies from "../../right_section/Technologies";
import CertificateShowCard from "./CertificateShowCard";

class Angular extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-8 mt-4 ">
            <h2
              className="text-center mb-4 display-5"
              style={{ color: "#072C71" }}
            >
              Find the Best Angular Programming Training & Certification
            </h2>
            <Link
              to="/home"
              className="badge mr-1"
              style={{ backgroundColor: "#06CB6C" }}
            >
              <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" />
            </Link>
            <Link
              to="/index_training_certification"
              className="badge mr-1"
              style={{ backgroundColor: "#072C71" }}
            >
              <FontAwesomeIcon icon={faAward} size="2x" color="#06CB6C" />
            </Link>

            <div className="card-deck">
              <CertificateShowCard
                title="Angular Certification Training Course
                "
                level="Beginner"
                duration="34 hr"
                enroll="Paid"
                platform="simplilearn.com"
                tag1="Angular"
                tag2="Training"
                tag3="Certification"
                link="https://www.simplilearn.com/angular-certification-training"
              />
              <CertificateShowCard
                title="Single Page Web Applications with AngularJS"
                level="Intermediate"
                duration="30 hr"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="Web Applications"
                tag2="AngularJS"
                tag3="Single Page"
                link="https://www.coursera.org/learn/single-page-web-apps-with-angularjs"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Angular 2 Tutorial For Beginners: Learn Popular JavaScript Framework"
                level="Beginner"
                duration="68 hr"
                enroll="Free"
                platform="bitdegree.org"
                tag1="Angular"
                tag2="Training"
                tag3="Certification"
                link="https://stude.co/848611/angular-2-tutorial"
              />
            
            </div>
            
          </div>
          <div className="col-md-3 mt-md-5 mt-3">
            <div className="row">
              <FbLikeShare />{" "}
            </div>
            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faBook}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  Angular Programming Learning
                </h5>
              </div>
            </div>

            <RecommendPost
              imgsource="angular_interview_questions.jpeg"
              RecPostHading="Angular Interview Questions"
              link="/angular_interview_question"
            />
            
            <RecommendPost
              imgsource="web_blog.jpeg"
              RecPostHading="Web Development Blogs"
              link="/webdesign_blog"
            />

            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faPuzzlePiece}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  Angular Programming Practice
                </h5>
              </div>
            </div>
           
            <RecommendPost
              imgsource="angular_mcq.jpeg"
              RecPostHading="Angular MCQs"
              link="/index_angular_mcqs"
            />
            <RecommendPost
              imgsource="angular_quize.jpeg"
              RecPostHading="Angular Quize Test"
              link="/angular_quize_tests"
            />
            <RecommendPost
              imgsource="code_challange.jpeg"
              RecPostHading="Weekly Code Challanges"
              link="/index_code_challange"
            />
            <a href="https://stude.co/848611" target="_blank">
              <img
                className=" card-img-top mx-auto img-fluid img-circle d-block mt-5 "
                src={require("../../../assets/images/bitdegree.jpeg")}
                alt="avatar"
              />
            </a>

            <Technologies />
            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default Angular;
