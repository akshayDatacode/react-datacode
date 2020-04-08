import React, { Component } from "react";
import { Link } from "react-router-dom";
class IndexHtmlMCQ extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <h1 className="text-secondary text-center">HTML MCQs Questions</h1>
        <Link to="/html_mcq_1">
          <h6>HTML MCQs Questions 1</h6>
        </Link>
      </>
    );
  }
}

export default IndexHtmlMCQ;
