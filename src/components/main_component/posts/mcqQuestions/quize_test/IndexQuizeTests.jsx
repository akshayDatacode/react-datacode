import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCopyright } from "@fortawesome/free-solid-svg-icons";
import RightSideSection from "../../../../right_section/RightSideSection";
import { faPython, faJava } from "@fortawesome/free-brands-svg-icons";
import MCQTestCardCarousel from "./MCQTestCardCarousel";
import PostCard from "../../../PostCard";
class IndexQuizeTests extends Component {
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
            <h2 className="text-center mb-4">Programming Quize Test</h2>
            <Link to="/home" className="badge badge-primary mr-1 mb-3">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>
            <div className="card-deck mb-5">
              <PostCard
                imgsource="c_quize_test.jpeg"
                title="C Programming Quize Test"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/c_quize_tests"
              />
              <PostCard
                imgsource="python_quize_test.jpeg"
                title="Python Programming Quize Test"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/python_quize_tests"
              />
              <PostCard
                imgsource="java_quize_test.jpeg"
                title="Java Programming Quize Test"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/java_quize_tests"
              />
            </div>
            <div className="card-deck mb-5">
              <PostCard
                imgsource="programming_quize_test.jpeg"
                title="HTML & CSS Quize Test"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/html_quize_tests"
              />
              <PostCard
                imgsource="programming_quize_test.jpeg"
                title="JavaScript Programming Quize Test"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/js_quize_tests"
              />
              <PostCard
                imgsource="programming_quize_test.jpeg"
                title="DataStructure Quize Test"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/ds_quize_tests"
              />
            </div>
            <div className="card-deck mb-5">
              <PostCard
                imgsource="programming_quize_test.jpeg"
                title="DBMS Quize Test"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/dbms_quize_tests"
              />
              <PostCard
                imgsource="programming_quize_test.jpeg"
                title="SQL Quize Test"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/sql_quize_tests"
              />
              <PostCard
                imgsource="programming_quize_test.jpeg"
                title="OOPs Programming Quize Test"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/oops_quize_tests"
              />
            </div>
            <div className="card-deck mb-5">
              <PostCard
                imgsource="programming_quize_test.jpeg"
                title="Angular Quize Test"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/angular_quize_tests"
              />
              <PostCard
                imgsource="programming_quize_test.jpeg"
                title="React Quize Test"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/react_quize_tests"
              />
              <PostCard
                imgsource="programming_quize_test.jpeg"
                title="Android Programming Quize Test"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/Android_quize_tests"
              />
            </div>
            <h4 className="text-secondary mt-3">For More Quize Tests</h4>
            <MCQTestCardCarousel />
          </div>

          <div className="col-md-3">
            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default IndexQuizeTests;