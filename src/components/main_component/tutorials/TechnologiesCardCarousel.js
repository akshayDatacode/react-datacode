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
                  imgsource="c_tutorials_courses.jpeg"
                  title="C programming"
                  link="/c"
                />
                <CardCarouselItem
                  imgsource="python_tutorials_courses.jpeg"
                  title="Python Programming"
                  link="/python"
                />
                <CardCarouselItem
                  imgsource="java_tutorials_courses.jpeg"
                  title="Java Programming"
                  link="/java"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="js_tutorials_courses.jpeg"
                  title="Javascript"
                  link="/js"
                />
                <CardCarouselItem
                  imgsource="html_tutorials_courses.jpeg"
                  title="HTML"
                  link="/html"
                />
                <CardCarouselItem
                  imgsource="css_tutorials_courses.jpeg"
                  title="Coming Soon..."
                  link="/index_technologies"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="ds_tutorials_courses.jpeg"
                  title="Datastructure & Algorithm"
                  link="/datastructure"
                />
                <CardCarouselItem
                  imgsource="dbms_tutorials_courses.jpeg"
                  title="DBMS"
                  link="/dbms"
                />
                <CardCarouselItem
                  imgsource="sql_tutorials_courses.jpeg"
                  title="SQL"
                  link="/sql"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="android_tutorials_courses.jpeg"
                  title="Android"
                  link="/android"
                />
                <CardCarouselItem
                  imgsource="react_tutorials_courses.jpeg"
                  title="React"
                  link="/react"
                />
                <CardCarouselItem
                  imgsource="angular_tutorials_courses.jpeg"
                  title="Angular"
                  link="/angular"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="oops_tutorials_courses.jpeg"
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
                imgsource="python_tutorials_courses.jpeg"
                title="Python Programming"
                link="/python"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="c_tutorials_courses.jpeg"
                title="C Programming"
                link="/c"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="java_tutorials_courses.jpeg"
                title="Java Programming"
                link="/java"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="js_tutorials_courses.jpeg"
                title="Javascript"
                link="/js"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="html_tutorials_courses.jpeg"
                title="HTML"
                link="/html"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="css_tutorials_courses.jpeg"
                title="CSS"
                link="/index_technologies"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="ds_tutorials_courses.jpeg"
                title="Datastructure & Algorithm"
                link="/datastructure"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="dbms_tutorials_courses.jpeg"
                title="DBMS"
                link="/dbms"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="sql_tutorials_courses.jpeg"
                title="SQL"
                link="/sql"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="oops_tutorials_courses.jpeg"
                title="OOPs"
                link="/oops"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="android_tutorials_courses.jpeg"
                title="Android"
                link="/android"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="react_tutorials_courses.jpeg"
                title="React"
                link="/react"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="angular_tutorials_courses.jpeg"
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
