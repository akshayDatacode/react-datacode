import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import CardCarouselItem from "../../../../app/components/footer_component/CardCarouselItem";

class ProgrammingQuestionCardCarousel extends Component {
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
                  imgsource="c_programming_question.jpeg"
                  title="C programming questions"
                  link="/c_programming_questions"
                />
                <CardCarouselItem
                  imgsource="python_programming_question.jpeg"
                  title="Python Programming Questions"
                  link="/datastructure_programming_questions"
                />
                <CardCarouselItem
                  imgsource="java_programming_question.jpeg"
                  title="Java Programming Questions"
                  link="/java_programming_questions"
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
                imgsource="c_programming_question.jpeg"
                title="C programming questions"
                link="/c_programming_questions"
              />
            </Carousel.Item>

            <Carousel.Item>
              <CardCarouselItem
                imgsource="java_programming_question.jpeg"
                title="Java Programming Questions"
                link="/java_programming_questions"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="python_programming.jpeg"
                title="Python Programming"
                link="/python"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </>
    );
  }
}

export default ProgrammingQuestionCardCarousel;
