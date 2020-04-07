import React, { Component } from "react";
import { Link } from "react-router-dom";
class IndexQuizeTests extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <h1>Index Quize Tests</h1>
        <Link to="/python_quize_tests">
          <h6>Python Quize Tests</h6>
        </Link>
        <Link to="/c_quize_tests">
          <h6>C Programming Quize Test </h6>
        </Link>
      </>
    );
  }
}

export default IndexQuizeTests;
