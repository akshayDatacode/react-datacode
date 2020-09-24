import React, { Component } from 'react';
import PrismCode from "../../../../PrismCode";


class QuizFrame extends Component {

  state = {
    selectedOption: ''
  }
  handleOption = (event) => {
    this.setState({ selectedOption: event.target.value })
    console.log(event.target.value)
  }

  render() {
    let code = this.props.code;
    return (
      <>
        <div className="card-fluid text-dark mt-2 mb-4 shadow">
          <div className="card-body">
            <div className="p-2 border-left border-primary">
              <h5 className="text-left ml-2 text-white">{this.props.question}</h5>
              {this.props.code && (
                <PrismCode
                  code={code}
                  language={this.props.language}
                  plugins={["line-numbers"]}
                />
              )}
            </div>
            <>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <input
                    type="radio"
                    name="op1"
                    value={this.props.v1}
                    onClick={this.handleOption}
                  />
                  <label className="ml-2">{this.props.v1}</label>
                </li>
                <li className="list-group-item">
                  <input
                    type="radio"
                    name="op1"
                    value={this.props.v2}
                    onClick={this.handleOption}
                  />
                  <label className="ml-2">{this.props.v2}</label>
                </li>

                <li className="list-group-item">
                  <input
                    type="radio"
                    name="op1"
                    value={this.props.v3}
                    onClick={this.handleOption}
                  />
                  <label className="ml-2">{this.props.v3}</label>
                </li>
                <li className="list-group-item">
                  <input
                    type="radio"
                    name="op1"
                    value={this.props.v4}
                    onClick={this.handleOption}
                  />
                  <label className="ml-2">{this.props.v4}</label>
                </li>
              </ul>
            </>

          </div>
          <div className="card-footer">
            <div className="row">
              <div className="col-4">
                <button
                  className="btn btn-sm btn-success"
                  onClick={() => {
                    this.props.handleSaveQuiz(this.state.selectedOption, this.props.index);
                  }}
                >save
                </button>
              </div>
              <div className="col-8">

              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default QuizFrame;