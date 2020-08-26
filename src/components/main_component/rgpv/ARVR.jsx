import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import RightSideSection from "../../right_section/RightSideSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUniversity } from "@fortawesome/free-solid-svg-icons";
import RecommendPost from "../../right_section/RecommendPost";
import RoadMapCard from "./RoadMapCard";
import FbShare from "../FbShare";
import FbLikeShare from "../../FbLikeShare";
import Technologies from "../../right_section/Technologies";
import LearningSideSection from "../../right_section/learning_sidesection/LearningSideSection";

class ARVR extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Helmet>
          <title> AR/VR | RGPV Online Exam MCQs Resources</title>
        </Helmet>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-7 mt-4">
            <h2
              className="text-center mb-4 display-5"
              style={{ color: "#072C71" }}
            >
              Find the Best AR/VR RGPV MCQs Resources
            </h2>
            <Link
              to="/home"
              className="badge mr-1"
              style={{ backgroundColor: "#06CB6C" }}
            >
              <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" />
            </Link>
            <Link
              to="/rgpv"
              className="badge mr-1"
              style={{ backgroundColor: "#072C71" }}
            >
              <FontAwesomeIcon icon={faUniversity} size="2x" color="#06CB6C" />
            </Link>
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Virtual Reality - Computer Fundamentals Questions and Answers
              "
              source="(sanfoundry.com)"
              tag1="MCQs"
              link="https://www.sanfoundry.com/computer-fundamentals-questions-answers-virtual-reality/"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Augmented Reality Quiz"
              source="(quizizz.com)"
              tag1="MCQs"
              link="https://quizizz.com/admin/quiz/5dd33bb75d5cc0001c84580c/augmented-reality-quiz"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="AR and VR"
              source="(searchmobilecomputing.techtarget.com
                )"
              tag1="MCQs"
              link="https://searchmobilecomputing.techtarget.com/quiz/Quiz-Are-you-ready-for-AR-and-VR-in-the-enterprise"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="AR Quiz: How much do you really know about augmented reality? "
              source="(blippar.com
                )"
              tag1="MCQs"
              link="https://www.blippar.com/blog/2018/03/22/quiz-how-much-do-you-really-know-about-augmented-reality"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Quiz / Worksheet - Augmented Reality in the Classroom
              "
              source="(study.com

                )"
              tag1="MCQs"
              link="https://study.com/academy/practice/quiz-worksheet-augmented-reality-in-the-classroom.html"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Augmented-reality-Virtual-reality quiz
              "
              source="(objectivequiz.com)"
              tag1="MCQs"
              link="https://www.objectivequiz.com/objective-questions/computer-science/augmented-reality-virtual-reality"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Augmented Reality(Ar) And Virtual Reality (Vr) Quiz
              "
              source="(proprofs.com
                )"
              tag1="MCQs"
              link="https://www.proprofs.com/quiz-school/story.php?title=3dq-augmented-realityar-and-virtual-reality-vr-quiz"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Computer Fundamentals MCQs"
              source="(sanfoundry.com)"
              tag1="MCQs"
              link="https://www.sanfoundry.com/computer-fundamentals-questions-answers-mcqs/"
            />
            
          </div>

          <div className="col-md-4 mt-md-5 mt-3">
            <div className="row">
              <FbLikeShare />{" "}
            </div>

            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default ARVR;
