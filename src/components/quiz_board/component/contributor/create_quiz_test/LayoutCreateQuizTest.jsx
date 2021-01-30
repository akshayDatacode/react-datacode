import React, { Component } from 'react';
import CreateQuizSideNavbar from './create_quiz_side_navbar/CreateQuizSideNavbar';
import CreateQuizSubHeader from './create_quiz_header/create_quiz_subheader/CreateQuizSubHeader';
class LayoutCreateQuizTest extends Component {
  state = {}
  render() {
    const { children } = this.props
    return (
      <>
        <div className="row">
          <div className="col-md-2 border border-primary">
            <CreateQuizSideNavbar />
          </div>
          <div className="col-md-10 border border-dark">
            {<CreateQuizSubHeader />}
            {children}
          </div>
        </div>
      </>
    );
  }
}

export default LayoutCreateQuizTest;