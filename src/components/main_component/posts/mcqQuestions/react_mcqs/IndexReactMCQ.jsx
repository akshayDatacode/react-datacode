import React, { Component } from "react";
import { Link } from "react-router-dom";
class IndexReactMCQ extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <h1 className="text-secondary text-center">Index of React MCQs</h1>
        <Link to="/react_mcq_1">
          <h6>React MCQs Questions 1</h6>
        </Link>
      </>
    );
  }
}

export default IndexReactMCQ;
