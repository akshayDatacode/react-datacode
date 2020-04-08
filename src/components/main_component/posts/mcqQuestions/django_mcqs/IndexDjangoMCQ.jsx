import React, { Component } from "react";
import { Link } from "react-router-dom";
class IndexDjangoMCQ extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>Index of Django MCQs</h1>
        <Link to="/django_mcq_1">
          <h6>Django MCQs Questions 1</h6>
        </Link>
      </>
    );
  }
}

export default IndexDjangoMCQ;
