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


class JS extends Component {
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
              Find the Best JavaScript Training & Certification
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
                title="Code Your First Game: Arcade Classic in JavaScript on Canvas"
                level="Beginner"
                duration="2hr 10min"
                enroll="FREE"
                platform="Udemy"
                tag1="Javascript"
                tag2="Game"
                tag3="Code"
                link="https://www.udemy.com/course/code-your-first-game/"
              />
                <CertificateShowCard
                title="Javascript Essentials"
                level="Beginner"
                duration="6hr 30min "
                enroll="FREE"
                platform="Udemy"
                tag1="Javascript"
                tag2="Beginner"
                tag3="Essentials"
                link="https://www.udemy.com/course/javascript-essentials/"
              />
            </div>
            <div className="card-deck">
            <CertificateShowCard
                title="Javascript Essentials"
                level="Intermediate"
                duration="6hr 30min"
                enroll="FREE"
                platform="Udemy"
                tag1="Javascript"
                tag2="Intermediate"
                tag3="Essentials"
                link="https://www.udemy.com/course/javascript-essentials"
              />
                 <CertificateShowCard
                title="Start 3D GIS Web Development in JavaScript"
                level="Beginner"
                duration="43min"
                enroll="FREE"
                platform="Udemy"
                tag1="Javascript"
                tag2="Web Development"
                tag3="3D"
                link="https://www.udemy.com/course/start-3d-gis-web-development/"
              />
            </div>
            <div className="card-deck">
            <CertificateShowCard
                title="Learn to Program in Javascript: Beginner to Pro"
                level="Beginner"
                duration="4hr 24min"
                enroll="FREE"
                platform="Udemy"
                tag1="Javascript"
                tag2="Program"
                link="https://www.udemy.com/course/programming-in-javascript/"
              />
                  <CertificateShowCard
                title="MEAN Stack For Web Developers: Build Websites on Javascript"
                level="Beginner"
                duration="2hr 9min"
                enroll="FREE"
                platform="Udemy"
                tag1="Javascript"
                tag2="MEAN"
                tag3="Websites"
                link="https://www.udemy.com/course/javascript-based-website-in-minutes-using-the-mean-stack/"
              />
            </div>
            <div className="card-deck">
            <CertificateShowCard
                title="Introductory To JavaScript - Learn The Basics of JavaScript"
                level="Beginner"
                duration="1hr 6min"
                enroll="FREE"
                platform="Udemy"
                tag1="Javascript"
                tag2="Basics"
                link="https://www.udemy.com/course/the_complete_javascript_course_for_beginners/"
              />
                  <CertificateShowCard
                title="Getting Started with TypeScript // A Javascript Compiler"
                level="Beginner"
                duration="1hr 8min"
                enroll="FREE"
                platform="Udemy"
                tag1="Javascript"
                tag2="TypeScript"
                link="https://www.udemy.com/course/getting-started-with-typescript/"
              />
            </div>
            <div className="card-deck">
            <CertificateShowCard
                title="JavaScript Essentials 2020 Mini Course"
                level="Intermediate"
                duration="2hr 49min"
                enroll="FREE"
                platform="Udemy"
                tag1="Javascript"
                tag2="Essentials"
                link="https://www.udemy.com/course/javascript-essentials-mini-course/"
              />
                <CertificateShowCard
                title="JavaScript Basics: Start Coding in 5 Minutes [2019]"
                level="Beginner"
                duration="57hr 33min"
                enroll="FREE"
                platform="Udemy"
                tag1="Javascript"
                tag2="Coding"
                tag3="Basics"
                link="https://www.udemy.com/course/javascript-basics-start-coding-in-5-minutes-2019"
              />
            </div>
            <div className="card-deck">
            <CertificateShowCard
                title="Understanding Javascript from Very Basics to Core"
                level="Beginner"
                duration="6hr 42min"
                enroll="FREE"
                platform="Udemy"
                tag1="Javascript"
                tag2="Basics"
                tag3="Core"
                link="https://www.udemy.com/course/understanding-javascript-from-very-basics-to-core/"
              />
                 <CertificateShowCard
                title="RxJS unit testing in Angular application. The whole picture."
                level="Advance"
                duration="55min"
                enroll="FREE"
                platform="Udemy"
                tag1="Javascript"
                link="https://www.udemy.com/course/rxjs-unit-testing-in-angular-application-the-whole-picture"
              />
            </div>
            
            <div className="card-deck">
              <CertificateShowCard
                title="Programming Foundations with JavaScript, HTML and CSS"
                level="Beginner"
                duration="30 hr"
                enroll="pay for certificate only"
                platform="Coursera"
                tag1=" HTML"
                tag2="CSS"
                tag3=" JavaScript"
                link="https://www.coursera.org/learn/duke-programming-web"
              />
                <CertificateShowCard
                title="Interactivity with JavaScript"
                level="Beginner"
                duration="11 hr"
                enroll="pay for certificate only"
                platform="Coursera"
                tag1=" JavaScript"
                tag2="Interactivity"
                link="https://www.coursera.org/learn/javascript"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Responsive Website Basics: Code with HTML, CSS, and JavaScript"
                level="Beginner"
                duration="19 hr"
                enroll="pay for certificate only"
                platform="Coursera"
                tag1="HTML"
                tag2=" CSS"
                tag3="JavaScript"
                link="https://www.coursera.org/learn/website-coding"
              />
                <CertificateShowCard
                title="CS50's Web Programming with Python and JavaScript"
                level="Intermediate"
                duration="12 Week"
                enroll="pay for certificate only"
                platform="edx.org"
                tag1="JavaScript"
                tag2=" Python"
                link="https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Create Your Own Simple JavaScript Calculator using JS, HTML and CSS"
                level="Beginner"
                duration="5 hr"
                enroll="pay for certificate only"
                platform="bitdegree.org"
                tag1="JavaScript"
                tag2=" HTML"
                tag3="CSS"
                link="https://stude.co/848611/javascript-calculator"
              />
                <CertificateShowCard
                title="JavaScript Tutorial: Learn JavaScript Just in 1 Hour"
                level="Beginner"
                duration="1 hr"
                enroll="pay for certificate only"
                platform="bitdegree.org"
                tag1="JavaScript"
                tag2="Beginner"
                link="https://stude.co/848611/javascript-tutorial"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Coding for Kids - Introduction to HTML, CSS, and JavaScript!"
                level="Beginner"
                duration="2 hr"
                enroll="pay for certificate only"
                platform="bitdegree.org"
                tag1="HTML"
                tag2="CSS"
                tag3="JavaScript"
                link="https://stude.co/848611/coding-for-kids"
              />
                <CertificateShowCard
                title="JavaScript Crash Course For Beginners: Learn JavaScript Basics"
                level="Beginner"
                duration="2 hr"
                enroll="pay for certificate only"
                platform="bitdegree.org"
                tag1="JavaScript"
                tag2="Basics"
                link="https://stude.co/848611/javascript-basics"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="ES6 Tutorial for Beginners: From the Basics to Advanced"
                level="Beginner"
                duration="23 hr"
                enroll="pay for certificate only"
                platform="bitdegree.org"
                tag1="ES6"
                tag2="Beginners"
                tag3="Advanced"
                link="https://stude.co/848611/es6-tutorial"
              />
                <CertificateShowCard
                title="Advanced JavaScript Course: Working with JavaScript Libraries"
                level="Intermediate"
                duration="2 hr"
                enroll="pay for certificate only"
                platform="bitdegree.org"
                tag1="JavaScript "
                tag2="Libraries"
                link="https://stude.co/848611/advanced-javascript"
              />
            </div>
            <div className="card-deck">

            <CertificateShowCard
                title="Learn JavaScript - For Beginners"
                level="Beginner"
                duration="1hr 30min"
                enroll="FREE"
                platform="Udemy"
                tag1="Javascript"
                tag2="Beginners"
                link="https://www.udemy.com/course/learn-javascript-for-beginners-v"
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
            <LearningSideSection language="js" />
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

export default JS;
