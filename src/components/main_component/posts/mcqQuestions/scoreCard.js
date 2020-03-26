import React, { Component } from "react";
class ScoreCard extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="card mt-5">
          <div className="card-header bg-success text-white font-weight-bold">
            Total Score
          </div>
          <div className="card-body ">
            <h1 className="display-1 text-center">{this.props.count}</h1>
          </div>
        </div>
      </>
    );
  }
}

export default ScoreCard;
