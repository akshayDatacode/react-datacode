import React, { Component } from "react";
import HeaderCard from "../../../HeaderCard";
import { Link } from "react-router-dom";
import ScoreCard from "../scoreCard";
import Quize from "../quize";
import RightSideSection from "../../../../right_section/RightSideSection";
import RecommendPost from "../../../../right_section/RecommendPost";
import MCQCardCarousel from "../MCQCardCarousel";

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
        <HeaderCard title="BootStrap MCQs Set 1" />

        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="col-fluid ">
                <Link to="/home" className="badge badge-primary mr-1">
                  Home >{" "}
                </Link>
                <Link to="/index_mcqs" className="badge badge-warning mr-1">
                  Programming MCQs >{" "}
                </Link>
                <Link
                  to="/index_bootstrap_mcqs"
                  className="badge badge-success mr-1"
                >
                  Bootstrap MCQs >
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
            <div className="col-md-4">
              <RightSideSection />
              <h5 className="mb-3">Recommended for you</h5>
              <RecommendPost
                imgsource="python_mcqs.jpeg"
                RecPostHading="Python MCQs Questions"
                link="/index_python_mcqs"
              />
              <RecommendPost
                imgsource="java_mcqs.jpeg"
                RecPostHading="Java MCQs Questions"
                link="/index_java_mcqs"
              />
              <RecommendPost
                imgsource="datacodelogo.jpeg"
                RecPostHading="Programminig Quize Test"
                link="/index_quize_tests"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BootStrapMCQ1;
