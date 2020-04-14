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
                imgsource="index_mcqs.jpeg"
                title="Python MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_python_mcqs"
              />
              <PostCard
                imgsource="index_mcqs.jpeg"
                title="C Programming MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_c_mcqs"
              />
              <PostCard
                imgsource="index_mcqs.jpeg"
                title="C++ MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_cpp_mcqs"
              />
            </div>
            <div className="card-deck m-2">
              <PostCard
                imgsource="index_mcqs.jpeg"
                title="Java MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_java_mcqs"
              />
              <PostCard
                imgsource="index_mcqs.jpeg"
                title="JavaScript MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_js_mcqs"
              />
              <PostCard
                imgsource="index_mcqs.jpeg"
                title="DBMS MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_dbms_mcqs"
              />
            </div>
            <div className="card-deck m-2">
              <PostCard
                imgsource="index_mcqs.jpeg"
                title="HTML MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_html_mcqs"
              />
              <PostCard
                imgsource="index_mcqs.jpeg"
                title="CSS MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_css_mcqs"
              />
              <PostCard
                imgsource="index_mcqs.jpeg"
                title="BootStrap MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_bootstrap_mcqs"
              />
            </div>
            <div className="card-deck m-2">
              <PostCard
                imgsource="index_mcqs.jpeg"
                title="React MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_react_mcqs"
              />
              <PostCard
                imgsource="index_mcqs.jpeg"
                title="Django MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_django_mcqs"
              />
              <PostCard
                imgsource="index_mcqs.jpeg"
                title="Git MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_git_mcqs"
              />
            </div>
            <div className="card-deck m-2">
              <PostCard
                imgsource="index_mcqs.jpeg"
                title="Android MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_android_mcqs"
              />
              <PostCard
                imgsource="index_mcqs.jpeg"
                title="SQL MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_sql_mcqs"
              />
              <PostCard
                imgsource="index_mcqs.jpeg"
                title="DS MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_ds_mcqs"
              />
            </div>
            <h4 className="text-secondary mt-3">For More MCQs Practice</h4>
            <div className="card-deck m-2">
              <PostCard
                imgsource="index_mcqs.jpeg"
                title="OOPs MCQs Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_oops_mcqs"
              />
              <PostCard
                imgsource="index_mcqs.jpeg"
                title="Blank"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_mcqs"
              />
              <PostCard
                imgsource="index_mcqs.jpeg"
                title="Blank"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/index_mcqs"
              />
            </div>
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
