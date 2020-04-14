import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import CardCarouselItem from "../../../../footer_component/CardCarouselItem";

class MCQTestCardCarousel extends Component {
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
                  title="Python quiz test"
                  link="/python_quize_tests"
                />
                <CardCarouselItem
                  imgsource="event.jpeg"
                  title="C quiz test"
                  link="/c_quize_tests"
                />
                <CardCarouselItem
                  imgsource="web_blog.jpeg"
                  title="Coming Soon...."
                  link="/index_quize_tests"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck ">
                <CardCarouselItem
                  imgsource="web_blog.jpeg"
                  title="Coming Soon...."
                  link="/index_quize_tests"
                />
                <CardCarouselItem
                 imgsource="web_blog.jpeg"
                 title="Coming Soon...."
                 link="/index_quize_tests"
                />
                <CardCarouselItem
                  imgsource="web_blog.jpeg"
                  title="Coming Soon...."
                  link="/index_quize_tests"
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
                title="Python quiz test"
                link="/python_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
               imgsource="event.jpeg"
               title="C quiz test"
               link="/c_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="web_blog.jpeg"
                title="Coming Soon...."
                link="/index_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="web_blog.jpeg"
                title="Coming Soon...."
                link="/index_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="web_blog.jpeg"
                title="Coming Soon...."
                link="/index_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
               imgsource="web_blog.jpeg"
               title="Coming Soon...."
               link="/index_quize_tests"
              />
            </Carousel.Item>
            
          </Carousel>
        </div>
      </>
    );
  }
}

export default MCQTestCardCarousel;
