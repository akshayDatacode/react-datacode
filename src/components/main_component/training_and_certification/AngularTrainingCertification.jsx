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

class Angular extends Component {
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
              Find the Best Angular Programming Training & Certification
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
                title="Create a CRUD Application with Ionic 3 and Firebase
                "
                level="Intermediate"
                duration="44 min "
                enroll="FREE"
                platform="Udemy"
                tag1="Angular"
                tag2="CRUD"
                tag3="Firebase"
                link="https://www.udemy.com/course/create-a-crud-application-with-ionic-3-and-firebase"
              />
               <CertificateShowCard
                title="Angular 9 Masterclass with TypeScript, Firebase, & Material
                "
                level="Intermediate"
                duration="16hr 30min"
                enroll="FREE"
                platform="Udemy"
                tag1="Angular"
                tag2="TypeScript"
                tag3="Firebase"
                link="https://www.udemy.com/course/create-a-crud-application-with-ionic-3-and-firebase"
              />

              </div>
              
            <div className="card-deck">
              <CertificateShowCard
                title="Angular Certification Training Course
                "
                level="Beginner"
                duration="34 hr"
                enroll="Paid"
                platform="simplilearn.com"
                tag1="Angular"
                tag2="Training"
                tag3="Certification"
                link="https://www.simplilearn.com/angular-certification-training"
              />
              <CertificateShowCard
                title="Single Page Web Applications with AngularJS"
                level="Intermediate"
                duration="30 hr"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="Web Applications"
                tag2="AngularJS"
                tag3="Single Page"
                link="https://www.coursera.org/learn/single-page-web-apps-with-angularjs"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Angular 2 Tutorial For Beginners: Learn Popular JavaScript Framework"
                level="Beginner"
                duration="68 hr"
                enroll="Free"
                platform="bitdegree.org"
                tag1="Angular"
                tag2="Training"
                tag3="Certification"
                link="https://stude.co/848611/angular-2-tutorial"
              />
                <CertificateShowCard
                title="Beginner Friendly Angular Tutorial: Learn Angular 7 in 8 hours"
                level="Beginner"
                duration="8 hr"
                enroll="Free"
                platform="bitdegree.org"
                tag1="Angular"
                tag2="Training"
                tag3="Certification"
                link="https://stude.co/848611/angular-tutorial"
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
            <LearningSideSection language="angular" />
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

export default Angular;
