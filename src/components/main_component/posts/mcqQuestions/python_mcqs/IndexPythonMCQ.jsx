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
        <h1>Index Python MCQs </h1>
        <Link to="/python_mcq_1">
          <h6>Python MCQs Questions 1</h6>
        </Link>
      </>
    );
  }
}

export default IndexPythonMCQ;
