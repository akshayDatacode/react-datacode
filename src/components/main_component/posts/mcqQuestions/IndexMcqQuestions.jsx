import React, { Component } from "react";
import { Link } from "react-router-dom";
import PostCard from "../../PostCard";
import RightSideSection from "../../../right_section/RightSideSection";
import MCQCardCarousel from "./MCQCardCarousel";

class IndexMcqQuestions extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-8 mt-4">
            <h2 className="text-center mb-4">
              Technical MCQs Practice Question
            </h2>
            <Link to="/home" className="badge badge-primary mr-1">
              Home >
            </Link>
            <Link to="/index_articles" className="badge badge-warning mr-1">
              Blogs >
            </Link>

            <div className="card-deck m-2">
              <PostCard
                imgsource="python_mcq.jpeg"
                title="Python MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_python_mcqs"
              />
              <PostCard
                imgsource="c_mcq.jpeg"
                title="C Programming MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_c_mcqs"
              />
              <PostCard
                imgsource="cpp_mcq.jpeg"
                title="C++ MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_cpp_mcqs"
              />
            </div>
            <div className="card-deck m-2">
              <PostCard
                imgsource="java_mcq.jpeg"
                title="Java MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_java_mcqs"
              />
              <PostCard
                imgsource="js_mcq.jpeg"
                title="JavaScript MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_js_mcqs"
              />
              <PostCard
                imgsource="dbms_mcq.jpeg"
                title="DBMS MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_dbms_mcqs"
              />
            </div>
            <div className="card-deck m-2">
              <PostCard
                imgsource="html_mcq.jpeg"
                title="HTML MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_html_mcqs"
              />
              <PostCard
                imgsource="css_mcq.jpeg"
                title="CSS MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_css_mcqs"
              />
              <PostCard
                imgsource="bootstrap_mcq.jpeg"
                title="BootStrap MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_bootstrap_mcqs"
              />
            </div>
            <div className="card-deck m-2">
              <PostCard
                imgsource="react_mcq.jpeg"
                title="React MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_react_mcqs"
              />
              <PostCard
                imgsource="django_mcq.jpeg"
                title="Django MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_django_mcqs"
              />
              <PostCard
                imgsource="git_mcq.jpeg"
                title="Git MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_git_mcqs"
              />
            </div>
            <div className="card-deck m-2">
              <PostCard
                imgsource="android_mcq.jpeg"
                title="Android MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_android_mcqs"
              />
              <PostCard
                imgsource="sql_mcq.jpeg"
                title="SQL MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_sql_mcqs"
              />
              <PostCard
                imgsource="ds_mcq.jpeg"
                title="DS MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_ds_mcqs"
              />
            </div>

            <div className="card-deck m-2">
              <PostCard
                imgsource="oops_mcq.jpeg"
                title="OOPs MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_oops_mcqs"
              />
              <PostCard
                imgsource="angular_mcq.jpeg"
                title="Angular MCQs Coming Soon"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_angular_mcqs"
              />
              <PostCard
                imgsource="c_mcq.jpeg"
                title="Blank"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_mcqs"
              />
            </div>
            <h4 className="text-secondary mt-3">For More MCQs Practice</h4>
            <MCQCardCarousel />
          </div>
          <div className="col-md-3">
            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default IndexMcqQuestions;
