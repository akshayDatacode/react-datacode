import React, { Component } from "react";
import RightSideSection from "../../../right_section/RightSideSection";
class QuestionCard extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="card mb-3 shadow border border-white">
          <div className="card-header text-white bg-primary">
            <h5>{this.props.question}</h5>
          </div>
          <div className="card-body ">
            <p>{this.props.answer}</p>
          </div>
        </div>
      </>
    );
  }
}

export default QuestionCard;
