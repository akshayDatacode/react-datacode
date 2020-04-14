import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import CardCarouselItem from "../../../footer_component/CardCarouselItem";

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
                  imgsource="code_challange.jpeg"
                  title="C programming questions"
                  link="/c_programming_questions"
                />
                <CardCarouselItem
                  imgsource="event.jpeg"
                  title="Datastructure Programming Questions"
                  link="/datastructure_programming_questions"
                />
                <CardCarouselItem
                  imgsource="web_blog.jpeg"
                  title="Java Programming Questions"
                  link="/java_programming_questions"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="code_challange.jpeg"
                  title="Javascript Programming Questions"
                  link="/javascript_programming_questions"
                />
                <CardCarouselItem
                  imgsource="code_challange.jpeg"
                  title="Python Programming Questions"
                  link="/python_programming_questions"
                />
                <CardCarouselItem
                  imgsource="code_challange.jpeg"
                  title="Coming soon.."
                  link="/index_programming_questions"
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
                 imgsource="code_challange.jpeg"
                 title="C programming questions"
                 link="/c_programming_questions"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="event.jpeg"
                title="Datastructure Programming Questions"
                link="/datastructure_programming_questions"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="web_blog.jpeg"
                title="Java Programming Questions"
                link="/java_programming_questions"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="code_challange.jpeg"
                title="Javascript Programming Questions"
                link="/javascript_programming_questions"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="python_programming.jpeg"
                title="Python Programming"
                link="/python"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="code_challange.jpeg"
                title="Python Programming Questions"
                link="/python_programming_questions"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="code_challange.jpeg"
                title="Coming soon.."
                link="/index_programming_questions"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </>
    );
  }
}

export default ProgrammingQuestionCardCarousel;
