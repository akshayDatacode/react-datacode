import React, { Component } from "react";
import { Link } from "react-router-dom";
class IndexInterviewQuestions extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <h1>index of Technical Interview Questions</h1>
        <Link to="/dbms_interview_question">
          <h6>DBMS Interview Questions</h6>
        </Link>
        <Link to="/oops_interview_question">
          <h6>OOPs Interview Questions</h6>
        </Link>
      </>
    );
  }
}

export default IndexInterviewQuestions;
