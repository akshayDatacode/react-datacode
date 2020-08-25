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
              imgsource="programming_blog.jpeg"
              title="Updatinig Soon!!"
              tag1="RGPV Exam MCQs"
              link="datacode.in"
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
