import React, { Component } from "react";
import { Link } from "react-router-dom";
import PostCard from "../../PostCard";
import RightSideSection from "../../../right_section/RightSideSection";
import MCQCardCarousel from "./MCQCardCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTasks } from "@fortawesome/free-solid-svg-icons";
import Technologies from "../../../right_section/Technologies";

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
            <h1
              className="text-center mb-4 rounded p-2"
              style={{ backgroundColor: "#06CB6C", color: "#072C71" }}
            >
              <FontAwesomeIcon icon={faTasks} color="#072C71" size="1x" />{" "}
              Technical MCQs Practice Question
            </h1>
            <Link
              to="/home"
              className="badge mr-1"
              style={{ backgroundColor: "#06CB6C" }}
            >
              <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" />
            </Link>

            <div className="card-deck m-2">
              <PostCard
                imgsource="python_mcq.jpeg"
                title="Python MCQs Questions"
                paragraph=" Python questions and answers focuses on all areas of Python subject covering most topics in Python. These topics are chosen from a collection of most authoritative and best reference books on Python. "
                link="/index_python_mcqs"
              />
              <PostCard
                imgsource="c_mcq.jpeg"
                title="C Programming MCQs Questions"
                paragraph="C questions and answers focuses on all areas of C subject covering most topics in C. These topics are chosen from a collection of most authoritative and best reference books on C. "
                link="/index_c_mcqs"
              />
              <PostCard
                imgsource="cpp_mcq.jpeg"
                title="C++ MCQs Questions"
                paragraph="C++ questions and answers focuses on all areas of C++ subject covering most topics in C++. These topics are chosen from a collection of most authoritative and best reference books on C++. "
                link="/index_cpp_mcqs"
              />
            </div>
            <div className="card-deck m-2">
              <PostCard
                imgsource="java_mcq.jpeg"
                title="Java MCQs Questions"
                paragraph="Java questions and answers focuses on all areas of Java subject covering most topics in Java. These topics are chosen from a collection of most authoritative and best reference books on Java. "
                link="/index_java_mcqs"
              />
              <PostCard
                imgsource="js_mcq.jpeg"
                title="JavaScript MCQs Questions"
                paragraph="JavaScript questions and answers focuses on all areas of JavaScript subject covering most topics in JavaScript. These topics are chosen from a collection of most authoritative and best reference books on JavaScript. "
                link="/index_js_mcqs"
              />
              <PostCard
                imgsource="dbms_mcq.jpeg"
                title="DBMS MCQs Questions"
                paragraph="DBMS questions and answers focuses on all areas of DBMS subject covering most topics in DBMS. These topics are chosen from a collection of most authoritative and best reference books on DBMS."
                link="/index_dbms_mcqs"
              />
            </div>
            <div className="card-deck m-2">
              <PostCard
                imgsource="html_mcq.jpeg"
                title="HTML MCQs Questions"
                paragraph="HTML questions and answers focuses on all areas of HTML subject covering most topics in HTML. These topics are chosen from a collection of most authoritative and best reference books on HTML."
                link="/index_html_mcqs"
              />
              <PostCard
                imgsource="css_mcq.jpeg"
                title="CSS MCQs Questions"
                paragraph="CSS questions and answers focuses on all areas of CSS subject covering most topics in CSS. These topics are chosen from a collection of most authoritative and best reference books on CSS."
                link="/index_css_mcqs"
              />
              <PostCard
                imgsource="bootstrap_mcq.jpeg"
                title="BootStrap MCQs Questions"
                paragraph="Bootstrap questions and answers focuses on all areas of Bootstrap subject covering most topics in Bootstrap. These topics are chosen from a collection of most authoritative and best reference books on Bootstrap."
                link="/index_bootstrap_mcqs"
              />
            </div>
            <div className="card-deck m-2">
              <PostCard
                imgsource="react_mcq.jpeg"
                title="React MCQs Questions"
                paragraph="React questions and answers focuses on all areas of React subject covering most topics in React. These topics are chosen from a collection of most authoritative and best reference books on React."
                link="/index_react_mcqs"
              />
              <PostCard
                imgsource="django_mcq.jpeg"
                title="Django MCQs Questions"
                paragraph="Django questions and answers focuses on all areas of Django subject covering most topics in DJango. These topics are chosen from a collection of most authoritative and best reference books on Django."
                link="/index_django_mcqs"
              />
              <PostCard
                imgsource="git_mcq.jpeg"
                title="Git MCQs Questions"
                paragraph="Git questions and answers focuses on all areas of GIt covering most topics. These topics are chosen from a collection of most authoritative and best reference on Git."
                link="/index_git_mcqs"
              />
            </div>
            <div className="card-deck m-2">
              <PostCard
                imgsource="android_mcq.jpeg"
                title="Android MCQs Questions"
                paragraph="Android questions and answers focuses on all areas of Android subject covering most topics in Android. These topics are chosen from a collection of most authoritative and best reference books on Android."
                link="/index_android_mcqs"
              />
              <PostCard
                imgsource="sql_mcq.jpeg"
                title="SQL MCQs Questions"
                paragraph="SQL questions and answers focuses on all areas of SQL subject covering most topics in SQL. These topics are chosen from a collection of most authoritative and best reference books on SQL."
                link="/index_sql_mcqs"
              />
              <PostCard
                imgsource="ds_mcq.jpeg"
                title="DS MCQs Questions"
                paragraph="DS questions and answers focuses on all areas of DS subject covering most topics in DS. These topics are chosen from a collection of most authoritative and best reference books on DS."
                link="/index_ds_mcqs"
              />
            </div>

            <div className="card-deck m-2">
              <PostCard
                imgsource="oops_mcq.jpeg"
                title="OOPs MCQs Questions"
                paragraph="OOPS questions and answers focuses on all areas of OOPS subject covering most topics in OOPS. These topics are chosen from a collection of most authoritative and best reference books on OOPS."
                link="/index_oops_mcqs"
              />
              <PostCard
                imgsource="angular_mcq.jpeg"
                title="Angular MCQs Coming Soon"
                paragraph="Angular questions and answers focuses on all areas of Angular subject covering most topics in Angular. These topics are chosen from a collection of most authoritative and best reference books on Angular."
                link="/index_angular_mcqs"
              />
            </div>
            <h4 className="text-secondary mt-3">For More MCQs Practice</h4>
            <MCQCardCarousel />
          </div>
          <div className="col-md-3">
            <RightSideSection />
            <Technologies />
          </div>
        </div>
      </>
    );
  }
}

export default IndexMcqQuestions;
