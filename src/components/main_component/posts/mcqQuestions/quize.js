import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";
import PrismCode from "../../../PrismCode";

class Quize extends Component {
  state = {
    isClicked: false,
    status: "",
    correctAns: "",
    code: "",
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
    if (this.state.status == "correct") {
      classes = "card-header bg-success p-0 ";
    }
    if (this.state.status == "wrong") {
      classes = "bg-danger p-1";
    }
    return classes;
  };
  render() {
    let code = this.props.code;

    return (
      <>
        <div className="card-fluid text-dark mt-2 mb-4 shadow">
          {this.state.status == "correct" && (
            <div className={this.getColorChange()}>
              <h6 className="text-weight-bold text-white ml-2 pt-2">
                {this.state.status}
              </h6>
            </div>
          )}
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
            )}
          </div>
          {this.state.status == "wrong" && (
            <Accordion>
              <Card>
                <Card.Footer className={this.getColorChange()}>
                  <Accordion.Toggle
                    className="btn btn-link ml-2 p-1 text-white"
                    eventKey="0"
                  >
                    Check Answer
                  </Accordion.Toggle>
                </Card.Footer>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>{this.state.correctAns}</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          )}
        </div>
      </>
    );
  }
}

export default Quize;
