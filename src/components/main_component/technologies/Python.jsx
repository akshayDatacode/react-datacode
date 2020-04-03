import React, { Component } from "react";
import { Link } from "react-router-dom";

class Python extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <h1>Python Base Page</h1>

        <Link to="/python_books">
          <h6>Python Book</h6>
        </Link>
        <Link to="/index_python_mcqs">
          <h6>Python MCQs</h6>
        </Link>
        <Link to="/python_quize_tests">
          <h6>Python Quize Test</h6>
        </Link>
      </>
    );
  }
}

export default Python;
