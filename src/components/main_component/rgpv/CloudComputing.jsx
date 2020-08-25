import React, { Component } from "react";
import { Link } from "react-router-dom";
import RightSideSection from "../../right_section/RightSideSection";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faChalkboardTeacher,
  faPuzzlePiece,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import RecommendPost from "../../right_section/RecommendPost";
import RoadMapCard from "./RoadMapCard";
import FbShare from "../FbShare";
import FbLikeShare from "../../FbLikeShare";
import Technologies from "../../right_section/Technologies";
import LearningSideSection from "../../right_section/learning_sidesection/LearningSideSection";
import TechnologiesCardCarousel from "./TechnologiesCardCarousel";

class CloudComputing extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Helmet>
          <title>Cloud Computing | RGPV Online Exam MCQs Resources</title>
          <meta
            property="og:description"
            content="Here is a collection of Cloud Computing resources to prepare for upcoming RGPV Online Exams."
          />
          <meta
            property="og:url"
            content="https://www.datacode.in/?p=/react-datacode/#/rgpv_cloud_computing"
          />
          <meta
            name="description"
            content="Here is a collection of Cloud Computing resources to prepare for upcoming RGPV Online Exams."
          />
          <meta property="og:title" content="RGPV Online Exam MCQs Resources" />
          <meta property="og:type" content="article" />
          <meta
            property="og:image"
            content="https://drive.google.com/file/d/1km1XaomHD5XQih_hmCsSuWRQDRcY98g2/view?usp=sharing"
          />
        </Helmet>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-7 mt-4">
            <h2
              className="text-center mb-4 display-5"
              style={{ color: "#072C71" }}
            >
              Find the Best Cloud Computing RGPV MCQs Resources
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
              imgsource="html_tutorial.jpeg"
              title="1000-Cloud Computing Questions and Answers"
              source="(Sanfoundry)"
              tag1="RGPV Exam MCQs"
              link="https://www.sanfoundry.com/1000-cloud-computing-questions-answers/
              "
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="300+ TOP CLOUD COMPUTING MCQs"
              source="(iqsanswers.com)"
              tag1="RGPV Exam MCQs"
              link="https://iqsanswers.com/cloud-computing-multiple-choice-questions-and-answers/
              "
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Cloud Computing basics MCQs"
              source="(allindiaexams.in)"
              tag1="RGPV Exam MCQs"
              link="http://www.allindiaexams.in/engineering/cse/cloud-computing-mcq/cloud-computing-basics"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Cloud Computing Test - An Opportunity to Prove Yourself
              "
              source="(data-flair.training
                )"
              tag1="RGPV Exam MCQs"
              link="https://data-flair.training/blogs/cloud-computing-test/
              "
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Cloud Computing Questions and Answers
              "
              source="(sanfoundry.com)"
              tag1="RGPV Exam MCQs"
              link="https://www.sanfoundry.com/computer-fundamentals-questions-answers-cloud-computing/"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Cloud Computing MCQ Based Online Test"
              source="(examradar.com)"
              tag1="RGPV Exam MCQs"
              link="http://examradar.com/cloud-computing-mcq-based-online-test-2/
              "
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="MCQ Questions for 
              Cloud Computing
              "
              source="(mcqtutorial.com)"
              tag1="RGPV Exam MCQs"
              link="http://www.mcqtutorial.com/MCQ/Miscellaneous/Cloud%20Computing/121_198_1.php"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Cloud Computing Quiz"
              source="(javatpoint.com)"
              tag1="RGPV Exam MCQs"
              link="https://www.javatpoint.com/cloud-computing-quiz"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Cloud Computing multiple choice questions and answers"
              source="(objectivequiz.com
                )"
              tag1="RGPV Exam MCQs"
              link="https://www.objectivequiz.com/objective-questions/computer-science/cloud-computing"
            />

            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="30 TOP Real Time Cloud Computing Multiple choice Questions and Answers pdf
              "
              source="(naukrieducation.com
                )"
              tag1="RGPV Exam MCQs"
              link="http://www.naukrieducation.com/30-top-real-time-cloud-computing-multiple-choice-questions-and-answers/"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Cloud Computing Multiple choice"
              source="(compscibits.com)"
              tag1="RGPV Exam MCQs"
              link="https://compscibits.com/mcq-questions/Cloud-Computing/Cloud-Computing-Basics"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Cloud Computing Multiple choice Questions"
              source="(compscibits.com
                )"
              tag1="RGPV Exam MCQs"
              link="https://compscibits.com/mcq-questions/Cloud-Computing/Cloud-Architecture"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Cloud Computing MCQ Quiz "
              source="(onlineinterviewquestions.com
                )"
              tag1="RGPV Exam MCQs"
              link="https://www.onlineinterviewquestions.com/cloud-computing-mcq/"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="TOP 50+ Cloud Computing Questions and Answers
              "
              source="(latestinterviewquestions.com
                )"
              tag1="RGPV Exam MCQs"
              link="https://www.latestinterviewquestions.com/cloud-computing-multiple-choice-questions"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Cloud Computing Multiple Choice Questions
              "
              source="(4cornerit.com
                )"
              tag1="RGPV Exam MCQs"
              link="https://www.4cornerit.com/cloud-computing-test/"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Cloud Computing - MCQS - WASEIAN
              "
              source="(waseian.com
                )"
              tag1="RGPV Exam MCQs"
              link="http://www.waseian.com/2019/04/cloud-computing-mcqs.html"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Fundamental Cloud Computing"
              source="(whyfund.net
                )"
              tag1="RGPV Exam MCQs"
              link="http://whyfund.net/Cloud%20Computing/Test%20%20Cloud%20Module%201%20-%20Fundamental%20Cloud%20Computing%20MULTIPLE%20CHOICE.htm"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Cloud Programming Multiple Choice Questions(MCQs)"
              source="(gkseries.com)"
              tag1="RGPV Exam MCQs"
              link="https://www.gkseries.com/cloud-programming/multiple-choice-questions-and-answers-on-cloud-programming-1"
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

export default CloudComputing;
