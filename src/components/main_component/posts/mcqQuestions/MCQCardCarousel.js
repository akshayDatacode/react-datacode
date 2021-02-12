import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import CardCarouselItem from "../../../../app/components/footer_component/CardCarouselItem";

class MCQCardCarousel extends Component {
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
                  imgsource="python_mcq.jpeg"
                  title="Python MCQ's"
                  link="/index_python_mcqs"
                />
                <CardCarouselItem
                  imgsource="c_mcq.jpeg"
                  title="C MCQ's"
                  link="/index_c_mcqs"
                />
                <CardCarouselItem
                  imgsource="java_mcq.jpeg"
                  title="Java MCQ's"
                  link="/index_java_mcqs"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="cpp_mcq.jpeg"
                  title="C++ MCQ's"
                  link="/index_cpp_mcqs"
                />
                <CardCarouselItem
                  imgsource="dbms_mcq.jpeg"
                  title="DBMS MCQ's"
                  link="/index_dbms_mcqs"
                />
                <CardCarouselItem
                  imgsource="html_mcq.jpeg"
                  title="HTML MCQ's"
                  link="/index_html_mcqs"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="css_mcq.jpeg"
                  title="CSS MCQ's"
                  link="/index_css_mcqs"
                />
                <CardCarouselItem
                  imgsource="android_mcq.jpeg"
                  title="Android MCQ's"
                  link="/index_android_mcqs"
                />
                <CardCarouselItem
                  imgsource="ds_mcq.jpeg"
                  title="Datastructure MCQ's"
                  link="/index_ds_mcqs"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="bootstrap_mcq.jpeg"
                  title="Bootstrap MCQ's"
                  link="/index_bootstrap_mcqs"
                />
                <CardCarouselItem
                  imgsource="django_mcq.jpeg"
                  title="Django MCQ's"
                  link="/index_django_mcqs"
                />
                <CardCarouselItem
                  imgsource="git_mcq.jpeg"
                  title="GIT MCQ's"
                  link="/index_git_mcqs"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="js_mcq.jpeg"
                  title="Javasript MCQ's"
                  link="/index_js_mcqs"
                />
                <CardCarouselItem
                  imgsource="oops_mcq.jpeg"
                  title="OOPS MCQ's"
                  link="/index_oops_mcqs"
                />
                <CardCarouselItem
                  imgsource="react_mcq.jpeg"
                  title="React MCQ's"
                  link="/index_react_mcqs"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="sql_mcq.jpeg"
                  title="SQL MCQ's"
                  link="/index_sql_mcqs"
                />
                <CardCarouselItem
                  imgsource="angular_mcq.jpeg"
                  title="Angular MCQs Coming Soon"
                  link="/index_mcqs"
                />
                <CardCarouselItem
                  imgsource="react_mcq.jpeg"
                  title="React MCQ's"
                  link="/index_react_mcqs"
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
                imgsource="c_mcq.jpeg"
                title="C MCQ's"
                link="/index_c_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="cpp_mcq.jpeg"
                title=" C++ MCQ's"
                link="/index_cpp_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="python_mcq.jpeg"
                title="Python MCQ's"
                link="/index_python_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="java_mcq.jpeg"
                title="Java MCQ's"
                link="/index_java_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="html_mcq.jpeg"
                title="HTML MCQ's "
                link="/index_html_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="css_mcq.jpeg"
                title="CSS MCQs"
                link="/index_css_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="bootstrap_mcq.jpeg"
                title="Bootstrap MCQ's"
                link="/index_bootstrap_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="js_mcq.jpeg"
                title="Javascript MCQ's"
                link="/index_js_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="react_mcq.jpeg"
                title="React MCQ's"
                link="/index_react_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="angular_mcq.jpeg"
                title="Angular MCQs Coming Soon"
                link="/index_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="django_mcq.jpeg"
                title="Django MCQ's "
                link="/index_django_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="ds_mcq.jpeg"
                title="Data Structure MCQ's"
                link="/index_ds_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="oops_mcq.jpeg"
                title="OOPS MCQ's"
                link="/index_oops_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="sql_mcq.jpeg"
                title="SQL MCQ's "
                link="/index_sql_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="dbms_mcq.jpeg"
                title="DBMS MCQ's"
                link="/index_dbms_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="android_mcq.jpeg"
                title="Android MCQ's"
                link="/index_android_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="git_mcq.jpeg"
                title="Git MCQ's"
                link="/index_git_mcqs"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </>
    );
  }
}

export default MCQCardCarousel;
