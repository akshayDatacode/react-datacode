import React, { Component } from "react";
import { Link } from "react-router-dom";
class IndexCssMCQ extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <h1 className="text-secondary text-center">Index of CSS MCQs</h1>
        <Link to="/css_mcq_1">
          <h6>Css MCQs Questions 1</h6>
        </Link>
      </>
    );
  }
}

export default IndexCssMCQ;
