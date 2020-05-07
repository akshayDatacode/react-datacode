import React, { Component } from "react";
import { Link } from "react-router-dom";
import RightSideSection from "../../right_section/RightSideSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faAward } from "@fortawesome/free-solid-svg-icons";
import FbLikeShare from "../../FbLikeShare";
import Technologies from "../../right_section/Technologies";
import CertificateShowCard from "./CertificateShowCard";
import LearningSideSection from "../../right_section/learning_sidesection/LearningSideSection";

class C extends Component {
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
              Find the Best C Programming Training & Certification
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
                title="C for Everyone: Programming Fundamentals"
                level="Beginner"
                duration="22 hrs"
                enroll="Pay for Certificate only"
                platform="Coursera.com"
                tag1="C Programming"
                tag2="Software Developemt"
                tag3="Developments"
                tag4="Computer Science"
                link="https://www.coursera.org/learn/c-for-everyone"
              />
              <CertificateShowCard
                title="Programming Fundamentals"
                level="Beginner"
                duration="12 hrs"
                enroll="Pay for Certificate only"
                platform="Coursera.com"
                tag1="C Programming"
                tag2="Development"
                tag3="Learning"
                tag4="Skills"
                link="https://www.coursera.org/learn/programming-fundamentals"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Writing, Running, and Fixing Code in C"
                level="Beginner"
                duration="15 hrs"
                enroll="Pay for Certificate only"
                platform="Coursera.com"
                tag1="C Programming"
                tag2="Logical Programming"
                tag3="Learning"
                tag4="Code"
                link="https://www.coursera.org/learn/writing-running-fixing-code"
              />
              <CertificateShowCard
                title="Introduction to Computer Programming"
                level="Beginner"
                duration="18 hrs"
                enroll="Pay for Certificate only"
                platform="Coursera.com"
                tag1="C Programming"
                tag2="Logical Programming"
                tag3="Learning"
                tag4="Code"
                link="https://www.coursera.org/learn/introduction-to-computer-programming"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="C for Everyone: Structured Programming"
                level="Intermediate"
                duration="10 hr"
                enroll="Pay for Certificate only"
                platform="Coursera.com"
                tag1="C Programming"
                tag2="Intermediate"
                tag3="Structured Programming"
                tag4="Code"
                link="https://www.coursera.org/learn/c-structured-programming"
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
            <LearningSideSection language="c" />
            <a href="https://stude.co/848611" target="_blank">
              <img
                className=" card-img-top mx-auto  img-fluid img-circle d-block mt-4 "
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

export default C;
