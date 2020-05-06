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

class Android extends Component {
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
              Find the Best Android Programming Training & Certification
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
                title="Android App Development Specialization"
                level="Beginner"
                duration="5 months"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="App"
                tag2="Android"
                tag3="Development"
                link="https://www.coursera.org/specializations/android-app-development"
              />
              <CertificateShowCard
                title="Become an Android Developer from Scratch"
                level="Beginner"
                duration="11hr 32min"
                enroll="FREE"
                platform="Udemy"
                tag1="Developer"
                tag2="Android"
                tag3="Scratch"
                link="https://www.udemy.com/course/become-an-android-developer-from-scratch/"
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
                  Android Programming Learning
                </h5>
              </div>
            </div>

            <RecommendPost
              imgsource="android_interview_questions.jpeg"
              RecPostHading="Android Interview Questions"
              link="/android_interview_question"
            />
         
            <RecommendPost
              imgsource="programming_blog.jpeg"
              RecPostHading="Android Programming Blogs"
              link="/prog_lan_blog"
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
                  Android Programming Practice
                </h5>
              </div>
            </div>
            
            <RecommendPost
              imgsource="android_mcq.jpeg"
              RecPostHading="Android MCQs"
              link="/index_android_mcqs"
            />
            <RecommendPost
              imgsource="android_quize.jpeg"
              RecPostHading="Android Quize Test"
              link="/android_quize_tests"
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

export default Android;
