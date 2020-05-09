import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import RecommendPost from "../RecommendPost";
class LearningSideSection extends Component {
  state = {};
  render() {
    return (
      <>
        {/* C */}

        {this.props.language == "c" && (
          <>
            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faBook}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  C Programming Learning
                </h5>
              </div>
            </div>

            <RecommendPost
              imgsource="c_tech.jpeg"
              RecPostHading="C Tutorials & Courses"
              link="/c"
            />

            <RecommendPost
              imgsource="c_interview_questions.jpeg"
              RecPostHading="C Interview Questions"
              link="/c_interview_question"
            />
            <RecommendPost
              imgsource="c_programming_question.jpeg"
              RecPostHading="C Programming Example Questions"
              link="/c_programming_questions"
            />
            <RecommendPost
              imgsource="programming_blog.jpeg"
              RecPostHading="C Programming Blogs"
              link="/prog_lan_blog"
            />

            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faPuzzlePiece}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  C Programming Practice
                </h5>
              </div>
            </div>
            <RecommendPost
              imgsource="c_practice_question.jpeg"
              RecPostHading="C Programming Training & Certification"
              link="/c_training_certification"
            />
            <RecommendPost
              imgsource="c_practice_question.jpeg"
              RecPostHading="C Programming Practice Problems"
              link="/index_c_practice_questions"
            />
            <RecommendPost
              imgsource="c_mcq.jpeg"
              RecPostHading="C MCQs"
              link="/index_c_mcqs"
            />
            <RecommendPost
              imgsource="c_quiz_test.jpeg"
              RecPostHading="C Quize Test"
              link="/c_quizes_tests"
            />
            <RecommendPost
              imgsource="code_challange.jpeg"
              RecPostHading="Weekly Code Challanges"
              link="/index_code_challange"
            />
          </>
        )}

        {/* Python */}

        {this.props.language == "python" && (
          <>
            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faBook}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  Python Programming Learning
                </h5>
              </div>
            </div>

            <RecommendPost
              imgsource="python_tech.jpeg"
              RecPostHading="Python Tutorials & Courses"
              link="/python"
            />

            <RecommendPost
              imgsource="python_interview_questions.jpeg"
              RecPostHading="python Interview Questions"
              link="/python_interview_question"
            />
            <RecommendPost
              imgsource="python_programming_question.jpeg"
              RecPostHading="Python Programming Example Questions"
              link="/python_programming_questions"
            />
            <RecommendPost
              imgsource="programming_blog.jpeg"
              RecPostHading="python Programming Blogs"
              link="/prog_lan_blog"
            />

            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faPuzzlePiece}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  Python Programming Practice
                </h5>
              </div>
            </div>
            <RecommendPost
              imgsource="python_practice_question.jpeg"
              RecPostHading="python Programming Practice Problems"
              link="/index_python_practice_questions"
            />
            <RecommendPost
              imgsource="python_mcq.jpeg"
              RecPostHading="python MCQs"
              link="/index_python_mcqs"
            />
            <RecommendPost
              imgsource="python_quiz_test.jpeg"
              RecPostHading="python Quize Test"
              link="/python_quizes_tests"
            />
            <RecommendPost
              imgsource="code_challange.jpeg"
              RecPostHading="Weekly Code Challanges"
              link="/index_code_challange"
            />
          </>
        )}

        {/* Java */}

        {this.props.language == "java" && (
          <>
            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faBook}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  Java Programming Learning
                </h5>
              </div>
            </div>

            <RecommendPost
              imgsource="java_tech.jpeg"
              RecPostHading="Java Tutorials & Courses"
              link="/java"
            />

            <RecommendPost
              imgsource="java_interview_questions.jpeg"
              RecPostHading="Java Interview Questions"
              link="/java_interview_question"
            />
            <RecommendPost
              imgsource="java_programming_question.jpeg"
              RecPostHading="Java Programming Example Questions"
              link="/java_programming_questions"
            />
            <RecommendPost
              imgsource="programming_blog.jpeg"
              RecPostHading="Java Programming Blogs"
              link="/prog_lan_blog"
            />

            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faPuzzlePiece}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  Java Programming Practice
                </h5>
              </div>
            </div>
            <RecommendPost
              imgsource="java_practice_question.jpeg"
              RecPostHading="Java Programming Practice Problems"
              link="/index_java_practice_questions"
            />
            <RecommendPost
              imgsource="java_mcq.jpeg"
              RecPostHading="java MCQs"
              link="/index_java_mcqs"
            />
            <RecommendPost
              imgsource="java_quiz_test.jpeg"
              RecPostHading="java Quize Test"
              link="/java_quizes_tests"
            />
            <RecommendPost
              imgsource="code_challange.jpeg"
              RecPostHading="Weekly Code Challanges"
              link="/index_code_challange"
            />
          </>
        )}

        {/* C++ */}

        {this.props.language == "cpp" && (
          <>
            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faBook}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  C++ Programming Learning
                </h5>
              </div>
            </div>

            <RecommendPost
              imgsource="cpp_tech.jpeg"
              RecPostHading="C++ Tutorials & Courses"
              link="/cpp"
            />

            <RecommendPost
              imgsource="cpp_interview_questions.jpeg"
              RecPostHading="C++ Interview Questions"
              link="/cpp_interview_question"
            />
            <RecommendPost
              imgsource="cprogramming_practice_question.jpeg"
              RecPostHading="C++ Programming Example Questions"
              link="/cpp_programming_questions"
            />
            <RecommendPost
              imgsource="programming_blog.jpeg"
              RecPostHading="C++ Programming Blogs"
              link="/prog_lan_blog"
            />

            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faPuzzlePiece}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  C++ Programming Practice
                </h5>
              </div>
            </div>
            <RecommendPost
              imgsource="cprogramming_practice_question.jpeg"
              RecPostHading="C++ Programming Practice Problems"
              link="/index_cpp_practice_questions"
            />
            <RecommendPost
              imgsource="cpp_mcq.jpeg"
              RecPostHading="C++ MCQs"
              link="/index_cpp_mcqs"
            />
            <RecommendPost
              imgsource="cpp_quiz_test.jpeg"
              RecPostHading="C++ Quize Test"
              link="/cpp_quizes_tests"
            />
            <RecommendPost
              imgsource="code_challange.jpeg"
              RecPostHading="Weekly Code Challanges"
              link="/index_code_challange"
            />
          </>
        )}

        {/* JS */}

        {this.props.language == "js" && (
          <>
            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faBook}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  Javascript Learning
                </h5>
              </div>
            </div>

            <RecommendPost
              imgsource="js_tech.jpeg"
              RecPostHading="JavaScript Tutorials & Courses"
              link="/js"
            />

            <RecommendPost
              imgsource="js_interview_questions.jpeg"
              RecPostHading="Javascript Interview Questions"
              link="/js_interview_question"
            />
            <RecommendPost
              imgsource="js.jpeg"
              RecPostHading="Javascript Example Questions"
              link="/javascript_programming_questions"
            />
            <RecommendPost
              imgsource="js_learning_blogs.jpeg"
              RecPostHading="Javascript Programming Blogs"
              link="/prog_lan_blog"
            />

            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faPuzzlePiece}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  Javascript Practice
                </h5>
              </div>
            </div>

            <RecommendPost
              imgsource="js_mcq.jpeg"
              RecPostHading="Javascript MCQs"
              link="/index_js_mcqs"
            />
            <RecommendPost
              imgsource="js_quiz_test.jpeg"
              RecPostHading="Javascript Quize Test"
              link="/js_quizes_tests"
            />
            <RecommendPost
              imgsource="code_challange.jpeg"
              RecPostHading="Weekly Code Challanges"
              link="/index_code_challange"
            />
          </>
        )}

        {/* DBMS */}

        {this.props.language == "dbms" && (
          <>
            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faBook}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  DBMS Learning
                </h5>
              </div>
            </div>

            <RecommendPost
              imgsource="dbms_tech.jpeg"
              RecPostHading="DBMS Tutorials & Courses"
              link="/dbms"
            />

            <RecommendPost
              imgsource="dbms_interview_questions.jpeg"
              RecPostHading="DBMS Interview Questions"
              link="/dbms_interview_question"
            />

            <RecommendPost
              imgsource="programming_blog.jpeg"
              RecPostHading="DBMS Learning Blogs"
              link="/prog_lan_blog"
            />

            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faPuzzlePiece}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  DBMS Practice
                </h5>
              </div>
            </div>

            <RecommendPost
              imgsource="dbms_mcq.jpeg"
              RecPostHading="DBMS MCQs"
              link="/index_dbms_mcqs"
            />
            <RecommendPost
              imgsource="dbms_quiz_test.jpeg"
              RecPostHading="DBMS Quize Test"
              link="/dbms_quizes_tests"
            />
            <RecommendPost
              imgsource="code_challange.jpeg"
              RecPostHading="Weekly Code Challanges"
              link="/index_code_challange"
            />
          </>
        )}

        {/* SQL */}

        {this.props.language == "sql" && (
          <>
            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faBook}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  SQL Learning
                </h5>
              </div>
            </div>

            <RecommendPost
              imgsource="sql_tech.jpeg"
              RecPostHading="SQL Tutorials & Courses"
              link="/sql"
            />

            <RecommendPost
              imgsource="sql_interview_questions.jpeg"
              RecPostHading="SQL Interview Questions"
              link="/sql_interview_question"
            />
            <RecommendPost
              imgsource="programming_blog.jpeg"
              RecPostHading="SQL Learning Blogs"
              link="/prog_lan_blog"
            />

            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faPuzzlePiece}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  SQL Practice
                </h5>
              </div>
            </div>
            <RecommendPost
              imgsource="sql_mcq.jpeg"
              RecPostHading="SQL MCQs"
              link="/index_sql_mcqs"
            />
            <RecommendPost
              imgsource="sql_quiz_test.jpeg"
              RecPostHading="SQL Quize Test"
              link="/sql_quizes_tests"
            />
            <RecommendPost
              imgsource="code_challange.jpeg"
              RecPostHading="Weekly Code Challanges"
              link="/index_code_challange"
            />
          </>
        )}

        {/* Datastructures */}

        {this.props.language == "ds" && (
          <>
            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faBook}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  DataStructure Learning
                </h5>
              </div>
            </div>

            <RecommendPost
              imgsource="ds_tutorials_courses.jpeg"
              RecPostHading="DataStructure Tutorials & Courses"
              link="/ds"
            />

            <RecommendPost
              imgsource="ds_interview_questions.jpeg"
              RecPostHading="DataStructure Interview Questions"
              link="/ds_interview_question"
            />
            <RecommendPost
              imgsource="dsa_programming_questions.jpeg"
              RecPostHading="DataStructure Example Questions"
              link="/ds_programming_questions"
            />
            <RecommendPost
              imgsource="programming_blog.jpeg"
              RecPostHading="DataStructure Programming Blogs"
              link="/prog_lan_blog"
            />

            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faPuzzlePiece}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  DataStructure Practice
                </h5>
              </div>
            </div>
            <RecommendPost
              imgsource="ds_practice_question.jpeg"
              RecPostHading="DataStructure Practice Problems"
              link="/index_ds_practice_questions"
            />
            <RecommendPost
              imgsource="ds_mcq.jpeg"
              RecPostHading="DataStructure MCQs"
              link="/index_ds_mcqs"
            />
            <RecommendPost
              imgsource="ds_quiz_test.jpeg"
              RecPostHading="DataStructure Quiz Test"
              link="/ds_quizes_tests"
            />
            <RecommendPost
              imgsource="code_challange.jpeg"
              RecPostHading="Weekly Code Challanges"
              link="/index_code_challange"
            />
          </>
        )}

        {/* HTML */}

        {this.props.language == "html" && (
          <>
            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faBook}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  HTML Learning
                </h5>
              </div>
            </div>

            <RecommendPost
              imgsource="html_tech.jpeg"
              RecPostHading="HTML Tutorials & Courses"
              link="/html"
            />

            <RecommendPost
              imgsource="html_interview_questions.jpeg"
              RecPostHading="HTML Interview Questions"
              link="/html_interview_question"
            />

            <RecommendPost
              imgsource="programming_blog.jpeg"
              RecPostHading="HTML Programming Blogs"
              link="/prog_lan_blog"
            />

            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faPuzzlePiece}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  HTML Practice
                </h5>
              </div>
            </div>

            <RecommendPost
              imgsource="html_mcq.jpeg"
              RecPostHading="HTML MCQs"
              link="/index_html_mcqs"
            />
            <RecommendPost
              imgsource="html_css_quiz_test.jpeg"
              RecPostHading="HTML Quiz Test"
              link="/html_quizes_tests"
            />
            <RecommendPost
              imgsource="code_challange.jpeg"
              RecPostHading="Weekly Code Challanges"
              link="/index_code_challange"
            />
          </>
        )}

        {/* CSS */}

        {this.props.language == "css" && (
          <>
            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faBook}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  CSS Learning
                </h5>
              </div>
            </div>

            <RecommendPost
              imgsource="css_tech.jpeg"
              RecPostHading="CSS Tutorials & Courses"
              link="/css"
            />

            <RecommendPost
              imgsource="css_interview_questions.jpeg"
              RecPostHading="CSS Interview Questions"
              link="/css_interview_question"
            />

            <RecommendPost
              imgsource="programming_blog.jpeg"
              RecPostHading="CSS Programming Blogs"
              link="/prog_lan_blog"
            />

            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faPuzzlePiece}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  CSS Practice
                </h5>
              </div>
            </div>

            <RecommendPost
              imgsource="css_mcq.jpeg"
              RecPostHading="CSS MCQs"
              link="/index_css_mcqs"
            />
            <RecommendPost
              imgsource="html_css_quiz_test.jpeg"
              RecPostHading="Html / CSS Quiz Test"
              link="/html_quizes_tests"
            />
            <RecommendPost
              imgsource="code_challange.jpeg"
              RecPostHading="Weekly Code Challanges"
              link="/index_code_challange"
            />
          </>
        )}

        {/* OOPs */}

        {this.props.language == "oops" && (
          <>
            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faBook}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  OOPs Learning
                </h5>
              </div>
            </div>

            <RecommendPost
              imgsource="oops_tech.jpeg"
              RecPostHading="OOPs Tutorials & Courses"
              link="/oops"
            />

            <RecommendPost
              imgsource="oops_interview_questions.jpeg"
              RecPostHading="OOPs Interview Questions"
              link="/oops_interview_question"
            />

            <RecommendPost
              imgsource="programming_blog.jpeg"
              RecPostHading="OOPs Programming Blogs"
              link="/prog_lan_blog"
            />

            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faPuzzlePiece}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  OOPs Practice
                </h5>
              </div>
            </div>

            <RecommendPost
              imgsource="oops_mcq.jpeg"
              RecPostHading="OOPs MCQs"
              link="/index_oops_mcqs"
            />
            <RecommendPost
              imgsource="oops_quiz_test.jpeg"
              RecPostHading="OOPs Quiz Test"
              link="/oops_quizes_tests"
            />
            <RecommendPost
              imgsource="code_challange.jpeg"
              RecPostHading="Weekly Code Challanges"
              link="/index_code_challange"
            />
          </>
        )}

        {/* CN*/}
        {this.props.language == "cn" && (
          <>
            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faBook}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  Computer Networking Learning
                </h5>
              </div>
            </div>

            <RecommendPost
              imgsource="cn_tech.jpeg"
              RecPostHading="Computer Networking Tutorials & Courses"
              link="/cn"
            />

            <RecommendPost
              imgsource="cn_interview_questions.jpeg"
              RecPostHading="Computer Networking Interview Questions"
              link="/cn_interview_question"
            />
            <RecommendPost
              imgsource="programming_blog.jpeg"
              RecPostHading="Computer Networking Programming Blogs"
              link="/prog_lan_blog"
            />

            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faPuzzlePiece}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  Computer Networking Practice
                </h5>
              </div>
            </div>
            <RecommendPost
              imgsource="cn_mcq.jpeg"
              RecPostHading="Computer Networking MCQs"
              link="/index_cn_mcqs"
            />
            <RecommendPost
              imgsource="cn_quiz_test.jpeg"
              RecPostHading="Computer Networking Quiz Test"
              link="/cn_quizes_tests"
            />
            <RecommendPost
              imgsource="code_challange.jpeg"
              RecPostHading="Weekly Code Challanges"
              link="/index_code_challange"
            />
          </>
        )}

        {/* OS */}
        {this.props.language == "os" && (
          <>
            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faBook}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  Operating System Learning
                </h5>
              </div>
            </div>

            <RecommendPost
              imgsource="os_tech.jpeg"
              RecPostHading="Operating System Tutorials & Courses"
              link="/os"
            />

            <RecommendPost
              imgsource="os_interview_questions.jpeg"
              RecPostHading="Operating System Interview Questions"
              link="/os_interview_question"
            />
            <RecommendPost
              imgsource="programming_blog.jpeg"
              RecPostHading="Operating System Programming Blogs"
              link="/prog_lan_blog"
            />

            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faPuzzlePiece}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  Operating System Practice
                </h5>
              </div>
            </div>
            <RecommendPost
              imgsource="os_tech.jpeg"
              RecPostHading="Operating System MCQs"
              link="/index_os_mcqs"
            />
            <RecommendPost
              imgsource="os_tech.jpeg"
              RecPostHading="Operating System Quiz Test"
              link="/os_quizes_tests"
            />
            <RecommendPost
              imgsource="code_challange.jpeg"
              RecPostHading="Weekly Code Challanges"
              link="/index_code_challange"
            />
          </>
        )}

        {/* React */}
        {this.props.language == "react" && (
          <>
            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faBook}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  React Learning
                </h5>
              </div>
            </div>

            <RecommendPost
              imgsource="react_tech.jpeg"
              RecPostHading="React Tutorials & Courses"
              link="/react"
            />

            <RecommendPost
              imgsource="react_interview_questions.jpeg"
              RecPostHading="React Interview Questions"
              link="/react_interview_question"
            />
            <RecommendPost
              imgsource="programming_blog.jpeg"
              RecPostHading="React Blogs"
              link="/prog_lan_blog"
            />

            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faPuzzlePiece}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  React Practice
                </h5>
              </div>
            </div>
            <RecommendPost
              imgsource="react_mcq.jpeg"
              RecPostHading="React MCQs"
              link="/index_react_mcqs"
            />
            <RecommendPost
              imgsource="react_quiz_test.jpeg"
              RecPostHading="React Test"
              link="/react_quizes_tests"
            />
            <RecommendPost
              imgsource="code_challange.jpeg"
              RecPostHading="Weekly Code Challanges"
              link="/index_code_challange"
            />
          </>
        )}

        {/* Angular */}
        {this.props.language == "angular" && (
          <>
            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faBook}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  Angular Learning
                </h5>
              </div>
            </div>

            <RecommendPost
              imgsource="angular_tech.jpeg"
              RecPostHading="Angular Tutorials & Courses"
              link="/angular"
            />

            <RecommendPost
              imgsource="angular_interview_questions.jpeg"
              RecPostHading="Angular Interview Questions"
              link="/angular_interview_question"
            />
            <RecommendPost
              imgsource="programming_blog.jpeg"
              RecPostHading="Angular Blogs"
              link="/prog_lan_blog"
            />

            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faPuzzlePiece}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  Angular Practice
                </h5>
              </div>
            </div>

            <RecommendPost
              imgsource="angular_mcq.jpeg"
              RecPostHading="Angular MCQs"
              link="/index_angular_mcqs"
            />
            <RecommendPost
              imgsource="angular_quiz_test.jpeg"
              RecPostHading="Angular Quiz Test"
              link="/angular_quize_tests"
            />
            <RecommendPost
              imgsource="code_challange.jpeg"
              RecPostHading="Weekly Code Challanges"
              link="/index_code_challange"
            />
          </>
        )}

        {/* Android */}
        {this.props.language == "android" && (
          <>
            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faBook}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  Android Learning
                </h5>
              </div>
            </div>

            <RecommendPost
              imgsource="android_tech.jpeg"
              RecPostHading="Android Tutorials & Courses"
              link="/android"
            />

            <RecommendPost
              imgsource="android_interview_questions.jpeg"
              RecPostHading="Android Interview Questions"
              link="/android_interview_question"
            />
            <RecommendPost
              imgsource="programming_blog.jpeg"
              RecPostHading="Android Programming Blogs"
              link="/prog_lan_blog"
            />

            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faPuzzlePiece}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  Android Practice
                </h5>
              </div>
            </div>

            <RecommendPost
              imgsource="android_mcq.jpeg"
              RecPostHading="Android MCQs"
              link="/index_android_mcqs"
            />
            <RecommendPost
              imgsource="android_quiz_test.jpeg"
              RecPostHading="Android Quiz Test"
              link="/android_quizes_tests"
            />
            <RecommendPost
              imgsource="code_challange.jpeg"
              RecPostHading="Weekly Code Challanges"
              link="/index_code_challange"
            />
          </>
        )}
      </>
    );
  }
}

export default LearningSideSection;
