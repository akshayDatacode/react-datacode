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

class Java extends Component {
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
                title="Building a Text-Based Bank in Java"
                level="Beginner"
                duration="2 hr "
                enroll="Paid"
                platform="Coursera"
                tag1="Coomputer Science"
                tag2="Software Development"
                link="https://www.coursera.org/projects/building-a-java-application-banking"
              />
              <CertificateShowCard
                title="Java Programming: Solving Problems with Software"
                level="Beginner"
                duration="14 hr"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="Software Development"
                tag2="Java"
                link="https://www.coursera.org/learn/java-programming"
              />
            </div>

            <div className="card-deck">
              <CertificateShowCard
                title="Java Programming: Arrays, Lists, and Structured Data"
                level="Beginner"
                duration="11 hr"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="Coomputer Science"
                tag2="Java"
                tag3="DataStructures"
                link="https://www.coursera.org/learn/java-programming-arrays-lists-data"
              />
              <CertificateShowCard
                title="Parallel, Concurrent, and Distributed Programming in Java Specialization"
                level="Intermediate"
                duration="3 months"
                enroll="Pay for Certificate only"
                platform=""
                tag2="Parallel"
                tag3="Concurrent"
                tag4="Distributed"
                tag1="Programming"
                link="https://www.coursera.org/specializations/pcdp"
              />
            </div>

            <div className="card-deck">
              <CertificateShowCard
                title="Java Certification Training Course
                "
                level="Beginner"
                duration="70 hrs"
                enroll="Paid"
                platform="simplilearn"
                tag4="Java"

                tag1="software-development"
                tag2="training"
                tag3="mobile development"
                link="https://www.simplilearn.com/mobile-and-software-development/java-javaee-soa-development-training"
              />
              <CertificateShowCard
                title="Full Stack Java Developer"
                level="Beginner"
                duration="120 hr"
                enroll="Paid"
                platform="simplilearn"
                tag1="Full Stack"
                tag2="Java"
                tag3="Developer"
                tag4="Training"
                link="https://www.simplilearn.com/java-full-stack-developer-certification-training-course"
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
                  Java Programming Learning
                </h5>
              </div>
            </div>

            <RecommendPost
              imgsource="java_interview_questions.jpeg"
              RecPostHading="Java Interview Questions"
              link="/java_interview_question"
            />
            <RecommendPost
              imgsource="java_programming_question.jpeg"
              RecPostHading="Java Programming Questions"
              link="/java_programming_questions"
            />
            <RecommendPost
              imgsource="programming_blog.jpeg"
              RecPostHading="Java Programming Blogs"
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
                  Java Programming Practice
                </h5>
              </div>
            </div>
            <RecommendPost
              imgsource="java_practice_questions_beginner.jpeg"
              RecPostHading="Java Programming Practice Problems"
              link="/index_practice_questions"
            />
            <RecommendPost
              imgsource="java_mcq.jpeg"
              RecPostHading="Java MCQs"
              link="/index_java_mcqs"
            />
            <RecommendPost
              imgsource="java_quize_test.jpeg"
              RecPostHading="Java Quize Test"
              link="/java_quize_tests"
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

export default Java;
