import React, { Component } from "react";
import { Link } from "react-router-dom";
class IndexDBMSMCQ extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <h1>Index of DBMS MCQs</h1>
        <Link to="/dbms_mcq_1">
          <h6>DBMS MCQs Questions 1</h6>
        </Link>
      </>
    );
  }
}

export default IndexDBMSMCQ;
