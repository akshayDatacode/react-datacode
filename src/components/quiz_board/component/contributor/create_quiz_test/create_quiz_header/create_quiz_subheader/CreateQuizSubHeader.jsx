import React, { Component } from 'react';
class CreateQuizSubHeader extends Component {
  state = {}
  render() {
    return (
      <>
        <div className="row contributor-sub-header">
          <div className="col-6 text-left">
            <h3 className="m-1">
              Python Begineers Quiz 1
              <span className="badge preview-test">preview test</span>
            </h3>
          </div>
          <div className="col-6 text-right">
            <div className="btn btn-primary m-1">
              <i className="fas fa-upload mr-2"></i>
              <span>Publish Test</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CreateQuizSubHeader;