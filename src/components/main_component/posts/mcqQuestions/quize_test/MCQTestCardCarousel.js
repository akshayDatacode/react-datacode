import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import CardCarouselItem from "../../../../../app/components/footer_component/CardCarouselItem";

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
                  imgsource="python_quiz_test.jpeg"
                  title="Python Quiz Test"
                  link="/python_quize_tests"
                />
                <CardCarouselItem
                  imgsource="c_quiz_test.jpeg"
                  title="C Quiz Test"
                  link="/c_quize_tests"
                />
                <CardCarouselItem
                  imgsource="cpp_quiz_test.jpeg"
                  title="C++ Quiz Test"
                  link="/cpp_quize_tests"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck ">
                <CardCarouselItem
                  imgsource="java_quiz_test.jpeg"
                  title="Java Quiz Test"
                  link="/java_quize_tests"
                />
                <CardCarouselItem
                  imgsource="js_quiz_test.jpeg"
                  title="JavaScript Quiz Test"
                  link="/js_quize_tests"
                />
                <CardCarouselItem
                  imgsource="ds_quiz_test.jpeg"
                  title="Datasturcture Quiz Test"
                  link="/ds_quize_tests"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck ">
                <CardCarouselItem
                  imgsource="dbms_quiz_test.jpeg"
                  title="DBMS Quiz Test"
                  link="/dbms_quize_tests"
                />
                <CardCarouselItem
                  imgsource="sql_quiz_test.jpeg"
                  title="SQL Quiz Test"
                  link="/sql_quize_tests"
                />
                <CardCarouselItem
                  imgsource="oops_quiz_test.jpeg"
                  title="OOPs Quiz Test"
                  link="/oops_quize_tests"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck ">
                <CardCarouselItem
                  imgsource="html_css_quiz_test.jpeg"
                  title="Html & CSS  Quiz Test"
                  link="/html_quize_tests"
                />
                <CardCarouselItem
                  imgsource="angular_quiz_test.jpeg"
                  title="Angular Quiz Test"
                  link="/angular_quize_tests"
                />
                <CardCarouselItem
                  imgsource="react_quiz_test.jpeg"
                  title="React Quiz Test"
                  link="/react_quize_tests"
                />
              </div>
            </Carousel.Item>
            {/* <Carousel.Item>
              <div className="card-deck ">
                <CardCarouselItem
                  imgsource="android_quiz_test.jpeg"
                  title="Android Quiz Test"
                  link="/android_quize_tests"
                />
                <CardCarouselItem
                  imgsource="django_quiz_test.jpeg"
                  title="Django Quiz Test"
                  link="/django_quize_tests"
                />
                <CardCarouselItem
                  imgsource="git_quiz_test.jpeg"
                  title="Git Quiz Test"
                  link="/git_quize_tests"
                />
              </div>
            </Carousel.Item> */}
          </Carousel>
        </div>

        {/* Mobile Carousel Cards  */}
        <div className="mb-5 d-block d-md-none">
          <Carousel indicators={false}>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="python_quiz_test.jpeg"
                title="Python Quiz Test"
                link="/python_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="c_quiz_test.jpeg"
                title="C Quiz Test"
                link="/c_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="cpp_quiz_test.jpeg"
                title="C++ Quiz Test"
                link="/cpp_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="java_quiz_test.jpeg"
                title="Java Quiz Test"
                link="/java_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="js_quiz_test.jpeg"
                title="Js Quiz Test"
                link="/js_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="ds_quiz_test.jpeg"
                title="DataStructure Quiz Test"
                link="/ds_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="dbms_quiz_test.jpeg"
                title="Dbms Quiz Test"
                link="/dbms_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="sql_quiz_test.jpeg"
                title="Sql Quiz Test"
                link="/sql_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="oops_quiz_test.jpeg"
                title="OOPs Quiz Test"
                link="/oops_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="html_css_quiz_test.jpeg"
                title="Html & CSS Quiz Test"
                link="/html_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="android_quiz_test.jpeg"
                title="Android Quiz Test"
                link="/android_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="react_quiz_test.jpeg"
                title="React Quiz Test"
                link="/react_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="angular_quiz_test.jpeg"
                title="Angular Quiz Test"
                link="/angular_quize_tests"
              />
            </Carousel.Item>
            {/* <Carousel.Item>
              <CardCarouselItem
                imgsource="django_quiz_test.jpeg"
                title="Django Quiz Test"
                link="/django_quize_tests"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="django_quiz_test.jpeg"
                title="Django Quiz Test"
                link="/django_quize_tests"
              />
            </Carousel.Item> */}
          </Carousel>
        </div>
      </>
    );
  }
}

export default MCQTestCardCarousel;
