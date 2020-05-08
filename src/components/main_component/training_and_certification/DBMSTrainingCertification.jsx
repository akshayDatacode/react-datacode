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

class DBMS extends Component {
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
              Find the Best DBMS & SQL Training & Certification
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
                title="SQL Fundamentals"
                level="Beginners"
                duration="5 hr"
                enroll="Free "
                platform="SoloLearn"
                tag1="SQL"
                tag2="Fundamentals"
                link="https://www.sololearn.com/Course/SQL/"
              />
               <CertificateShowCard
                title="SQL Database Fundamentals"
                level="Beginners"
                duration="5 hr"
                enroll="Free"
                platform="Microsoft"
                tag1="Database"
                tag2="SQL"
                link="https://bit.ly/33vCsI2"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Introduction to Databases and SQL Querying
                "
                level="Beginners"
                duration="2hr 17min"
                enroll="FREE"
                platform="Udemy"
                tag1="Databases"
                tag2="SQL"
                tag3="Query"
                link="https://www.udemy.com/course/introduction-to-databases-and-sql-querying/"
              />
               <CertificateShowCard
                title="Advanced Databases and SQL Querying
                "
                level="Advance"
                duration="3hr 21min"
                enroll="FREE"
                platform="Udemy"
                tag1="Databases"
                tag2="SQL"
                tag3="Query"
                link="https://www.udemy.com/course/advanced-tsql-querying-using-sql-2014/"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="The database development life cycle"
                level="Advanced"
                duration="4 hr"
                enroll="FREE"
                platform="open.edu"
                tag1="database"
                tag2="life cycle"
                link="https://www.open.edu/openlearn/science-maths-technology/computing-ict/the-database-development-life-cycle/content-section-0?active-tab=description-tab"
              />
               <CertificateShowCard
                title="An introduction to data and information"
                level="Beginners"
                duration="20 hr"
                enroll="FREE"
                platform="open.edu"
                tag1="data"
                tag2="information"
                link="https://www.open.edu/openlearn/science-maths-technology/computing-and-ict/introduction-data-and-information/content-section-0?active-tab=description-tab"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Introduction to Modern Database Systems"
                level="Beginners"
                duration="42 hr"
                enroll="FREE"
                platform="open.edu"
                tag1="Modern"
                tag2="Database"
                tag3="Systems"
                link="https://learn.saylor.org/course/view.php?id=93"
              />
               <CertificateShowCard
                title="Data and processes in computing"
                level="Beginners"
                duration="14 hr"
                enroll="FREE"
                platform="open.edu"
                tag1="Data"
                tag2="processes"
                tag3="computing"
                link="https://www.open.edu/openlearn/science-maths-technology/computing-ict/data-and-processes-computing/content-section-0?active-tab=description-tab"
              />
            </div>
           
            <div className="card-deck">
              <CertificateShowCard
                title="Databases and SQL for Data Science"
                level="Beginners"
                duration="15 hr"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="Databases"
                tag2="SQL"
                tag3="Data Science"
                link="https://www.coursera.org/learn/sql-data-science"
              />
               <CertificateShowCard
                title="Using Databases with Python"
                level="Beginners"
                duration="13 hr"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1=" Databases"
                tag2="Python"
                link="https://www.coursera.org/learn/python-databases"
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
            <LearningSideSection language="dbms" />
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

export default DBMS;
