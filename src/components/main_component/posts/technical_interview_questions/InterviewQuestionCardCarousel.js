import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import CardCarouselItem from "../../../footer_component/CardCarouselItem";

class InterviewQuestionCardCarousel extends Component {
  state = {};
  render() {
    return (
      <>
        {/* Desktop Carousel Cards  */}
        <div className="mb-5 d-none d-sm-block">
          <Carousel indicators={false}>
            <Carousel.Item>
              <div className="card-deck ">
                <CardCarouselItem
                  imgsource="indexcover1.jpeg"
                  title="Technical Interview Questions"
                  link="/index_interview_questioins"
                />
                <CardCarouselItem
                  imgsource="dbms_interview_questions.jpeg"
                  title="DBMS Interview Questions"
                  link="/dbms_interview_questioin"
                />
                <CardCarouselItem
                  imgsource="sql_interview_questions.jpeg"
                  title="SQL Interview Questions"
                  link="/sql_interview_questioin"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="oops_interview_questions.jpeg"
                  title="OOps Interview Questions"
                  link="/oops_interview_question"
                />
                <CardCarouselItem
                  imgsource="ds_interview_questions.jpeg"
                  title="DataStructure Interview Questions"
                  link="/datastructre_interview_question"
                />
                <CardCarouselItem
                  imgsource="python_interview_questions.jpeg"
                  title="Python Interview Questions"
                  link="/python_interview_question"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="java_interview_questions.jpeg"
                  title="Java Interview Questions"
                  link="/java_interview_question"
                />
                <CardCarouselItem
                  imgsource="c_interview_questions.jpeg"
                  title="C Interview Questions"
                  link="/c_interview_question"
                />
                <CardCarouselItem
                  imgsource="cpp_interview_questions.jpeg"
                  title="C++ Interview Questions"
                  link="/cpp_interview_question"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="cloud_computing_interview_questions.jpeg"
                  title="Cloud Computing Interview Questions"
                  link="/cloud_computing_interview_question"
                />
                <CardCarouselItem
                  imgsource="cn_interview_questions.jpeg"
                  title="Computer Network Interview Questions"
                  link="/cn_interview_question"
                />
                <CardCarouselItem
                  imgsource="os_interview_questions.jpeg"
                  title="Operating System Interview Questions"
                  link="/os_interview_question"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="rdbms_interview_questions.jpeg"
                  title="RDBMS Interview Questions"
                  link="/rdbms_interview_question"
                />
                <CardCarouselItem
                  imgsource="sdlc_interview_questions.jpeg"
                  title="SDLC Interview Questions"
                  link="/sdlc_interview_question"
                />
                <CardCarouselItem
                  imgsource="testing_interview_questions.jpeg"
                  title="Testing Interview Questions"
                  link="/testing_interview_question"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="android_interview_questions.jpeg"
                  title="Android Interview Questions"
                  link="/android_interview_question"
                />
                <CardCarouselItem
                  imgsource="html_interview_questions.jpeg"
                  title="HTML Interview Questions"
                  link="/html_interview_question"
                />
                <CardCarouselItem
                  imgsource="js_interview_questions.jpeg"
                  title="Javascript Interview Questions"
                  link="/js_interview_question"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="react_interview_questions.jpeg"
                  title="React Interview Questions"
                  link="/react_interview_question"
                />
                <CardCarouselItem
                  imgsource="angular_interview_questions.jpeg"
                  title="Angular Interview Questions"
                  link="/angular_interview_question"
                />
                <CardCarouselItem
                  imgsource="technical_interview_questions.jpeg"
                  title="Coming soon.."
                  link="/index_interview_questioins"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="bootstrap_interview_questions.jpeg"
                  title="Bootstrap Interview Questions"
                  link="/bootstrap_interview_question"
                />
                <CardCarouselItem
                  imgsource="django_interview_questions.jpeg"
                  title="Django Interview Questions"
                  link="/django_interview_question"
                />
                <CardCarouselItem
                  imgsource="js_interview_questions.jpeg"
                  title="Javascript Interview Questions"
                  link="/js_interview_question"
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Mobile Carousel Cards  */}
        <div className="mb-5 d-block d-md-none">
          <Carousel indicators={false}>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="indexcover1.jpeg"
                title="Technical Interview Questions"
                link="/index_interview_questioins"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="dbms_interview_questions.jpeg"
                title="DBMS Interview Questions"
                link="/dbms_interview_questioin"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="sql_interview_questions.jpeg"
                title="SQL Interview Questions"
                link="/sql_interview_questioin"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="oops_interview_questions.jpeg"
                title="OOps Interview Questions"
                link="/oops_interview_question"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="ds_interview_questions.jpeg"
                title="DataStructure Interview Questions"
                link="/datastructre_interview_question"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="python_interview_questions.jpeg"
                title="Python Interview Questions"
                link="/python_interview_question"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="java_interview_questions.jpeg"
                title="Java Interview Questions"
                link="/java_interview_question"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="c_interview_questions.jpeg"
                title="C Interview Questions"
                link="/c_interview_question"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="cpp_interview_questions.jpeg"
                title="C++ Interview Questions"
                link="/cpp_interview_question"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="cloud_computing_interview_questions.jpeg"
                title="Cloud Computing Interview Questions"
                link="/cloud_computing_interview_question"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="cn_interview_questions.jpeg"
                title="Computer Network Interview Questions"
                link="/cn_interview_question"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="os_interview_questions.jpeg"
                title="Operating System Interview Questions"
                link="/os_interview_question"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="rdbms_interview_questions.jpeg"
                title="RDBMS Interview Questions"
                link="/rdbms_interview_question"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="sdlc_interview_questions.jpeg"
                title="SDLC Interview Questions"
                link="/sdlc_interview_question"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="testing_interview_questions.jpeg"
                title="Testing Interview Questions"
                link="/testing_interview_question"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="android_interview_questions.jpeg"
                title="Android Questions"
                link="/android_interview_question"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="html_interview_questions.jpeg"
                title="HTML Interview Questions"
                link="/html_interview_question"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="js_interview_questions.jpeg"
                title="Javascript Interview Questions"
                link="/js_interview_question"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="react_interview_questions.jpeg"
                title="React Interview Questions"
                link="/react_interview_question"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="angular_interview_questions.jpeg"
                title="Angular Interview Questions"
                link="/angular_interview_question"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="bootstrap_interview_questions.jpeg"
                title="Bootstrap Interview Questions"
                link="/bootstrap_interview_question"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="django_interview_questions.jpeg"
                title="Django Interview Questions"
                link="/django_interview_question"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </>
    );
  }
}

export default InterviewQuestionCardCarousel;
