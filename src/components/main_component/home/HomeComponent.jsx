import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import CarouselComponent from "../CarouselComponent";
import TagCard from "./TagCard";


class HomeComponent extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.showFooter()
  }

  componentWillUnmount() {
    this.props.hideFooter()
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Datacode | Computer Science Learning Community</title>
        </Helmet>
        <div className="landing-carousel">
          <CarouselComponent name={this.props.currentUser && this.props.currentUser.firstName} />
        </div>
        <h3 className="activities my-3 my-md-5">Activities for you!!!</h3>
        <div className="row m-0 home">
          <div className="col-12 p-3">
            <div className="row m-0 d-flex ">
              <div className="col-12 col-md-7 p-md-3">
                <div className="row m-0 text-md-left text-center">
                  <Link to="/index_technologies" className="d-md-flex">
                    <img
                      height="50px"
                      width="50px"
                      src={require(`../../../assets/images/svg/Find.png`)}
                      alt="avatar"
                      className="mx-md-3"
                    />
                    <h2 className="mt-2 mt-md-0" >Find your learning resources</h2>
                  </Link>
                  <p className="px-md-3 mt-2">A one step solution for your technical learning.<br /> Learn online from the best programming tutorials and courses submitted and voted by the programming community.</p>
                </div>
                <div className="row mt-4 baseline text-center px-3">
                  <div className="col-12 col-md-8">
                    <img
                      //  height="450px"
                      // width="450px"
                      src={require(`../../../assets/images/svg/find.png`)}
                      alt="avatar"
                      className=" card-img-top mx-auto img-fluid img-circle d-block"
                    />
                  </div>
                  <div className="col-12 col-md-4"></div>
                </div>
              </div>
              <div className="col-12 col-md-5 justify-content-center px-3 px-md-5">
                <TagCard title="Tutorial & Courses"
                  discription="A one step solution for your technical learning. Learn online from the best programming."
                  svgSource="Tutorial.png"
                  link="/index_technologies"
                />
                <TagCard title="Training & Certification"
                  discription="Our hands-on training and practical certification collected from  all over the internet helps you to learn the essentials and build your career"
                  svgSource="Tutorial.png"
                  link="/index_training_certification"
                />
                <TagCard title="Learning Notes"
                  discription="A one step solution for your technical learning. Learn online from the best programming tutorials"
                  svgSource="Learn.png"
                  link="/index_programming_questions"
                />
              </div>
            </div>
            <div className="row m-0 d-flex main">
              <div className="col-12 left col-md-5 justify-content-center px-3 px-md-5">
                <TagCard title="Programming MCQs"
                  discription="Here we bring up lots of MCQs to solve and get yourself thorough with the technology."
                  svgSource="Mcq.png"
                  link="/index_mcqs"
                />
                <TagCard title="Quiz Test"
                  discription="You can test your knowledge through fun quizzes and evaluate your daily learning"
                  svgSource="Quiz.png"
                  link="/index_quize_tests"
                />
                <TagCard title="Programming Practice question"
                  discription="Practice what you learned and get better with your knowledge by our practice questions"
                  svgSource="Test.png"
                  link="/index_programming_questions"
                />
              </div>
              <div className="col-12 col-md-7 p-md-3 right">
                <div className="row m-0 text-md-left text-center">
                  <Link to="/index_technologies" className="d-md-flex">
                    <img
                      height="50px"
                      width="50px"
                      src={require(`../../../assets/images/svg/Test.png`)}
                      alt="avatar"
                      className="mx-md-3 mt-4 mt-md-0"
                    />
                    <h2 className="mt-2 mt-md-0" >Practice and Test your skills</h2>
                  </Link>
                  <p className="px-md-3 mt-2">A one step solution for your technical learning.<br /> Learn online from the best programming tutorials and courses submitted and voted by the programming community.</p>
                </div>
                <div className="row mt-4 baseline text-center px-3">
                  <div className="col-12 col-md-4"></div>
                  <div className="col-12 col-md-8">
                    <img
                      //  height="450px"
                      // width="450px"
                      src={require(`../../../assets/images/svg/test.png`)}
                      alt="avatar"
                      className=" card-img-top mx-auto img-fluid img-circle d-block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="left-hr-line mb-4" ></div>
          <div className="row m-0 contributor-section">
            <div className="col-12 col-md-4 p-0">
              <img
                //  height="450px"
                // width="450px"
                src={require(`../../../assets/images/svg/colabrate.png`)}
                alt="avatar"
                className=" card-img-top mx-auto img-fluid img-circle d-block"
              />
            </div>
            <div className="col-12 col-md-6 text-center pr-md-5 p-0">
              <h1 className="mt-md-5 mt-3">Want to contibute in <br />Learning Community</h1>
              <p className="mt-md-3 mt-2">Start Contributing by creating notes and uploading blogs and much more and become a contributor of the awesome learning community</p>
              <Link to="/contributor"><div className="btn contributor-btn mt-md-5 my-4"><h6>Be a contributor</h6></div></Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

HomeComponent.defaultProps = {
  name: "",
  currentUser: {},
  firstName: "",
};

HomeComponent.propTypes = {
  name: PropTypes.string,
  currentUser: PropTypes.object,
  firstName: PropTypes.string,
};

export default HomeComponent;
