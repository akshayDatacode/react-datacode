import React, { Component } from "react";
import { Link } from "react-router-dom";
class IndexMcqQuestions extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <h1>Index Mcq Questions</h1>
        <Link to="/index_python_mcqs">
          <h6>Python MCQs Questions</h6>
        </Link>
        <Link to="/index_c_mcqs">
          <h6>C MCQs Questions</h6>
        </Link>
        <Link to="/index_java_mcqs">
          <h6>Java MCQs Questions</h6>
        </Link>
        <Link to="/index_js_mcqs">
          <h6>JavaScript MCQs Questions</h6>
        </Link>
      </>
    );
  }
}

export default IndexMcqQuestions;
