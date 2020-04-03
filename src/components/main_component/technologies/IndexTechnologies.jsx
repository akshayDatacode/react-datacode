import React, { Component } from "react";
import { Link } from "react-router-dom";
class IndexTechnologies extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <h1>Index Technologies Page</h1>
        <Link to="/python">
          <h6>Python</h6>
        </Link>
        <Link to="/c">
          <h6>C Programming</h6>
        </Link>
        <Link to="/java">
          <h6>Java</h6>
        </Link>
        <Link to="/js">
          <h6>JavaScript</h6>
        </Link>
        <Link to="/html">
          <h6>HTML</h6>
        </Link>
        <Link to="/datastructure">
          <h6>DataStructure</h6>
        </Link>
        <Link to="/dbms">
          <h6>DBMS</h6>
        </Link>
        <Link to="/sql">
          <h6>SQL</h6>
        </Link>
        <Link to="/oops">
          <h6>OOPs</h6>
        </Link>
      </>
    );
  }
}

export default IndexTechnologies;
