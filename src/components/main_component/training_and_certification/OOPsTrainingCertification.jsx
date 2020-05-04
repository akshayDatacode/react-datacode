import React, { Component } from "react";
import { Link } from "react-router-dom";
import RightSideSection from "../../right_section/RightSideSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBook } from "@fortawesome/free-solid-svg-icons";
import PostCard from "../PostCard";
import RecommendPost from "../../right_section/RecommendPost";
import RoadMapCard from "./RoadMapCard";

class OOPs extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-7 mt-4">
            <h1 className="text-center mb-4 display-5">
              Find the Best OOPs Courses & Tutorials
            </h1>
            <Link to="/home" className="badge badge-primary mr-1">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>
            <Link to="/index_technologies" className="badge badge-warning mr-1">
              Technologies >
            </Link>
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Google Python Classes For Beginners"
              tag1="Free"
              link="google.com"
            />
          </div>
          <div className="col-md-4 mt-md-5 ">
            <h2 className="text-center text-secondary mt-2 mb-3">
              <FontAwesomeIcon icon={faBook} size="1x" className="mr-2" />
              OOPs Learning
            </h2>
            <RecommendPost
              imgsource="python_mcqs.jpeg"
              RecPostHading="OOPS MCQs"
              link="/index_mcqs"
            />
            <RecommendPost
              imgsource="python_interview_question.jpeg"
              RecPostHading="OOPS Interview Questions"
              link="/oops_interview_question"
            />
            <RecommendPost
              imgsource="python_programming_question.jpeg"
              RecPostHading="OOPS Programming Questions"
              link="/index_programming_questions"
            />
            <RecommendPost
              imgsource="python_programming_question.jpeg"
              RecPostHading="OOPS Quize Test"
              link="/index_quize_tests"
            />
            <RecommendPost
              imgsource="python_learning_blog.jpeg"
              RecPostHading="OOPS Programming Blogs"
              link="/prog_lan_blog"
            />
            <RecommendPost
              imgsource="code_challange.jpeg"
              RecPostHading="Weekly Code Challanges"
              link="/index_code_challange"
            />
            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default OOPs;
