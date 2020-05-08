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

class Android extends Component {
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
              Find the Best Android Programming Training & Certification
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
                title="Android App Development Specialization"
                level="Beginner"
                duration="5 months"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="App"
                tag2="Android"
                tag3="Development"
                link="https://www.coursera.org/specializations/android-app-development"
              />
              <CertificateShowCard
                title="Become an Android Developer from Scratch"
                level="Beginner"
                duration="11hr 32min"
                enroll="FREE"
                platform="Udemy"
                tag1="Developer"
                tag2="Android"
                tag3="Scratch"
                link="https://www.udemy.com/course/become-an-android-developer-from-scratch/"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Learn Kotlin & Android Studio to Start Building Exciting Android Apps!"
                level="Beginner"
                duration="6 hr"
                enroll="Pay for Certificate only"
                platform="bitdegree.org"
                tag1="Kotlin"
                tag2="Android"
                tag3="Build"
                link="https://stude.co/848611/learn-kotlin"
              />
              <CertificateShowCard
                title="Become an Android Developer from Scratch"
                level="Beginner"
                duration="11hr 32min"
                enroll="FREE"
                platform="Udemy"
                tag1="Developer"
                tag2="Android"
                link="https://www.udemy.com/course/become-an-android-developer-from-scratch/"
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

export default Android;
