import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import CardCarouselItem from "../../footer_component/CardCarouselItem";

class TechnologiesCardCarousel extends Component {
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
                  imgsource="python_programming.jpeg"
                  title="Python Programming"
                  link="/python"
                />
                <CardCarouselItem
                  imgsource="c_programming.jpeg"
                  title="C Programming"
                  link="/c"
                />
                <CardCarouselItem
                  imgsource="java_programming.jpeg"
                  title="Java Programming"
                  link="/java"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="javascript.jpeg"
                  title="Javascript"
                  link="/js"
                />
                <CardCarouselItem
                  imgsource="html.jpeg"
                  title="HTML"
                  link="/html"
                />
                <CardCarouselItem
                  imgsource="css.jpeg"
                  title="CSS"
                  link="/css"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="datastructure.jpeg"
                  title="Datastructure & Algorithm"
                  link="/datastructure"
                />
                <CardCarouselItem
                  imgsource="code_challange.jpeg"
                  title="DBMS"
                  link="/dbms"
                />
                <CardCarouselItem
                  imgsource="code_challange.jpeg"
                  title="SQL"
                  link="/sql"
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
                imgsource="python_programming.jpeg"
                title="Python Programming"
                link="/python"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="c_programming.jpeg"
                title="C Programming"
                link="/c"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="java_programming.jpeg"
                title="Java Programming"
                link="/java"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="javascript.jpeg"
                title="Javascript"
                link="/js"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="html.jpeg"
                title="HTML"
                link="/html"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem imgsource="css.jpeg" title="CSS" link="/css" />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="datastructure.jpeg"
                title="Datastructure & Algorithm"
                link="/datastructure"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="datastructure.jpeg"
                title="DBMS"
                link="/dbms"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="datastructure.jpeg"
                title="SQL"
                link="/sql"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="datastructure.jpeg"
                title="OOPs"
                link="/oops"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </>
    );
  }
}

export default TechnologiesCardCarousel;
