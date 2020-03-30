import React, { Component } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
class Quize extends Component {
  state = {
    isClicked: false,
    status: "",
    correctAns: ""
  };

  handleOption = event => {
    if (event.target.value == this.props.correctAnswer) {
      this.setState({ isClicked: true, status: "correct", correctAns: " " });
      this.props.counter();
    } else {
      this.setState({
        isClicked: true,
        status: "wrong",
        correctAns: this.props.correctAnswer
      });
    }
  };
  getColorChange = () => {
    let classes = "";
    if (this.state.status == "correct") {
      classes = "card-header bg-success";
    }
    if (this.state.status == "wrong") {
      classes = "bg-danger";
    }
    return classes;
  };
  render() {
    return (
      <>
        <div className="card-fluid text-dark mt-2 mb-4 shadow">
          {this.state.status == "correct" && (
            <div className={this.getColorChange()}>{this.state.status}</div>
          )}{" "}
          <div className="card-body">
            <div className="p-2 border-left border-primary">
              <h5 className="text-left ml-2">{this.props.question}</h5>
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
                    />{" "}
                    {this.props.v1}
                  </li>
                  <li className="list-group-item">
                    <input
                      type="radio"
                      name="op1"
                      value={this.props.v2}
                      onClick={this.handleOption}
                    />{" "}
                    {this.props.v2}
                  </li>

                  <li className="list-group-item">
                    <input
                      type="radio"
                      name="op1"
                      value={this.props.v3}
                      onClick={this.handleOption}
                    />{" "}
                    {this.props.v3}
                  </li>
                  <li className="list-group-item">
                    <input
                      type="radio"
                      name="op1"
                      value={this.props.v4}
                      onClick={this.handleOption}
                    />{" "}
                    {this.props.v4}
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
                    as={Button}
                    variant="button"
                    className="btn btn-primary"
                    eventKey="0"
                  >
                    Show Correct Answer
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
