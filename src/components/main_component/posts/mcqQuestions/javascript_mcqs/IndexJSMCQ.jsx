import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faListAlt } from "@fortawesome/free-solid-svg-icons";
import McqsShowCard from "../McqsShowCard";
import RightSideSection from "../../../../right_section/RightSideSection";
import HeaderCard from "../../../HeaderCard";

class IndexJSMCQ extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
      <HeaderCard
          title="JavaSript MCQs sets"
          color="#00FF00"
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
              <McqsShowCard
                link="js_mcq_1"
                title="JavaScript MCQs Questions Set 1"
              />
              <McqsShowCard
                link="js_mcq_2"
                title="JavaScript MCQs Questions Set 2"
              />
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

export default IndexJSMCQ;
