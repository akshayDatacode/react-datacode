import React, { Component } from "react";
import Quize from "./quize";
class PythonQuize extends Component {
  state = {
    isCorrect: false,
    isClicked: false,
    count: 0,
    status: ""
  };

  counter = count => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <h1>Python Quize</h1>
        <div className="row">
          <div className=" border border-success m-2 col">
            Total Correct :-{""}
            <span className="badge badge-primary"> {this.state.count} </span>
            <Quize
              quizeNo="1"
              question="What is Python"
              correctAnswer="Programming"
              v1="Programming"
              v2="Azgar"
              v3="Language"
              counter={this.counter}
            />
            <Quize
              quizeNo="2"
              question="What is Akshay"
              correctAnswer="Speaker"
              v1="Student"
              v2="Developer"
              v3="Speaker"
              counter={this.counter}
            />
            <Quize
              quizeNo="3"
              question="Where Akshay Live"
              correctAnswer="Mandsaur"
              v1="NewYork"
              v2="Indore"
              v3="Mandsaur"
              counter={this.counter}
            />
            <Quize
              quizeNo="4"
              question="Did you Liked Datacode"
              correctAnswer="Yes"
              v1="No"
              v2="Yes"
              v3="MayBe"
              counter={this.counter}
            />
          </div>
        </div>
      </>
    );
  }
}

export default PythonQuize;
