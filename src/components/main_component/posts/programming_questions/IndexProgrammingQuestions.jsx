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
          <h6>Python Programming Questions</h6>
        </Link>
        <Link to="/java_programming_questions">
          <h6>Java Programming Questions</h6>
        </Link>
        <Link to="/c_programming_questions">
          <h6>C Programming Questions</h6>
        </Link>
        <Link to="/javascript_programming_questions">
          <h6>Javascript Programming Questions</h6>
        </Link>
        <Link to="/datastructure_programming_questions">
          <h6>Datastructure Programming Questions</h6>
        </Link>
        
      </>
    );
  }
}

export default IndexProgrammingQuestions;
