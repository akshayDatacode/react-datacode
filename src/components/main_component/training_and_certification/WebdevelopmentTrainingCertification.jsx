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

class Webdevelopment extends Component {
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
              Find the Best Webdevelopment Training & Certification
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
                title="Programming Foundations with JavaScript, HTML and CSS"
                level="Beginner"
                duration="30 hr"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="JavaScript"
                tag2="HTML"
                tag3="CSS"
                link="https://www.coursera.org/learn/duke-programming-web"
              />
              <CertificateShowCard
                title="Introduction to Web Development"
                level="Beginner"
                duration="25 hr"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="Web Development"
                tag2="HTML and CSS"
                tag3="JavaScript"
                link="https://www.coursera.org/learn/web-development"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Front-End Web Development with React"
                level="Intermediate"
                duration="43 hr"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="Web Development"
                tag2="React"
                tag3="learn"
                link="https://www.coursera.org/learn/front-end-react"
              />
              <CertificateShowCard
                title="Responsive Website Basics: Code with HTML, CSS, and JavaScript"
                level="Beginner"
                duration="19 hr"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="HTML"
                tag2="CSS"
                tag3="JavaScript"
                link="https://www.coursera.org/learn/website-coding"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Introduction to HTML5"
                level="Beginner"
                duration="12 hr"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="HTML5"
                tag2="Website"
                tag3="Web Development"
                link="https://www.coursera.org/learn/html"
              />
              <CertificateShowCard
                title="Angular Certification Training Course
                "
                level="Beginner"
                duration="34 hr"
                enroll="Paid"
                platform="simplilearn"
                tag1="Web Development"
                tag2="Angular JS"
                tag3="Training "
                link="https://www.simplilearn.com/angular-certification-training"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Node.js Certification Training"
                level="Beginner"
                duration="38 hr"
                enroll="Paid"
                platform="simplilearn"
                tag1="Node.js"
                tag2="Training"
                tag3="Web Development"
                link="https://www.simplilearn.com/node-js-certification-training"
              />
              <CertificateShowCard
                title="An introduction to web applications architecture"
                level="Intermediate"
                duration="8 hr"
                enroll="FREE"
                platform="open.edu"
                tag1="web applications"
                tag2="architecture"
                tag3="Intermediate"
                
                link="https://www.open.edu/openlearn/science-maths-technology/introduction-web-applications-architecture/content-section-0?active-tab=description-tab"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="CS50's Web Programming with Python and JavaScript"
                level="Intermediate"
                duration="12 Week"
                enroll="Pay for Certificate only"
                platform="edx.org"
                tag1="Web Programming"
                tag2="Python"
                tag3="JavaScript"
                link="https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript"
              />
              <CertificateShowCard
                title="Learn Web Design: The Ultimate Guide For Beginners"
                level="Beginner"
                duration="33 hr"
                enroll="FREE"
                platform="bitdegree.org"
                tag1="Beginners"
                tag2="Web Design"
                link="https://stude.co/848611/learn-web-design"
              />
            </div>

            <div className="card-deck">
            <CertificateShowCard
                title="Introducing Coding for Beginners: an HTML and CSS Online Course"
                level="Beginner"
                duration="23 hr"
                enroll="FREE"
                platform="bitdegree.org"
                tag1="HTML"
                tag2=" CSS"
                tag3=" Beginners"
                link="https://stude.co/848611/coding-for-beginners-space-doggos"
              />
               <CertificateShowCard
                title="Bootstrap and PHP Blog Tutorial Step by Step"
                level="Beginner"
                duration="20 hr"
                enroll="FREE"
                platform="bitdegree.org"
                tag1="PHP"
                tag2="Bootstrap"
                tag3="Tutorial"
                link="https://stude.co/848611/php-blog-tutorial"
              />
            </div>
            <div className="card-deck">
            <CertificateShowCard
                title="Learn HTML5 and CSS3 to Build a HTML5 Website from Scratch"
                level="Beginner"
                duration="35 hr"
                enroll="FREE"
                platform="bitdegree.org"
                tag1="HTML5"
                tag2="CSS3 "
                tag3="Website"
                link="https://stude.co/848611/learn-html5-and-css3"
              />
               <CertificateShowCard
                title="Web Development Training: Start Your Career as a Front End Developer"
                level="Beginner"
                duration="62 hr"
                enroll="Pay for Certificate only"
                platform="bitdegree.org"
                tag1="Front End"
                tag2="Web Development"
                tag3="Developer"
                link="https://stude.co/848611/web-development-training"
              />
            </div>
            <div className="card-deck">
            <CertificateShowCard
                title="REST API Tutorial For Beginners: Learn How to Code & Develop REST APIs"
                level="Beginner"
                duration="18 hr"
                enroll="Pay for Certificate only"
                platform="bitdegree.org"
                tag1="REST API"
                tag2="Beginners"
                tag3="Code"
                link="https://stude.co/848611/rest-api-tutorial"
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
                   Web Development Learning
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
                  Web Development Practice
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
            <a href="https://stude.co/848611" target="_blank">
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

export default Webdevelopment;
