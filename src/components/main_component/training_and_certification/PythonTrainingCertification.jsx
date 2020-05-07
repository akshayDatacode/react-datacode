import React, { Component } from "react";
import { Link } from "react-router-dom";
import RightSideSection from "../../right_section/RightSideSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faAward } from "@fortawesome/free-solid-svg-icons";
import FbLikeShare from "../../FbLikeShare";
import Technologies from "../../right_section/Technologies";
import CertificateShowCard from "./CertificateShowCard";
import LearningSideSection from "../../right_section/learning_sidesection/LearningSideSection";


class Python extends Component {
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
              Find the Best Python Training & Certification
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
                title="Create Your First Python Program"
                level="Beginner"
                duration="2 hrs"
                enroll="Paid"
                platform="Coursera"
                tag1="Python"
                tag2="Beginner"
                link="https://www.coursera.org/projects/first-python-program"
              />
              <CertificateShowCard
                title="Python for Everybody Specialization"
                level="Beginner"
                duration="8 Months"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="Python"
                tag2="Beginner"
                link="https://www.coursera.org/specializations/python"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Google IT Automation with Python Professional Certificate"
                level="Beginner"
                duration="8 Months"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1=" Automation"
                tag2=" Python"
                tag3="Professional "
                link="https://www.coursera.org/professional-certificates/google-it-automation"
              />
              <CertificateShowCard
                title="Crash Course on Python"
                level="Beginner"
                duration="31 Hr"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="Python"
                tag2="Course"
                tag3="Beginner"
                link="https://www.coursera.org/learn/python-crash-course"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Learn to Program: The Fundamentals"
                level="Beginner"
                duration="25 hr"
                enroll="FREE"
                platform="Coursera"
                tag1="Program"
                tag2="Fundamentals"
                tag3="python"
                link="https://www.coursera.org/learn/learn-to-program"
              />
              <CertificateShowCard
                title="Python Programming: A Concise Introduction"
                level="Beginner"
                duration="18 hr"
                enroll="FREE"
                platform="Coursera"
                tag1="Python"
                tag2="Programming"
                tag3="Introduction"
                link="https://www.coursera.org/learn/python-programming-introduction"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Problem Solving, Python Programming, and Video Games"
                level="Beginner"
                duration="57 hr"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="Problem Solving"
                tag2="Python"
                tag3="Video Games"
                link="https://www.coursera.org/learn/problem-solving-programming-video-games"
              />
              <CertificateShowCard
                title="Data Processing Using Python"
                level="Beginner"
                duration="28 hr"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="Python"
                tag2="Data "
                tag3="Processing"
                link="https://www.coursera.org/learn/python-data-processing"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Python Basics"
                level="Beginner"
                duration="36 hr"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="Python"
                tag2="Basics"
                link="https://www.coursera.org/learn/python-basics"
              />
              <CertificateShowCard
                title="Python Functions, Files, and Dictionaries
                "
                level="Beginner"
                duration="32 hr"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="Functions"
                tag2="Files"
                tag3="Dictionaries"
                link="https://www.coursera.org/learn/python-functions-files-dictionaries"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Python Data Representations"
                level="Beginner"
                duration="8 hr"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="Python"
                tag2="Data "
                link="https://www.coursera.org/learn/python-representation"
              />
              <CertificateShowCard
                title="Programming for Everybody (Getting Started with Python)"
                level="Beginner"
                duration="19 hr"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="Programming"
                tag2="Python"
                link="https://www.coursera.org/learn/python"
              />
            </div>

            <div className="card-deck">
              <CertificateShowCard
                title="Using Databases with Python"
                level="Beginner"
                duration="13 hr"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="Python"
                tag2="Database"
                link="https://www.coursera.org/learn/python-databases"
              />
              <CertificateShowCard
                title="Simple coding"
                level="Beginner"
                duration="2 hr"
                enroll="FREE"
                platform="open.edu"
                tag1="Python"
                tag2="coding"
                tag3="Beginner"
                link="https://www.open.edu/openlearn/science-maths-technology/simple-coding/content-section-0?active-tab=description-tab"
              />
            </div>

            <div className="card-deck">
            <CertificateShowCard
                title="Using Python for Research"
                level="Beginner"
                duration="5 week"
                enroll="Pay for Certificate only"
                platform="edx.org"
                tag1="Python"
                tag2="Beginner"
                tag3="Certificate "
                link="https://www.edx.org/course/using-python-for-research"
              />
               <CertificateShowCard
                title="CS50's Introduction to Artificial Intelligence with Python"
                level="Beginner"
                duration="7 week"
                enroll="Pay for Certificate only"
                platform="edx.org"
                tag1="Python"
                tag2="AI"
                tag3="Beginner"
                link="https://www.edx.org/course/cs50s-introduction-to-artificial-intelligence-with-python"
              />
            </div>
            <div className="card-deck">

            <CertificateShowCard
                title="Learn Advanced Python Programming: Advanced Python Course"
                level="Intermediate"
                duration="25 hr"
                enroll="Pay for Certificate only"
                platform="bitdegree.org"
                tag1="Python"
                tag2="Advanced"
                tag3=" Programming"
                link="https://stude.co/848611/advanced-python-programming"
              />
               <CertificateShowCard
                title="Learn Python in one day! Beginner’s crash course"
                level="Beginner"
                duration="36 hr"
                enroll="Pay for Certificate only"
                platform="bitdegree.org"
                tag1="Python"
                tag2="Beginner"
                link="https://stude.co/848611/learn-python"
              />
            </div>

            <div className="card-deck">
            <CertificateShowCard
                title="Simple and Extensive Python 3 Tutorial: Learn Python Basics From Scratch"
                level="Beginner"
                duration="78 hr"
                enroll="Pay for Certificate only"
                platform="bitdegree.org"
                tag1="Python"
                tag2="Tutorial"
                tag3="Extensive"
                link="https://stude.co/848611/python-3-tutorial"
              />
               <CertificateShowCard
                title="Selenium Tutorial: Learn to Build an Automation Framework with Python"
                level="Beginner"
                duration="60 hr"
                enroll="Pay for Certificate only"
                platform="bitdegree.org"
                tag1="Python"
                tag2="Learn"
                tag3="Automation"
                link="https://stude.co/848611/selenium-tutorial"
              />
            </div>
            <div className="card-deck">
            <CertificateShowCard
                title="AWS tutorial for beginners: get confident with DynamoDB, using Python and Boto3, RDS"
                level="Beginner"
                duration="47 hr"
                enroll="Pay for Certificate only"
                platform="bitdegree.org"
                tag1="Python"
                tag2="DynamoDB"
                link="https://stude.co/848611/aws-tutorial"
              />
               <CertificateShowCard
                title="QGIS tutorial: extend QGIS with Python plugins"
                level="Intermediate"
                duration="22 hr"
                enroll="Pay for Certificate only"
                platform="Python	bitdegree.org"
                tag1="Python"
                tag2="QGIS"
                tag3="plugins"
                link="https://stude.co/848611/qgis-tutorial"
              />
            </div>
            <div className="card-deck">

            <CertificateShowCard
                title="Learn Python From Scratch: Basics and Projects for Practice"
                level="Beginner"
                duration="37 hr"
                enroll="TOTAL FREE"
                platform="bitdegree.org"
                tag1="Python"
                tag2="Basics"
                tag3="Projects"
                link="https://stude.co/848611/python-from-scratch"
              />
               <CertificateShowCard
                title="Python Course: Become a Highly In-demand Programmer"
                level="Beginner"
                duration="62 hr"
                enroll="Pay for Certificate only"
                platform="bitdegree.org"
                tag1="Python"
                tag2="In-demand"
                tag3="Programmer"
                link="https://stude.co/848611/python-course"
              />
            </div>

            <div className="card-deck">

<CertificateShowCard
    title="Anyone Can Code: How to Learn Coding for Beginners With Scratch and Python!"
    level="Beginner"
    duration="37 hr"
    enroll="Pay for Certificate only"
    platform="bitdegree.org"
    tag1="Python"
    tag2="Coding"
    tag3="Learn"
    link="https://stude.co/848611/how-to-learn-coding-for-beginners"
  />
   <CertificateShowCard
    title="Learn Node.js web development getting a full stack of the best tools"
    level="Beginner"
    duration="5 hr"
    enroll="Pay for Certificate only"
    platform="bitdegree.org"
    tag1="Python"
    tag2="web development"
    tag3="full stack"
    link="https://stude.co/848611/node-js-web-development"
  />
</div>

<div className="card-deck">

<CertificateShowCard
    title="Introduction To Python Programming"
    level="Beginner"
    duration="4hr 32min"
    enroll="FREE"
    platform="Udemy"
    tag1="Python"
    tag2="Programming"
    link="https://www.udemy.com/course/pythonforbeginnersintro/"
  />
   <CertificateShowCard
    title="Learn Graphs and Social Network Analytics Using Python
    "
    level="Intermediate"
    duration="6hr 24min"
    enroll="FREE"
    platform="Udemy"
    tag1="Python"
    tag2="Graphs"
    tag3="Analytics"
    link="https://www.udemy.com/course/graphs-and-social-network-analytics-for-dummies-using-python/"
  />
</div>
<div className="card-deck">

<CertificateShowCard
    title="Free Python 101 Class Beginners Bootcamp Intro to Python NYC"
    level="Beginner"
    duration="2hr 25min"
    enroll="FREE"
    platform="Udemy"
    tag1="Python"
    tag2="Beginners"
    tag3="Bootcamp"
    link="https://www.udemy.com/course/python-101-beginners-coding-bootcamp-free-course"
  />
   <CertificateShowCard
    title="Python For Data Science"
    level="Intermediate"
    duration="3hr 55min"
    enroll="FREE"
    platform="Udemy"
    tag1="Python"
    tag2="Data Science"
    link="https://www.udemy.com/course/python-for-every1/"
  />
</div>
<div className="card-deck">

<CertificateShowCard
    title="Python 3 Tutorial"
    level="Beginner"
    duration="3hr 55min"
    enroll="FREE"
    platform="SoloLearn"
    tag1="Python"
    tag2="Tutorial"
    link="https://www.sololearn.com/Course/Python/"
  />
  </div>
  </div>

           <div className="col-md-3 mt-md-5 mt-3">
            <div className="row">
              <FbLikeShare />{" "}
            </div>
            <LearningSideSection language="python" />
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

export default Python;
