import React, { Component } from "react";
import { Link } from "react-router-dom";
class IndexPythonQuizeTests extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>Python Quize Tests</h1>
        <Link to="/python_quize_test_1">
          <h6>Python Quize Test 1</h6>
        </Link>
        <Link to="/python_quize_test_2">
          <h6>Python Quize Test 2</h6>
        </Link>
        <Link to="/python_quize_test_3">
          <h6>Python Quize Test 3</h6>
        </Link>
        <Link to="/python_quize_test_4">
          <h6>Python Quize Test 4</h6>
        </Link>
      </>
    );
  }
}

export default IndexPythonQuizeTests;
