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

            <h3 className="mt-3 mb-0">
              <code>Upcoming Training </code>
            </h3>
            <div className="card-deck">
              <CertificateShowCard
                title="The Youth Project : Full Stack Javascript Deployment"
                level="Beginner"
                duration="6 week"
                enroll="Paid"
                platform="The Youth Project"
                tag1="Full Stack"
                tag2="NodeJs"
                tag3="Deployment"
                link="https://drive.google.com/open?id=1N7Xk4ryxHhTXQDRO_ugccgjm3CIOHlm2"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="HTML and CSS for Beginners - Build a Website & Launch ONLINE"
                level="Beginner"
                duration="5hr 51min"
                enroll="FREE"
                platform="Udemy"
                tag1="HTML"
                tag2=" CSS"
                tag3=" Beginners"
                link="https://www.udemy.com/course/html-and-css-for-beginners-crash-course-learn-fast-easy/"
              />
              <CertificateShowCard
                title="Web Design for Web Developers: Build Beautiful Websites!"
                level="Beginner"
                duration="46min "
                enroll="FREE"
                platform="Udemy"
                tag1="Web Design"
                tag2=" Websites"
                tag3="  Build "
                link="https://www.udemy.com/course/web-design-secrets/"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Master the Basics of HTML5 & CSS3: Beginner Web Development
                "
                level="Beginner"
                duration="3hr 5min "
                enroll="FREE"
                platform="Udemy"
                tag1="HTML"
                tag2=" CSS"
                tag3=" Web Development"
                link="https://www.udemy.com/course/master-the-basics-of-html5-css3-beginner-web-development/"
              />
              <CertificateShowCard
                title="Build Your First Glass Web App Theme With HTML5 And CSS3
                "
                level="Beginner"
                duration="2hr 26min"
                enroll="FREE"
                platform="Udemy"
                tag1="HTML"
                tag2=" CSS"
                tag3="Web App "
                link="https://www.udemy.com/course/build-your-first-glass-web-app-theme-with-css3-and-html5/"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="HTML and CSS Foundations
                "
                level="Beginner"
                duration="1hr 4min "
                enroll="FREE"
                platform="Udemy"
                tag1="HTML"
                tag2=" CSS"
                tag3=" Beginners"
                link="https://www.udemy.com/course/html-and-css-foundations"
              />
              <CertificateShowCard
                title="Become a HTML and CSS Developer - Build a Responsive Site
                "
                level="Beginner"
                duration="2hr 3min"
                enroll="FREE"
                platform="Udemy"
                tag1="HTML"
                tag2=" CSS"
                tag3="Site"
                link="https://www.udemy.com/course/learn-to-code-in-html-and-css/"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="HTML and CSS: The Super Fun Beginner's Course
                "
                level="Beginner"
                duration="1hr 2min "
                enroll="FREE"
                platform="Udemy"
                tag1="HTML"
                tag2=" CSS"
                tag3=" Beginners"
                link="https://www.udemy.com/course/ht-mlcss"
              />
              <CertificateShowCard
                title="Learn Html and CSS with fun for Beginners
                "
                level="Beginner"
                duration="4hr 31min"
                enroll="FREE"
                platform="Udemy"
                tag1="HTML"
                tag2=" CSS"
                tag3=" Beginners"
                link="https://www.udemy.com/course/html-with-fun/"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="CSS Flexbox - Mastering the Basics
                "
                level="Beginner"
                duration="1hr 18min "
                enroll="FREE"
                platform="Udemy"
                tag1="HTML"
                tag2=" CSS"
                tag3=" Beginners"
                link="https://www.udemy.com/course/css-flexbox-mastering-the-basics/"
              />
              <CertificateShowCard
                title="Learn Basic CSS3 Easy way
                "
                level="Beginner"
                duration="1hr 4min"
                enroll="FREE"
                platform="Udemy"
                tag1="HTML"
                tag2=" CSS"
                tag3=" Beginners"
                link="https://www.udemy.com/course/learn-basic-css3-easy-way"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="CSS3 tutorial for beginners - Learn about CSS3
                "
                level="Beginner"
                duration="1hr 9min"
                enroll="FREE"
                platform="Udemy"
                tag1="HTML"
                tag2=" CSS"
                tag3=" Beginners"
                link="https://www.udemy.com/course/learn-the-basic-of-css-with-course/"
              />
              <CertificateShowCard
                title="Build Portfolio Website Using HTML5,CSS3,jQuery & Bootstrap
                "
                level="Beginner"
                duration="1hr 30min"
                enroll="Paid"
                platform="Udemy"
                tag1="HTML"
                tag2=" CSS"
                tag3=" Beginners"
                link="https://www.udemy.com/course/build-portfolio-website-using-html5-css3-jquery-bootstrap4/"
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
              <CertificateShowCard
                title="MODERN WEB DESIGN"
                level="Beginner"
                duration="5 hr"
                enroll="Free"
                platform="gymnasium"
                tag1="WEB DESIGN"
                tag2="Beginners"
                tag3="Code"
                link="https://www.thegymnasium.com/courses/GYM/107/0/about"
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

export default Webdevelopment;
