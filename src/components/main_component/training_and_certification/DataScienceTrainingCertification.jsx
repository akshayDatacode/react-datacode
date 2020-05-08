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

class DataScience extends Component {
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
              Find the Best Datascience Training & Certification
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
                title="Learn Data Science With R Part 1 of 10
                "
                level="Beginner"
                duration="8hr 42min"
                enroll="FREE"
                platform="Udemy"
                tag1="Data Science"
                tag2="R"
                link="https://www.udemy.com/course/datascience_with_r"
              />
              <CertificateShowCard
                title="Introduction to Data Science using Python (Module 1/3)
                "
                level="Intermediate"
                duration="2hr 32min"
                enroll="FREE"
                platform="Udemy"
                tag1="Data Science"
                tag2=" Python"
                link="https://www.udemy.com/course/introduction-to-data-science-using-python/"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Build Data Analysis tools using R and DPLYR"
                level="Beginner"
                duration="1 hr"
                enroll="Paid"
                platform="Coursera"
                tag1="Data Analysis"
                tag2="R"
                tag3="DPLYR"
                link="https://www.coursera.org/projects/introduction-to-dplyr"
              />
              <CertificateShowCard
                title="IBM Data Science Professional Certificate"
                level="Beginner"
                duration="10 Months"
                enroll="Paid"
                platform="Coursera"
                tag1="Data Science"
                tag2="IBM"
                link="https://www.coursera.org/professional-certificates/ibm-data-science"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Databases and SQL for Data Science"
                level="Beginner"
                duration="15 hr"
                enroll="pay for certificate only"
                platform="Coursera"
                tag1="Data Science"
                tag2="Databases"
                tag3="SQL"
                link="https://www.coursera.org/learn/sql-data-science"
              />
              <CertificateShowCard
                title="Python for Data Science and AI"
                level="Beginner"
                duration="22 hr"
                enroll="pay for certificate only"
                platform="Coursera"
                tag1="Python"
                tag2="Data Science"
                tag3="AI"
                link="https://www.coursera.org/learn/python-for-applied-data-science-ai"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Data Analysis with Python"
                level="Beginner"
                duration="16 hr"
                enroll="pay for certificate only"
                platform="Coursera"
                tag1="Data Analysis"
                tag2="Python"
                tag3="Beginner"
                link="https://www.coursera.org/learn/data-analysis-with-python"
              />
              <CertificateShowCard
                title="Introduction to Data Science in Python"
                level="Intermediate"
                duration="16 hr"
                enroll="pay for certificate only"
                platform="Coursera"
                tag1="Data Science"
                tag2="Python"
                link="https://www.coursera.org/learn/python-data-analysis"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Data Science: Statistics and Machine Learning Specialization"
                level="Intermediate"
                duration="6 months"
                enroll="pay for certificate only"
                platform="Coursera"
                tag1="Statistics"
                tag2="Data Science"
                tag3="Machine Learning"
                link="https://www.coursera.org/specializations/data-science-statistics-machine-learning"
              />
              <CertificateShowCard
                title="Data Science Math Skills"
                level="Beginner"
                duration="4 Week"
                enroll="FREE"
                platform="Coursera"
                tag1=" Math "
                tag2="Data Science"
                link="https://www.coursera.org/learn/datasciencemathskills?edocomorp=free-courses-college-students&ranMID=40328&ranEAID=SAyYsTvLiGQ&ranSiteID=SAyYsTvLiGQ-_LocLC0RVsvxyDU0ugyWXA&siteID=SAyYsTvLiGQ-_LocLC0RVsvxyDU0ugyWXA&utm_content=10&utm_medium=partners&utm_source=linkshare&utm_campaign=SAyYsTvLiGQ"
              />
            </div>

            <div className="card-deck">
              <CertificateShowCard
                title="Mobile ML and Data Science with nitroproc
                "
                level="Intermediate"
                duration="5hr 27min"
                enroll="FREE"
                platform="Udemy"
                tag1="ML"
                tag2="Data Science"
                tag3="nitroproc"
                link="https://www.udemy.com/course/work-with-big-data-locally-with-nitroproc/"
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

export default DataScience;
