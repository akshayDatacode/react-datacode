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

class MachineLearning extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Helmet>
          <title>Machine Learning | RGPV Online Exam MCQs Resources</title>
        </Helmet>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-7 mt-4">
            <h2
              className="text-center mb-4 display-5"
              style={{ color: "#072C71" }}
            >
              Find the Best Machine Learning RGPV MCQs Resources
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
              title="Machine Learning - Artificial Intelligence Questions and Answers
              "
              source="(sanfoundry.com)"
              tag1="MCQ"
              link="https://www.sanfoundry.com/artificial-intelligence-mcqs-machine-learning/"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Machine Learning Multiple Choice Questions | Free Practice Test
              "
              source="(simplilearn.com)"
              tag1="MCQ"
              link="https://www.simplilearn.com/machine-learning-multiple-choice-questions-free-practice-test"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Tutorials and Notes: Machine Learning Multiple Choice Questions and Answers
              "
              source="(exploredatabase.com)"
              tag1="MCQ"
              link="http://www.exploredatabase.com/2020/05/machine-learning-multiple-choice-questions-set-01.html"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="40 Machine Learning Questions"
              source="(analyticsvidhya.com
                )"
              tag1="MCQ"
              link="https://www.analyticsvidhya.com/blog/2017/04/40-questions-test-data-scientist-machine-learning-solution-skillpower-machine-learning-datafest-2017/"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Machine Learning based Multiple choice questions
              "
              source="(javacodemonk.com)"
              tag1="MCQ"
              link="https://www.javacodemonk.com/machine-learning-based-multiple-choice-questions-626ca098"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Machine Learning multiple choice questions and answers
              "
              source="(objectivequiz.com
                )"
              tag1="MCQ"
              link="https://www.objectivequiz.com/objective-questions/computer-science/machine-learning"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Data Science Machine Learning MCQs "
              source="(allindiaexams.in
                )"
              tag1="MCQ"
              link="http://www.allindiaexams.in/engineering/cse/data-science-mcq/machine-learning"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Machine Learning Mock Test
              "
              source="(vskills.in
                )"
              tag1="MCQ"
              link="https://www.vskills.in/practice/machine-learning-mock-test"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Multiple-Choice/Numerical Questions
              "
              source="(emtiyaz.github.io
                )"
              tag1="MCQ"
              link="https://emtiyaz.github.io/teaching/waseda18_ml/sample_exam_answers.pdf"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Machine learning MCQs
              "
              source="(t4tutorials.com
                )"
              tag1="MCQ"
              link="https://t4tutorials.com/machine-learning-mcqs/"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Data Mining MCQ -Data Mining Questions Answers
              "
              source="(avatto.com
                )"
              tag1="MCQ"
              link="https://www.avatto.com/computer-science/test/mcqs/data-mining/questions/191/1.html"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Machine Learning & Data Mining Multiple Choice Practice Questions
              "
              source="(syllabus.cs.manchester.ac.uk
                )"
              tag1="MCQ"
              link="http://syllabus.cs.manchester.ac.uk/pgt/2019/COMP61011/pastexams/MCQmock.pdf"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="EduMask - Machine Learning MCQs
              "
              source="(edumask.com
                )"
              tag1="MCQ"
              link="https://www.edumask.com/ds-machine-learning-mcq"
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

export default MachineLearning;
