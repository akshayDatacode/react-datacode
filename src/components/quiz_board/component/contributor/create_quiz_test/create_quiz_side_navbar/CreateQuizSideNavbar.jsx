import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class CreateQuizSideNavbar extends Component {
  state = {}
  render() {
    return (
      <>
        <div className="contributor-sidenav">
          <Link to="/test_details">Test Details</Link>
          <Link to="/create_quiz_test_overview">Overview</Link>
          <Link to="/create_quiz_test_question">Questions</Link>
          <Link to="/create_quiz_test_settings">Settings</Link>
        </div>
      </>
    );
  }
}

export default CreateQuizSideNavbar;