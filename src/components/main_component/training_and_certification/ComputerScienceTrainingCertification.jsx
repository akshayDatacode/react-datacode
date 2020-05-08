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

class ComputerScience extends Component {
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
              Find the Best ComputerScience Training & Certification
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
                title="CS101: Introduction to Computer Science I
                "
                level="Beginner"
                duration="52 hr"
                enroll="FREE"
                platform="Saylor.org"
                tag1="Introduction"
                tag2="Computer Science"
                link="https://learn.saylor.org/course/view.php?id=6"
              />
              <CertificateShowCard
                title="CS102: Introduction to Computer Science II"
                level="Beginner"
                duration="42 hr"
                enroll="FREE"
                platform="Saylor.org"
                tag1="Introduction"
                tag2="Computer Science"
                link="https://learn.saylor.org/course/view.php?id=64"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Computational Thinking for Problem Solving"
                level="Beginner"
                duration="17 hrs"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="Problem Solving"
                tag2="Certificate"
                tag3="computer"
                link="https://www.coursera.org/learn/computational-thinking-problem-solving"
              />
              <CertificateShowCard
                title="Google IT Support Professional Certificate"
                level="Beginner"
                duration="8 Months"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="Google"
                tag2="Professional"
                tag3="Certificate"
                link="https://www.coursera.org/professional-certificates/google-it-support"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Computer Science: Programming with a Purpose"
                level="Beginner"
                duration="88 hrs"
                enroll="Free"
                platform="Coursera"
                tag1="Computer Science"
                tag2=" Programming"
                tag3="Beginner"
                link="https://www.coursera.org/learn/cs-programming-java"
              />
              <CertificateShowCard
                title="Code Yourself! An Introduction to Programming"
                level="Beginner"
                duration="13 hr"
                enroll="FREE"
                platform="Coursera"
                tag1="Introduction"
                tag2="Programming"
                tag3="Computer Science"
                link="https://www.coursera.org/learn/intro-programming"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Introduction to Augmented Reality and ARCore"
                level="Beginner"
                duration="11 hrs"
                enroll="FREE"
                platform="Coursera"
                tag1="Augmented Reality"
                tag2="ARCore"
                tag3="Computer Science"
                link="https://www.coursera.org/learn/ar"
              />
              <CertificateShowCard
                title="How Computers Work
                "
                level="Beginner"
                duration="10 hr"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="Computers"
                tag2="Computer Science"
                tag3="Beginner"
                link="https://www.coursera.org/learn/how-computers-work"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Competitive Programmer's Core Skills"
                level="Intermediate"
                duration="28 hr"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="Competitive"
                tag2="Programming"
                tag3="Core"
                link="https://www.coursera.org/learn/competitive-programming-core-skills"
              />
              <CertificateShowCard
                title="Code Yourself! An Introduction to Programming"
                level="Beginner"
                duration="13 hr"
                enroll="FREE"
                platform="Coursera"
                tag1="Introduction"
                tag2="Programming"
                tag3="Code"
                link="https://www.coursera.org/learn/intro-programming"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Computer Science: Algorithms, Theory, and Machines"
                level="Intermediate"
                duration="16 hr"
                enroll="FREE"
                platform="Coursera"
                tag1="Computer Science"
                tag2="Algorithms"
                tag3="Theory"
                link="https://www.coursera.org/learn/cs-algorithms-theory-machines"
              />
              <CertificateShowCard
                title="Cloud Computing Specialization"
                level="Intermediate"
                duration="8 months"
                enroll="Pay for Certificate only"
                platform="Coursera"
                tag1="Cloud Computing"
                tag2="Computer Science"
                tag3="Intermediate"
                link="https://www.coursera.org/specializations/cloud-computing"
              />
            </div>

            <div className="card-deck">
              <CertificateShowCard
                title="CS301: Computer Architecture"
                level="Beginner"
                duration="109 hr"
                enroll="FREE"
                platform="Saylor.org"
                tag1="Computer"
                tag2="Architecture"
                link="https://learn.saylor.org/course/view.php?id=71"
              />
              <CertificateShowCard
                title="CS107: C++ Programming"
                level="Beginner"
                duration="40 hr"
                enroll="FREE"
                platform="Saylor.org"
                tag1="C++"
                tag2="Programming"
                tag3="Introduction"
                link="https://learn.saylor.org/course/view.php?id=65"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Elementary Data Structures"
                level="Beginner"
                duration="38 hr"
                enroll="FREE"
                platform="Saylor.org"
                tag1="Data Structures"
                tag2="Beginner"
                link="https://learn.saylor.org/course/view.php?id=66"
              />
              <CertificateShowCard
                title="Discrete Structures"
                level="Beginner"
                duration="106 hr"
                enroll="FREE"
                platform="Saylor.org"
                tag1="Discrete Structures"
                tag2="Beginner"
                tag3="Introduction"
                link="https://learn.saylor.org/course/view.php?id=67"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Software Engineering"
                level="Beginner"
                duration="45 hr"
                enroll="FREE"
                platform="Saylor.org"
                tag1="Software Engineering"
                tag2="Beginner"
                tag3="Introduction"
                link="https://learn.saylor.org/course/view.php?id=73"
              />
              <CertificateShowCard
                title="Operating Systems"
                level="Beginner"
                duration="120 hr"
                enroll="FREE"
                platform="Saylor.org"
                tag1="Operating Systems"
                tag2="Introduction"
                tag3="Beginner"
                link="https://learn.saylor.org/course/view.php?id=94"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Computer Communications and Networks
                "
                level="Beginner"
                duration="60 hr"
                enroll="TOTAL FREE"
                platform="Saylor.org"
                tag1="Computer"
                tag2="Communications"
                tag3="Networks"
                link="https://learn.saylor.org/course/index.php?categoryid=9"
              />
              <CertificateShowCard
                title="Introduction to Modern Database Systems"
                level="Beginner"
                duration="42 hr"
                enroll="FREE"
                platform="Saylor.org"
                tag1="Database Systems"
                tag2="Introduction"
                tag3="Beginner"
                link="https://learn.saylor.org/course/view.php?id=93"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="An introduction to data and information"
                level="Beginner"
                duration="20 hr"
                enroll="FREE"
                platform="OpenLearn"
                tag1="introduction"
                tag2="information"
                tag3="data"
                link="https://www.open.edu/openlearn/science-maths-technology/computing-and-ict/introduction-data-and-information/content-section-0?active-tab=description-tab"
              />
              <CertificateShowCard
                title="Introduction to computational thinking"
                level="Beginner"
                duration="12 hr"
                enroll="FREE"
                platform="open.edu"
                tag1="introduction"
                tag2="computational thinking"
                link="https://www.open.edu/openlearn/science-maths-technology/computing-ict/introduction-computational-thinking/content-section-0?active-tab=description-tab"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Data and processes in computing"
                level="Beginner"
                duration="14 hr"
                enroll="FREE"
                platform="open.edu"
                tag1="Data"
                tag2="processes"
                tag3="computing"
                link="https://www.open.edu/openlearn/science-maths-technology/computing-ict/data-and-processes-computing/content-section-0?active-tab=description-tab"
              />
              <CertificateShowCard
                title="Software and the law"
                level="Advance"
                duration="8 hr"
                enroll="FREE"
                platform="open.edu"
                tag1="Software"
                tag2="Advance"
                link="https://www.open.edu/openlearn/science-maths-technology/software-and-the-law/content-section-0?active-tab=description-tab"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Computers and computer systems"
                level="Intermediate"
                duration="20 hr"
                enroll="FREE"
                platform="open.edu"
                tag1="Computers"
                tag2="Computer Science"
                link="https://www.open.edu/openlearn/science-maths-technology/computing-ict/computers-and-computer-systems/content-section-0?active-tab=description-tab"
              />
              <CertificateShowCard
                title="Approaches to software development"
                level="Advance"
                duration="9 hr"
                enroll="FREE"
                platform="open.edu"
                tag1="technology"
                tag2="Approaches "
                tag3="software development"
                link="https://www.open.edu/openlearn/science-maths-technology/approaches-software-development/content-section-0?active-tab=description-tab"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="An introduction to software development"
                level="Advanced"
                duration="6 hr"
                enroll="FREE"
                platform="open.edu"
                tag1="introduction"
                tag2="software development"
                tag3="Advanced"
                link="https://www.open.edu/openlearn/science-maths-technology/introduction-software-development/content-section-0?active-tab=description-tab"
              />
              <CertificateShowCard
                title="Distributed paradigms"
                level="Advanced"
                duration="4 hr"
                enroll="FREE"
                platform="open.edu"
                tag1="computer"
                tag2="systems"
                tag3="distributed"
                link="https://www.open.edu/openlearn/science-maths-technology/computing-and-ict/systems-computer/distributed-paradigms/content-section-0?active-tab=description-tab"
              />
            </div>
            <div className="card-deck">
              <CertificateShowCard
                title="Key skill assessment unit: Information literacy"
                level="Beginner"
                duration="50 hr"
                enroll="FREE"
                platform="open.edu"
                tag1=" Information"
                tag2="computing"
                tag3="literacy"
                link="https://www.open.edu/openlearn/science-maths-technology/computing-ict/key-skill-assessment-unit-information-literacy/content-section-0?active-tab=description-tab"
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
            <LearningSideSection language="c" />
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

export default ComputerScience;
