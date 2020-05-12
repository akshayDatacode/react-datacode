import React, { Component } from "react";
import Quize from "../quize";
import ScoreCard from "../scoreCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCode,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
import RightSideSection from "../../../../right_section/RightSideSection";
import RecommendPost from "../../../../right_section/RecommendPost";
import MCQCardCarousel from "../MCQCardCarousel";
import HeaderCard from "../../../HeaderCard";
import LearningSideSection from "../../../../right_section/learning_sidesection/LearningSideSection";
import Technologies from "../../../../right_section/Technologies";
import FbLikeShare from "../../../../FbLikeShare";

class BootStrapMCQ1 extends Component {
  state = {
    isCorrect: false,
    isClicked: false,
    count: 0,
    status: "",
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  counter = (count) => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="col-fluid mt-2 ml-2">
                <h2
                  className="text-center mb-4 display-5"
                  style={{ color: "#072C71" }}
                >
                  Bootstrap Multiple choice Questions Set-1
                </h2>
                <Link
                  to="/home"
                  className="badge mr-1"
                  style={{ backgroundColor: "#06CB6C" }}
                >
                  <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" />
                </Link>
                <Link
                  to="/index_mcqs"
                  className="badge mr-1"
                  style={{ backgroundColor: "#072C71" }}
                >
                  <FontAwesomeIcon
                    icon={faChalkboardTeacher}
                    size="2x"
                    color="#06CB6C"
                  />
                </Link>
                <Link
                  to="/index_bootstrap_mcqs"
                  className="badge mr-1 text-white"
                  style={{ backgroundColor: "#072C71" }}
                >
                  <FontAwesomeIcon
                    icon={faCode}
                    size="1x"
                    color="#06CB6C"
                    className="mr-2"
                  />
                  back to Index
                </Link>

                <ScoreCard count={this.state.count} />
              </div>
              <div className="row">
                <div className="col">
                  <Quize
                    quizeNo="1"
                    question=" Bootstrap’s global default line-height"
                    correctAnswer="1.428"
                    v1="1.128"
                    v2="1.428"
                    v3="1.228"
                    v4=" 1.8"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="2"
                    question="Which of the following is correct about bootstrap wells?"
                    correctAnswer="Both of the above"
                    v1="You can change the size of well using the optional classes such as, well-lg or well-sm"
                    v2="well-lg or well-sm classes are used in conjunction with .well class"
                    v3="Both of the above"
                    v4="None of the above"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="3"
                    question="  Glyphicons is mainly used for?"
                    correctAnswer=""
                    v1="Slideshow"
                    v2="graphic images"
                    v3="animation"
                    v4="  providing different icons"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="4"
                    question="Which of the following class styles a table as a nice basic table with stripes on rows? "
                    correctAnswer=".table-striped"
                    v1=".table"
                    v2=".table-striped"
                    v3=".table-bordered"
                    v4=" .table-hover "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="5"
                    question=" What layout is used for providing 100% width in Bootstrap? "
                    correctAnswer=" Fluid layout"
                    v1="Fixed layout"
                    v2=" Relative layout"
                    v3=" Fluid layout"
                    v4="None of the above "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="6"
                    question="  In Bootstrap we can add for"
                    correctAnswer="Proper Rendering and Zooming in mobile"
                    v1="Proper Rendering and Zooming in mobile"
                    v2="Make SEO"
                    v3=" Make proper view of labels"
                    v4="None "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="7"
                    question="Which of the following class makes thumbnail image "
                    correctAnswer=".img-thumbnail"
                    v1=".img-tmbnail"
                    v2=" .img-thumbnail-image"
                    v3=" .img-thumb"
                    v4=".img-thumbnail "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="8"
                    question=" Which of the following bootstrap style helps to combine sets of more complex components?"
                    correctAnswer=".btn-toolbar"
                    v1=".btn-group"
                    v2=".btn-toolbar"
                    v3=".btn-group-lg"
                    v4=" .btn-group-vertical "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="9"
                    question=" Which plugin is used to create a modal window?"
                    correctAnswer="modal"
                    v1="modal"
                    v2="window"
                    v3="dialog Box"
                    v4="popup "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="10"
                    question="The .container class provides "
                    correctAnswer="Fixed width container"
                    v1="Full width container"
                    v2="Fixed width container"
                    v3="Table format"
                    v4=" To create a Form"
                    counter={this.counter}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <h4>For More MCQs Questions</h4>
                  <MCQCardCarousel />
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-md-5 mt-3">
              <FbLikeShare />
              <LearningSideSection language="bootstrap" />
              <RightSideSection />
              <Technologies />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BootStrapMCQ1;
