import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class QuizBoardHome extends Component {
  state = {}
  render() {
    return (
      <>
        <h1>Quiz Board Home</h1>
        <Link to="/contributor_home">
          Comtributor's Home
        </Link>
      </>
    );
  }
}

export default QuizBoardHome;