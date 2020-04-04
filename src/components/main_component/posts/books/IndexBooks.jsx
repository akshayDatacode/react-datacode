import React, { Component } from "react";
import { Link } from "react-router-dom";
import PostCard from "../../PostCard";
class IndexBooks extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <h1>Index Books</h1>
        <PostCard
          imgsource="programming_practices.jpeg"
          title="Programming Example Questions"
          paragraph="Programming Example Qustions fromm Beginners to Advance Study"
          link="/python_books"
        />
      </>
    );
  }
}

export default IndexBooks;
