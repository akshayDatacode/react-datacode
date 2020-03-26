import React, { Component } from "react";
import HeaderBannerSection from "../../HeaderBannerSection";
import Quize from "./quize";
import ScoreCard from "./scoreCard";
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
        <HeaderBannerSection imgsource="pythonmcq.jpeg" />
        <div className="col-fluid d-block d-md-none">
          <ScoreCard count={this.state.count} />
        </div>
        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
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
            <div className="col-4 d-none d-sm-block">
              <ScoreCard count={this.state.count} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PythonQuize;
