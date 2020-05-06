import React, { Component } from "react";
import { Link } from "react-router-dom";
import RightSideSection from "../../right_section/RightSideSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faPuzzlePiece,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import RecommendPost from "../../right_section/RecommendPost";
import FbLikeShare from "../../FbLikeShare";
import Technologies from "../../right_section/Technologies";
import CertificateShowCard from "./CertificateShowCard";

class ComputerScience extends Component {
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
              Find the Best ComputerScience Training & Certification
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
                title=""
                level=""
                duration=""
                enroll=""
                platform=""
                tag1=""
                tag2=""
                tag3=""
                tag4=""
                link=""
              />
              <CertificateShowCard
                title=""
                level=""
                duration=""
                enroll=""
                platform=""
                tag1=""
                tag2=""
                tag3=""
                tag4=""
                link=""
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title=""
                level=""
                duration=""
                enroll=""
                platform=""
                tag1=""
                tag2=""
                tag3=""
                tag4=""
                link=""
              />
              <CertificateShowCard
                title=""
                level=""
                duration=""
                enroll=""
                platform=""
                tag1=""
                tag2=""
                tag3=""
                tag4=""
                link=""
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
                  C Programming Learning
                </h5>
              </div>
            </div>

            <RecommendPost
              imgsource="c_interview_questions.jpeg"
              RecPostHading="C Interview Questions"
              link="/c_interview_question"
            />
            <RecommendPost
              imgsource="c_programming_question.jpeg"
              RecPostHading="C Programming Questions"
              link="/c_programming_questions"
            />
            <RecommendPost
              imgsource="programming_blog.jpeg"
              RecPostHading="C Programming Blogs"
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
                  C Programming Practice
                </h5>
              </div>
            </div>
            <RecommendPost
              imgsource="c_practice_questions_beginner.jpeg"
              RecPostHading="C Programming Practice Problems"
              link="/index_practice_questions"
            />
            <RecommendPost
              imgsource="c_mcq.jpeg"
              RecPostHading="C MCQs"
              link="/index_c_mcqs"
            />
            <RecommendPost
              imgsource="c_quize_test.jpeg"
              RecPostHading="C Quize Test"
              link="/c_quizes_tests"
            />
            <RecommendPost
              imgsource="code_challange.jpeg"
              RecPostHading="Weekly Code Challanges"
              link="/index_code_challange"
            />
            <a href="https://stude.co/848611" target="_blank" className="mt-3">
              <img
                className=" card-img-top mx-auto img-fluid img-circle d-block "
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

export default ComputerScience;
