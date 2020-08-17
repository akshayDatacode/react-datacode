import React, { Component } from "react";
import PrismCode from "../../../../PrismCode";

class QuizeTest extends Component {
  state = {
    isClicked: false,
    status: "",
    correctAns: "",
  };

  handleOption = (event) => {
    if (event.target.value == this.props.correctAnswer) {
      this.setState({ isClicked: true, status: "correct", correctAns: " " });
      this.props.counter();
    } else {
      this.setState({
        isClicked: true,
        status: "wrong",
        correctAns: this.props.correctAnswer,
      });
    }
  };

  getColorChange = () => {
    let classes = "";
    if (!this.state.isClicked) {
      classes = "card-header bg-secondary p-0 text-white";
    }
    if (this.state.isClicked) {
      classes = "card-header bg-info p-0 text-warning";
    }
    return classes;
  };

  render() {
    let code = this.props.code;
    return (
      <>
        <div className="card-fluid text-dark mt-2 mb-4 shadow">
          <div className={this.getColorChange()}>
            <div className="row">
              <div className="col-8"></div>
              <div className="col-md-4 ml-3">
                {" "}
                <h6 className="pt-1 text-weight-bold ">
                  Question :- {this.props.quizeNo} / 10
                </h6>
              </div>
            </div>
          </div>

          <div className="card-body">
            <div className="p-2 border-left border-primary">
              <h5 className="text-left ml-2">{this.props.question}</h5>
              {this.props.code && (
                <PrismCode
                  code={code}
                  language={this.props.language}
                  plugins={["line-numbers"]}
                />
              )}
            </div>

            {!this.state.isClicked && (
              <>
                <ul class="list-group list-group-flush">
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
            )}
          </div>
        </div>
      </>
    );
  }
}

export default QuizeTest;
