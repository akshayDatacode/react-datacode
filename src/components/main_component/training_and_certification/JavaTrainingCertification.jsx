import React, { Component } from "react";
import { Link } from "react-router-dom";
import RightSideSection from "../../right_section/RightSideSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faAward } from "@fortawesome/free-solid-svg-icons";
import FbLikeShare from "../../FbLikeShare";
import Technologies from "../../right_section/Technologies";
import CertificateShowCard from "./CertificateShowCard";
import LearningSideSection from "../../right_section/learning_sidesection/LearningSideSection";

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
                title="String, StringBuffer & StringBuilder for JAVA Interviews
                "
                level="Intermediate"
                duration="5hr 11min"
                enroll="FREE"
                platform="Udemy"
                tag2="Java"
                tag1="String"
                tag2="Interviews"
                link="https://www.udemy.com/course/string-stringbuffer-stringbuilder-for-java-certification"
              />
              <CertificateShowCard
                title="Java Tutorial"
                level="Beginner"
                duration="5 hr"
                enroll="Free "
                platform="SoloLearn"
                tag2="Java"
                tag1="Tutorial"
                link="https://www.sololearn.com/Course/Java/"
              />
            </div>
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
                platform="Coursera"
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
                tag2="Java"
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

            <div className="card-deck">
              <CertificateShowCard
                title="Java Tutorial for Complete Beginners"
                level="Beginner"
                duration="16hr 7min"
                enroll="FREE"
                platform="Udemy"
                tag2="Java"
                tag1="Tutorial"
                link="https://www.udemy.com/course/java-tutorial/"
              />
              <CertificateShowCard
                title="20 Small Programs in Java
                "
                level="Intermediate"
                duration="58min"
                enroll="FREE"
                platform="Udemy"
                tag2="Java"
                tag1="Programs"
                link="https://www.udemy.com/course/10-small-programs-in-java/"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Simple Game Programming From Scratch with libGDX and java
                "
                level="Intermediate"
                duration="1hr 22min"
                enroll="FREE"
                platform="Udemy"
                tag2="Java"
                tag1="Programming"
                tag2="Scratch"
                link="https://www.udemy.com/course/game-programming-with-libgdx-and-java"
              />
              <CertificateShowCard
                title="An Introduction to Java Programming
                "
                level="Beginner"
                duration="1hr 23min"
                enroll="FREE"
                platform="Udemy"
                tag2="Java"
                tag1="Programming"
                tag2="Introduction"
                link="https://www.udemy.com/course/an-introduction-to-java-programming"
              />
            </div>

            <div className="card-deck">
              <CertificateShowCard
                title="Java 101: Find the Easiest Way to Learn Java & Start Coding in No Time"
                level="Beginner"
                duration="52 hr"
                enroll="Pay for Certificate only"
                platform="bitdegree.org"
                tag1="Java"
                tag1=" Learn"
                tag2="Coding"
                link="https://stude.co/848611/learn-java"
              />
              <CertificateShowCard
                title="Java Rest API automation from scratch"
                level="Beginner"
                duration="52 hr"
                enroll="Pay for Certificate only"
                platform="bitdegree.org"
                tag1="Java"
                tag1="scratch"
                tag2="Rest API"
                link="https://stude.co/848611/java-rest-api"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Java for Dummies: Learn Java Programming Basics"
                level="Beginner"
                duration="3hr"
                enroll="Pay for Certificate only"
                platform="bitdegree.org"
                tag1="Java"
                link="https://stude.co/848611/java-for-dummies"
              />
              <CertificateShowCard
                title="Introduction to Java Basics Programming: Coding Android Apps"
                level="Beginner"
                duration="3hr"
                enroll="Pay for Certificate only"
                platform="bitdegree.org"
                tag1="Java"
                link="https://stude.co/848611/java-for-dummies"
              />
            </div>
          </div>
          <div className="col-md-3 mt-md-5 mt-3">
            <div className="row">
              <FbLikeShare />{" "}
            </div>
            <LearningSideSection language="java" />
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

export default Java;
