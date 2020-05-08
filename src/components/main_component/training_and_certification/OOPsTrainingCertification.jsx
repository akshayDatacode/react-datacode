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

class OOPs extends Component {
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
              Find the Best OOPs Training & Certification
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
                title="Object Oriented Programming (OOPs) for JAVA Interviews
                "
                level="Intermediate"
                duration="13hr 6min "
                enroll="FREE"
                platform="Udemy"
                tag1="Object Oriented"
                tag2=" JAVA"
                link="https://www.udemy.com/course/object-oriented-programming-oops-for-java-certification"
              />
             <CertificateShowCard
                title="Modelling object-oriented software – an introduction"
                level="Intermediate"
                duration="20 hr"
                enroll="FREE"
                platform="open.edu"
                tag1="Modelling"
                tag2="object-oriented"
                tag3="software "
                link="https://www.open.edu/openlearn/science-maths-technology/computing-ict/modelling-object-oriented-software-introduction/content-section-0?active-tab=description-tab"
              />
               
            </div>
            <div className="card-deck">
            <CertificateShowCard
                title="Object-Oriented Programming with Java"
                level="Intermediate"
                duration="2 hr"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="Object-Oriented"
                tag2="Programming "
                tag3="Java"
                link="https://www.coursera.org/projects/object-oriented-programming-java"
              />
               <CertificateShowCard
                title="Object Oriented Programming in Java Specialization"
                level="Beginner"
                duration="5 months"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="Object Oriented"
                tag2="Programming"
                tag3="Java"
                link="https://www.coursera.org/specializations/object-oriented-programming"
              />
            </div>
            <div className="card-deck">
          
               <CertificateShowCard
                title="PHP: Object Oriented PHP and MySQL with PDO for beginners + Project"
                level="Beginner"
                duration="92 hr"
                enroll="Pay for Certificate only"
                platform="bitdegree.org"
                tag1="PHP"
                tag2="Object Oriented"
                tag3="Project"
                link="https://stude.co/848611/object-oriented-programming"
              />
              <CertificateShowCard
                title="Object-Oriented Design"
                level="Intermediate"
                duration="17 hr"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="Object-Oriented"
                tag2="Design"
                link="https://www.coursera.org/learn/object-oriented-design"
              />
            </div>
            <div className="card-deck">
            <CertificateShowCard
                title="Object-Oriented Programming: Python For .NET Developers"
                level="Beginner"
                duration="28 hr"
                enroll="Pay for Certificate only"
                platform="bitdegree.org"
                tag1="Object-Oriented"
                tag2="Python"
                tag3=".NET"
                link="https://stude.co/848611/object-oriented-programming-python"
              />
               <CertificateShowCard
                title="Level Up with Object-oriented PHP and CodeIgniter"
                level="Beginner"
                duration="85 hr"
                enroll="Pay for Certificate only"
                platform="bitdegree.org"
                tag1="Object-oriented"
                tag2="PHP"
                tag3="CodeIgniter"
                link="https://stude.co/848611/object-oriented-php"
              />
            </div>
            <div className="card-deck">
            <CertificateShowCard
                title="The main object-oriented programming concepts explained"
                level="Beginner"
                duration="1 hr"
                enroll="Pay for Certificate only"
                platform="bitdegree.org"
                tag1="object-oriented"
                tag2="programming "
                tag3="concepts"
                link="https://stude.co/848611/object-oriented-programming-concepts"
              />

<CertificateShowCard
                title="Object Oriented Programming in Java"
                level="Intermediate"
                duration="39 hr"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="Object Oriented"
                tag2="Programming"
                tag3="Java"
                link="https://www.coursera.org/learn/object-oriented-java"
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
            <LearningSideSection language="oops" />
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

export default OOPs;
