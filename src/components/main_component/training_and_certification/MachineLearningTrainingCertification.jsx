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


class MachineLearning extends Component {
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
              Find the Best MachineLearning Training & Certification
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
                title="Video Basics with OpenCV and Python"
                level="Beginner"
                duration="4 hr"
                enroll="Paid"
                platform="Coursera"
                tag1="Basics"
                tag2="OpenCV"
                tag3="Python"
                link="https://www.coursera.org/learn/computer-vision-video-basics-opencv-python"
              />
              <CertificateShowCard
                title="Logistic Regression with NumPy and Python"
                level="Beginner"
                duration="1.5 hr"
                enroll="Paid"
                platform="Coursera"
                tag1="Regression"
                tag2="NumPy"
                tag3="Python"
                link="https://www.coursera.org/projects/logistic-regression-numpy-python"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Linear Regression with NumPy and Python"
                level="Beginner"
                duration="1.5 hr"
                enroll="Paid"
                platform="Coursera"
                tag1="Linear Regression"
                tag2="NumPy"
                tag3="Python"
                link="https://www.coursera.org/projects/linear-regression-numpy-python"
              />
              <CertificateShowCard
                title="Machine Learning for All"
                level="Beginner"
                duration="22hr"
                enroll="pay for certificate only"
                platform="Coursera"
                tag1="Machine Learning"
                tag2="certificate"
                tag3="training"
                link="https://www.coursera.org/learn/uol-machine-learning-for-all"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Introduction to Machine Learning"
                level="Intermediate"
                duration="21 hr "
                enroll="pay for certificate only"
                platform="Coursera"
                tag1="Introduction"
                tag2="Machine Learning"
                tag3="Intermediate"
                link="https://www.coursera.org/learn/machine-learning-duke"
              />
              <CertificateShowCard
                title="Machine Learning for All"
                level="Beginner"
                duration="54 hr"
                enroll="FREE"
                platform="Coursera"
                tag1="Machine Learning"
                tag2="Beginner"
                link="https://www.coursera.org/learn/machine-learning"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Unity Machine Learning with Python"
                level="Beginner"
                duration="36 hr"
                enroll="pay for certificate only"
                platform="bitdegree.org"
                tag1="Python"
                tag2="Machine"
                tag3="Learning"
                link="https://stude.co/848611/unity-machine-learning"
              />
              <CertificateShowCard
                title="Welcome to Artificial Intelligence
                "
                level="Beginner"
                duration="49min"
                enroll="FREE"
                platform="Udemy"
                tag1="Python"
                tag2="Artificial"
                tag3="Intelligence"
                link="https://www.udemy.com/course/road-map-to-artificial-intelligence-and-machine-learning"
              />
             
            </div>

            <div className="card-deck">
              <CertificateShowCard
                title="Complexity Theory Basics
                "
                level="Intermediate"
                duration="1hr 21min"
                enroll="FREE"
                platform="Udemy"
                tag1="Python"
                tag2="Machine"
                tag3="Learning"
                link="https://www.udemy.com/course/complexity-theory-basics"
              />
             <CertificateShowCard
                title="A Beginner's Guide To Learn Machine Learning"
                level="Beginner"
                duration="31min"
                enroll="Paid"
                platform="Udemy"
                tag1="Python"
                tag2="Machine"
                tag3="Learning"
                link="https://www.udemy.com/course/complete-machine-learning-course-go-from-zero-to-hero"
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

export default MachineLearning;
