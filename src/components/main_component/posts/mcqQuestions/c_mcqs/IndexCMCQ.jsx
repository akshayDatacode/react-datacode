import React, { Component } from "react";
import { Link } from "react-router-dom";
import Disqus from "disqus-react";
class IndexCMCQ extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    
    return (
      <>
        <h1>Index C MCQs</h1>
        <Link to="/c_mcq_1">
          <h6>C MCQs Question 1</h6>
        </Link>
      </>
    );
  }
}

export default IndexCMCQ;
