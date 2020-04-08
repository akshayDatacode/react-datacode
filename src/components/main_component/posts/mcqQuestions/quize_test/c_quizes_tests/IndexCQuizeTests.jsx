import React, { Component } from "react";
import { Link } from "react-router-dom";
class IndexCQuizeTests extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <h1>Index C Programming Quize Tests</h1>
        <Link to="/c_quize_test_1">
          <h6>c Quize Test 1</h6>
        </Link>
        <Link to="/c_quize_test_2">
          <h6>c Quize Test 2</h6>
        </Link>
        <Link to="/c_quize_test_3">
          <h6>c Quize Test 3</h6>
        </Link>
        <Link to="/c_quize_test_4">
          <h6>c Quize Test 4</h6>
        </Link>
      </>
    );
  }
}

export default IndexCQuizeTests;
