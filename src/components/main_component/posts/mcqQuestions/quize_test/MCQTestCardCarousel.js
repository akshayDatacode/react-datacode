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
                  imgsource="python_quize.jpeg"
                  title="Python quiz test"
                  link="/python_quize_tests"
                />
                <CardCarouselItem
                  imgsource="c_quize.jpeg"
                  title="C quiz test"
                  link="/c_quize_tests"
                />
                <CardCarouselItem
                  imgsource="cpp_quize.jpeg"
                  title="C++ Quize Test"
                  link="/cpp_quize_tests"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck ">
                <CardCarouselItem
                  imgsource="java_quize.jpeg"
                  title="Java Quize Test"
                  link="/java_quize_tests"
                />
                <CardCarouselItem
                  imgsource="js_quize.jpeg"
                  title="JavaScript Quize Test"
                  link="/js_quize_tests"
                />
                <CardCarouselItem
                  imgsource="ds_quize.jpeg"
                  title="Datasturcture Quize Test"
                  link="/ds_quize_tests"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck ">
                <CardCarouselItem
                  imgsource="dbms_quize.jpeg"
                  title="DBMS Quize Test"
                  link="/dbms_quize_tests"
                />
                <CardCarouselItem
                  imgsource="sql_quize.jpeg"
                  title="SQL Quize Test"
                  link="/sql_quize_tests"
                />
                <CardCarouselItem
                  imgsource="oops_quize.jpeg"
                  title="OOPs Quize Test"
                  link="/oops_quize_tests"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck ">
                <CardCarouselItem
                  imgsource="html_css_quize.jpeg"
                  title="Html & CSS  Quize Test"
                  link="/html_quize_tests"
                />
                <CardCarouselItem
                  imgsource="angular_quize.jpeg"
                  title="Angular Quize Test"
                  link="/angular_quize_tests"
                />
                <CardCarouselItem
                  imgsource="react_quize.jpeg"
                  title="React Quize Test"
                  link="/react_quize_tests"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck ">
                <CardCarouselItem
                  imgsource="android_quize.jpeg"
                  title="Android Quize Test"
                  link="/android_quize_tests"
                />
                <CardCarouselItem
                  imgsource="django_quize.jpeg"
                  title="Django Quize Test"
                  link="/django_quize_tests"
                />
                <CardCarouselItem
                  imgsource="git_quize.jpeg"
                  title="Git Quize Test"
                  link="/git_quize_tests"
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
                imgsource="python_quize.jpeg"
                title="Python quiz test"
                link="/python_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="c_quize.jpeg"
                title="C Quize Test"
                link="/c_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="cpp_quize.jpeg"
                title="C++ Quize Test"
                link="/cpp_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="java_quize.jpeg"
                title="Java Quize Test"
                link="/java_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="js_quize.jpeg"
                title="Js Quize Test"
                link="/js_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="ds_quize.jpeg"
                title="DataStructure Quize Test"
                link="/ds_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="dbms_quize.jpeg"
                title="Dbms Quize Test"
                link="/dbms_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="sql_quize.jpeg"
                title="Sql Quize Test"
                link="/sql_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="oops_quize.jpeg"
                title="OOPs Quize Test"
                link="/oops_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="html_css_quize.jpeg"
                title="Html & CSS Quize Test"
                link="/html_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="android_quize.jpeg"
                title="Android Quize Test"
                link="/android_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="react_quize.jpeg"
                title="React Quize Test"
                link="/react_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="angular_quize.jpeg"
                title="Angular Quize Test"
                link="/angular_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="django_quize.jpeg"
                title="Django Quize Test"
                link="/django_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="django_quize.jpeg"
                title="Django Quize Test"
                link="/django_quize_tests"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </>
    );
  }
}

export default MCQTestCardCarousel;
