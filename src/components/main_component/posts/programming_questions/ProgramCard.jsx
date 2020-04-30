import React, { Component } from "react";
import SolutionCard from "../../../main_component/posts/programming_questions/SolutionCard";

class ProgramCard extends Component {
  state = {
    isCorrect: false,
    isClicked: false,
    status: "",
    show: false,
  };
  showQuizeScore = () => {
    this.setState({ show: true });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <>
        <div className="card border border-light mb-2">
          <div className="card-body p-2">
            <div className="row">
              <div className="col-9 mr-0 pr-0 pl-3">
                <a href={this.props.link}>
                  <h6 className="text-weight-bold text-align-middle m-0">
                    {this.props.heading}
                  </h6>
                </a>
              </div>
              <div className="col-3 p-0 ml-0 text-center">
                <div
                  className="btn btn-sm btn-primary p-1 mt-1"
                  onClick={this.handleShow}
                >
                  Solution
                </div>
                <SolutionCard
                  handleShow={this.handleShow}
                  handleClose={this.handleClose}
                  show={this.state.show}
                  code={this.props.code}
                  heading={this.props.heading}
                  language={this.props.language}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProgramCard;
