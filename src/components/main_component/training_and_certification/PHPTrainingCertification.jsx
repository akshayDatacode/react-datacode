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

class PHP extends Component {
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
              Find the Best PHP Training & Certification
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
                title="PHP Tutorial"
                level="Beginner"
                duration="5 hr"
                enroll="Free "
                platform="SoloLearn"
                tag1="PHP"
                tag2="Tutorial"
                link="https://www.sololearn.com/Course/PHP/"
              />
              <CertificateShowCard
                title="Learning PHP from Scratch: Start Your Career as a Back-End Developer"
                level="Beginner"
                duration="85 hr"
                enroll="pay for certificate only"
                platform="bitdegree.org"
                tag1="PHP "
                tag2="Scratch"
                link="https://stude.co/848611/learning-php"
              />
            </div>
            <div className="card-deck">
            
              <CertificateShowCard
                title="Practical PHP: Master the Basics and Code Dynamic Websites"
                level="Beginner"
                duration="6hr 20min"
                enroll="FREE"
                platform="Udemy"
                tag1="PHP"
                tag2="Basics"
                tag3="Dynamic"
                link="https://www.udemy.com/course/code-dynamic-websites/"
              />
                <CertificateShowCard
                title="Bootstrap and PHP Blog Tutorial Step by Step"
                level="Beginner"
                duration="20 hr"
                enroll="FREE"
                platform="bitdegree.org"
                tag1="Bootstrap"
                tag2="PHP"
                tag3="Tutorial "
                link="https://stude.co/848611/php-blog-tutorial"
              />
            </div>
            <div className="card-deck">
            
              <CertificateShowCard
                title="Learn PHP Online: PHP Basics Explained in an Interactive and Fun Manner"
                level="Beginner"
                duration="23 hr"
                enroll="pay for certificate only"
                platform="bitdegree.org"
                tag1="PHP"
                tag2="Basics"
                link="https://stude.co/848611/learn-php"
              />
               <CertificateShowCard
                title="Become a PHP Specialist: Up to Date Video PHP Tutorial"
                level="Beginner"
                duration="52 hr"
                enroll="pay for certificate only"
                platform="bitdegree.org"
                tag1="PHP"
                tag2="Video"
                tag3="Tutorial"
                link="https://stude.co/848611/php-tutorial"
              />
            </div>
            <div className="card-deck">
             
              <CertificateShowCard
                title="PHP: Object Oriented PHP and MySQL with PDO for beginners + Project"
                level="Beginner"
                duration="92 hr"
                enroll="pay for certificate only"
                platform="bitdegree.org"
                tag1="PHP"
                tag2="Object Oriented"
                link="https://stude.co/848611/object-oriented-programming																			"
              />
            </div>
            
       
          
          </div>

          <div className="col-md-3 mt-md-5 mt-3">
            <div className="row">
              <FbLikeShare />{" "}
            </div>
            <LearningSideSection language="js" />
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

export default PHP;
