import React, { Component } from "react";
import { Link } from "react-router-dom";
class IndexProgrammingQuestions extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <h1>Index Programming Questions</h1>
        <Link to="/python_programming_questions">
          python_programming_questions
        </Link>
      </>
    );
  }
}

export default IndexProgrammingQuestions;
