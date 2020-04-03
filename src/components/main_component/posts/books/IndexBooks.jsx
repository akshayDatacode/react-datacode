import React, { Component } from "react";
import { Link } from "react-router-dom";
class IndexBooks extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <h1>Index Books</h1>
        <Link to="/python_books">Python Books</Link>
      </>
    );
  }
}

export default IndexBooks;
