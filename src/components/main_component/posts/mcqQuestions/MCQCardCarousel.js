import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import CardCarouselItem from "../../../footer_component/CardCarouselItem";

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
                  imgsource="code_challange.jpeg"
                  title="Python MCQ's"
                  link="/index_python_mcqs"
                />
                <CardCarouselItem
                  imgsource="event.jpeg"
                  title="C MCQ's"
                  link="/index_c_mcqs"
                />
                <CardCarouselItem
                  imgsource="web_blog.jpeg"
                  title="Java MCQ's"
                  link="/index_java_mcqs"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="code_challange.jpeg"
                  title="C++ MCQ's"
                  link="/index_cpp_mcqs"
                />
                <CardCarouselItem
                  imgsource="code_challange.jpeg"
                  title="DBMS MCQ's"
                  link="/index_dbms_mcqs"
                />
                <CardCarouselItem
                  imgsource="code_challange.jpeg"
                  title="HTML MCQ's"
                  link="/index_html_mcqs"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="code_challange.jpeg"
                  title="CSS MCQ's"
                  link="/index_css_mcqs"
                />
                <CardCarouselItem
                  imgsource="code_challange.jpeg"
                  title="Android MCQ's"
                  link="/index_android_mcqs"
                />
                <CardCarouselItem
                  imgsource="code_challange.jpeg"
                  title="Datastructure MCQ's"
                  link="/index_ds_mcqs"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="code_challange.jpeg"
                  title="Bootstrap MCQ's"
                  link="/index_bootstrap_mcqs"
                />
                <CardCarouselItem
                  imgsource="code_challange.jpeg"
                  title="Django MCQ's"
                  link="/index_django_mcqs"
                />
                <CardCarouselItem
                  imgsource="code_challange.jpeg"
                  title="GIT MCQ's"
                  link="/index_git_mcqs"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="code_challange.jpeg"
                  title="Javasript MCQ's"
                  link="/index_js_mcqs"
                />
                <CardCarouselItem
                  imgsource="code_challange.jpeg"
                  title="OOPS MCQ's"
                  link="/index_oops_mcqs"
                />
                <CardCarouselItem
                  imgsource="code_challange.jpeg"
                  title="React MCQ's"
                  link="/index_react_mcqs"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="code_challange.jpeg"
                  title="SQL MCQ's"
                  link="/index_sql_mcqs"
                />
                <CardCarouselItem
                  imgsource="code_challange.jpeg"
                  title="OOPS MCQ's"
                  link="/index_oops_mcqs"
                />
                <CardCarouselItem
                  imgsource="code_challange.jpeg"
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
                imgsource="code_challange.jpeg"
                title="C MCQ's"
                link="/index_c_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="event.jpeg"
                title=" C ++ MCQ's"
                link="/index_cpp_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="web_blog.jpeg"
                title="Python MCQ's"
                link="/index_python_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="technical_interview_questions.jpeg"
                title="Java MCQ's"
                link="/index_java_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="python_programming.jpeg"
                title="HTML MCQ's "
                link="/index_html_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="ds_mcqs.jpeg"
                title="CSS MCQs"
                link="/index_css_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="python_programming_question.jpeg"
                title="Bootstrap MCQ's"
                link="/index_bootstrap_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="python_programming_question.jpeg"
                title="Javascript MCQ's"
                link="/index_js_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="python_programming_question.jpeg"
                title="React MCQ's"
                link="/index_react_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="python_programming_question.jpeg"
                title="Django MCQ's "
                link="/index_django_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="python_programming_question.jpeg"
                title="Data Structure MCQ's"
                link="/index_ds_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="python_programming_question.jpeg"
                title="OOPS MCQ's"
                link="/index_oops_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="python_programming_question.jpeg"
                title="SQL MCQ's "
                link="/index_sql_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="python_programming_question.jpeg"
                title="DBMS MCQ's"
                link="/index_dbms_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="python_programming_question.jpeg"
                title="Android MCQ's"
                link="/index_android_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="python_programming_question.jpeg"
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
