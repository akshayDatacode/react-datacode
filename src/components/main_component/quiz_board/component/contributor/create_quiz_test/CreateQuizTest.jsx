import React, { Component } from 'react';
import CreateQuizHeader from './create_quiz_header/CreateQuizHeader';
import CreateQuizSideNavbar from './create_quiz_side_navbar/CreateQuizSideNavbar';
import CreateQuizOverview from './overview/CreateQuizOverview';
class CreateQuizTest extends Component {
  state = {}
  render() {
    return (
      <>
        <div className="row">
          <CreateQuizHeader />
        </div>
        <div className="row">
          <div className="col-2">
            <CreateQuizSideNavbar />
          </div>
          <div className="col-10 border border-dark">
            <h1>Create Quiz Test</h1>
            <CreateQuizOverview />
          </div>
        </div>
      </>
    );
  }
}

export default CreateQuizTest;