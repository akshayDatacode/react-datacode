import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import CardCarouselItem from "../../footer_component/CardCarouselItem";

class CodeChallangeCardCarousel extends Component {
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
                  title="weekly Code Challange"
                  link="/index_code_challange"
                />
                <CardCarouselItem
                  imgsource="code_challange.jpeg"
                  title="Code Challenge week-1"
                  link="/code_challange_week_1"
                />
                <CardCarouselItem
                  imgsource="code_challange.jpeg"
                  title="Code Challenge week-2"
                  link="/code_challange_week_2"
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
                title="weekly Code Challange"
                link="/index_code_challange"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="code_challange.jpeg"
                title="Code Challenge week-1"
                link="/code_challange_week_1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="code_challange.jpeg"
                title="Code Challenge week-2"
                link="/code_challange_week_2"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </>
    );
  }
}

export default CodeChallangeCardCarousel;
