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
                  imgsource="dbms_interview_question.jpeg"
                  title="DBMS Interview Questions"
                  link="/dbms_interview_questioin"
                />
                <CardCarouselItem
                  imgsource="sql_interview_question.jpeg"
                  title="SQL Interview Questions"
                  link="/sql_interview_questioin"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="oops_interview_question.jpeg"
                  title="OOps Interview Questions"
                  link="/oops_interview_question"
                />
                <CardCarouselItem
                  imgsource="datastructure_interview_question.jpeg"
                  title="DataStructure Interview Questions"
                  link="/datastructre_interview_question"
                />
                <CardCarouselItem
                  imgsource="python_interview_question.jpeg"
                  title="Python Interview Questions"
                  link="/python_interview_question"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="java_interview_question.jpeg"
                  title="Java Interview Questions"
                  link="/java_interview_question"
                />
                <CardCarouselItem
                  imgsource="c_interview_question.jpeg"
                  title="C Interview Questions"
                  link="/c_interview_question"
                />
                <CardCarouselItem
                  imgsource="technical_interview_questions.jpeg"
                  title="C++ Interview Questions"
                  link="/cpp_interview_question"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="technical_interview_questions.jpeg"
                  title="Cloud Computing Interview Questions"
                  link="/cloud_computing_interview_question"
                />
                <CardCarouselItem
                  imgsource="technical_interview_questions.jpeg"
                  title="Computer Network Interview Questions"
                  link="/cn_interview_question"
                />
                <CardCarouselItem
                  imgsource="technical_interview_questions.jpeg"
                  title="Operating System Interview Questions"
                  link="/os_interview_question"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="technical_interview_questions.jpeg"
                  title="RDBMS Interview Questions"
                  link="/rdbms_interview_question"
                />
                <CardCarouselItem
                  imgsource="technical_interview_questions.jpeg"
                  title="SDLC Interview Questions"
                  link="/sdlc_interview_question"
                />
                <CardCarouselItem
                  imgsource="technical_interview_questions.jpeg"
                  title="Testing Interview Questions"
                  link="/testing_interview_question"
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
                imgsource="dbms_interview_question.jpeg"
                title="DBMS Interview Questions"
                link="/dbms_interview_questioin"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="sql_interview_question.jpeg"
                title="SQL Interview Questions"
                link="/sql_interview_questioin"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="oops_interview_question.jpeg"
                title="OOps Interview Questions"
                link="/oops_interview_question"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="datastructure_interview_question.jpeg"
                title="DataStructure Interview Questions"
                link="/datastructre_interview_question"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="python_interview_question.jpeg"
                title="Python Interview Questions"
                link="/python_interview_question"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="java_interview_question.jpeg"
                title="Java Interview Questions"
                link="/java_interview_question"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="c_interview_question.jpeg"
                title="C Interview Questions"
                link="/c_interview_question"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="technical_interview_questions.jpeg"
                title="C++ Interview Questions"
                link="/cpp_interview_question"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="technical_interview_questions.jpeg"
                title="Cloud Computing Interview Questions"
                link="/cloud_computing_interview_question"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="technical_interview_questions.jpeg"
                title="Computer Network Interview Questions"
                link="/cn_interview_question"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="technical_interview_questions.jpeg"
                title="Operating System Interview Questions"
                link="/os_interview_question"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="technical_interview_questions.jpeg"
                title="RDBMS Interview Questions"
                link="/rdbms_interview_question"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="technical_interview_questions.jpeg"
                title="SDLC Interview Questions"
                link="/sdlc_interview_question"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="technical_interview_questions.jpeg"
                title="Testing Interview Questions"
                link="/testing_interview_question"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </>
    );
  }
}

export default InterviewQuestionCardCarousel;
