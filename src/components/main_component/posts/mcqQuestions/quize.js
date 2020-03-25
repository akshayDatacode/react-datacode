import React, { Component } from "react";
class Quize extends Component {
  state = {
    isClicked: false,
    status: ""
  };

  handleOption = event => {
    if (event.target.value == this.props.correctAnswer) {
      this.setState({ isClicked: true, status: "correct" });
      this.props.counter();
    } else {
      this.setState({ isClicked: true, status: "wrrong" });
    }
  };
  getColorChange = () => {
    let classes = "badge m-2 badge-";
    if (this.state.status == "correct") {
      classes = classes + "success";
    }
    if (this.state.status == "wrrong") {
      classes = classes + "danger";
    }
    return classes;
  };
  render() {
    return (
      <>
        <h6>Quize : {this.props.quizeNo}</h6>
        <h4>{this.props.question}</h4>
        {!this.state.status == "" && (
          <span className={this.getColorChange()}> {this.state.status}</span>
        )}
        <br />
        {!this.state.isClicked && (
          <>
            <h5>Options:</h5>
            <input
              type="radio"
              name="op1"
              value={this.props.v1}
              onClick={this.handleOption}
            />{" "}
            {this.props.v1} <br />
            <input
              type="radio"
              name="op1"
              value={this.props.v2}
              onClick={this.handleOption}
            />{" "}
            {this.props.v2} <br />
            <input
              type="radio"
              name="op1"
              value={this.props.v3}
              onClick={this.handleOption}
            />{" "}
            {this.props.v3}
          </>
        )}
      </>
    );
  }
}

export default Quize;
