import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import CardCarouselItem from "../../footer_component/CardCarouselItem";

class ArticleCardCarousel extends Component {
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
                  imgsource="programming_blog.jpeg"
                  title="Programming Languages Blogs"
                  link="/prog_lan_blog"
                />
                <CardCarouselItem
                  imgsource="web_blog.jpeg"
                  title="Web Design Blogs"
                  link="/webdesign_blog"
                />
                <CardCarouselItem
                  imgsource="machine_blog.jpeg"
                  title="Machine Learning Blogs"
                  link="/machine_learning_blog"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
              <CardCarouselItem
                  imgsource="programming_blog.jpeg"
                  title="Programming Languages Blogs"
                  link="/prog_lan_blog"
                />
                <CardCarouselItem
                  imgsource="web_blog.jpeg"
                  title="Web Design Blogs"
                  link="/webdesign_blog"
                />
                <CardCarouselItem
                  imgsource="machine_blog.jpeg"
                  title="Machine Learning Blogs"
                  link="/machine_learning_blog"
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
                imgsource="programming_blog.jpeg"
                title="Programming Languages Blogs"
                link="/prog_lan_blog"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="web_blog.jpeg"
                title="Web Design Blogs"
                link="/webdesign_blog"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="machine_blog.jpeg"
                title="Machine Learning Blogs"
                link="/machine_learning_blog"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="programming_blog.jpeg"
                title="Programming Languages Blogs"
                link="/prog_lan_blog"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="web_blog.jpeg"
                title="Web Design Blogs"
                link="/webdesign_blog"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="machine_blog.jpeg"
                title="Machine Learning Blogs"
                link="/machine_learning_blog"
              />
            </Carousel.Item>
         
          </Carousel>
        </div>
      </>
    );
  }
}

export default ArticleCardCarousel;
