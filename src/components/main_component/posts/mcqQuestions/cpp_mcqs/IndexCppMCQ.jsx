import React, { Component } from "react";
import { Link } from "react-router-dom";
class IndexCppMCQ extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <h1 className="text-secondary text-center">Index of Cpp MCQs</h1>
        <Link to="/cpp_mcq_1">
          <h6>Cpp MCQs Questions 1</h6>
        </Link>
      </>
    );
  }
}

export default IndexCppMCQ;
