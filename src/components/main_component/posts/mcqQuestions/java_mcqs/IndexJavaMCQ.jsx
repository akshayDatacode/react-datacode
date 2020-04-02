import React, { Component } from "react";
import { Link } from "react-router-dom";
class IndexJavaMCQ extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>Index Java MCQs</h1>
        <Link to="/java_mcq_1">Java MCQs set 1</Link>
      </>
    );
  }
}

export default IndexJavaMCQ;
