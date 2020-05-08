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

class Cpp extends Component {
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
              Find the Best C++ Programming Training & Certification
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
                title="CS107: C++ Programming"
                level="Beginner"
                duration="40 hr"
                enroll="TOTAL FREE"
                platform="Saylor.org"
                tag1="C++"
                tag2="Programming"
                tag3=""
                link="https://learn.saylor.org/course/view.php?id=65"
              />
             <CertificateShowCard
                title="Modelling object-oriented software – an introduction"
                level="Intermediate"
                duration="20 hr"
                enroll="FREE"
                platform="open.eduCoursera"
                tag1="object-oriented "
                tag2="Modelling"
                tag3="software"
                link="https://www.open.edu/openlearn/science-maths-technology/computing-ict/modelling-object-oriented-software-introduction/content-section-0?active-tab=description-tab"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="The main object-oriented programming concepts explained"
                level="Beginner"
                duration="1 hr"
                enroll="Pay for Certificate only"
                platform="bitdegree.org"
                tag1="object-oriented programming"
                tag2="concepts"
                link="https://stude.co/848611/object-oriented-programming-concepts"
              />
             <CertificateShowCard
                title="C++ Tutorial for Complete Beginners"
                level="Beginner"
                duration="17hr 59min"
                enroll="FREE"
                platform="Udemy"
                tag1="Beginners"
                tag2="C++"
                tag3="Tutorial"
                link="https://www.udemy.com/course/free-learn-c-tutorial-beginners/"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="C++ Tutorial"
                level="Beginner"
                duration="5 hr"
                enroll="Free "
                platform="SoloLearn"
                tag1="C++"
                tag2="Tutorial"
                link="https://www.sololearn.com/Course/Java/"
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
            <LearningSideSection language="cpp" />
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

export default Cpp;
