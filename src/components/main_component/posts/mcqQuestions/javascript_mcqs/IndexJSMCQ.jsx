import React, { Component } from "react";
import { Link } from "react-router-dom";
class IndexJSMCQ extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <h1 className="text-secondary text-center">JS MCQ</h1>
        <Link to="js_mcq_1">
          <h6>Java Script MCQ Set 1</h6>
        </Link>
        <Link to="js_mcq_2">
          <h6>Java Script MCQ Set 2</h6>
        </Link>
      </>
    );
  }
}

export default IndexJSMCQ;
