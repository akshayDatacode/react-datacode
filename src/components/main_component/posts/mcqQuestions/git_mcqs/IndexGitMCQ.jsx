import React, { Component } from "react";
import { Link } from "react-router-dom";
import RightSideSection from "../../../../right_section/RightSideSection";
import McqsShowCard from "../McqsShowCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt, faHome } from "@fortawesome/free-solid-svg-icons";
import HeaderCard from "../../../HeaderCard";

class IndexGitMCQ extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
       <HeaderCard
          title="GIT MCQs Sets"
          color="#FFD700"
          textcolor="black"
        />
   
        
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-8 mt-4">
            <Link to="/home" className="badge badge-primary mr-1">
              <FontAwesomeIcon icon={faHome} size="1x" />
            </Link>
            <Link to="/index_mcqs" className="badge badge-warning mr-1 mb-4">
              MCQs >>
            </Link>

            <div className="card-deck m-2">
              <McqsShowCard link="git_mcq_1" title="Git MCQs Questions Set 1" />
              <McqsShowCard link="index_git_mcqs" title="Upcoming" />
            </div>
          </div>

          <div className="col-md-3">
            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default IndexGitMCQ;
