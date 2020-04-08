import React, { Component } from "react";
import { Link } from "react-router-dom";
class IndexPythonMCQ extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <h1 className="text-secondary text-center">Python MCQs </h1>
        <Link to="/python_mcq_1">
          <h6>Python MCQs Questions 1</h6>
        </Link>
        <Link to="/python_mcq_2">
          <h6>Python MCQs Questions 2</h6>
        </Link>
        <Link to="/python_mcq_3">
          <h6>Python MCQs Questions 3</h6>
        </Link>
        <Link to="/python_mcq_4">
          <h6>Python MCQs Questions 4</h6>
        </Link>
        <Link to="/python_mcq_5">
          <h6>Python MCQs Questions 5</h6>
        </Link>
      </>
    );
  }
}

export default IndexPythonMCQ;
