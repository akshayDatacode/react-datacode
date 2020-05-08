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

class Swift extends Component {
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
              Find the Best Swift Training & Certification
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
                title="Swift 4 Fundamentals"
                level="Beginner"
                duration="5 hr"
                enroll="Free "
                platform="SoloLearn"
                tag1="Fundamentals"
                tag2="Swift 4"
                link="https://www.sololearn.com/Course/Swift/"
              />
          
          <CertificateShowCard
                title="The Complete iOS 10 Developer - Create Real Apps in Swift 3"
                level="Beginner"
                duration="48hr 55min"
                enroll="FREE"
                platform="Udemy"
                tag1="iOS 10"
                tag2="Developer"
                tag3="Apps"
                link="https://www.udemy.com/course/the-complete-ios-10-developer-course"
              />
             
            </div>
            <div className="card-deck">

            <CertificateShowCard
                title="iOS App Development For Beginners - No Swift Skill Required"
                level="Beginner"
                duration="4hr 57min"
                enroll="FREE"
                platform="Udemy"
                tag1="iOS App"
                tag2="Development"
                link="https://www.udemy.com/course/ios-app-development-for-beginners/"
              />
                <CertificateShowCard
                title="Learn Swift 4 : From Beginner to Advanced Swift Free lite"
                level="Beginner"
                duration="3hr 45min"
                enroll="FREE"
                platform="Udemy"
                tag1="Swift 4"
                link="https://www.udemy.com/course/learn-swift-4-from-beginner-to-advanced-swift-free-lite"
              />
              </div>
            <div className="card-deck">
            <CertificateShowCard
                title="The Complete Swift 4 Bootcamp"
                level="Beginner"
                duration="1hr 41min"
                enroll="FREE"
                platform="Udemy"
                tag1="Swift 4 "
                tag2="Bootcamp"
                link="https://www.udemy.com/course/learnswift/"
              />
             
              <CertificateShowCard
                title="iOS Development for Creative Entrepreneurs Specialization"
                level="Beginner"
                duration="7 months"
                enroll="pay for Certificate only"
                platform="Coursera"
                tag1="iOS Development"
                tag2="Entrepreneurs"
                link="https://www.coursera.org/specializations/ios-development"
              />
            </div>

            <div className="card-deck">
              <CertificateShowCard
                title="Learn Swift Programming: Master App Development in Under 3 Hours"
                level="Beginner"
                duration="3 hr"
                enroll="pay for Certificate only"
                platform="bitdegree.org"
                tag1="Swift Programming"
                tag2=" App "
                tag3="Development"
                link="https://stude.co/848611/learn-swift-programming"
              />
              <CertificateShowCard
                title="Introduction to Programming in Swift 5"
                level="Beginner"
                duration="11 hr"
                enroll="pay for Certificate only"
                platform="Coursera"
                tag1="Swift 5"
                tag2="Programming "
                link="https://www.coursera.org/learn/swift-5-programming-introduction"
              />
            </div>

          
              <div className="card-deck">

              <CertificateShowCard
                title="iOS App Development with Swift Specialization"
                level="Intermediate"
                duration="5 months"
                enroll="pay for Certificate only"
                platform="Coursera"
                tag1="iOS App"
                tag2="Development"
                tag3="Swift"
                link="https://www.coursera.org/specializations/app-development"
              />

               <CertificateShowCard
                title="Introduction to Programming in Swift 5"
                level="Beginner"
                duration="11 hr"
                enroll="pay for Certificate only "
                platform="Coursera"
                tag1="Programming"
                tag2="Swift 5"
                link="Swift	Coursera	Introduction to Programming in Swift 5		Enroll Free	11 hr	Beginner	https://www.coursera.org/learn/swift-5-programming-introduction																				"
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
            <LearningSideSection language="android" />
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

export default Swift;
