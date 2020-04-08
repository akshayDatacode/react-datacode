import React, { Component } from "react";
import { Link } from "react-router-dom";
class IndexBootStrapMCQ extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <h1 className="text-secondary text-center">Index of BootStrap MCQs</h1>
        <Link to="/bootstrap_mcq_1">
          <h6>BootStrap MCQs Questions 1</h6>
        </Link>
      </>
    );
  }
}

export default IndexBootStrapMCQ;
