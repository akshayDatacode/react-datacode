import React, { Component } from "react";
import { Link } from "react-router-dom";
class IndexJSMCQ extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>Index JS MCQ</h1>
        <Link to="js_mcq_1"> Java Script MCQ Set 1</Link>
      </>
    );
  }
}

export default IndexJSMCQ;
