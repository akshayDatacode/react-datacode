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
                  imgsource="c_programming.jpeg"
                  title="C programming"
                  link="/c"
                />
                <CardCarouselItem
                  imgsource="python_programming.jpeg"
                  title="Python Programming"
                  link="/python"
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
                  title="Coming Soon..."
                  link="/index_technologies"
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
                  imgsource="dbms.jpeg"
                  title="DBMS"
                  link="/dbms"
                />
                <CardCarouselItem
                  imgsource="sql.jpeg"
                  title="SQL"
                  link="/sql"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="android.jpeg"
                  title="Android"
                  link="/android"
                />
                <CardCarouselItem
                  imgsource="react.jpeg"
                  title="React"
                  link="/react"
                />
                <CardCarouselItem
                  imgsource="angular.jpeg"
                  title="Angular"
                  link="/angular"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="oops.jpeg"
                  title="OOPS"
                  link="/oops"
                />
                <CardCarouselItem
                  imgsource="comming_soon.jpeg"
                  title=" Coming soon"
                  link="/index_technologies"
                />
                <CardCarouselItem
                  imgsource="comming_soon.jpeg"
                  title="Coming soon"
                  link="/index_technologies"
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
              <CardCarouselItem
                imgsource="css.jpeg"
                title="CSS"
                link="/index_technologies"
              />
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
                imgsource="dbms.jpeg"
                title="DBMS"
                link="/dbms"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem imgsource="sql.jpeg" title="SQL" link="/sql" />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="oops.jpeg"
                title="OOPs"
                link="/oops"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="android.jpeg"
                title="Android"
                link="/android"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="react.jpeg"
                title="React"
                link="/react"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="angular.jpeg"
                title="Angular"
                link="/angular"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </>
    );
  }
}

export default TechnologiesCardCarousel;
