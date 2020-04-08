import React, { Component } from "react";
import { Link } from "react-router-dom";
class IndexGitMCQ extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <h1 className="text-secondary text-center">Index of Git MCQs</h1>
        <Link to="/git_mcq_1">
          <h6>Git MCQs Questions 1</h6>
        </Link>
      </>
    );
  }
}

export default IndexGitMCQ;
