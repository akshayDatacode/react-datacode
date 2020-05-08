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

class HTML extends Component {
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
              Find the Best HTML & CSS Training & Certification
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
                title="Course: PRDV251: HTML and CSS for Beginners"
                level="Beginner"
                duration="5 hr"
                enroll="Free"
                platform="saylor.org"
                tag1="HTML"
                tag2="CSS"
                tag3="Beginners"
                link="https://bit.ly/2OLb4QQ"
              />
                <CertificateShowCard
                title="HTML Fundamentals"
                level="Beginner"
                duration="5 hr"
                enroll="Free"
                platform="SoloLearn"
                tag1="HTML"
                tag2="Fundamentals"
                link="https://www.sololearn.com/Course/HTML/"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="CSS Fundamentals"
                level="Beginner"
                duration="5 hr"
                enroll="Free"
                platform="SoloLearn"
                tag1="CSS"
                tag2="Fundamentals"
                link="https://www.sololearn.com/Course/CSS/"
              />
              <CertificateShowCard
                title="HTML5 & CSS3 Fundamentals: Development for Absolute Beginners"
                level="Beginner"
                duration="5 hr"
                enroll="Free"
                platform="Micrsoft"
                tag1="HTML5"
                tag2="CSS3"
                tag3=" Development"
                link="https://bit.ly/2R9Ajzt"
              />
            </div>
           
            <div className="card-deck">
              <CertificateShowCard
                title="Programming Foundations with JavaScript, HTML and CSS"
                level="Beginner"
                duration="30 hr"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="HTML"
                tag2="CSS"
                tag3="JavaScript"
                link="https://www.coursera.org/learn/duke-programming-web"
              />
              <CertificateShowCard
                title="Introduction to HTML5"
                level="Beginner"
                duration="12 hr"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1=" HTML5"
                tag2="Introduction"
                link="https://www.coursera.org/learn/html"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Introducing Coding for Beginners: an HTML and CSS Online Course"
                level="Beginner"
                duration="23 hr"
                enroll="TOTAL FREE"
                platform="bitdegree.org"
                tag1="Coding"
                tag2="HTML"
                tag3="CSS"
                link="https://stude.co/848611/coding-for-beginners-space-doggos"
              />
              <CertificateShowCard
                title="Learn HTML5 and CSS3 to Build a HTML5 Website from Scratch"
                level="Beginner"
                duration="35 hr"
                enroll="TOTAL FREE"
                platform="bitdegree.org"
                tag1="HTML5"
                tag2="CSS3 "
                tag3="Website"
                link="https://stude.co/848611/learn-html5-and-css3"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Create Your Own Simple JavaScript Calculator using JS, HTML and CSS"
                level="Beginner"
                duration="5 hr"
                enroll="Pay for Certificate only"
                platform="bitdegree.org"
                tag1="HTML"
                tag2="CSS"
                tag3="JS"
                link="https://stude.co/848611/javascript-calculator"
              />
              <CertificateShowCard
                title="Comprehensive HTML5 Tutorial For Beginners: Become Advanced HTML5 Specialist"
                level="Beginner"
                duration="81 hr"
                enroll="Pay for Certificate only"
                platform="bitdegree.org"
                tag1=" HTML5"
                tag2="Advanced "
                link="https://stude.co/848611/html5-tutorial"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Web Development Training: Start Your Career as a Front End Developer"
                level="Beginner"
                duration="62 hr"
                enroll="Pay for Certificate only"
                platform="bitdegree.org"
                tag1="Front End"
                tag2="Web Development"
                link="https://stude.co/848611/web-development-training"
              />
              <CertificateShowCard
                title="Coding for Kids - Introduction to HTML, CSS, and JavaScript!"
                level="Beginner"
                duration="2 hr"
                enroll="Pay for Certificate only"
                platform="bitdegree.org"
                tag1=" HTML"
                tag2="CSS"
                tag3="JavaScript"
                link="https://stude.co/848611/coding-for-kids"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Information-Packed HTML Crash Course: Get the HTML Basics"
                level="Beginner"
                duration="3 hr"
                enroll="Pay for Certificate only"
                platform="bitdegree.org"
                tag1="HTML "
                tag2="Basics"
                link="https://stude.co/848611/html-basics"
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
            <LearningSideSection language="html" />
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

export default HTML;
