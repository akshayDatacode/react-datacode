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

class DataStructure extends Component {
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
              Find the Best DataStructure Training & Certification
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
                title="Object-Oriented Data Structures in C++"
                level="Intermediate"
                duration="21 hr"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="C++"
                tag2="Data Structures"
                tag3="Object-Oriented"
                link="https://www.coursera.org/learn/cs-fundamentals-1"
              />
              <CertificateShowCard
                title="Python Data Structures"
                level="Intermediate"
                duration="19 hr"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="Python"
                tag2="Data Structures"
                tag3="Intermediate"
                link="https://www.coursera.org/learn/python-data"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Advanced Algorithms and Complexity"
                level="Advance"
                duration="25 hr"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="Algorithms"
                tag2="Complexity"
                tag3="Data Structures"
                link="https://www.coursera.org/learn/advanced-algorithms-and-complexity"
              />
              <CertificateShowCard
                title="Data Structures and Algorithms Specialization"
                level="Intermediate"
                duration="8 Months"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="Algorithms"
                tag2="Specialization"
                tag3="Data Structures"
                link="https://www.coursera.org/specializations/data-structures-algorithms"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Python Data Structures Tutorial: Ultimate Guide on Data Science"
                level="Beginner"
                duration="52 hr"
                enroll="Free"
                platform="bitdegree.org"
                tag1="Data Structures"
                tag2="Python"
                tag3="Data Science"
                link="https://stude.co/848611/python-data-structures"
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
                  Data Structures Learning
                </h5>
              </div>
            </div>

            <RecommendPost
              imgsource="ds_interview_questions.jpeg"
              RecPostHading="Data Structures Interview Questions"
              link="/datastructre_interview_question"
            />
            <RecommendPost
              imgsource="dsa_programming_questions.jpeg"
              RecPostHading="Data Structures Programming Questions"
              link="/datastructure_programming_questions"
            />
            <RecommendPost
              imgsource="programming_blog.jpeg"
              RecPostHading="Data Structures Blogs"
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
                  Data Structures Practice
                </h5>
              </div>
            </div>
            <RecommendPost
              imgsource="ds_practice_question.jpeg"
              RecPostHading="Data Structures Practice Problems"
              link="/index_practice_questions"
            />
            <RecommendPost
              imgsource="ds_mcq.jpeg"
              RecPostHading="Data Structure MCQs"
              link="/index_ds_mcqs"
            />
            <RecommendPost
              imgsource="ds_quize.jpeg"
              RecPostHading="Data Structure Quize Test"
              link="/ds_quize_tests"
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

export default DataStructure;
