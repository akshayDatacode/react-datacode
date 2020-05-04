import React, { Component } from "react";
import RoadMapCard from "../technologies/RoadMapCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faHome,
  faBook,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";
import RightSideSection from "../../right_section/RightSideSection";
import Technologies from "../../right_section/Technologies";
import RecommendPost from "../../right_section/RecommendPost";
import FbLikeShare from "../../FbLikeShare";
import { Link } from "react-router-dom";
import PostCard from "../PostCard";

class IndexLearningPlatforms extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-8 mt-4">
            <h1
              className="text-center mb-4 display-5 p-2 rounded"
              style={{ backgroundColor: "#06CB6C", color: "#072C71" }}
            >
              Onine Learning Platforms for Best Learning
            </h1>
            <Link
              to="/home"
              className="badge mr-1"
              style={{ backgroundColor: "#06CB6C" }}
            >
              <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" />
            </Link>
            <Link
              to="/index_learning_platforms"
              className="badge mr-1"
              style={{ backgroundColor: "#072C71" }}
            >
              <FontAwesomeIcon icon={faCertificate} size="2x" color="#06CB6C" />
            </Link>
            <div className="card-deck m-2">
              <PostCard
                imgsource="c_quize.jpeg"
                title="Online Certification Learning Platforms"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/certification_platforms"
              />
              <PostCard
                imgsource="c_quize.jpeg"
                title="Programming Learning Platforms"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/programming_learning_platforms"
              />
              <PostCard
                imgsource="c_quize.jpeg"
                title="Programming Practice Platforms"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/programming_practice_platforms"
              />
            </div>
            <div className="card-deck m-2">
              <PostCard
                imgsource="c_quize.jpeg"
                title="WebDevelopment Learning Platforms"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/webdevelopment_platforms"
              />
              <PostCard
                imgsource="c_quize.jpeg"
                title="ComputerScience Learning Platforms"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/computerscience_platforms"
              />
              <PostCard
                imgsource="c_quize.jpeg"
                title="DataScience Learning Platforms"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/datascience_platforms"
              />
            </div>
          </div>
          <div className="col-md-3 mt-md-5 mt-3">
            <div className="row">
              <FbLikeShare />{" "}
            </div>

            <RightSideSection />
            <Technologies />
          </div>
        </div>
      </>
    );
  }
}

export default IndexLearningPlatforms;
