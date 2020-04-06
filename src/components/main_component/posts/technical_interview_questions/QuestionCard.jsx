import React, { Component } from "react";
import RightSideSection from "../../../right_section/RightSideSection";
class QuestionCard extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="card border border-light rounded shadow-sm mt-3">
          <div className="card-header text-dark ">
            <h5>{this.props.question}</h5>
          </div>
          <div className="card-body ">
            <h6 className="text-secondary">{this.props.answer}</h6>
          </div>
        </div>
      </>
    );
  }
}

export default QuestionCard;
