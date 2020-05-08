import React, { Component } from "react";
import { Link } from "react-router-dom";
import RightSideSection from "../../right_section/RightSideSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faAward } from "@fortawesome/free-solid-svg-icons";
import FbLikeShare from "../../FbLikeShare";
import Technologies from "../../right_section/Technologies";
import CertificateShowCard from "./CertificateShowCard";
import LearningSideSection from "../../right_section/learning_sidesection/LearningSideSection";
import TrainingCertificationCardCarousel from "./TrainingCertificationCardCarousel";

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
                title="C Tutorial for Beginners on Compiler Installation and Writing Code For Simple C Programs"
                level="Beginner"
                duration="5 hr"
                enroll="Pay for Certificate only"
                platform="bitdegree.org"
                tag1="Installation"
                tag2="Code"
                tag3="C "
                link="https://stude.co/848611/c-tutorial"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="C Programming: Tutorial for Absolute Beginners"
                level="Beginner"
                duration="3 hr"
                enroll="Pay for Certificate only"
                platform="bitdegree.org"
                tag1="Programming"
                tag2="Tutorial"
                tag3="Beginners"
                link="https://stude.co/848611/c-programming-tutorial"
              />
              <CertificateShowCard
                title="C Programming:The best approach to learn C Language"
                level="Beginner"
                duration="3hr 26min"
                enroll="FREE"
                platform="Udemy"
                tag1="C Language"
                tag2="Programming"
                link="https://www.udemy.com/course/c-programming-the-best-approach-to-learn-c-language/"
              />
            </div>
            <div className="card-deck">

            <CertificateShowCard
                title="C Tutorial"
                level="Beginner"
                duration="5 hr"
                enroll="Free "
                platform="SoloLearn"
                tag1="C"
                tag2="Tutorial"
                link="https://www.sololearn.com/Course/C/"
              />
              </div>
            <h4 className="text-secondary mt-5">
              <code className="text-primary">
                {" "}
                For More Training & Certification
              </code>
            </h4>
            <TrainingCertificationCardCarousel />
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
